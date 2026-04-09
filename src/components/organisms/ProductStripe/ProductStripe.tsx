import { useCallback, useEffect, useRef, useState, type ReactNode, type FC } from 'react';
import './ProductStripe.css';

interface ProductStripeProps {
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}

export const ProductStripe: FC<ProductStripeProps> = ({
  className = '',
  children,
  ariaLabel = 'รายการสินค้าแบบเลื่อนแนวนอน',
}) => {
  const viewRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  // Mouse drag state
  const isDown = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const scrollStart = useRef(0);
  const isHorizontal = useRef<boolean | null>(null);

  const updateArrows = useCallback(() => {
    const el = viewRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = viewRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows, { passive: true });
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      ro.disconnect();
    };
  }, [updateArrows]);

  const scrollPage = useCallback((dir: 1 | -1) => {
    const el = viewRef.current;
    if (!el) return;
    const page = el.clientWidth - 120;
    el.scrollBy({ left: dir * page, behavior: 'smooth' });
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    isHorizontal.current = null;
    startX.current = e.pageX;
    startY.current = e.pageY;
    scrollStart.current = viewRef.current?.scrollLeft ?? 0;
    if (viewRef.current) viewRef.current.style.cursor = 'grabbing';
  };
  const onMouseLeave = () => {
    isDown.current = false;
    isHorizontal.current = null;
    if (viewRef.current) viewRef.current.style.cursor = 'grab';
  };
  const onMouseUp = () => {
    isDown.current = false;
    isHorizontal.current = null;
    if (viewRef.current) viewRef.current.style.cursor = 'grab';
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !viewRef.current) return;
    const dx = e.pageX - startX.current;
    const dy = e.pageY - startY.current;
    if (
      isHorizontal.current === null &&
      (Math.abs(dx) > 3 || Math.abs(dy) > 3)
    ) {
      isHorizontal.current = Math.abs(dx) > Math.abs(dy);
    }
    if (!isHorizontal.current) return;
    e.preventDefault();
    viewRef.current.scrollLeft = scrollStart.current - dx;
  };

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].pageX;
    scrollStart.current = viewRef.current?.scrollLeft ?? 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!viewRef.current) return;
    viewRef.current.scrollLeft =
      scrollStart.current - (e.touches[0].pageX - startX.current);
  };

  return (
    <div className={`product-stripe ${className}`.trim()}>
      <div
        ref={viewRef}
        className="product-stripe__viewport"
        role="region"
        aria-label={ariaLabel}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
      >
        <div className="product-stripe__inner">{children}</div>
      </div>

      {canPrev && (
        <button
          type="button"
          className="product-stripe__arrow product-stripe__arrow--prev"
          onClick={() => scrollPage(-1)}
          aria-label="เลื่อนกลับ"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
          >
            <path
              d="M7 1L1 7L7 13"
              stroke="#1d1d1f"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {canNext && (
        <button
          type="button"
          className="product-stripe__arrow product-stripe__arrow--next"
          onClick={() => scrollPage(1)}
          aria-label="เลื่อนดูสินค้าเพิ่มเติม"
        >
          <svg
            width="6"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
          >
            <path
              d="M1 1L7 7L1 13"
              stroke="#1d1d1f"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};
