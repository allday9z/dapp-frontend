import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductStripe.css";
import React, { useRef, useState, type ReactNode } from "react";
import Slider, { Settings } from "react-slick";

interface ArrowProps {
  onClick?: () => void;
  arrowType?: "default" | "blue-circle" | "partner";
  direction?: "left" | "right";
  disabled?: boolean;
}

const CustomArrow = ({ onClick, arrowType, direction, disabled }: ArrowProps) => {
  if (arrowType === "partner") {
    return (
      <button
        className={`partner-${direction}-arrow${disabled ? " slick-disabled" : ""}`}
        onClick={onClick}
        disabled={disabled}
        type="button"
      />
    );
  }

  if (arrowType === "blue-circle") {
    return (
      <button
        className={`blue-circle-arrow blue-circle-arrow--${direction}${disabled ? " slick-disabled" : ""}`}
        onClick={onClick}
        disabled={disabled}
        type="button"
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

  return (
    <button
      className={`product-stripe__arrow product-stripe__arrow--${direction === "left" ? "prev" : "next"}${disabled ? " slick-disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
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
  slidesToScroll = 4,
  gap = 40,
  infinite = false,
  responsive,
  variableWidth = true,
}: ProductStripeProps) => {
  const sliderRef = useRef<Slider | null>(null);
  const slides = React.Children.toArray(children);
  const slideCount = slides.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  const maxSlideIndex = Math.max(0, slideCount - 4);
  const canGoPrev = currentSlide > 0;

  const fallbackResponsive: Settings["responsive"] = [
    {
      breakpoint: 1024,
      settings: {
        slidesToScroll: Math.min(slidesToScroll, 2),
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToScroll: 1,
      },
    },
  ];

  const settings: Settings = {
    dots: showDots,
    infinite: infinite,
    speed: 2000,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    slidesToShow: slidesToShow || 1,
    slidesToScroll: slidesToScroll,
    variableWidth: variableWidth,
    arrows: false,
    dotsClass: "slick-dots custom-slick-dots",
    swipeToSlide: false,
    touchThreshold: 20,
    draggable: true,
    swipe: true,
    touchMove: true,
    edgeFriction: 0.2,
    waitForAnimate: true,
    adaptiveHeight: false,
    accessibility: true,
    afterChange: (index) => setCurrentSlide(index),
    responsive: responsive ?? fallbackResponsive,
  };

  const handlePrev = () => {
    if (!canGoPrev) return;
    sliderRef.current?.slickGoTo(Math.max(0, currentSlide - slidesToScroll));
  };

  const handleNext = () => {
    sliderRef.current?.slickGoTo(Math.min(maxSlideIndex, currentSlide + slidesToScroll));
  };

  return (
    <div
      className={`product-stripe ${className} arrow-type-${arrowType}`}
      role="region"
      aria-label={ariaLabel}
      style={{ "--slick-gap": `${gap}px` } as React.CSSProperties}
    >
      <CustomArrow
        arrowType={arrowType}
        direction="left"
        onClick={handlePrev}
        disabled={!canGoPrev}
      />
      <CustomArrow
        arrowType={arrowType}
        direction="right"
        onClick={handleNext}
        disabled={false}
      />
      <div className="product-stripe__viewport" style={{ overflow: "hidden" }}>
        <Slider ref={sliderRef} {...settings}>
          {slides.map((child, index) => (
            <div key={index} className="product-stripe__item-wrapper">{child}</div>
          ))}
        </Slider>
      </div>
    </div>
  );
};