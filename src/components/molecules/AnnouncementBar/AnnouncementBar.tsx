import { useState, useEffect, useRef } from 'react';
import './AnnouncementBar.css';
import { IconChevronLeft } from '../../../IconChevronLeft/IconChevronLeft';

interface AnnouncementBarProps {
  items: string[];
  className?: string;
}

const TRANSITION_MS = 700;

export const AnnouncementBar = ({ items, className = '' }: AnnouncementBarProps) => {
  // Infinite clone pattern
  const infinite = items.length > 1;
  const extended = infinite
    ? [items[items.length - 1], ...items, items[0]]
    : items;

  const [trackIdx, setTrackIdx] = useState(infinite ? 1 : 0);
  const trackRef = useRef<HTMLDivElement>(null);

  const cloneFirst = extended.length - 1;

  const silentJump = (newIdx: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.style.transition = 'none';
    setTrackIdx(newIdx);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        if (el) el.style.transition = '';
      })
    );
  };

  // Auto-advance every 4s
  useEffect(() => {
    if (items.length <= 1) return;
    const t = setInterval(
      () => setTrackIdx((i) => (i < cloneFirst ? i + 1 : i)),
      4000
    );
    return () => clearInterval(t);
  }, [items.length, cloneFirst]);

  // Handle clone positions
  useEffect(() => {
    if (!infinite) return;

    if (trackIdx > cloneFirst) {
      silentJump(1);
      return;
    }

    if (trackIdx < 0) {
      silentJump(items.length);
      return;
    }

    if (trackIdx === cloneFirst) {
      const timer = setTimeout(() => silentJump(1), TRANSITION_MS);
      return () => clearTimeout(timer);
    }

    if (trackIdx === 0) {
      const timer = setTimeout(() => silentJump(items.length), TRANSITION_MS);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIdx, infinite, cloneFirst, items.length]);

  if (items.length === 0) return null;

  const showNav = items.length > 1;
  const prev = () => setTrackIdx((i) => i - 1);
  const next = () => setTrackIdx((i) => i + 1);

  return (
    <div className={`announcement-bar ${className}`.trim()}>
      {showNav && (
        <button
          className="announcement-bar__nav announcement-bar__nav--prev"
          onClick={prev}
          aria-label="ก่อนหน้า"
        >
          <IconChevronLeft className="announcement-bar__icon" />
        </button>
      )}

      <div className="announcement-bar__track-wrap">
        <div
          ref={trackRef}
          className="announcement-bar__track"
          style={{ transform: `translateX(-${trackIdx * 100}%)` }}
        >
          {extended.map((msg, i) => (
            <div key={i} className="announcement-bar__item">
              <span className="announcement-bar__text">{msg}</span>
            </div>
          ))}
        </div>
      </div>

      {showNav && (
        <button
          className="announcement-bar__nav announcement-bar__nav--next"
          onClick={next}
          aria-label="ถัดไป"
        >
          <span style={{ display: 'inline-flex', transform: 'rotate(180deg)' }}>
            <IconChevronLeft className="announcement-bar__icon" />
          </span>
        </button>
      )}
    </div>
  );
};
