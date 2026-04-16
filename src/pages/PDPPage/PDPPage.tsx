import { useState, useEffect, useRef } from "react";
import "./PDPPage.css";
import { FamilyStripe } from "../../FamilyStripe/FamilyStripe";
import { macbookProFamilyItems } from "../../FamilyStripe/familyStripeData";
import { ToggleRow } from "../../components/ToggleRow/ToggleRow";
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
  barcode?: string;
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
  const total = media.length;
  const dragOrigin = useRef<number | null>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  const onDragBegin = (x: number) => { dragOrigin.current = x; };
  const onDragEnd = (x: number) => {
    if (dragOrigin.current === null) return;
    const delta = dragOrigin.current - x;
    const threshold = (viewportRef.current?.offsetWidth ?? 292) * 0.16;
    if (Math.abs(delta) > threshold) { delta > 0 ? next() : prev(); }
    dragOrigin.current = null;
  };

  return (
    <div className="pdp__gallery">
      {/* Viewport — clip window, size driven by CSS --pdp-slide-w */}
      <div
        ref={viewportRef}
        className="pdp__gallery-viewport"
        onTouchStart={(e) => onDragBegin(e.touches[0].clientX)}
        onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
        onMouseDown={(e) => onDragBegin(e.clientX)}
        onMouseUp={(e) => onDragEnd(e.clientX)}
      >
        {/* Track — all slides in a row, transform via CSS calc() */}
        <div
          className="pdp__gallery-track"
          style={{
            transform: `translate3d(calc(-${idx} * var(--pdp-slide-w)), 0, 0)`,
            width: `calc(${total} * var(--pdp-slide-w))`,
          }}
        >
          {media.map((m, i) => (
            <div key={i} className="pdp__gallery-slide">
              {m.type === "video" ? (
                <video
                  src={m.src}
                  poster={m.poster}
                  className="pdp__gallery-media"
                  controls
                  muted
                  playsInline
                  aria-label={`วิดีโอ ${name}`}
                />
              ) : (
                <img
                  src={m.src}
                  alt={m.alt ?? name}
                  className="pdp__gallery-media"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation: prev arrow | dots | next arrow */}
      <div className="pdp__gallery-nav">
        <button className="pdp__gallery-arrow" onClick={prev} aria-label="Previous">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="m18.192 23.704 1.016-1.118-5.236-5.764 5.236-5.765-1.016-1.118-6.25 6.883 6.25 6.882Z" fill="#333" />
          </svg>
        </button>
        <div className="pdp__gallery-dots" role="tablist" aria-label="Gallery slides">
          {media.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === idx}
              className={`pdp__gallery-dot${i === idx ? " on" : ""}`}
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button className="pdp__gallery-arrow" onClick={next} aria-label="Next">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="m13.957 10.02-1.02 1.124 5.26 5.792-5.26 5.792 1.02 1.124 6.281-6.916-6.28-6.915Z" fill="#333" />
          </svg>
        </button>
      </div>

    </div>
  );
}

// ── ColorGallery ───────────────────────────────────────────────────────────
const COLOR_SLIDE_W = 292;

function ColorGallery({ media, name }: { media: MediaItem[]; name: string }) {
  const [idx, setIdx] = useState(0);
  const total = media.length;
  const dragOrigin = useRef<number | null>(null);

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  const onDragBegin = (x: number) => { dragOrigin.current = x; };
  const onDragEnd = (x: number) => {
    if (dragOrigin.current === null) return;
    const delta = dragOrigin.current - x;
    if (Math.abs(delta) > COLOR_SLIDE_W * 0.16) { delta > 0 ? next() : prev(); }
    dragOrigin.current = null;
  };

  return (
    <div className="pdp__color-gallery">
      <div
        className="pdp__color-gallery-vp"
        onTouchStart={(e) => onDragBegin(e.touches[0].clientX)}
        onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
        onMouseDown={(e) => onDragBegin(e.clientX)}
        onMouseUp={(e) => onDragEnd(e.clientX)}
      >
        <div
          className="pdp__color-gallery-track"
          style={{
            transform: `translate3d(${-idx * COLOR_SLIDE_W}px, 0, 0)`,
            width: `${total * COLOR_SLIDE_W}px`,
          }}
        >
          {media.map((m, i) => (
            <div key={i} className="pdp__color-gallery-slide">
              <img
                src={m.poster ?? m.src}
                alt={m.alt ?? name}
                className="pdp__color-gallery-img"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pdp__color-gallery-nav">
        <button className="pdp__gallery-arrow" onClick={prev} aria-label="Previous">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="m18.192 23.704 1.016-1.118-5.236-5.764 5.236-5.765-1.016-1.118-6.25 6.883 6.25 6.882Z" fill="#333" />
          </svg>
        </button>
        <div className="pdp__gallery-dots">
          {media.map((_, i) => (
            <button
              key={i}
              className={`pdp__gallery-dot${i === idx ? " on" : ""}`}
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button className="pdp__gallery-arrow" onClick={next} aria-label="Next">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="m13.957 10.02-1.02 1.124 5.26 5.792-5.26 5.792 1.02 1.124 6.281-6.916-6.28-6.915Z" fill="#333" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ── Accordion ──────────────────────────────────────────────────────────────
function Accordion({
  label,
  children,
  defaultOpen = false,
  service = false,
}: {
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  service?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`pdp__accordion${service ? " pdp__service" : ""}`}>
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

// ── Financing Modal ────────────────────────────────────────────────────────
function FinancingModal({
  price,
  currency,
  defaultTerm,
  onClose,
}: {
  price: number;
  currency: string;
  defaultTerm: number;
  onClose: () => void;
}) {
  const [months, setMonths] = useState(defaultTerm);
  const monthly = Math.round(price / months);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="pdp__modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Financing information"
    >
      <div className="pdp__modal">
        {/* Sticky close button */}
        <button className="pdp__modal-close" onClick={onClose} aria-label="ปิด">×</button>

        <div className="pdp__modal-body">
          <h2 className="pdp__modal-title">How does Financing work?</h2>
          <p className="pdp__modal-text">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus.
          </p>
          <ul className="pdp__modal-list">
            <li>Morem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Morem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Morem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>

          <h3 className="pdp__modal-heading">Vendor plug-in</h3>
          <div className="pdp__modal-plugin-card">
            <p className="pdp__modal-plugin-desc">6 interest-free payments of Plan No Fees</p>
            <div className="pdp__modal-plugin-logo">《 ≡ | Financing logo 》</div>
            <a href="#" className="pdp__modal-link">Learn more ›</a>
          </div>

          <h3 className="pdp__modal-heading">Explore options</h3>
          <ul className="pdp__modal-list">
            <li>Korem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Korem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Korem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>

          <h3 className="pdp__modal-heading">Calculator</h3>
          <label className="pdp__modal-label">Length</label>
          <select
            className="pdp__modal-select"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
          >
            <option value={6}>6 months</option>
            <option value={12}>12 months</option>
            <option value={18}>18 months</option>
            <option value={24}>24 months</option>
          </select>

          <label className="pdp__modal-label">Monthly payment</label>
          <div className="pdp__modal-monthly-display">{fmt(monthly)}</div>

          <h3 className="pdp__modal-heading">Final pricing</h3>
          <p className="pdp__modal-final">{fmt(monthly)} /mo. for {months} mo.</p>

          <a href="#" className="pdp__modal-link pdp__modal-link--block">
            Learn more about financing ›
          </a>
          <button className="pdp__modal-btn-financing">Start financing</button>
          <hr className="pdp__modal-divider" />
          <p className="pdp__modal-disclaimer">This is a disclaimer</p>
        </div>
      </div>
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
  const [appleCare, setAppleCare]       = useState(false);
  const [qty, setQty]                   = useState(1);
  const [financingOpen, setFinancingOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(["color", "applecare", "financing"]));
  const [paymentOpt, setPaymentOpt] = useState<"financing" | "pay-full">("financing");

  const toggleSect = (key: string) =>
    setOpenSections((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

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
    { label: displayName, href: "#" },
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

      {/* ── Product header — title + SKU + barcode ─────────────────────── */}
      <div className="pdp__product-header">
        <h1 className="pdp__product-title">{displayName}</h1>
        <p className="pdp__product-meta">
          SKU: {product.sku}
          {product.barcode && <>&nbsp;&nbsp; Barcode: {product.barcode}</>}
        </p>
      </div>

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
            <button
              className="pdp__monthly-link"
              onClick={() => setFinancingOpen(true)}
              aria-label="ดูข้อมูลการผ่อนชำระ"
            >
              or {fmt(Math.round(totalPrice / product.monthlyTerm))}/mo. for {product.monthlyTerm} mo. ›
            </button>
          </div>

          <div className="pdp__action-links">
            <a href="#" className="pdp__action-link">Learn more <span aria-hidden="true">›</span></a>
            <a href="#" className="pdp__action-link">Compare models <span aria-hidden="true">›</span></a>
          </div>

          {/* ── Customize ─────────────────────────────────────────────── */}
          <h2 className="pdp__section-heading">Customize your {product.name}.</h2>

          {/* Color */}
          <ToggleRow
            label="Color"
            value={color.name}
            open={openSections.has("color")}
            onToggle={() => toggleSect("color")}
          >
            <div className="pdp__swatch-row">
              {product.colors.map((c) => (
                <button
                  key={c.id}
                  className={`pdp__swatch${c.id === color.id ? " on" : ""}`}
                  style={{ background: c.hex }}
                  onClick={() => setColor(c)}
                  aria-label={c.name}
                  title={c.name}
                />
              ))}
            </div>
            <ColorGallery media={product.media} name={displayName} />
          </ToggleRow>

          {/* Processor */}
          <ToggleRow
            label="Processor"
            value={`${processor.label}${processor.sublabel ? ` ${processor.sublabel}` : ""}`}
            open={openSections.has("processor")}
            onToggle={() => toggleSect("processor")}
          >
            {product.processors.map((p) => {
              const t =
                product.price +
                p.priceAdd +
                memory.priceAdd +
                storage.priceAdd +
                (appleCare ? product.appleCarePrice : 0);
              return (
                <button
                  key={p.id}
                  className={`pdp__opt-card${p.id === processor.id ? " on" : ""}`}
                  onClick={() => setProcessor(p)}
                >
                  <span className="pdp__opt-card-info">
                    <span className="pdp__opt-card-name">{p.label}</span>
                    {p.sublabel && (
                      <span className="pdp__opt-card-sub">{p.sublabel}</span>
                    )}
                  </span>
                  <span className="pdp__opt-card-pricing">
                    <span className="pdp__opt-card-price">{fmt(t)}</span>
                    <span className="pdp__opt-card-mo">
                      {fmt(Math.round(t / product.monthlyTerm))}/mo.
                    </span>
                  </span>
                </button>
              );
            })}
            <a href="#" className="pdp__opt-link">ชิปแบบไหนเหมาะกับคุณ? ›</a>
          </ToggleRow>

          {/* Memory */}
          <ToggleRow
            label="Memory"
            value={memory.label}
            open={openSections.has("memory")}
            onToggle={() => toggleSect("memory")}
          >
            {product.memory.map((m) => {
              const t =
                product.price +
                processor.priceAdd +
                m.priceAdd +
                storage.priceAdd +
                (appleCare ? product.appleCarePrice : 0);
              return (
                <button
                  key={m.id}
                  className={`pdp__opt-card${m.id === memory.id ? " on" : ""}`}
                  onClick={() => setMemory(m)}
                >
                  <span className="pdp__opt-card-info">
                    <span className="pdp__opt-card-name">{m.label}</span>
                  </span>
                  <span className="pdp__opt-card-pricing">
                    <span className="pdp__opt-card-price">{fmt(t)}</span>
                    <span className="pdp__opt-card-mo">
                      {fmt(Math.round(t / product.monthlyTerm))}/mo.
                    </span>
                  </span>
                </button>
              );
            })}
            <a href="#" className="pdp__opt-link">RAM ขนาดไหนเหมาะกับคุณ? ›</a>
          </ToggleRow>

          {/* Storage */}
          <ToggleRow
            label="Storage"
            value={storage.label}
            open={openSections.has("storage")}
            onToggle={() => toggleSect("storage")}
          >
            {product.storage.map((s) => {
              const t =
                product.price +
                processor.priceAdd +
                memory.priceAdd +
                s.priceAdd +
                (appleCare ? product.appleCarePrice : 0);
              return (
                <button
                  key={s.id}
                  className={`pdp__opt-card${s.id === storage.id ? " on" : ""}`}
                  onClick={() => setStorage(s)}
                >
                  <span className="pdp__opt-card-info">
                    <span className="pdp__opt-card-name">{s.label}</span>
                  </span>
                  <span className="pdp__opt-card-pricing">
                    <span className="pdp__opt-card-price">{fmt(t)}</span>
                    <span className="pdp__opt-card-mo">
                      {fmt(Math.round(t / product.monthlyTerm))}/mo.
                    </span>
                  </span>
                </button>
              );
            })}
            <a href="#" className="pdp__opt-link">ต้องการพื้นที่เท่าไหร่? ›</a>
          </ToggleRow>

          {/* ── Protect ───────────────────────────────────────────────── */}
          <h2 className="pdp__section-heading">Protect your product.</h2>

          <ToggleRow
            label="AppleCare+"
            value={appleCare ? "AppleCare+" : "No coverage plan"}
            open={openSections.has("applecare")}
            onToggle={() => toggleSect("applecare")}
          >
            <button
              className={`pdp__opt-card pdp__opt-card--ac${appleCare ? " on" : ""}`}
              onClick={() => setAppleCare(true)}
            >
              <span className="pdp__opt-card-info pdp__opt-card-info--ac">
                <svg className="pdp__ac-icon" viewBox="0 0 814 1000" width="24" height="24" aria-hidden="true">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.1C46.7 790.7 0 663 0 541.8c0-207.3 135.3-316.9 269-316.9 73.1 0 134.2 43.3 180.7 43.3 44 0 114.1-46 196.3-46 31.7 0 121.5 2.8 180.7 85.7zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" fill="#e74c3c" />
                </svg>
                <span>AppleCare+ for {product.name} M5 (2 year plan)</span>
              </span>
              <span className="pdp__opt-card-pricing">
                <span className="pdp__opt-card-price">{fmt(product.appleCarePrice)}</span>
                <span className="pdp__opt-card-mo">
                  {fmt(Math.round(product.appleCarePrice / 12))}/mo.
                </span>
              </span>
            </button>
            <a href="#" className="pdp__opt-link">Learn more about AppleCare+ ›</a>
            <button
              className={`pdp__opt-card${!appleCare ? " on" : ""}`}
              onClick={() => setAppleCare(false)}
            >
              <span className="pdp__opt-card-info">
                <span className="pdp__opt-card-name">No coverage plan</span>
              </span>
            </button>
          </ToggleRow>

          {/* ── Payment ───────────────────────────────────────────────── */}
          <h2 className="pdp__section-heading">Select your payment option.</h2>

          <ToggleRow
            label="Financing"
            value={paymentOpt === "financing" ? "Financing" : "Pay in full"}
            open={openSections.has("financing")}
            onToggle={() => toggleSect("financing")}
          >
            <button
              className={`pdp__opt-card${paymentOpt === "financing" ? " on" : ""}`}
              onClick={() => setPaymentOpt("financing")}
            >
              <span className="pdp__opt-card-info">
                <span className="pdp__opt-card-name">Financing</span>
              </span>
            </button>
            <button
              className={`pdp__opt-card${paymentOpt === "pay-full" ? " on" : ""}`}
              onClick={() => setPaymentOpt("pay-full")}
            >
              <span className="pdp__opt-card-info">
                <span className="pdp__opt-card-name">Pay in full</span>
              </span>
            </button>
            <div className="pdp__financing-info">
              <p className="pdp__financing-desc">
                6 interest-free payments of Plan A No Fees
              </p>
              <div className="pdp__financing-logo">《 ≡ | Financing logo 》</div>
              <a href="#" className="pdp__opt-link">Explore financing options ›</a>
            </div>
            <a href="#" className="pdp__opt-link">Learn more about financing ›</a>
          </ToggleRow>

          {/* Delivery */}
          <div className="pdp__delivery">
            <div className="pdp__delivery-item">
              <svg className="pdp__delivery-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
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
              <svg className="pdp__delivery-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
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
            <Accordion label="บริการทางเทคนิค" service>
              <p>iStudio มีทีม Apple Certified Technician ให้บริการ One-to-One Setup, Data Migration และ Genius Bar ทุกสาขา</p>
            </Accordion>
            <Accordion label="ผ่อนชำระ" service>
              <p>ผ่อน 0% นานสูงสุด 10 เดือนผ่านบัตรเครดิตที่ร่วมรายการ หรือผ่อนไม่ใช้บัตรผ่านโครงการ U•Joy</p>
            </Accordion>
            <Accordion label="Shipping options" service>
              <p>จัดส่งฟรีทั่วประเทศภายใน 1–3 วันทำการ รับที่ร้านได้ทันทีหากสินค้ามีในสต็อก</p>
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

      {/* ── Sticky bottom bar ──────────────────────────────────────────── */}
      <div className="pdp__sticky-bar">
        <div className="pdp__sticky-bar-price-row">
          <span className="pdp__sticky-bar-total">{fmt(totalPrice)} {product.currency}</span>
          <span className="pdp__sticky-bar-or"> or </span>
          <button
            className="pdp__monthly-link"
            onClick={() => setFinancingOpen(true)}
            aria-label="ดูข้อมูลการผ่อนชำระ"
          >
            {fmt(Math.round(totalPrice / product.monthlyTerm))}/mo. for {product.monthlyTerm} mo. ›
          </button>
        </div>
        <hr className="pdp__sticky-bar-divider" />
        <button className="pdp__btn-addcart">Add to cart</button>
      </div>

      {/* ── Financing Modal ──────────────────────────────────────────────── */}
      {financingOpen && (
        <FinancingModal
          price={totalPrice}
          currency={product.currency}
          defaultTerm={product.monthlyTerm}
          onClose={() => setFinancingOpen(false)}
        />
      )}
    </div>
  );
};
