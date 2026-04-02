import { useRef, ReactNode } from "react";
import "./DragScroll.css";

interface DragScrollProps {
  className?: string;
  children: ReactNode;
}

export const DragScroll = ({ className = "", children }: DragScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const scrollLeft = useRef(0);
  const isHorizontal = useRef<boolean | null>(null);

  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    isHorizontal.current = null;
    startX.current = e.pageX;
    startY.current = e.pageY;
    scrollLeft.current = ref.current?.scrollLeft ?? 0;
    if (ref.current) ref.current.style.cursor = "grabbing";
  };
  const onMouseLeave = () => {
    isDown.current = false;
    isHorizontal.current = null;
    if (ref.current) ref.current.style.cursor = "grab";
  };
  const onMouseUp = () => {
    isDown.current = false;
    isHorizontal.current = null;
    if (ref.current) ref.current.style.cursor = "grab";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !ref.current) return;
    const dx = e.pageX - startX.current;
    const dy = e.pageY - startY.current;

    // Determine gesture direction once
    if (isHorizontal.current === null && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
      isHorizontal.current = Math.abs(dx) > Math.abs(dy);
    }

    if (!isHorizontal.current) return; // vertical gesture → let page scroll
    e.preventDefault();
    ref.current.scrollLeft = scrollLeft.current - dx * 1.5;
  };

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].pageX;
    scrollLeft.current = ref.current?.scrollLeft ?? 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!ref.current) return;
    const walk = (startX.current - e.touches[0].pageX) * 1.5;
    ref.current.scrollLeft = scrollLeft.current + walk;
  };

  return (
    <div
      ref={ref}
      className={"drag-scroll " + className}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
    >
      {children}
    </div>
  );
};
