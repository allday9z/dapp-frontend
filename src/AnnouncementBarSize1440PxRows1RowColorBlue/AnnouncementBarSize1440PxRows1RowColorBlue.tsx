import { useState, useEffect, useRef } from "react";
import "./AnnouncementBarSize1440PxRows1RowColorBlue.css";
import { IconChevronLeft } from "../IconChevronLeft/IconChevronLeft";

export interface IAnnouncementBarSize1440PxRows1RowColorBlueProps {
  size?: "1440-px" | "320-px";
  rows?: "1-row" | "2-row" | "3-row";
  color?: "blue" | "white" | "mac-center-blue" | "rossellimac-blue" | "teal";
  text?: string;
  className?: string;
}

const MESSAGES = [
  "สมัคร U•Joy สะสมแต้มทุกการช้อป ซื้อเมื่อไหร่ก็ได้แต้ม สมัครเลย >",
  "ผ่อนไม่ใช้บัตร 0% นานสูงสุด 10 เดือน ดูรายละเอียด >",
  "โปรโมชันประจำเดือน — ดูสินค้าทั้งหมด >",
];

/** Must match .ann-track CSS transition duration */
const TRANSITION_MS = 700;

export const AnnouncementBarSize1440PxRows1RowColorBlue = ({
  size = "1440-px",
  rows = "1-row",
  color = "blue",
  text,
  className,
}: IAnnouncementBarSize1440PxRows1RowColorBlueProps): JSX.Element | null => {
  const messages = text
    ? text.split("|").map((s) => s.trim()).filter(Boolean)
    : MESSAGES;

  // Infinite clone pattern:
  // extended = [clone-of-last, ...real-slides, clone-of-first]
  // trackIdx starts at 1 (first real slide)
  const infinite = messages.length > 1;
  const extended = infinite
    ? [messages[messages.length - 1], ...messages, messages[0]]
    : messages;

  const [trackIdx, setTrackIdx] = useState(infinite ? 1 : 0);
  const trackRef = useRef<HTMLDivElement>(null);

  const cloneFirst = extended.length - 1; // index of clone-of-first (upper bound)

  const silentJump = (newIdx: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.style.transition = "none";
    setTrackIdx(newIdx);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        if (el) el.style.transition = "";
      })
    );
  };

  // Auto-advance every 4 s (clamped so it never goes past the upper clone)
  useEffect(() => {
    if (messages.length <= 1) return;
    const t = setInterval(
      () => setTrackIdx((i) => (i < cloneFirst ? i + 1 : i)),
      4000
    );
    return () => clearInterval(t);
  }, [messages.length, cloneFirst]);

  // Handle clone positions and out-of-bounds indices:
  //  - Out of bounds (rapid clicks past the clone): instant reset
  //  - At clone-of-first / clone-of-last: wait for CSS transition, then reset
  useEffect(() => {
    if (!infinite) return;

    // Went past upper bound — instant reset to real first
    if (trackIdx > cloneFirst) {
      silentJump(1);
      return;
    }

    // Went past lower bound — instant reset to real last
    if (trackIdx < 0) {
      silentJump(messages.length);
      return;
    }

    // Landed on clone-of-first — wait for transition, then jump to real first
    if (trackIdx === cloneFirst) {
      const timer = setTimeout(() => silentJump(1), TRANSITION_MS);
      return () => clearTimeout(timer);
    }

    // Landed on clone-of-last — wait for transition, then jump to real last
    if (trackIdx === 0) {
      const timer = setTimeout(() => silentJump(messages.length), TRANSITION_MS);
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIdx, infinite, cloneFirst, messages.length]);

  // Auto-hide when no messages
  if (messages.length === 0) return null;

  const showNav = messages.length > 1;
  const prev = () => setTrackIdx((i) => i - 1);
  const next = () => setTrackIdx((i) => i + 1);

  return (
    <div
      className={`announcement-bar-size-1440-px-rows-1-row-color-blue ${className ?? ""} size-${size} rows-${rows} color-${color}`}
    >
      {showNav && (
        <button className="frame-534 ann-btn" onClick={prev} aria-label="ก่อนหน้า">
          <IconChevronLeft className="icon-chevron-left-instance" />
        </button>
      )}

      <div className="ann-track-wrap">
        <div
          ref={trackRef}
          className="ann-track"
          style={{ transform: `translateX(-${trackIdx * 100}%)` }}
        >
          {extended.map((msg, i) => (
            <div key={i} className="ann-message">
              <span className="ann-text">{msg}</span>
            </div>
          ))}
        </div>
      </div>

      {showNav && (
        <button className="frame-535 ann-btn" onClick={next} aria-label="ถัดไป">
          <span style={{ display: "inline-flex", transform: "rotate(180deg)" }}>
            <IconChevronLeft className="icon-chevron-left-instance2" />
          </span>
        </button>
      )}
    </div>
  );
};
