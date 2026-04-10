import { useState } from "react";
import "./PDPPage.css";
import { FamilyStripe } from "../../FamilyStripe/FamilyStripe";
import { macbookProFamilyItems } from "../../FamilyStripe/familyStripeData";
import rawData from "../../data/products/macbook-pro-14-m5-pdp.json";

// ── Types ──────────────────────────────────────────────────────────────────

interface MediaItem {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt?: string;
}

interface ColorOpt  { id: string; name: string; hex: string; }
interface ConfigOpt { id: string; label: string; sublabel?: string; priceAdd: number; }
interface BundleItem { id: string; name: string; price: number; imageSrc: string; }
interface SpecItem   { label: string; value: string; }

interface PDPData {
  id: string;
  name: string;
  size: string;
  badge?: string;
  tagline: string;
  sku: string;
  media: MediaItem[];
  price: number;
  currency: string;
  monthlyPrice: number;
  monthlyTerm: number;
  available: boolean;
  defaultColor: string;
  colors: ColorOpt[];
  processors: ConfigOpt[];
  memory: ConfigOpt[];
  storage: ConfigOpt[];
  appleCarePrice: number;
  bundleItems: BundleItem[];
  specs: SpecItem[];
  description: string;
  features: string[];
  inBox: string[];
  warranty: string;
}

const product = rawData as PDPData;

// ── Helpers ────────────────────────────────────────────────────────────────
const fmt = (n: number) =>
  `฿${n.toLocaleString("th-TH")}`;

// ── Gallery ────────────────────────────────────────────────────────────────
function Gallery({ media, name }: { media: MediaItem[]; name: string }) {
  const [idx, setIdx] = useState(0);
  const cur = media[idx];

  return (
    <div className="pdp__gallery">
      {/* Main viewer */}
      <div className="pdp__gallery-main">
        {cur.type === "video" ? (
          <video
            key={idx}
            src={cur.src}
            poster={cur.poster}
            className="pdp__gallery-media"
            controls
            muted
            playsInline
            aria-label={`วิดีโอ ${name}`}
          />
        ) : (
          <img
            key={idx}
            src={cur.src}
            alt={cur.alt ?? name}
            className="pdp__gallery-media"
          />
        )}
      </div>

      {/* Mobile dot indicator */}
      <div className="pdp__gallery-dots" aria-hidden="true">
        {media.map((_, i) => (
          <button
            key={i}
            className={`pdp__gallery-dot${i === idx ? " on" : ""}`}
            onClick={() => setIdx(i)}
          />
        ))}
      </div>

      {/* Thumbnail strip */}
      <div className="pdp__gallery-thumbs">
        {media.map((m, i) => (
          <button
            key={i}
            className={`pdp__gallery-thumb${i === idx ? " on" : ""}${m.type === "video" ? " vid" : ""}`}
            onClick={() => setIdx(i)}
            aria-label={m.type === "video" ? "วิดีโอสินค้า" : `รูปที่ ${i + 1}`}
          >
            <img src={m.poster ?? m.src} alt="" />
            {m.type === "video" && (
              <span className="pdp__gallery-play" aria-hidden="true">▶</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Accordion ──────────────────────────────────────────────────────────────
function Accordion({
  label,
  children,
  defaultOpen = false,
}: {
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="pdp__accordion">
      <button
        className="pdp__accordion-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{label}</span>
        <span
          className={`pdp__accordion-chevron${open ? " open" : ""}`}
          aria-hidden="true"
        >
          ›
        </span>
      </button>
      {open && <div className="pdp__accordion-body">{children}</div>}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export const PDPPage = () => {
  const [color, setColor] = useState<ColorOpt>(
    () =>
      product.colors.find((c) => c.id === product.defaultColor) ??
      product.colors[0]
  );
  const [processor, setProcessor] = useState<ConfigOpt>(product.processors[0]);
  const [memory, setMemory]       = useState<ConfigOpt>(product.memory[0]);
  const [storage, setStorage]     = useState<ConfigOpt>(product.storage[0]);
  const [appleCare, setAppleCare] = useState(false);
  const [qty, setQty]             = useState(1);

  const totalPrice =
    product.price +
    processor.priceAdd +
    memory.priceAdd +
    storage.priceAdd +
    (appleCare ? product.appleCarePrice : 0);

  const displayName = `${product.size}-inch ${product.name}`;
  const heroImage   = product.media.find((m) => m.type === "image")?.src ?? "";

  const breadcrumbs = [
    { label: "iStudio",     href: "/" },
    { label: "Mac",         href: "/pages/view-all-mac" },
    { label: "MacBook Pro", href: "/collections/macbook-pro" },
    { label: `${displayName} M5 ${product.sku}`, href: "#" },
  ];

  return (
    <div className="pdp">
      {/* Family stripe */}
      <FamilyStripe
        items={macbookProFamilyItems}
        seeAllLabel="ดูข้อมูล Mac ทั้งหมด"
        seeAllHref="/pages/view-all-mac"
      />

      {/* Breadcrumbs */}
      <nav className="pdp__breadcrumbs" aria-label="breadcrumb">
        <ol className="pdp__breadcrumbs-list">
          {breadcrumbs.map((c, i) => {
            const last = i === breadcrumbs.length - 1;
            return (
              <li key={i} className="pdp__breadcrumbs-item">
                {last ? (
                  <span aria-current="page">{c.label}</span>
                ) : (
                  <>
                    <a href={c.href}>{c.label}</a>
                    <span aria-hidden="true"> › </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* ── 2-column layout ────────────────────────────────────────────── */}
      <div className="pdp__layout">
        {/* Left — Gallery */}
        <Gallery media={product.media} name={displayName} />

        {/* Right — Config panel */}
        <div className="pdp__panel">
          {/* Price */}
          <div className="pdp__price-block">
            <div className="pdp__price">
              {fmt(totalPrice)} {product.currency}
            </div>
            <div className="pdp__monthly">
              {fmt(product.monthlyPrice)} /mo for {product.monthlyTerm} months
            </div>
          </div>

          <hr className="pdp__divider" />

          <h2 className="pdp__config-heading">กำหนดค่า {product.name}</h2>

          {/* Color */}
          <div className="pdp__config-row">
            <div className="pdp__config-row-top">
              <span className="pdp__config-label">Color</span>
            </div>
            <div className="pdp__color-row">
              {product.colors.map((c) => (
                <button
                  key={c.id}
                  className={`pdp__color-swatch${c.id === color.id ? " on" : ""}`}
                  style={{ background: c.hex }}
                  onClick={() => setColor(c)}
                  aria-label={c.name}
                  title={c.name}
                />
              ))}
              <span className="pdp__color-name">{color.name}</span>
            </div>
          </div>

          <hr className="pdp__divider" />

          {/* Processor */}
          <div className="pdp__config-row">
            <div className="pdp__config-row-top">
              <span className="pdp__config-label">Processor</span>
            </div>
            <div className="pdp__cards pdp__cards--col">
              {product.processors.map((p) => (
                <button
                  key={p.id}
                  className={`pdp__card${p.id === processor.id ? " on" : ""}`}
                  onClick={() => setProcessor(p)}
                >
                  <span className="pdp__card-label">{p.label}</span>
                  {p.sublabel && (
                    <span className="pdp__card-sub">{p.sublabel}</span>
                  )}
                  {p.priceAdd > 0 && (
                    <span className="pdp__card-add">+{fmt(p.priceAdd)}</span>
                  )}
                </button>
              ))}
            </div>
            <a href="#" className="pdp__tooltip">
              ชิปแบบไหนเหมาะกับคุณ? ›
            </a>
          </div>

          <hr className="pdp__divider" />

          {/* Memory */}
          <div className="pdp__config-row">
            <div className="pdp__config-row-top">
              <span className="pdp__config-label">Memory</span>
            </div>
            <div className="pdp__cards pdp__cards--row">
              {product.memory.map((m) => (
                <button
                  key={m.id}
                  className={`pdp__card${m.id === memory.id ? " on" : ""}`}
                  onClick={() => setMemory(m)}
                >
                  <span className="pdp__card-label">{m.label}</span>
                  {m.priceAdd > 0 && (
                    <span className="pdp__card-add">+{fmt(m.priceAdd)}</span>
                  )}
                </button>
              ))}
            </div>
            <a href="#" className="pdp__tooltip">
              RAM ขนาดไหนเหมาะกับคุณ? ›
            </a>
          </div>

          <hr className="pdp__divider" />

          {/* Storage */}
          <div className="pdp__config-row">
            <div className="pdp__config-row-top">
              <span className="pdp__config-label">Storage</span>
            </div>
            <div className="pdp__cards pdp__cards--row">
              {product.storage.map((s) => (
                <button
                  key={s.id}
                  className={`pdp__card${s.id === storage.id ? " on" : ""}`}
                  onClick={() => setStorage(s)}
                >
                  <span className="pdp__card-label">{s.label}</span>
                  {s.priceAdd > 0 && (
                    <span className="pdp__card-add">+{fmt(s.priceAdd)}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <hr className="pdp__divider" />

          {/* AppleCare+ */}
          <button
            className={`pdp__applecare${appleCare ? " on" : ""}`}
            onClick={() => setAppleCare((v) => !v)}
            aria-pressed={appleCare}
          >
            <span
              className={`pdp__applecare-box${appleCare ? " on" : ""}`}
              aria-hidden="true"
            />
            <span className="pdp__applecare-text">
              <span className="pdp__applecare-label">AppleCare+</span>
              <span className="pdp__applecare-sub">
                {fmt(product.appleCarePrice)} /{" "}
                {fmt(Math.round(product.appleCarePrice / 12))}/mo
              </span>
            </span>
          </button>

          <hr className="pdp__divider" />

          {/* Delivery */}
          <div className="pdp__delivery">
            <div className="pdp__delivery-item">
              <svg
                className="pdp__delivery-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <rect x="1" y="3" width="15" height="13" rx="1" />
                <path d="M16 8h4l3 3v5h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
              <div>
                <div className="pdp__delivery-label">จัดส่งฟรี</div>
                <div className="pdp__delivery-sub">1–3 วันทำการ</div>
              </div>
            </div>
            <div className="pdp__delivery-item">
              <svg
                className="pdp__delivery-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <div>
                <div className="pdp__delivery-label">รับที่ร้าน</div>
                <div className="pdp__delivery-sub">ตรวจสอบสาขาใกล้บ้านคุณ</div>
              </div>
            </div>
          </div>

          {/* Service accordions — inside panel */}
          <div className="pdp__service-accordions">
            <Accordion label="บริการทางเทคนิค">
              <p>
                iStudio มีทีม Apple Certified Technician ให้บริการ One-to-One
                Setup, Data Migration และ Genius Bar ทุกสาขา
              </p>
            </Accordion>
            <Accordion label="ผ่อนชำระ">
              <p>
                ผ่อน 0% นานสูงสุด 10 เดือนผ่านบัตรเครดิตที่ร่วมรายการ
                หรือผ่อนไม่ใช้บัตรผ่านโครงการ U•Joy
              </p>
            </Accordion>
            <Accordion label="Shipping options">
              <p>
                จัดส่งฟรีทั่วประเทศภายใน 1–3 วันทำการ
                รับที่ร้านได้ทันทีหากสินค้ามีในสต็อก
              </p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* ── แนะนำซื้อคู่กัน ─────────────────────────────────────────────── */}
      <section className="pdp__bundle">
        <h2 className="pdp__bundle-title">แนะนำซื้อคู่กัน</h2>
        <div className="pdp__bundle-list">
          {product.bundleItems.map((item) => (
            <div key={item.id} className="pdp__bundle-item">
              <div className="pdp__bundle-img">
                <img src={item.imageSrc} alt={item.name} />
              </div>
              <div className="pdp__bundle-info">
                <div className="pdp__bundle-name">{item.name}</div>
                <div className="pdp__bundle-price">
                  {fmt(item.price)} {product.currency}
                </div>
              </div>
              <button className="pdp__bundle-add">เพิ่ม</button>
            </div>
          ))}
        </div>
      </section>

      {/* ── Order Summary ───────────────────────────────────────────────── */}
      <section className="pdp__summary">
        <div className="pdp__summary-inner">
          {/* Product image */}
          <div className="pdp__summary-img-wrap">
            <img src={heroImage} alt={displayName} className="pdp__summary-img" />
          </div>

          {/* Details */}
          <div className="pdp__summary-details">
            <h2 className="pdp__summary-heading">
              Your new {product.name}.
            </h2>
            <p className="pdp__summary-tagline">{product.tagline}</p>

            <div className="pdp__summary-name">{displayName} M5</div>

            <dl className="pdp__summary-config">
              <div className="pdp__summary-config-row">
                <dt>Color</dt>
                <dd>{color.name}</dd>
              </div>
              <div className="pdp__summary-config-row">
                <dt>Processor</dt>
                <dd>
                  {processor.label}
                  {processor.sublabel && ` ${processor.sublabel}`}
                </dd>
              </div>
              <div className="pdp__summary-config-row">
                <dt>Memory</dt>
                <dd>{memory.label}</dd>
              </div>
              <div className="pdp__summary-config-row">
                <dt>Storage</dt>
                <dd>{storage.label}</dd>
              </div>
              {appleCare && (
                <div className="pdp__summary-config-row">
                  <dt>AppleCare+</dt>
                  <dd>เพิ่มแล้ว</dd>
                </div>
              )}
            </dl>

            <div className="pdp__summary-price">
              {fmt(totalPrice)} {product.currency}
            </div>

            {/* Qty */}
            <div className="pdp__qty-row">
              <label className="pdp__qty-label" htmlFor="pdp-qty">
                Qty
              </label>
              <div className="pdp__qty-ctrl">
                <button
                  className="pdp__qty-btn"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="ลดจำนวน"
                >
                  −
                </button>
                <input
                  id="pdp-qty"
                  className="pdp__qty-input"
                  type="number"
                  value={qty}
                  min={1}
                  readOnly
                />
                <button
                  className="pdp__qty-btn"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="เพิ่มจำนวน"
                >
                  +
                </button>
              </div>
            </div>

            <a href="#" className="pdp__summary-avail">
              ดูข้อมูล stock availability ›
            </a>

            {product.available ? (
              <button className="pdp__btn-buy">
                ซื้อเลย {product.currency}
              </button>
            ) : (
              <button className="pdp__btn-notify">
                แจ้งเตือนเมื่อมีสินค้า
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Accordions ──────────────────────────────────────────────────── */}
      <div className="pdp__accordions">
        <Accordion label="ข้อมูลจำเพาะ">
          <dl className="pdp__specs">
            {product.specs.map((s, i) => (
              <div key={i} className="pdp__spec-row">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </Accordion>

        <Accordion label="คำอธิบายสินค้า">
          <p className="pdp__accordion-text">{product.description}</p>
        </Accordion>

        <Accordion label="คุณสมบัติเด่น">
          <ul className="pdp__features">
            {product.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </Accordion>

        <Accordion label="อุปกรณ์ในกล่อง">
          <ul className="pdp__inbox">
            {product.inBox.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Accordion>

        <Accordion label="การรับประกัน">
          <p className="pdp__accordion-text">{product.warranty}</p>
        </Accordion>
      </div>
    </div>
  );
};
