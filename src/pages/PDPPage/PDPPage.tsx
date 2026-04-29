import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./PDPPage.css";
import { AddOnNavbarMobile } from "./AddOnNavbarMobile";
import { FamilyStripe } from "@/components/organisms/FamilyStripe/FamilyStripe";
import { macbookProFamilyItems } from "@/components/organisms/FamilyStripe/familyStripeData";
import { ToggleRow } from "@/components/ToggleRow/ToggleRow";
import rawData from "@/data/products/macbook-pro-14-m5-pdp.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faSearch,
  faUser,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
// ── Types ──────────────────────────────────────────────────────────────────

interface MediaItem {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt?: string;
}

interface ColorOpt {
  id: string;
  name: string;
  hex?: string;
  imageSrc?: string;
  selected?: boolean;
}
interface ConfigOpt {
  id: string;
  label: string;
  sublabel?: string;
  priceAdd: number;
  selected?: boolean;
}
interface BundleItem {
  id: string;
  name: string;
  price: number;
  imageSrc: string;
}
interface SpecItem {
  label: string;
  value: string;
}
interface CustomizeOption {
  id: string;
  label: string;
  sublabel?: string;
  priceAdd?: number;
  hex?: string;
  imageSrc?: string;
  selected?: boolean;
}

interface CustomizeGroup {
  key: string;
  label: string;
  type?: "swatch" | "cards";
  defaultOptionId?: string;
  helpLabel?: string;
  helpHref?: string;
  options: CustomizeOption[];
}

interface PDPData {
  id: string;
  name: string;
  size?: string;
  badge?: string;
  barcode?: string;
  tagline: string;
  sku: string;
  media: MediaItem[];
  price: number;
  currency: string;
  monthlyPrice?: number;
  monthlyTerm?: number;
  available: boolean;
  defaultColor?: string;
  colors?: ColorOpt[];
  processors?: ConfigOpt[];
  memory?: ConfigOpt[];
  storage?: ConfigOpt[];
  customize?: CustomizeGroup[];
  appleCarePrice?: number;
  bundleItems?: BundleItem[];
  specs?: SpecItem[];
  description: string;
  features?: string[];
  inBox?: string[];
  warranty?: string;
  content?: Partial<PDPContent>;
}

interface PDPContent {
  heroGwp: string;
  heroLearnMoreLabel: string;
  heroLearnMoreHref: string;
  heroCompareLabel: string;
  heroCompareHref: string;
  shareLabel: string;
  sectionCustomizeTitle: string;
  sectionProtectTitle: string;
  sectionPaymentTitle: string;
  colorLabel: string;
  processorLabel: string;
  memoryLabel: string;
  storageLabel: string;
  processorHelpLabel: string;
  processorHelpHref: string;
  memoryHelpLabel: string;
  memoryHelpHref: string;
  storageHelpLabel: string;
  storageHelpHref: string;
  appleCareLabel: string;
  noCoverageLabel: string;
  appleCarePlanLabel: string;
  appleCareLearnMoreLabel: string;
  appleCareLearnMoreHref: string;
  financingLabel: string;
  payInFullLabel: string;
  financingDesc: string;
  financingLogoText: string;
  financingExploreLabel: string;
  financingExploreHref: string;
  financingLearnMoreLabel: string;
  financingLearnMoreHref: string;
  bundleTitle: string;
  bundleAddButton: string;
  summaryHeadingPrefix: string;
  summaryColorLabel: string;
  summaryProcessorLabel: string;
  summaryMemoryLabel: string;
  summaryStorageLabel: string;
  summaryAppleCareLabel: string;
  summaryAppleCareValue: string;
  qtyLabel: string;
  stockAvailabilityLabel: string;
  stockAvailabilityHref: string;
  buyNowLabel: string;
  notifyLabel: string;
  specsAccordionLabel: string;
  descriptionAccordionLabel: string;
  featuresAccordionLabel: string;
  inBoxAccordionLabel: string;
  warrantyAccordionLabel: string;
  stickyOrLabel: string;
  addToCartLabel: string;
  modalDialogLabel: string;
  modalTitle: string;
  modalIntro: string;
  modalIntroBullets: string[];
  modalVendorTitle: string;
  modalVendorDescription: string;
  modalVendorLogoText: string;
  modalVendorLearnMoreLabel: string;
  modalVendorLearnMoreHref: string;
  modalExploreTitle: string;
  modalExploreBullets: string[];
  modalCalculatorTitle: string;
  modalLengthLabel: string;
  modalLengthOptions: number[];
  modalMonthlyPaymentLabel: string;
  modalFinalPricingTitle: string;
  modalPerMonthTemplate: string;
  modalLearnMoreFinancingLabel: string;
  modalLearnMoreFinancingHref: string;
  modalStartFinancingLabel: string;
  modalDisclaimer: string;
}

const product = rawData as PDPData;

const DEFAULT_CONTENT: PDPContent = {
  heroGwp: "Microsoft Office MS FPP M365 Personal",
  heroLearnMoreLabel: "เรียนรู้เพิ่มเติม",
  heroLearnMoreHref: "#",
  heroCompareLabel: "เปรียบเทียบรุ่น",
  heroCompareHref: "#",
  shareLabel: "Share",
  sectionCustomizeTitle: "Customize your",
  sectionProtectTitle: "Protect your product.",
  sectionPaymentTitle: "Select your payment option.",
  colorLabel: "Color",
  processorLabel: "Processor",
  memoryLabel: "Memory",
  storageLabel: "Storage",
  processorHelpLabel: "ชิปแบบไหนเหมาะกับคุณ? ›",
  processorHelpHref: "#",
  memoryHelpLabel: "RAM ขนาดไหนเหมาะกับคุณ? ›",
  memoryHelpHref: "#",
  storageHelpLabel: "ต้องการพื้นที่เท่าไหร่? ›",
  storageHelpHref: "#",
  appleCareLabel: "AppleCare+",
  noCoverageLabel: "No coverage plan",
  appleCarePlanLabel: "(2 year plan)",
  appleCareLearnMoreLabel: "Learn more about AppleCare+ ›",
  appleCareLearnMoreHref: "#",
  financingLabel: "Financing",
  payInFullLabel: "Pay in full",
  financingDesc: "6 interest-free payments of Plan A No Fees",
  financingLogoText: "《 ≡ | Financing logo 》",
  financingExploreLabel: "Explore financing options ›",
  financingExploreHref: "#",
  financingLearnMoreLabel: "Learn more about financing ›",
  financingLearnMoreHref: "#",
  bundleTitle: "แนะนำซื้อคู่กัน",
  bundleAddButton: "เพิ่ม",
  summaryHeadingPrefix: "Your new",
  summaryColorLabel: "Color",
  summaryProcessorLabel: "Processor",
  summaryMemoryLabel: "Memory",
  summaryStorageLabel: "Storage",
  summaryAppleCareLabel: "AppleCare+",
  summaryAppleCareValue: "เพิ่มแล้ว",
  qtyLabel: "Qty",
  stockAvailabilityLabel: "ดูข้อมูล stock availability ›",
  stockAvailabilityHref: "#",
  buyNowLabel: "ซื้อเลย",
  notifyLabel: "แจ้งเตือนเมื่อมีสินค้า",
  specsAccordionLabel: "ข้อมูลจำเพาะ",
  descriptionAccordionLabel: "คำอธิบายสินค้า",
  featuresAccordionLabel: "คุณสมบัติเด่น",
  inBoxAccordionLabel: "อุปกรณ์ในกล่อง",
  warrantyAccordionLabel: "การรับประกัน",
  stickyOrLabel: "or",
  addToCartLabel: "Add to cart",
  modalDialogLabel: "Financing information",
  modalTitle: "How does Financing work?",
  modalIntro:
    "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
  modalIntroBullets: [
    "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
  ],
  modalVendorTitle: "Vendor plug-in",
  modalVendorDescription: "6 interest-free payments of Plan No Fees",
  modalVendorLogoText: "《 ≡ | Financing logo 》",
  modalVendorLearnMoreLabel: "Learn more ›",
  modalVendorLearnMoreHref: "#",
  modalExploreTitle: "Explore options",
  modalExploreBullets: [
    "Korem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Korem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Korem ipsum dolor sit amet, consectetur adipiscing elit.",
  ],
  modalCalculatorTitle: "Calculator",
  modalLengthLabel: "Length",
  modalLengthOptions: [6, 12, 18, 24],
  modalMonthlyPaymentLabel: "Monthly payment",
  modalFinalPricingTitle: "Final pricing",
  modalPerMonthTemplate: " /mo. for {months} mo.",
  modalLearnMoreFinancingLabel: "Learn more about financing ›",
  modalLearnMoreFinancingHref: "#",
  modalStartFinancingLabel: "Start financing",
  modalDisclaimer: "This is a disclaimer",
};

const content: PDPContent = {
  ...DEFAULT_CONTENT,
  ...(product.content ?? {}),
};

const buildLegacyCustomizeGroups = (
  data: PDPData,
  uiContent: PDPContent,
): CustomizeGroup[] => {
  const groups: CustomizeGroup[] = [];

  if (data.colors?.length) {
    groups.push({
      key: "color",
      label: uiContent.colorLabel,
      type: "swatch",
      defaultOptionId: data.defaultColor,
      options: data.colors.map(item => ({
        id: item.id,
        label: item.name,
        hex: item.hex,
        imageSrc: item.imageSrc,
        priceAdd: 0,
        selected: item.selected ?? item.id === data.defaultColor,
      })),
    });
  }

  if (data.processors?.length) {
    groups.push({
      key: "processor",
      label: uiContent.processorLabel,
      type: "cards",
      helpLabel: uiContent.processorHelpLabel,
      helpHref: uiContent.processorHelpHref,
      options: data.processors.map((item, index) => ({
        ...item,
        selected: item.selected ?? index === 0,
      })),
    });
  }

  if (data.memory?.length) {
    groups.push({
      key: "memory",
      label: uiContent.memoryLabel,
      type: "cards",
      helpLabel: uiContent.memoryHelpLabel,
      helpHref: uiContent.memoryHelpHref,
      options: data.memory.map((item, index) => ({
        ...item,
        selected: item.selected ?? index === 0,
      })),
    });
  }

  if (data.storage?.length) {
    groups.push({
      key: "storage",
      label: uiContent.storageLabel,
      type: "cards",
      helpLabel: uiContent.storageHelpLabel,
      helpHref: uiContent.storageHelpHref,
      options: data.storage.map((item, index) => ({
        ...item,
        selected: item.selected ?? index === 0,
      })),
    });
  }

  return groups;
};

const getCustomizeGroups = (
  data: PDPData,
  uiContent: PDPContent,
): CustomizeGroup[] => {
  const source = data.customize?.length
    ? data.customize
    : buildLegacyCustomizeGroups(data, uiContent);
  return source.filter(group => group.options.length > 0);
};

const getInitialCustomizeSelections = (
  groups: CustomizeGroup[],
): Record<string, string> => {
  return groups.reduce<Record<string, string>>((accumulator, group) => {
    const selectedOption =
      group.options.find(option => option.selected) ??
      group.options.find(option => option.id === group.defaultOptionId) ??
      group.options[0];

    if (selectedOption) {
      accumulator[group.key] = selectedOption.id;
    }

    return accumulator;
  }, {});
};

// ── Helpers ────────────────────────────────────────────────────────────────
const fmt = (n: number) => `฿${n.toLocaleString("th-TH")}`;

// ── Gallery ────────────────────────────────────────────────────────────────
function Gallery({ media, name }: { media: MediaItem[]; name: string }) {
  const [idx, setIdx] = useState(0);
  const idxRef = useRef(0);
  const total = media.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const thumbDragOrigin = useRef<number | null>(null);

  // Keep idxRef in sync (for use inside window event closures)
  useEffect(() => {
    idxRef.current = idx;
  }, [idx]);

  // Infinity wrap
  const prev = () => setIdx(i => (i - 1 + total) % total);
  const next = () => setIdx(i => (i + 1) % total);

  // Manage track transform via DOM (not React style) for smooth drag
  const applyTransform = (offset = 0, animate = true) => {
    if (!trackRef.current) return;
    trackRef.current.style.transition = animate ? "" : "none";
    trackRef.current.style.transform = `translate3d(calc(-${idxRef.current} * var(--pdp-slide-w) + ${offset}px), 0, 0)`;
  };

  // Re-apply transform with animation whenever idx changes (button/dot nav)
  useEffect(() => {
    applyTransform(0, true);
  }, [idx]);

  // Auto-scroll thumbnail strip to center active thumb
  useEffect(() => {
    const container = thumbsRef.current;
    if (!container) return;
    const thumb = container.children[idx] as HTMLElement | undefined;
    if (!thumb) return;
    const thumbCenter = thumb.offsetLeft + thumb.offsetWidth / 2;
    container.scrollTo({
      left: thumbCenter - container.offsetWidth / 2,
      behavior: "smooth",
    });
  }, [idx]);

  const dragThreshold = 30;

  // Mouse drag — attach to window so tracking never loses the cursor
  const onViewportMouseDown = (e: React.MouseEvent) => {
    const startX = e.clientX;
    applyTransform(0, false);

    const onMove = (ev: MouseEvent) => {
      applyTransform(ev.clientX - startX, false);
    };
    const onUp = (ev: MouseEvent) => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      const delta = startX - ev.clientX;
      if (Math.abs(delta) > dragThreshold) {
        delta > 0
          ? setIdx(i => (i + 1) % total)
          : setIdx(i => (i - 1 + total) % total);
      } else {
        applyTransform(0, true); // snap back, no step
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  // Touch drag
  const touchStartX = useRef<number | null>(null);
  const onViewportTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    applyTransform(0, false);
  };
  const onViewportTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    applyTransform(e.touches[0].clientX - touchStartX.current, false);
  };
  const onViewportTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    touchStartX.current = null;
    if (Math.abs(delta) > dragThreshold) {
      delta > 0
        ? setIdx(i => (i + 1) % total)
        : setIdx(i => (i - 1 + total) % total);
    } else {
      applyTransform(0, true);
    }
  };

  // Thumb strip — 1-step lock drag (no visual offset needed)
  const onThumbDragBegin = (x: number) => {
    thumbDragOrigin.current = x;
  };
  const onThumbDragEnd = (x: number) => {
    if (thumbDragOrigin.current === null) return;
    const delta = thumbDragOrigin.current - x;
    if (Math.abs(delta) > dragThreshold) {
      delta > 0
        ? setIdx(i => (i + 1) % total)
        : setIdx(i => (i - 1 + total) % total);
    }
    thumbDragOrigin.current = null;
  };

  return (
    <div className="pdp__gallery">
      {/* Viewport — clip window, size driven by CSS --pdp-slide-w */}
      <div
        className="pdp__gallery-viewport"
        onMouseDown={onViewportMouseDown}
        onTouchStart={onViewportTouchStart}
        onTouchMove={onViewportTouchMove}
        onTouchEnd={onViewportTouchEnd}
      >
        {/* Track — transform managed via DOM (applyTransform), not React inline style */}
        <div
          ref={trackRef}
          className="pdp__gallery-track"
          style={{ width: `calc(${total} * var(--pdp-slide-w))` }}
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
                  onDragStart={e => e.preventDefault()}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation: prev arrow | dots | next arrow */}
      <div className="pdp__gallery-nav">
        <button
          className="pdp__gallery-arrow"
          onClick={prev}
          aria-label="Previous"
        >
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m18.192 23.704 1.016-1.118-5.236-5.764 5.236-5.765-1.016-1.118-6.25 6.883 6.25 6.882Z"
              fill="#333"
            />
          </svg>
        </button>
        <div
          className="pdp__gallery-dots"
          role="tablist"
          aria-label="Gallery slides"
        >
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
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m13.957 10.02-1.02 1.124 5.26 5.792-5.26 5.792 1.02 1.124 6.281-6.916-6.28-6.915Z"
              fill="#333"
            />
          </svg>
        </button>
      </div>

      {/* Thumbnail strip — single row, drag = 1-step lock */}
      <div
        ref={thumbsRef}
        className="pdp__gallery-thumbs"
        aria-label="Product images"
        onTouchStart={e => onThumbDragBegin(e.touches[0].clientX)}
        onTouchEnd={e => onThumbDragEnd(e.changedTouches[0].clientX)}
        onMouseDown={e => onThumbDragBegin(e.clientX)}
        onMouseUp={e => onThumbDragEnd(e.clientX)}
      >
        {media.map((m, i) => (
          <button
            key={i}
            className="pdp__gallery-thumb"
            onClick={() => setIdx(i)}
            aria-label={`View image ${i + 1}`}
          >
            <img
              src={m.poster ?? m.src}
              alt={m.alt ?? `${name} ${i + 1}`}
              draggable={false}
            />
            {m.type === "video" && (
              <span className="pdp__gallery-play" aria-hidden="true">
                ▶
              </span>
            )}
          </button>
        ))}
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

  const prev = () => setIdx(i => (i - 1 + total) % total);
  const next = () => setIdx(i => (i + 1) % total);

  const onDragBegin = (x: number) => {
    dragOrigin.current = x;
  };
  const onDragEnd = (x: number) => {
    if (dragOrigin.current === null) return;
    const delta = dragOrigin.current - x;
    if (Math.abs(delta) > COLOR_SLIDE_W * 0.16) {
      delta > 0 ? next() : prev();
    }
    dragOrigin.current = null;
  };

  return (
    <div className="pdp__color-gallery">
      <div
        className="pdp__color-gallery-vp"
        onTouchStart={e => onDragBegin(e.touches[0].clientX)}
        onTouchEnd={e => onDragEnd(e.changedTouches[0].clientX)}
        onMouseDown={e => onDragBegin(e.clientX)}
        onMouseUp={e => onDragEnd(e.clientX)}
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
                onDragStart={e => e.preventDefault()}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pdp__color-gallery-nav">
        <button
          className="pdp__gallery-arrow"
          onClick={prev}
          aria-label="Previous"
        >
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m18.192 23.704 1.016-1.118-5.236-5.764 5.236-5.765-1.016-1.118-6.25 6.883 6.25 6.882Z"
              fill="#333"
            />
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
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m13.957 10.02-1.02 1.124 5.26 5.792-5.26 5.792 1.02 1.124 6.281-6.916-6.28-6.915Z"
              fill="#333"
            />
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
        onClick={() => setOpen(v => !v)}
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
  const perMonthText = content.modalPerMonthTemplate.replace(
    "{months}",
    String(months),
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="pdp__modal-overlay"
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={content.modalDialogLabel}
    >
      <div className="pdp__modal">
        {/* Sticky close button */}
        <button className="pdp__modal-close" onClick={onClose} aria-label="ปิด">
          ×
        </button>

        <div className="pdp__modal-body">
          <h2 className="pdp__modal-title">{content.modalTitle}</h2>
          <p className="pdp__modal-text">{content.modalIntro}</p>
          <ul className="pdp__modal-list">
            {content.modalIntroBullets.map((item, idx) => (
              <li key={`intro-${idx}`}>{item}</li>
            ))}
          </ul>

          <h3 className="pdp__modal-heading">{content.modalVendorTitle}</h3>
          <div className="pdp__modal-plugin-card">
            <p className="pdp__modal-plugin-desc">
              {content.modalVendorDescription}
            </p>
            <div className="pdp__modal-plugin-logo">
              {content.modalVendorLogoText}
            </div>
            <a
              href={content.modalVendorLearnMoreHref}
              className="pdp__modal-link"
            >
              {content.modalVendorLearnMoreLabel}
            </a>
          </div>

          <h3 className="pdp__modal-heading">{content.modalExploreTitle}</h3>
          <ul className="pdp__modal-list">
            {content.modalExploreBullets.map((item, idx) => (
              <li key={`explore-${idx}`}>{item}</li>
            ))}
          </ul>

          <h3 className="pdp__modal-heading">{content.modalCalculatorTitle}</h3>
          <label className="pdp__modal-label">{content.modalLengthLabel}</label>
          <select
            className="pdp__modal-select"
            value={months}
            onChange={e => setMonths(Number(e.target.value))}
          >
            {content.modalLengthOptions.map(option => (
              <option key={option} value={option}>
                {option} months
              </option>
            ))}
          </select>

          <label className="pdp__modal-label">
            {content.modalMonthlyPaymentLabel}
          </label>
          <div className="pdp__modal-monthly-display">{fmt(monthly)}</div>

          <h3 className="pdp__modal-heading">
            {content.modalFinalPricingTitle}
          </h3>
          <p className="pdp__modal-final">
            {fmt(monthly)}
            {perMonthText}
          </p>

          <a
            href={content.modalLearnMoreFinancingHref}
            className="pdp__modal-link pdp__modal-link--block"
          >
            {content.modalLearnMoreFinancingLabel}
          </a>
          <button className="pdp__modal-btn-financing">
            {content.modalStartFinancingLabel}
          </button>
          <hr className="pdp__modal-divider" />
          <p className="pdp__modal-disclaimer">{content.modalDisclaimer}</p>
        </div>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export const PDPPage = () => {
  const customizeGroups = getCustomizeGroups(product, content);
  const [selectedCustomize, setSelectedCustomize] = useState<
    Record<string, string>
  >(() => getInitialCustomizeSelections(customizeGroups));
  const [appleCare, setAppleCare] = useState(false);
  const [qty, setQty] = useState(1);
  const [financingOpen, setFinancingOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(
      [customizeGroups[0]?.key, "applecare", "financing"].filter(
        Boolean,
      ) as string[],
    ),
  );
  const [paymentOpt, setPaymentOpt] = useState<"financing" | "pay-full">(
    "financing",
  );
  const [isStickyDesktopHero, setIsStickyDesktopHero] = useState(false);
  const [isStickyDesktopHeroVisible, setIsStickyDesktopHeroVisible] =
    useState(false);
  const desktopHeroRef = useRef<HTMLElement | null>(null);

  const getSelectedCustomizeOption = (group: CustomizeGroup) => {
    return (
      group.options.find(
        option => option.id === selectedCustomize[group.key],
      ) ?? group.options[0]
    );
  };

  const selectedColor = customizeGroups.find(group => group.key === "color");
  const appleCarePrice = product.appleCarePrice ?? 0;
  const monthlyTerm = product.monthlyTerm ?? 12;
  const bundleItems = product.bundleItems ?? [];
  const specs = product.specs ?? [];
  const features = product.features ?? [];
  const inBox = product.inBox ?? [];
  const warranty = product.warranty ?? "";

  const toggleSect = (key: string) =>
    setOpenSections(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  const totalPrice =
    product.price +
    customizeGroups.reduce(
      (sum, group) => sum + (getSelectedCustomizeOption(group)?.priceAdd ?? 0),
      0,
    ) +
    (appleCare ? appleCarePrice : 0);

  const displayName = product.size
    ? `${product.size}-inch ${product.name}`
    : product.name;
  const heroImage = product.media.find(m => m.type === "image")?.src ?? "";

  // Portal target: the slot inside GlobalNav's fixed container
  const [navSlot, setNavSlot] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setNavSlot(document.getElementById("global-nav-addon-slot"));
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    let lastScrollY = window.scrollY;

    const evaluateStickyVisibility = () => {
      if (!mediaQuery.matches || !desktopHeroRef.current) {
        setIsStickyDesktopHero(false);
        setIsStickyDesktopHeroVisible(false);
        lastScrollY = window.scrollY;
        return;
      }

      const currentScrollY = window.scrollY;
      const stickyTriggerOffset = 52;
      const heroBottom = desktopHeroRef.current.getBoundingClientRect().bottom;
      const shouldStick = heroBottom <= stickyTriggerOffset;
      const isScrollingUp = currentScrollY < lastScrollY - 2;

      setIsStickyDesktopHero(shouldStick);
      setIsStickyDesktopHeroVisible(shouldStick && isScrollingUp);
      lastScrollY = currentScrollY;
    };

    evaluateStickyVisibility();
    window.addEventListener("scroll", evaluateStickyVisibility, {
      passive: true,
    });
    window.addEventListener("resize", evaluateStickyVisibility);

    return () => {
      window.removeEventListener("scroll", evaluateStickyVisibility);
      window.removeEventListener("resize", evaluateStickyVisibility);
    };
  }, []);

  return (
    <div className="pdp">
      {/* ── AddOn Navbar Mobile — portaled INTO GlobalNav, mobile only ──── */}
      {navSlot &&
        createPortal(
          <AddOnNavbarMobile
            productName={displayName}
            price={`${fmt(totalPrice)} ${product.currency}`}
            monthly={fmt(Math.round(totalPrice / monthlyTerm))}
            monthlyTerm={monthlyTerm}
            onMonthlyClick={() => setFinancingOpen(true)}
          />,
          navSlot,
        )}

      {/* Family stripe */}
      <FamilyStripe
        items={macbookProFamilyItems}
        seeAllLabel="ดูข้อมูล Mac ทั้งหมด"
        seeAllHref="/pages/view-all-mac"
      />

      <section
        className={`pdp__desktop-hero pdp__desktop-hero--sticky cto-header js-cto-header apl-section-cto-header-sticky js-cto-header-sticky${isStickyDesktopHero ? " is-sticky" : ""}${isStickyDesktopHeroVisible ? " is-visible header-is-sticky" : ""}`}
        aria-label="Sticky desktop product summary"
      >
        <div className="pdp__desktop-hero-left">
          <h2 className="pdp__desktop-hero-title">{displayName}</h2>
          <p className="pdp__desktop-hero-gwp">{content.heroGwp}</p>

          <div className="pdp__desktop-hero-links">
            <a
              href={content.heroLearnMoreHref}
              className="pdp__desktop-hero-link"
            >
              {content.heroLearnMoreLabel}
            </a>
            <span className="pdp__desktop-hero-divider" aria-hidden="true" />
            <a
              href={content.heroCompareHref}
              className="pdp__desktop-hero-link"
            >
              {content.heroCompareLabel}
            </a>
          </div>
        </div>

        <div className="pdp__desktop-hero-right">
          <p className="pdp__desktop-hero-from">
            {fmt(totalPrice)} {product.currency}
          </p>
          <p className="pdp__desktop-hero-monthly">
            or {fmt(Math.round(totalPrice / monthlyTerm))}/mo. for {monthlyTerm}{" "}
            mo.{" "}
            <FontAwesomeIcon icon={faAngleRight} className="billboard_icon" />
          </p>
        </div>
      </section>

      {/* ── Product header — title + SKU + barcode ─────────────────────── */}
      <section
        ref={desktopHeroRef}
        className="pdp__desktop-hero"
        aria-label="Desktop product summary"
      >
        <div className="pdp__desktop-hero-left">
          <p className="pdp__desktop-hero-badge">{product.badge ?? "ใหม่"}</p>
          <h1 className="pdp__desktop-hero-title">{displayName}</h1>
          <p className="pdp__desktop-hero-sku">
            SKU: {product.sku}
            {product.barcode && (
              <span className="pdp__desktop-hero-barcode">
                Barcode: {product.barcode}
              </span>
            )}
          </p>

          <p className="pdp__desktop-hero-gwp">{content.heroGwp}</p>

          <div className="pdp__desktop-hero-links">
            <a
              href={content.heroLearnMoreHref}
              className="pdp__desktop-hero-link"
            >
              {content.heroLearnMoreLabel}
            </a>
            <span className="pdp__desktop-hero-divider" aria-hidden="true" />
            <a
              href={content.heroCompareHref}
              className="pdp__desktop-hero-link"
            >
              {content.heroCompareLabel}
            </a>
          </div>

          <div className="pdp__desktop-hero-share" aria-label="Share">
            <span className="pdp__desktop-hero-share-label">
              {content.shareLabel}
            </span>
            <a
              href="#"
              aria-label="Share on Facebook"
              className="pdp__desktop-hero-share-icon"
            >
              f
            </a>
            <a
              href="#"
              aria-label="Share on X"
              className="pdp__desktop-hero-share-icon"
            >
              x
            </a>
            <a
              href="#"
              aria-label="Share on Pinterest"
              className="pdp__desktop-hero-share-icon"
            >
              p
            </a>
          </div>
        </div>

        <div className="pdp__desktop-hero-right">
          <p className="pdp__desktop-hero-from">
            {fmt(totalPrice)} {product.currency}
          </p>
          <p className="pdp__desktop-hero-monthly">
            or {fmt(Math.round(totalPrice / monthlyTerm))}/mo. for {monthlyTerm}{" "}
            mo.{" "}
            <FontAwesomeIcon icon={faAngleRight} className="billboard_icon" />
          </p>
          <button
            className="pdp__desktop-hero-financing"
            onClick={() => setFinancingOpen(true)}
            aria-label="เรียนรู้เพิ่มเติมเกี่ยวกับการชำระเงิน"
          >
            เรียนรู้เพิ่มเติมเกี่ยวกับการชำระเงิน
            <FontAwesomeIcon icon={faAngleRight} className="billboard_icon" />
          </button>
          <button>
            
          </button>
        </div>
      </section>

      <div className="pdp__product-header">
        <h1 className="pdp__product-title">{displayName}</h1>
        <p className="pdp__product-meta">
          SKU: {product.sku}
          {product.barcode && <>&nbsp;&nbsp; Barcode: {product.barcode}</>}
        </p>
      </div>

      {/* ── 2-column layout ────────────────────────────────────────────── */}
      <div className="pdp__layout">
        {/* Left — Gallery (sticky wrapper bounds the sticky zone) */}
        <div className="pdp__gallery-sticky">
          <Gallery media={product.media} name={displayName} />
        </div>

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
              or {fmt(Math.round(totalPrice / monthlyTerm))}/mo. for{" "}
              {monthlyTerm} mo. ›
            </button>
          </div>

          {/* <div className="pdp__action-links">
            <a href="#" className="pdp__action-link">Learn more <span aria-hidden="true">›</span></a>
            <a href="#" className="pdp__action-link">Compare models <span aria-hidden="true">›</span></a>
          </div> */}

          {/* ── Customize ─────────────────────────────────────────────── */}
          <h2 className="pdp__section-heading pdp_sec_head1">
            {content.sectionCustomizeTitle} {product.name}.
          </h2>

          {customizeGroups.map(group => {
            const selectedOption = getSelectedCustomizeOption(group);
            const value = [selectedOption?.label, selectedOption?.sublabel]
              .filter(Boolean)
              .join(" ");

            return (
              <ToggleRow
                key={group.key}
                label={group.label}
                value={value}
                open={openSections.has(group.key)}
                onToggle={() => toggleSect(group.key)}
              >
                {group.type === "swatch" ? (
                  <>
                    <div className="pdp__swatch-row">
                      {group.options.map(option => (
                        <button
                          key={option.id}
                          className={`pdp__swatch${option.id === selectedOption?.id ? " on" : ""}`}
                          style={
                            option.hex
                              ? { background: option.hex }
                              : option.imageSrc
                                ? {
                                    backgroundImage: `url(${option.imageSrc})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                  }
                                : undefined
                          }
                          onClick={() =>
                            setSelectedCustomize(prev => ({
                              ...prev,
                              [group.key]: option.id,
                            }))
                          }
                          aria-label={option.label}
                          title={option.label}
                        />
                      ))}
                    </div>
                    {group.key === "color" && (
                      <ColorGallery media={product.media} name={displayName} />
                    )}
                  </>
                ) : (
                  <>
                    {group.options.map(option => {
                      const optionTotal =
                        product.price +
                        customizeGroups.reduce((sum, candidateGroup) => {
                          if (candidateGroup.key === group.key) {
                            return sum + (option.priceAdd ?? 0);
                          }

                          return (
                            sum +
                            (getSelectedCustomizeOption(candidateGroup)
                              ?.priceAdd ?? 0)
                          );
                        }, 0) +
                        (appleCare ? appleCarePrice : 0);

                      return (
                        <button
                          key={option.id}
                          className={`pdp__opt-card${option.id === selectedOption?.id ? " on" : ""}`}
                          onClick={() =>
                            setSelectedCustomize(prev => ({
                              ...prev,
                              [group.key]: option.id,
                            }))
                          }
                          type="button"
                        >
                          <span className="pdp__opt-card-info">
                            <span className="pdp__opt-card-name">
                              {option.label}
                            </span>
                            {/* {option.sublabel && (
                              <span className="pdp__opt-card-sub">
                                {option.sublabel}
                              </span>
                            )} */}
                          </span>
                          <span className="pdp__opt-card-pricing">
                            <span className="pdp__opt-card-price">
                              {fmt(optionTotal)}
                            </span>
                            <span className="pdp__opt-card-mo">
                              {fmt(Math.round(optionTotal / monthlyTerm))}/mo.
                            </span>
                          </span>
                        </button>
                      );
                    })}
                    {group.helpLabel && (
                      <a href={group.helpHref ?? "#"} className="pdp__opt-link">
                        {group.helpLabel}
                      </a>
                    )}
                  </>
                )}
              </ToggleRow>
            );
          })}

          {/* ── Protect ───────────────────────────────────────────────── */}
          <h2 className="pdp__section-heading">
            {content.sectionProtectTitle}
          </h2>

          <ToggleRow
            label={content.appleCareLabel}
            value={appleCare ? content.appleCareLabel : content.noCoverageLabel}
            open={openSections.has("applecare")}
            onToggle={() => toggleSect("applecare")}
          >
            <button
              className={`pdp__opt-card pdp__opt-card--ac${appleCare ? " on" : ""}`}
              onClick={() => setAppleCare(true)}
            >
              <span className="pdp__opt-card-info pdp__opt-card-info--ac">
                <svg
                  className="pdp__ac-icon"
                  viewBox="0 0 814 1000"
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <path
                    d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.1C46.7 790.7 0 663 0 541.8c0-207.3 135.3-316.9 269-316.9 73.1 0 134.2 43.3 180.7 43.3 44 0 114.1-46 196.3-46 31.7 0 121.5 2.8 180.7 85.7zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"
                    fill="#e74c3c"
                  />
                </svg>
                <span>
                  {content.appleCareLabel} for {product.name} M5{" "}
                  {content.appleCarePlanLabel}
                </span>
              </span>
              <span className="pdp__opt-card-pricing">
                <span className="pdp__opt-card-price">
                  {fmt(appleCarePrice)}
                </span>
                <span className="pdp__opt-card-mo">
                  {fmt(Math.round(appleCarePrice / 12))}/mo.
                </span>
              </span>
            </button>
            <a href={content.appleCareLearnMoreHref} className="pdp__opt-link">
              {content.appleCareLearnMoreLabel}
            </a>
            <button
              className={`pdp__opt-card${!appleCare ? " on" : ""}`}
              onClick={() => setAppleCare(false)}
            >
              <span className="pdp__opt-card-info">
                <span className="pdp__opt-card-name">
                  {content.noCoverageLabel}
                </span>
              </span>
            </button>
          </ToggleRow>

          {/* ── Payment ───────────────────────────────────────────────── */}
          <h2 className="pdp__section-heading">
            {content.sectionPaymentTitle}
          </h2>

          <ToggleRow
            label={content.financingLabel}
            value={
              paymentOpt === "financing"
                ? content.financingLabel
                : content.payInFullLabel
            }
            open={openSections.has("financing")}
            onToggle={() => toggleSect("financing")}
            bodyClassName="pdp__payment-body"
          >
            <div className="pdp__payment-options">
              <button
                className={`pdp__opt-card${paymentOpt === "financing" ? " on" : ""}`}
                onClick={() => setPaymentOpt("financing")}
                type="button"
              >
                <span className="pdp__opt-card-info">
                  <span className="pdp__opt-card-name">
                    {content.financingLabel}
                  </span>
                </span>
              </button>
              <button
                className={`pdp__opt-card${paymentOpt === "pay-full" ? " on" : ""}`}
                onClick={() => setPaymentOpt("pay-full")}
                type="button"
              >
                <span className="pdp__opt-card-info">
                  <span className="pdp__opt-card-name">
                    {content.payInFullLabel}
                  </span>
                </span>
              </button>
            </div>
            <div className="pdp__financing-info">
              <p className="pdp__financing-desc">{content.financingDesc}</p>
              <div className="pdp__financing-logo">
                {content.financingLogoText}
              </div>
              <a href={content.financingExploreHref} className="pdp__opt-link">
                {content.financingExploreLabel}
              </a>
            </div>
            <a href={content.financingLearnMoreHref} className="pdp__opt-link">
              {content.financingLearnMoreLabel}
            </a>
          </ToggleRow>

          {/* Delivery */}
          {/* <div className="pdp__delivery">
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
          </div> */}

          {/* Service accordions — inside panel */}
          {/* <div className="pdp__service-accordions">
            <Accordion label="บริการทางเทคนิค" service>
              <p>iStudio มีทีม Apple Certified Technician ให้บริการ One-to-One Setup, Data Migration และ Genius Bar ทุกสาขา</p>
            </Accordion>
            <Accordion label="ผ่อนชำระ" service>
              <p>ผ่อน 0% นานสูงสุด 10 เดือนผ่านบัตรเครดิตที่ร่วมรายการ หรือผ่อนไม่ใช้บัตรผ่านโครงการ U•Joy</p>
            </Accordion>
            <Accordion label="Shipping options" service>
              <p>จัดส่งฟรีทั่วประเทศภายใน 1–3 วันทำการ รับที่ร้านได้ทันทีหากสินค้ามีในสต็อก</p>
            </Accordion>
          </div> */}
        </div>
      </div>

      {/* ── แนะนำซื้อคู่กัน ─────────────────────────────────────────────── */}
      {/* <section className="pdp__bundle">
        <h2 className="pdp__bundle-title">{content.bundleTitle}</h2>
        <div className="pdp__bundle-list">
          {bundleItems.map(item => (
            <div key={item.id} className="pdp__bundle-item">
              <div className="pdp__bundle-img">
                <img
                  src={item.imageSrc}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="pdp__bundle-info">
                <div className="pdp__bundle-name">{item.name}</div>
                <div className="pdp__bundle-price">
                  {fmt(item.price)} {product.currency}
                </div>
              </div>
              <button className="pdp__bundle-add">
                {content.bundleAddButton}
              </button>
            </div>
          ))}
        </div>
      </section> */}

      {/* ── Order Summary ───────────────────────────────────────────────── */}
      <section className="pdp__summary">
        <div className="pdp__summary-inner">
          {/* Product image */}
          <div className="pdp__summary-img-wrap">
            <img
              src={heroImage}
              alt={displayName}
              className="pdp__summary-img"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Details */}
          <div className="pdp__summary-details">
            <h2 className="pdp__summary-heading">
              {content.summaryHeadingPrefix} {product.name}.
            </h2>
            <p className="pdp__summary-tagline">{product.tagline}</p>

            <div className="pdp__summary-name">{displayName} M5</div>

            <dl className="pdp__summary-config">
              {customizeGroups.map(group => {
                const selectedOption = getSelectedCustomizeOption(group);
                return (
                  <div key={group.key} className="pdp__summary-config-row">
                    <dt>{group.label}</dt>
                    <dd>
                      {selectedOption?.label}
                      {selectedOption?.sublabel &&
                        ` ${selectedOption.sublabel}`}
                    </dd>
                  </div>
                );
              })}
              {appleCare && (
                <div className="pdp__summary-config-row">
                  <dt>{content.summaryAppleCareLabel}</dt>
                  <dd>{content.summaryAppleCareValue}</dd>
                </div>
              )}
            </dl>

            <div className="pdp__summary-price">
              {fmt(totalPrice)} {product.currency}
            </div>

            {/* Qty */}
            <div className="pdp__qty-row">
              <label className="pdp__qty-label" htmlFor="pdp-qty">
                {content.qtyLabel}
              </label>
              <div className="pdp__qty-ctrl">
                <button
                  className="pdp__qty-btn"
                  onClick={() => setQty(q => Math.max(1, q - 1))}
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
                  onClick={() => setQty(q => q + 1)}
                  aria-label="เพิ่มจำนวน"
                >
                  +
                </button>
              </div>
            </div>

            <a
              href={content.stockAvailabilityHref}
              className="pdp__summary-avail"
            >
              {content.stockAvailabilityLabel}
            </a>

            {product.available ? (
              <button className="pdp__btn-buy">
                {content.buyNowLabel} {product.currency}
              </button>
            ) : (
              <button className="pdp__btn-notify">{content.notifyLabel}</button>
            )}
          </div>
        </div>
      </section>

      {/* ── Accordions ──────────────────────────────────────────────────── */}
      <div className="pdp__accordions">
        <Accordion label={content.specsAccordionLabel}>
          <dl className="pdp__specs">
            {specs.map((s, i) => (
              <div key={i} className="pdp__spec-row">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </Accordion>

        <Accordion label={content.descriptionAccordionLabel}>
          <p className="pdp__accordion-text">{product.description}</p>
        </Accordion>

        <Accordion label={content.featuresAccordionLabel}>
          <ul className="pdp__features">
            {features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </Accordion>

        <Accordion label={content.inBoxAccordionLabel}>
          <ul className="pdp__inbox">
            {inBox.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Accordion>

        <Accordion label={content.warrantyAccordionLabel}>
          <p className="pdp__accordion-text">{product.warranty}</p>
        </Accordion>
      </div>

      {/* ── Sticky bottom bar ──────────────────────────────────────────── */}
      <div className="pdp__sticky-bar">
        <div className="pdp__sticky-bar-price-row">
          <span className="pdp__sticky-bar-total">
            {fmt(totalPrice)} {product.currency}
          </span>
          <span className="pdp__sticky-bar-or"> {content.stickyOrLabel} </span>
          <button
            className="pdp__monthly-link"
            onClick={() => setFinancingOpen(true)}
            aria-label="ดูข้อมูลการผ่อนชำระ"
          >
            {fmt(Math.round(totalPrice / monthlyTerm))}/mo. for {monthlyTerm}{" "}
            mo. ›
          </button>
        </div>
        <hr className="pdp__sticky-bar-divider" />
        <button className="pdp__btn-addcart">{content.addToCartLabel}</button>
      </div>

      {/* ── Financing Modal ──────────────────────────────────────────────── */}
      {financingOpen && (
        <FinancingModal
          price={totalPrice}
          currency={product.currency}
          defaultTerm={monthlyTerm}
          onClose={() => setFinancingOpen(false)}
        />
      )}
    </div>
  );
};
