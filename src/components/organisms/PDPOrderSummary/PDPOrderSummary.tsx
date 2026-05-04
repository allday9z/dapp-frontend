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
                <img
                  src="/coin.png"
                  alt=""
                  className="pdpos__ujoy-coin-img"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="pdpos__ujoy-text">Earn {ujoyPoints.toLocaleString("th-TH")} U•Joy points</span>
            </div>
          )}

          {/* Delivery options */}
          <div className="pdpos__delivery">
            <div className="pdpos__delivery-row">
              <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none"><path d="M12.7742 13.3755H3.05191C2.2285 13.3755 1.55871 12.7056 1.55871 11.8822L1.55859 5.46973H2.29228V11.8822C2.29228 12.301 2.63304 12.6417 3.0518 12.6417H12.7743C13.1931 12.6417 13.5338 12.3011 13.5338 11.8822L13.534 5.46973H14.2676V11.8822C14.2676 12.7056 13.5977 13.3755 12.7743 13.3755H12.7742Z" fill="#1D1D1F"></path><path d="M6.19597 6.04216C5.04487 6.04216 4.1084 5.10557 4.1084 3.95459H4.84209C4.84209 4.70103 5.44941 5.30836 6.19597 5.30836C6.94253 5.30836 7.54985 4.70103 7.54985 3.95459H8.28354C8.28354 5.10557 7.34707 6.04216 6.19597 6.04216Z" fill="#1D1D1F"></path><path d="M9.63738 6.04397C8.48628 6.04397 7.5498 5.10738 7.5498 3.95639V2.43213H8.28349V3.95639C8.28349 4.70284 8.89082 5.31016 9.63738 5.31016C10.3839 5.31016 10.9913 4.70284 10.9913 3.95639H11.7249C11.7249 5.10738 10.7885 6.04397 9.63738 6.04397Z" fill="#1D1D1F"></path><path d="M13.0793 6.04286C11.9282 6.04286 10.9917 5.10627 10.9917 3.95529V2.43102H11.7254V3.95529C11.7254 4.70173 12.3327 5.30906 13.0793 5.30906C13.8258 5.30906 14.4333 4.70173 14.4333 3.95529V2.54174L13.231 0.73392H2.60295L1.40068 2.54163V3.95517C1.40068 4.70162 2.00812 5.30894 2.75468 5.30894C3.50124 5.30894 4.10856 4.70162 4.10856 3.95517V2.43091H4.84225V3.95517C4.84225 5.10627 3.90578 6.04275 2.75468 6.04275C1.60347 6.04275 0.666992 5.10616 0.666992 3.95517V2.43091C0.666992 2.35862 0.688332 2.2879 0.728328 2.22768L2.10075 0.16379C2.16868 0.0614505 2.28342 0 2.40621 0H13.4275C13.5503 0 13.6651 0.0614477 13.733 0.16379L15.1057 2.22779C15.1458 2.28802 15.167 2.35874 15.167 2.43102V3.95529C15.167 5.10627 14.2305 6.04286 13.0793 6.04286H13.0793Z" fill="#1D1D1F"></path><path d="M1.0332 2.06055H14.7997V2.79435H1.0332V2.06055Z" fill="#1D1D1F"></path><rect x="5.4806" y="8.38246" width="4.63549" height="4.63549" rx="0.534864" stroke="black" stroke-width="0.713153"></rect></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M1.89353 9.84661C1.43772 9.84661 1.09151 9.72831 0.854906 9.49171C0.618302 9.2551 0.5 8.9089 0.5 8.45308V1.7464C0.5 1.28711 0.618302 0.939166 0.854906 0.702562C1.09151 0.465958 1.43772 0.347656 1.89353 0.347656H9.40919C9.865 0.347656 10.2112 0.467698 10.4478 0.707782C10.6844 0.947865 10.8027 1.29407 10.8027 1.7464V9.02198L10.1608 9.39776V1.75684C10.1608 1.50284 10.0946 1.31321 9.96242 1.18795C9.8302 1.05921 9.64057 0.994838 9.39353 0.994838H1.90397C1.65344 0.994838 1.46381 1.05921 1.33507 1.18795C1.20633 1.31321 1.14196 1.50284 1.14196 1.75684V8.43743C1.14196 8.69143 1.20633 8.8828 1.33507 9.01154C1.46381 9.14028 1.65344 9.20465 1.90397 9.20465H2.89562V9.84661H1.89353ZM10.4322 3.88628V3.24432H12.2902C12.5303 3.24432 12.7356 3.27737 12.9061 3.34348C13.08 3.40959 13.2383 3.51919 13.381 3.67229L15.1555 5.67647C15.2843 5.8226 15.373 5.967 15.4217 6.10966C15.4739 6.25232 15.5 6.43499 15.5 6.65768V8.45308C15.5 8.9089 15.3817 9.2551 15.1451 9.49171C14.9085 9.72831 14.5623 9.84661 14.1065 9.84661H13.3601V9.20465H14.0908C14.3413 9.20465 14.531 9.14028 14.6597 9.01154C14.7919 8.8828 14.858 8.69143 14.858 8.43743V6.64202C14.858 6.54111 14.8389 6.44021 14.8006 6.33931C14.7624 6.23492 14.7067 6.14098 14.6336 6.05747L12.9426 4.1629C12.8452 4.05503 12.7408 3.98196 12.6294 3.94369C12.5181 3.90542 12.3876 3.88628 12.238 3.88628H10.4322ZM11.7422 6.64202C11.6239 6.64202 11.5282 6.60722 11.4551 6.53764C11.3855 6.46805 11.3507 6.3741 11.3507 6.2558V4.41864H12.1284C12.2189 4.41864 12.2989 4.43777 12.3685 4.47605C12.4381 4.51084 12.5007 4.55782 12.5564 4.61697L14.1117 6.3654C14.15 6.40716 14.1795 6.44891 14.2004 6.49066C14.2248 6.53242 14.237 6.58287 14.237 6.64202H11.7422ZM4.27349 11.3341C3.95338 11.3341 3.6611 11.2558 3.39666 11.0992C3.1357 10.9426 2.92693 10.7321 2.77035 10.4677C2.61378 10.2067 2.53549 9.9162 2.53549 9.59609C2.53549 9.27598 2.61378 8.98544 2.77035 8.72448C2.92693 8.46004 3.1357 8.25128 3.39666 8.09818C3.6611 7.9416 3.95338 7.86331 4.27349 7.86331C4.5936 7.86331 4.88413 7.9416 5.14509 8.09818C5.40605 8.25128 5.61482 8.46004 5.7714 8.72448C5.92798 8.98544 6.00626 9.27598 6.00626 9.59609C6.00626 9.9162 5.92798 10.2067 5.7714 10.4677C5.61482 10.7321 5.40605 10.9426 5.14509 11.0992C4.88413 11.2558 4.5936 11.3341 4.27349 11.3341ZM4.27349 10.7756C4.48921 10.7756 4.6858 10.7217 4.86326 10.6138C5.04419 10.5095 5.18685 10.3668 5.29123 10.1859C5.39562 10.0084 5.44781 9.81182 5.44781 9.59609C5.44781 9.37688 5.39562 9.17855 5.29123 9.0011C5.18685 8.82365 5.04419 8.68273 4.86326 8.57835C4.6858 8.47048 4.48921 8.41655 4.27349 8.41655C4.05428 8.41655 3.85595 8.47048 3.6785 8.57835C3.50104 8.68273 3.35839 8.82365 3.25052 9.0011C3.14266 9.17855 3.08873 9.37688 3.08873 9.59609C3.08873 9.81182 3.14266 10.0084 3.25052 10.1859C3.35839 10.3668 3.50104 10.5095 3.6785 10.6138C3.85595 10.7217 4.05428 10.7756 4.27349 10.7756ZM11.8622 11.3341C11.5456 11.3341 11.255 11.2558 10.9906 11.0992C10.7262 10.9426 10.5157 10.7321 10.3591 10.4677C10.2025 10.2067 10.1242 9.9162 10.1242 9.59609C10.1242 9.27598 10.2025 8.98544 10.3591 8.72448C10.5157 8.46004 10.7262 8.25128 10.9906 8.09818C11.255 7.9416 11.5456 7.86331 11.8622 7.86331C12.1823 7.86331 12.4729 7.9416 12.7338 8.09818C12.9983 8.25128 13.207 8.46004 13.3601 8.72448C13.5167 8.98544 13.595 9.27598 13.595 9.59609C13.595 9.9162 13.5167 10.2067 13.3601 10.4677C13.207 10.7321 12.9983 10.9426 12.7338 11.0992C12.4729 11.2558 12.1823 11.3341 11.8622 11.3341ZM11.8622 10.7756C12.0814 10.7756 12.2797 10.7217 12.4572 10.6138C12.6347 10.5095 12.7756 10.3668 12.88 10.1859C12.9843 10.0084 13.0365 9.81182 13.0365 9.59609C13.0365 9.37688 12.9826 9.17855 12.8747 9.0011C12.7704 8.82365 12.6294 8.68273 12.452 8.57835C12.2745 8.47048 12.0779 8.41655 11.8622 8.41655C11.6465 8.41655 11.4499 8.47048 11.2724 8.57835C11.095 8.68273 10.9523 8.82365 10.8445 9.0011C10.7366 9.17855 10.6827 9.37688 10.6827 9.59609C10.6827 9.81182 10.7366 10.0084 10.8445 10.1859C10.9523 10.3668 11.095 10.5095 11.2724 10.6138C11.4499 10.7217 11.6465 10.7756 11.8622 10.7756ZM5.70355 9.84661V9.20465H10.4896V9.84661H5.70355Z" fill="black"></path>
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
            <svg width="16" height="16" viewBox="0 0 16 16" className="icon icon-share" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M3.8551 16C3.15486 16 2.62728 15.8225 2.27236 15.4676C1.91745 15.1175 1.73999 14.5947 1.73999 13.8993V6.53957C1.73999 5.84412 1.91745 5.32134 2.27236 4.97122C2.62728 4.61631 3.15486 4.43885 3.8551 4.43885H6.27236V5.32374H3.87668C3.46901 5.32374 3.15726 5.43165 2.94143 5.64748C2.7304 5.85851 2.62488 6.17266 2.62488 6.58993V13.8489C2.62488 14.2662 2.7304 14.5803 2.94143 14.7914C3.15726 15.0072 3.46901 15.1151 3.87668 15.1151H12.1213C12.5194 15.1151 12.8263 15.0072 13.0421 14.7914C13.2628 14.5803 13.3731 14.2662 13.3731 13.8489V6.58993C13.3731 6.17266 13.2628 5.85851 13.0421 5.64748C12.8263 5.43165 12.5194 5.32374 12.1213 5.32374H9.7256V4.43885H12.1429C12.8431 4.43885 13.3707 4.61631 13.7256 4.97122C14.0805 5.32614 14.258 5.84892 14.258 6.53957V13.8993C14.258 14.5851 14.0805 15.1055 13.7256 15.4604C13.3707 15.8201 12.8431 16 12.1429 16H3.8551ZM7.99898 10.4604C7.87908 10.4604 7.77596 10.4197 7.68963 10.3381C7.6033 10.2518 7.56013 10.1487 7.56013 10.0288V2.28058L7.59611 1.23022L6.94143 1.89928L5.71841 3.17266C5.64167 3.26379 5.54095 3.30935 5.41625 3.30935C5.30114 3.30935 5.20522 3.27098 5.12848 3.19424C5.05654 3.11751 5.02057 3.02398 5.02057 2.91367C5.02057 2.80815 5.06133 2.71223 5.14287 2.6259L7.68244 0.151079C7.73519 0.0935252 7.78555 0.0551559 7.83352 0.0359712C7.88627 0.0119904 7.94143 0 7.99898 0C8.05654 0 8.10929 0.0119904 8.15726 0.0359712C8.21001 0.0551559 8.26277 0.0935252 8.31553 0.151079L10.8479 2.6259C10.9342 2.71223 10.9774 2.80815 10.9774 2.91367C10.9774 3.02398 10.939 3.11751 10.8623 3.19424C10.7856 3.27098 10.6896 3.30935 10.5745 3.30935C10.4546 3.30935 10.3539 3.26379 10.2724 3.17266L9.04934 1.89928L8.40905 1.23022L8.43783 2.28058V10.0288C8.43783 10.1487 8.39467 10.2518 8.30834 10.3381C8.222 10.4197 8.11889 10.4604 7.99898 10.4604Z" fill="black"></path>
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
