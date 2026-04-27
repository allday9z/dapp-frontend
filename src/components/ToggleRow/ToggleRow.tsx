import type { ReactNode } from "react";

// ── Embedded CSS (no separate file needed) ────────────────────────────────
const STYLE_ID = "ui-toggle-row-v1";
const CSS = `
.tog {
  /* section wrapper */
}
.tog__btn {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.875rem 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  -webkit-tap-highlight-color: transparent;
}
.tog__label {
  font-family: 'SF Pro Text', 'SFProThai', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #1d1d1f;
  flex-shrink: 0;
}
.tog__value {
  display: flex;
  align-items: flex-start;
  gap: 0.3rem;
  font-family: 'SF Pro Text', 'SFProThai', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  color: #000000;
  text-align: right;
  flex: 1;
  justify-content: flex-end;
  line-height: 1.2;
  font-weight: 400;
}
.tog__chevron {
  flex-shrink: 0;
  margin-top: 0.2rem;
  color: #6e6e73;
  transition: transform 0.3s ease;
}
.tog__chevron.open {
  transform: rotate(180deg);
}

/* ── Smooth slide animation via grid-template-rows trick ── */
.tog__wrap {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.tog__wrap.open {
  grid-template-rows: 1fr;
}
/* min-height: 0 is required for the grid trick to collapse properly */
.tog__inner {
  overflow: hidden;
  min-height: 0;
}
.tog__body {
  padding-bottom: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tog__divider {
  border: none;
  border-top: 0.5px solid #d2d2d7;
  margin: 0;
}
`;

function injectStyles(): void {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

// ── Props ─────────────────────────────────────────────────────────────────
export interface ToggleRowProps {
  /** Left-side label (bold) */
  label: ReactNode;
  /** Right-side selected value summary */
  value: ReactNode;
  /** Whether the body is expanded */
  open: boolean;
  /** Click handler to toggle open/close */
  onToggle: () => void;
  /** Expandable content */
  children: ReactNode;
  /** Show bottom divider line (default: true) */
  divider?: boolean;
  /** Optional class for ToggleRow root */
  className?: string;
  /** Optional class for ToggleRow body container */
  bodyClassName?: string;
}

// ── Component ─────────────────────────────────────────────────────────────
export function ToggleRow({
  label,
  value,
  open,
  onToggle,
  children,
  divider = true,
  className,
  bodyClassName,
}: ToggleRowProps) {
  injectStyles();
  const rootClassName = className ? `tog ${className}` : "tog";
  const bodyClass = bodyClassName ? `tog__body ${bodyClassName}` : "tog__body";

  return (
    <div className={rootClassName}>
      <button
        className="tog__btn"
        type="button"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className="tog__label">{label}</span>
        <span className="tog__value">
          {value}
          <svg
            className={`tog__chevron${open ? " open" : ""}`}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 5l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* Smooth slide wrapper */}
      <div className={`tog__wrap${open ? " open" : ""}`}>
        <div className="tog__inner">
          <div className={bodyClass}>{children}</div>
        </div>
      </div>

      {divider && <hr className="tog__divider" />}
    </div>
  );
}
