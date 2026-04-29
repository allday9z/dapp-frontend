import { useState } from "react";
import "./PDPOrderSummary.css";

export interface PDPOrderSummaryConfigRow {
  label: string;
  value: string;
}

export interface PDPOrderSummaryProps {
  /** Left column — heading lines */
  headingPrefix: string;   // "Your new 13-inch"
  productName: string;     // "MacBook Neo."
  tagline: string;         // "Just the way you want it."

  /** Product image */
  heroImage: string;
  heroImageAlt: string;

  /** Middle column — product title + config */
  displayName: string;     // "MacBook Neo รุ่น 13 นิ้ว"
  configRows: PDPOrderSummaryConfigRow[];

  /** Middle column — qty */
  qty: number;
  onQtyChange: (qty: number) => void;
  qtyLabel: string;

  /** Right column — price */
  price: string;           // pre-formatted e.g. "฿19,900"
  currency: string;
  paymentLabel: string;    // "Pay in full"

  /** Right column — U•Joy */
  ujoyPoints?: number;

  /** Right column — delivery */
  pickupLabel?: string;
  pickupLinkLabel?: string;
  pickupHref?: string;
  shippingLabel?: string;

  /** Right column — availability */
  availabilityLabel: string;
  availabilityHref: string;

  /** Right column — CTA */
  available: boolean;
  buyLabel: string;
  notifyLabel: string;
  onBuyNow?: () => void;
  onNotify?: () => void;
}

export function PDPOrderSummary({
  headingPrefix,
  productName,
  tagline,
  heroImage,
  heroImageAlt,
  displayName,
  configRows,
  qty,
  onQtyChange,
  qtyLabel,
  price,
  currency,
  paymentLabel,
  ujoyPoints,
  pickupLabel = "Pickup in at",
  pickupLinkLabel = "View store availability",
  pickupHref = "#",
  shippingLabel = "Shipping unavailable",
  availabilityLabel,
  availabilityHref,
  available,
  buyLabel,
  notifyLabel,
  onBuyNow,
  onNotify,
}: PDPOrderSummaryProps) {
  const [shareOpen, setShareOpen] = useState(false);

  return (
    <div className="pdpos">
      {/* ── Left column: title + image ─────────────────────────────── */}
      <div className="pdpos__left">
        <div className="pdpos__heading" aria-label={`${headingPrefix} ${productName} ${tagline}`}>
          <span className="pdpos__heading-line">{headingPrefix}</span>
          <span className="pdpos__heading-line">{productName}</span>
          <span className="pdpos__heading-tagline">{tagline}</span>
        </div>
        <div className="pdpos__img-wrap" aria-hidden="true">
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="pdpos__img"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* ── Middle column: config + qty ────────────────────────────── */}
      <div className="pdpos__mid">
        <div className="pdpos__config-block">
          <p className="pdpos__config-title">{displayName}</p>
          <ul className="pdpos__config-list" aria-label="รายละเอียดที่เลือก">
            {configRows.map((row) => (
              <li key={row.label} className="pdpos__config-row">
                <span className="pdpos__config-row-label">{row.label}:</span>
                <span className="pdpos__config-row-value">{row.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pdpos__qty-block">
          <p className="pdpos__qty-label">{qtyLabel}</p>
          <div className="pdpos__qty-ctrl" role="group" aria-label="เลือกจำนวน">
            <button
              className="pdpos__qty-btn"
              onClick={() => onQtyChange(Math.max(1, qty - 1))}
              aria-label="ลดจำนวน"
              disabled={qty <= 1}
            >
              −
            </button>
            <span className="pdpos__qty-value" aria-live="polite" aria-atomic="true">
              {qty}
            </span>
            <button
              className="pdpos__qty-btn"
              onClick={() => onQtyChange(qty + 1)}
              aria-label="เพิ่มจำนวน"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* ── Right column: price + delivery + CTA ──────────────────── */}
      <div className="pdpos__right">
        <div className="pdpos__right-top">
          {/* Price */}
          <div className="pdpos__price-block">
            <p className="pdpos__price">
              {price} <span className="pdpos__currency">{currency}</span>
            </p>
            <p className="pdpos__payment-label">{paymentLabel}</p>
          </div>

          {/* U•Joy points */}
          {ujoyPoints != null && ujoyPoints > 0 && (
            <div className="pdpos__ujoy" aria-label={`รับ ${ujoyPoints} U•Joy points`}>
              <span className="pdpos__ujoy-coin" aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
                  <path d="M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </span>
              <span className="pdpos__ujoy-text">Earn {ujoyPoints.toLocaleString("th-TH")} U•Joy points</span>
            </div>
          )}

          {/* Delivery options */}
          <div className="pdpos__delivery">
            <div className="pdpos__delivery-row">
              <svg className="pdpos__delivery-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true" width="20" height="20">
                <path d="M2 4h12v9H2V4z" stroke="currentColor" strokeWidth="1.2" />
                <path d="M14 7h3l2 2v4h-5V7z" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="5" cy="15.5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="15" cy="15.5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              <span className="pdpos__delivery-text">
                Pickup in at{" "}
                <a href={pickupHref} className="pdpos__delivery-link">
                  {pickupLinkLabel}
                  <svg className="pdpos__chevron" viewBox="0 0 6 10" fill="none" width="6" height="10" aria-hidden="true">
                    <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </span>
            </div>
            <div className="pdpos__delivery-row">
              <svg className="pdpos__delivery-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true" width="20" height="20">
                <rect x="1" y="5" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" />
                <path d="M15 8h3l1 1v4h-4V8z" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="4.5" cy="16.5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="16.5" cy="16.5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              <span className="pdpos__delivery-text">{shippingLabel}</span>
            </div>
          </div>

          {/* Availability */}
          <a href={availabilityHref} className="pdpos__avail">
            {availabilityLabel}
          </a>

          {/* CTA */}
          {available ? (
            <button className="pdpos__btn-buy" onClick={onBuyNow}>
              {buyLabel}
            </button>
          ) : (
            <button className="pdpos__btn-notify" onClick={onNotify}>
              {notifyLabel}
            </button>
          )}
        </div>

        {/* Share row */}
        <div className="pdpos__share">
          <button
            className="pdpos__share-btn"
            onClick={() => setShareOpen((v) => !v)}
            aria-expanded={shareOpen}
            aria-label="แชร์สินค้า"
          >
            <svg viewBox="0 0 13 16" fill="none" width="12" height="16" aria-hidden="true">
              <circle cx="10.5" cy="2.5" r="2" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="10.5" cy="13.5" r="2" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="2.5" cy="8" r="2" stroke="currentColor" strokeWidth="1.2" />
              <path d="M4.5 7L8.5 3.5M4.5 9L8.5 12.5" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            <span>Share</span>
          </button>
          <div className="pdpos__social">
            <a
              href="https://www.facebook.com/sharer/sharer.php"
              target="_blank"
              rel="noopener noreferrer"
              className="pdpos__social-icon"
              aria-label="แชร์บน Facebook"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.333-1.333H9.333V5.333c0-.368.299-.666.667-.666h.667V3.333H9.333A2 2 0 0 0 7.333 5.333v1.334H6v1.666h1.333V13h1.667V8.333h1.333l.334-1.666z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="pdpos__social-icon"
              aria-label="แชร์บน Instagram"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8c0 2.173.01 2.445.048 3.298.04.852.174 1.433.372 1.942a3.917 3.917 0 0 0 .923 1.417c.444.445.977.8 1.417.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.445-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.8-.977.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.298c-.04-.851-.175-1.433-.372-1.942a3.916 3.916 0 0 0-.923-1.417A3.927 3.927 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.445.01 10.173 0 8 0zm0 1.441c2.136 0 2.389.009 3.232.046.78.036 1.203.166 1.485.276.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.276 1.485.037.843.047 1.096.047 3.231s-.01 2.389-.047 3.232c-.036.78-.167 1.203-.276 1.485-.145.373-.319.64-.599.92-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.037-1.096.047-3.232.047-2.136 0-2.389-.01-3.232-.047-.78-.036-1.203-.167-1.484-.276a2.478 2.478 0 0 1-.921-.598 2.48 2.48 0 0 1-.599-.92c-.11-.282-.24-.706-.275-1.486-.038-.843-.047-1.096-.047-3.232 0-2.135.009-2.388.047-3.231.035-.78.165-1.204.275-1.485.145-.374.319-.64.599-.92.28-.28.546-.454.92-.599.282-.11.706-.24 1.485-.276.843-.037 1.096-.046 3.232-.046zm0 9.042a2.483 2.483 0 1 1 0-4.966 2.483 2.483 0 0 1 0 4.966zm0-6.406a3.924 3.924 0 1 0 0 7.847 3.924 3.924 0 0 0 0-7.847zm5.007-.16a.917.917 0 1 1-1.833 0 .917.917 0 0 1 1.833 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
