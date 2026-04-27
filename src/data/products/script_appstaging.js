(async () => {

// ── helpers ──────────────────────────────────────────────────────────────────
const thb     = (n) => n != null ? (Number(n) / 100).toFixed(2) : null;
const thbNum  = (n) => n != null ? Number((Number(n) / 100).toFixed(2)) : null;
const slugify = (s) => String(s || '').toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
const parseMoneyText = (text) => {
  if (!text) return null;
  const cleaned = String(text).replace(/[^\d.]/g, '');
  return cleaned ? Number(cleaned) : null;
};
const getMeta = (name) =>
  document.querySelector(`meta[name="${name}"]`)?.content ||
  document.querySelector(`meta[property="${name}"]`)?.content || null;

// ── 1. Handle detection ───────────────────────────────────────────────────────
const handle = location.pathname.match(/\/products\/([^/?#]+)/)?.[1];
if (!handle) { console.error("❌ ไม่ใช่หน้า product"); return; }

// ── 2. Shopify API ────────────────────────────────────────────────────────────
const [jsData, jsonData] = await Promise.all([
  fetch(`/products/${handle}.js`).then(r => r.json()),
  fetch(`/products/${handle}.json`).then(r => r.json()).then(d => d.product)
]);

// ── 3. Badges จาก DOM (.apl-section-product-badge) ───────────────────────────
// ✅ fix: Shopify tags API เป็น "" บนเว็บนี้ — ต้องดึงจาก DOM แทน
const getBadges = () => {
  const seen = new Set();
  return Array.from(document.querySelectorAll('.apl-section-product-badge'))
    .map(el => el.innerText?.trim())
    .filter(t => t && !seen.has(t) && seen.add(t));
};

// ── 4. Color swatches ─────────────────────────────────────────────────────────
const getColors = () =>
  Array.from(document.querySelectorAll('input[name="Color"]')).map(inp => {
    const label = document.querySelector(`label[for="${inp.id}"]`);
    return {
      id:             inp.value.toLowerCase().replace(/\s+/g, '-'),
      name:           inp.value,
      // ✅ fix: ใช้ dataset.noproduct แทน !inp.disabled
      available:      inp.dataset.noproduct === '',
      unavailableMsg: inp.dataset.noproduct || null,
      selected:       inp.checked,
      imageSrc:       label?.querySelector('img')?.src || null
    };
  });

// ── 5. Option group builder (Processor / Memory / Storage) ───────────────────
const getOptionGroup = (groupName) =>
  Array.from(document.querySelectorAll(`input[name="${groupName}"]`)).map(inp => {
    const label     = document.querySelector(`label[for="${inp.id}"]`);
    const labelText = label?.innerText?.trim() || '';
    // Extract price from label text — pattern: ฿134,900
    const priceMatch = labelText.match(/฿[\d,]+/);
    return {
      id:             slugify(inp.value),
      label:          inp.value,
      available:      inp.dataset.noproduct === '',
      selected:       inp.checked,
      unavailableMsg: inp.dataset.noproduct || null,
      priceAdd:       inp.dataset.price_add ? Number(inp.dataset.price_add) : 0,
      priceDisplay:   priceMatch?.[0] || null,     // ราคาแสดงจาก label (฿134,900)
      optionSlot:     inp.dataset.option_count || null  // "option2", "option3" ...
    };
  });

// ── 6. ctoAllProductOptions — Variant × Option Matrix ────────────────────────
// ✅ NEW: window.ctoAllProductOptions มีทุก combination { Color, Processor, Memory, Storage → variantId + price }
const getVariantMatrix = () =>
  (window.ctoAllProductOptions || []).map(opt => ({
    variantId:   opt.variant_id,
    priceRaw:    opt.price_amount,               // int เช่น 13490000
    price:       (opt.price_amount / 100).toFixed(2), // "134900.00"
    priceFormat: opt.price_format,               // "฿134,900"
    options:     opt.options || {}               // { Color, Processor, Memory, Storage }
  }));

// ── 7. Installment / ผ่อนชำระ ─────────────────────────────────────────────────
// ✅ NEW: parse จาก DOM .net-monthly-pricing--pdp
const getInstallment = () => {
  const el = document.querySelector('.net-monthly-pricing--pdp');
  if (!el) return null;
  const text = el.innerText?.trim() || '';
  const match = text.match(/(฿[\d,]+)\/mo\. for (\d+) months/);
  return match
    ? { monthlyAmount: match[1], months: Number(match[2]), displayText: match[0] }
    : { rawText: text.replace(/\s+/g, ' ').trim() };
};

// ── 7.1 Dynamic customize groups (for PDP renderer) ─────────────────────────
const buildCustomize = ({ colors, processors, memory, storage }) => {
  const groups = [];

  if (colors.length) {
    const selected = colors.find(c => c.selected);
    groups.push({
      key: 'color',
      label: 'Color',
      type: 'swatch',
      defaultOptionId: selected?.id || colors[0]?.id || null,
      options: colors.map(c => ({
        id: c.id,
        label: c.name,
        imageSrc: c.imageSrc || null,
        priceAdd: 0,
        selected: !!c.selected
      }))
    });
  }

  const optionGroups = [
    { key: 'processor', label: 'Processor', data: processors },
    { key: 'memory', label: 'Memory', data: memory },
    { key: 'storage', label: 'Storage', data: storage }
  ];

  optionGroups.forEach(group => {
    if (!group.data.length) return;
    const selected = group.data.find(item => item.selected);
    groups.push({
      key: group.key,
      label: group.label,
      type: 'cards',
      defaultOptionId: selected?.id || group.data[0]?.id || null,
      options: group.data.map(item => ({
        id: item.id,
        label: item.label,
        priceAdd: Number(item.priceAdd) || 0,
        selected: !!item.selected,
        available: item.available,
        unavailableMsg: item.unavailableMsg
      }))
    });
  });

  return groups;
};

// ── 8. Media (images + video) ─────────────────────────────────────────────────
const buildMedia = () =>
  (jsData.media || []).map(m => {
    const base = {
      id: m.id, position: m.position,
      type: m.media_type, mediaType: m.media_type, alt: m.alt || null, aspectRatio: m.aspect_ratio
    };
    if (m.media_type === 'image')
      return { ...base, src: m.src, width: m.width, height: m.height };
    if (m.media_type === 'video') {
      const preferredSrc = (m.sources || []).find(s => s.mime_type === 'video/mp4')?.url || m.sources?.[0]?.url || null;
      return { ...base, duration: m.duration || null, previewImage: m.preview_image || null,
        src: preferredSrc,
        poster: m.preview_image?.src || null,
        sources: (m.sources || []).map(s => ({
          format: s.format, mimeType: s.mime_type,
          quality: `${s.height}p`, width: s.width, height: s.height, url: s.url
        }))
      };
    }
    return base;
  });

// ── 9. Variants (price string "134900.00" จาก /product.json) ─────────────────
const buildVariants = () =>
  (jsonData.variants || []).map(v => ({
    id:               v.id,
    sku:              v.sku,
    barcode:          v.barcode || null,
    title:            v.title,
    price:            Number(v.price),
    compareAtPrice:   v.compare_at_price != null ? Number(v.compare_at_price) : null,
    available:        v.available ?? true,
    option1:          v.option1 || null,
    option2:          v.option2 || null,
    option3:          v.option3 || null,
    requiresShipping: v.requires_shipping,
    taxable:          v.taxable,
    inventoryMgmt:    v.inventory_management || null,
    inventoryPolicy:  v.inventory_policy || null
  }));

// ── 10. JSON-LD (SEO) ─────────────────────────────────────────────────────────
const getJsonLd = () => {
  const product = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
    .flatMap(s => { try { return [JSON.parse(s.textContent)]; } catch { return []; } })
    .find(d => d['@type'] === 'Product') || null;
  if (!product) return null;
  return {
    name:         product.name,
    sku:          product.sku,
    brand:        product.brand?.name,
    description:  product.description,
    availability: product.offers?.[0]?.availability?.replace('http://schema.org/', ''),
    price:        product.offers?.[0]?.price,
    priceCurrency:product.offers?.[0]?.priceCurrency,
    url:          product.offers?.[0]?.url
  };
};

// ── 11. FBT — "แนะนำซื้อคู่กัน" ─────────────────────────────────────────────
// ✅ fix: selector เป็น .product-recommendations1 .card บนเว็บนี้
const getFBT = () => {
  const section = document.querySelector('.product-recommendations1');
  if (!section) return [];
  return Array.from(section.querySelectorAll('.card')).map(el => {
    const linkEl = el.querySelector('a[href*="/products/"]');
    const chkEl  = el.querySelector('input[type="checkbox"]');
    return {
      productId: chkEl?.dataset?.productId || chkEl?.value || null,
      handle:    linkEl?.pathname?.match(/\/products\/([^/?#]+)/)?.[1] || null,
      name:      el.querySelector('.card__heading a, a.full-unstyled-link')?.innerText?.trim() || linkEl?.innerText?.trim() || null,
      price:     el.querySelector('.price-item--regular')?.innerText?.trim() || null,
      imageSrc:  el.querySelector('img')?.src || null,
      selected:  chkEl?.checked ?? false,
      url:       linkEl?.href?.split('?')[0] || null
    };
  });
};

// ── 12. ข้อมูลเสริมจาก window ─────────────────────────────────────────────────
const sdgData     = window.SDG?.Data || {};
const shopifyMeta = window.ShopifyAnalytics?.meta?.product || {};
const adobeMeta   = sdgData.adobeAnalyticsData || {};
const colors      = getColors();
const processors  = getOptionGroup('Processor');
const memory      = getOptionGroup('Memory');
const storage     = getOptionGroup('Storage');
const installment = getInstallment();
const customize   = buildCustomize({ colors, processors, memory, storage });
const selectedColor = colors.find(c => c.selected)?.id || colors[0]?.id || null;
const badges      = getBadges();
const fbt         = getFBT();

// ── 13. Build final JSON ──────────────────────────────────────────────────────
const raw = {

  // ── IDENTITY ────────────────────────────────────────────
  id:           jsData.id,
  gid:          shopifyMeta.gid || null,         // "gid://shopify/Product/..."
  handle:       jsData.handle,
  sku:          jsonData.variants?.[0]?.sku || null,
  barcode:      jsonData.variants?.[0]?.barcode || null,

  // ── TAXONOMY ────────────────────────────────────────────
  vendor:       jsData.vendor,
  productType:  jsData.type,
  tags:         jsData.tags || [],               // Shopify tags (อาจ "" บนเว็บนี้)
  badges,                                        // ✅ "ใหม่", "ราคาพิเศษ" จาก DOM
  badge:        badges[0] || null,

  // ── STATUS ──────────────────────────────────────────────
  available:    jsData.available,
  publishedAt:  jsData.published_at,
  createdAt:    jsData.created_at,
  updatedAt:    jsonData.updated_at || null,
  url:          jsData.url,
  canonicalUrl: document.querySelector('link[rel="canonical"]')?.href || null,

  // ── COPY ────────────────────────────────────────────────
  name:         jsData.title,
  description:  jsonData.body_html || jsData.description || null,
  tagline:      getMeta('og:description') || null,

  // ── PRICING ─────────────────────────────────────────────
  currency:       window.themeJsData?.shopCurrency || adobeMeta.currency || 'THB',
  price:          thbNum(jsData.price),
  compareAtPrice: thbNum(jsData.compare_at_price),
  priceMin:       thbNum(jsData.price_min),
  priceMax:       thbNum(jsData.price_max),
  priceVaries:    jsData.price_varies,
  installment:    installment,                   // ✅ { monthlyAmount, months, displayText }
  monthlyPrice:   installment?.monthlyAmount ? parseMoneyText(installment.monthlyAmount) : null,
  monthlyTerm:    installment?.months || null,

  // ── CURRENT SELECTION ───────────────────────────────────
  selectedOptions: {
    color:     Array.from(document.querySelectorAll('input[name="Color"]')).find(i => i.checked)?.value || null,
    processor: Array.from(document.querySelectorAll('input[name="Processor"]')).find(i => i.checked)?.value || null,
    memory:    Array.from(document.querySelectorAll('input[name="Memory"]')).find(i => i.checked)?.value || null,
    storage:   Array.from(document.querySelectorAll('input[name="Storage"]')).find(i => i.checked)?.value || null
  },

  // ── CONFIGURATOR OPTIONS (DOM) ──────────────────────────
  defaultColor: selectedColor,
  colors,
  processors,
  memory,
  storage,
  customize,

  // ── VARIANT × OPTION MATRIX ─────────────────────────────
  // ✅ NEW: ทุก combination ที่เว็บรองรับ → { variantId, price, options: {Color,Processor,Memory,Storage} }
  variantMatrix: getVariantMatrix(),

  // ── SHOPIFY OPTIONS (structure) ─────────────────────────
  options: (jsData.options || []).map(o => ({ name: o.name, position: o.position, values: o.values })),

  // ── VARIANTS ────────────────────────────────────────────
  variants: buildVariants(),

  // ── MEDIA ───────────────────────────────────────────────
  media: buildMedia(),

  // ── SEO ─────────────────────────────────────────────────
  seo: {
    pageTitle:   document.title,
    description: getMeta('description') || getMeta('og:description'),
    ogTitle:     getMeta('og:title'),
    ogImage:     getMeta('og:image'),
    ogUrl:       getMeta('og:url'),
    twitterCard: getMeta('twitter:card'),
    canonical:   document.querySelector('link[rel="canonical"]')?.href || null,
    jsonLd:      getJsonLd()     // { name, sku, brand, availability, price, priceCurrency }
  },

  // ── ANALYTICS ───────────────────────────────────────────
  analytics: {
    language: adobeMeta.language || null,
    country:  adobeMeta.country || null,
    currency: adobeMeta.currency || null,
    pageType: adobeMeta.page_type || null
  },

  // ── FBT ─────────────────────────────────────────────────
  frequentlyBoughtTogether: fbt,

  // ── QUICK OVERVIEW ──────────────────────────────────────
  _summary: {
    variantsCount:   jsonData.variants?.length || 0,
    mediaCount:      jsData.media?.length || 0,
    imagesCount:     (jsData.media || []).filter(m => m.media_type === 'image').length,
    videosCount:     (jsData.media || []).filter(m => m.media_type === 'video').length,
    colorsCount:     colors.length,
    matrixCount:     (window.ctoAllProductOptions || []).length,
    fbtCount:        fbt.length,
    badgesCount:     badges.length,
    availableColors: colors.filter(c => c.available).map(c => c.name),
    isOutOfStock:    !jsData.available
  }
};

// ── OUTPUT ────────────────────────────────────────────────────────────────────
window.__pdpJSON = raw;
console.clear();
console.log('╔══════════════════════════════════════════════════╗');
console.log('║  🍎 iStudio PDP JSON v2 — window.__pdpJSON       ║');
console.log('╚══════════════════════════════════════════════════╝');
console.log(`  handle       : ${raw.handle}`);
console.log(`  price        : ${raw.price} ${raw.currency}`);
console.log(`  installment  : ${raw.installment?.displayText || raw.installment?.rawText}`);
console.log(`  available    : ${raw.available}  | isOutOfStock: ${raw._summary.isOutOfStock}`);
console.log(`  badges       : ${raw.badges.join(', ')}`);
console.log(`  colors       : ${raw.colors.map(c => c.name+'('+(c.available?'✓':'✗')+')').join(', ')}`);
console.log(`  processors   : ${raw.processors.map(p => p.label.substring(0,35)+'('+(p.available?'✓':'✗')+')')}`);
console.log(`  memory       : ${raw.memory.map(m => m.label+'('+(m.available?'✓':'✗')+')').join(', ')}`);
console.log(`  storage      : ${raw.storage.map(s => s.label+'('+(s.available?'✓':'✗')+')').join(', ')}`);
console.log(`  variantMatrix: ${raw._summary.matrixCount} combinations`);
console.log(`  media        : ${raw._summary.mediaCount} (${raw._summary.imagesCount} imgs, ${raw._summary.videosCount} vids)`);
console.log(`  fbt          : ${raw._summary.fbtCount} items`);
console.log('');
console.log('📋 Copy: JSON.stringify(window.__pdpJSON, null, 2)');
console.log(JSON.stringify(raw, null, 2));

})();