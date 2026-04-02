import { useEffect, useRef, useState, useCallback } from "react";
import "./DawnSlider.css";

/* ── Types ── */
export interface DawnSlide {
  /** Slide content (any React node) */
  content: React.ReactNode;
  /** Optional link URL — wraps slide in <a> */
  href?: string;
}

export interface DawnSliderProps {
  slides: DawnSlide[];
  /** Auto-advance interval in ms. 0 = disabled. Default: 5000 */
  autoplay?: number;
  /** Show prev/next arrow buttons. Default: true */
  showArrows?: boolean;
  /** Show dot pagination. Default: true */
  showDots?: boolean;
  /** Show autoplay toggle button. Default: false */
  showAutoplayButton?: boolean;
  className?: string;
}

/* ── Caret SVG (same as Dawn's icon-caret.svg) ── */
const CaretIcon = () => (
  <svg
    className="dawn-slider__icon"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M1 1l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ── Play / Pause SVG ── */
const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M5 3.5l8 4.5-8 4.5V3.5z" />
  </svg>
);

const PauseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <rect x="4" y="3" width="3" height="10" />
    <rect x="9" y="3" width="3" height="10" />
  </svg>
);

/* ── Component ── */
export const DawnSlider = ({
  slides,
  autoplay = 5000,
  showArrows = true,
  showDots = true,
  showAutoplayButton = false,
  className = "",
}: DawnSliderProps): JSX.Element => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay > 0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = slides.length;

  /* ── Scroll to slide index ── */
  const goTo = useCallback(
    (idx: number) => {
      const track = trackRef.current;
      if (!track) return;
      const slide = track.children[idx] as HTMLElement | undefined;
      if (!slide) return;
      track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    },
    []
  );

  /* ── Active index via IntersectionObserver ── */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(track.children).indexOf(entry.target as Element);
            if (idx !== -1) setActiveIdx(idx);
          }
        });
      },
      { root: track, threshold: 0.5 }
    );

    Array.from(track.children).forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [slides]);

  /* ── Autoplay ── */
  const startTimer = useCallback(() => {
    if (autoplay <= 0) return;
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => {
        const next = (prev + 1) % count;
        goTo(next);
        return next;
      });
    }, autoplay);
  }, [autoplay, count, goTo]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isPlaying) startTimer();
    else stopTimer();
    return stopTimer;
  }, [isPlaying, startTimer, stopTimer]);

  /* ── Pause on hover ── */
  const handleMouseEnter = useCallback(() => {
    if (autoplay > 0) stopTimer();
  }, [autoplay, stopTimer]);

  const handleMouseLeave = useCallback(() => {
    if (autoplay > 0 && isPlaying) startTimer();
  }, [autoplay, isPlaying, startTimer]);

  /* ── Prev / Next ── */
  const prev = () => {
    const idx = (activeIdx - 1 + count) % count;
    goTo(idx);
  };

  const next = () => {
    const idx = (activeIdx + 1) % count;
    goTo(idx);
  };

  return (
    <div className={`dawn-slider ${className}`}>
      {/* Track */}
      <div
        ref={trackRef}
        className="dawn-slider__track"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {slides.map((slide, i) => (
          <div key={i} className="dawn-slider__slide">
            {slide.href ? (
              <a href={slide.href} draggable={false} style={{ display: "block", width: "100%", height: "100%" }}>
                {slide.content}
              </a>
            ) : (
              slide.content
            )}
          </div>
        ))}
      </div>

      {/* Controls row: prev | dots | next */}
      {(showArrows || showDots || showAutoplayButton) && (
        <div className="dawn-slider__buttons">
          {/* Prev */}
          {showArrows && (
            <button
              className="dawn-slider__button dawn-slider__button--prev"
              onClick={prev}
              disabled={count <= 1}
              aria-label="Previous slide"
            >
              <CaretIcon />
            </button>
          )}

          {/* Dots */}
          {showDots && (
            <div className="dawn-slider__dots" role="tablist" aria-label="Slide pagination">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`dawn-slider__dot-btn${i === activeIdx ? " is-active" : ""}`}
                  onClick={() => goTo(i)}
                  role="tab"
                  aria-selected={i === activeIdx}
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <span className="dawn-slider__dot" />
                </button>
              ))}
            </div>
          )}

          {/* Autoplay toggle */}
          {showAutoplayButton && autoplay > 0 && (
            <button
              className="dawn-slider__autoplay"
              onClick={() => setIsPlaying((p) => !p)}
              aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
          )}

          {/* Next */}
          {showArrows && (
            <button
              className="dawn-slider__button dawn-slider__button--next"
              onClick={next}
              disabled={count <= 1}
              aria-label="Next slide"
            >
              <CaretIcon />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default DawnSlider;
