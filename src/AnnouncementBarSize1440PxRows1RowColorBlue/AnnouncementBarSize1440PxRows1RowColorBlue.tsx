import { useState, useEffect } from "react";
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

  const [idx, setIdx] = useState(0);

  // Auto-advance (skip if only 1 message)
  useEffect(() => {
    if (messages.length <= 1) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % messages.length), 4000);
    return () => clearInterval(t);
  }, [messages.length]);

  // Auto-hide when no messages
  if (messages.length === 0) return null;

  const showNav = messages.length > 1;

  const prev = () => setIdx((i) => (i - 1 + messages.length) % messages.length);
  const next = () => setIdx((i) => (i + 1) % messages.length);

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
          className="ann-track"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {messages.map((msg, i) => (
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
