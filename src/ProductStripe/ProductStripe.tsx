import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductStripe.css";
import React, { useRef, type ReactNode } from "react";
import Slider, { Settings } from "react-slick";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  isCustom?: boolean;
  arrowType?: "default" | "blue-circle" | "partner";
  direction?: "left" | "right";
}

const CustomArrow = ({ className, style, onClick, arrowType, direction }: ArrowProps) => {
  // react-slick passes slick-prev/slick-next and slick-arrow in className, 
  // which might bring default slick styles. We filter them or use our own container.
  
  if (arrowType === "partner") {
    return (
      <button
        className={`partner-${direction}-arrow ${className?.includes('slick-disabled') ? 'slick-disabled' : ''}`}
        style={{ display: "block" }}
        onClick={onClick}
      />
    );
  }

  if (arrowType === "blue-circle") {
    return (
      <button
        className={`blue-circle-arrow blue-circle-arrow--${direction} ${className?.includes('slick-disabled') ? 'slick-disabled' : ''}`}
        style={{ display: "flex" }}
        onClick={onClick}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d={direction === "left" ? "M15 18L9 12L15 6" : "M9 18L15 12L9 6"}
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  }

  // Default Product Stripe Arrow
  return (
    <button
      className={`product-stripe__arrow product-stripe__arrow--${direction === "left" ? "prev" : "next"} ${className?.includes('slick-disabled') ? 'slick-disabled' : ''}`}
      style={{ display: "flex" }}
      onClick={onClick}
    >
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
        <path
          d={direction === "left" ? "M7 1L1 7L7 13" : "M1 1L7 7L1 13"}
          stroke="#1d1d1f"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export interface ProductStripeProps {
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
  arrowType?: "default" | "blue-circle" | "partner";
  showDots?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  gap?: number;
  infinite?: boolean;
  responsive?: Settings["responsive"];
  variableWidth?: boolean;
}

export const ProductStripe = ({
  className = "",
  children,
  ariaLabel = "รายการสินค้าแบบเลื่อนแนวนอน",
  arrowType = "default",
  showDots = false,
  slidesToShow,
  slidesToScroll = 1,
  gap = 40, // 2.5rem default
  infinite = false,
  responsive,
  variableWidth = true,
}: ProductStripeProps) => {
  const settings: Settings = {
    dots: showDots,
    infinite: infinite,
    speed: 500,
    slidesToShow: slidesToShow || 1,
    slidesToScroll: slidesToScroll,
    variableWidth: variableWidth,
    arrows: true,
    prevArrow: <CustomArrow arrowType={arrowType} direction="left" />,
    nextArrow: <CustomArrow arrowType={arrowType} direction="right" />,
    dotsClass: "slick-dots custom-slick-dots",
    swipeToSlide: true,
    touchThreshold: 10,
    draggable: true,
    swipe: true,
    waitForAnimate: false,
    responsive: responsive,
  };

  const [isMouseDown, setIsMouseDown] = React.useState(false);
  const isDraggingRef = useRef(false);

  return (
    <div
      className={`product-stripe ${className} arrow-type-${arrowType}`}
      role="region"
      aria-label={ariaLabel}
      style={{ "--slick-gap": `${gap}px` } as React.CSSProperties}
      onMouseDown={() => {
        isDraggingRef.current = false;
        setIsMouseDown(true);
      }}
      onMouseUp={() => {
        setIsMouseDown(false);
      }}
      onMouseLeave={() => {
        setIsMouseDown(false);
      }}
      onMouseMove={() => {
        if (isMouseDown) {
          isDraggingRef.current = true;
        }
      }}
      onClickCapture={(e) => {
        if (isDraggingRef.current) {
          e.stopPropagation();
          e.preventDefault();
        }
      }}
    >
      <div className="product-stripe__viewport" style={{ overflow: "hidden" }}>
        <Slider {...settings}>
          {React.Children.map(children, (child) => (
            <div className="product-stripe__item-wrapper">{child}</div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
