import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductStripe.css";
import React, { useRef, useState, useEffect, type ReactNode } from "react";
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
      <svg width="5" height="14" viewBox="0 0 8 14" fill="none" style={{opacity: '50%'}}>
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
  gap = 40,
  responsive,
  variableWidth = true,
}: ProductStripeProps) => {
  const stripeRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<Slider | null>(null);
  const slides = React.Children.toArray(children);
  const slideCount = slides.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isSpecialSection, setIsSpecialSection] = useState(false);

  useEffect(() => {
    if (stripeRef.current) {
      const section = stripeRef.current.closest('section.hp-products[aria-labelledby="all-apple-products-heading"]');
      setIsSpecialSection(!!section);
    }

    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeSlidesToShow = isSpecialSection ? 4 : Math.max(3, slidesToShow || 3);
  const activeSlidesToScroll = isSpecialSection ? 4 : 3;
  const maxSlideIndex = Math.max(0, slideCount - activeSlidesToShow);
  const canGoPrev = currentSlide > 0;
  const canGoNext = currentSlide < maxSlideIndex;

  const fallbackResponsive: Settings["responsive"] = [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ];

  const settings: Settings = {
    dots: showDots,
    infinite: isMobile,
    speed: isSpecialSection && !isMobile ? 2000 : 800,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    slidesToShow: isMobile ? 1 : activeSlidesToShow,
    slidesToScroll: isMobile ? 1 : activeSlidesToScroll,
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
    afterChange: (index) => {
      if (!isMobile && index > maxSlideIndex) {
        sliderRef.current?.slickGoTo(maxSlideIndex);
      } else {
        setCurrentSlide(index);
      }
    },
    responsive: responsive ?? fallbackResponsive,
  };

  const handlePrev = () => {
    if (isMobile) {
      sliderRef.current?.slickPrev();
    } else {
      if (!canGoPrev) return;
      if (isSpecialSection) {
        sliderRef.current?.slickGoTo(0);
      } else {
        sliderRef.current?.slickGoTo(Math.max(0, currentSlide - activeSlidesToScroll));
      }
    }
  };

  const handleNext = () => {
    if (isMobile) {
      sliderRef.current?.slickNext();
    } else {
      if (!canGoNext) return;
      if (isSpecialSection) {
        sliderRef.current?.slickGoTo(maxSlideIndex);
      } else {
        sliderRef.current?.slickGoTo(Math.min(maxSlideIndex, currentSlide + activeSlidesToScroll));
      }
    }
  };

  return (
    <div
      ref={stripeRef}
      className={`product-stripe ${className} arrow-type-${arrowType}`}
      role="region"
      aria-label={ariaLabel}
      style={{ "--slick-gap": `${gap}px` } as React.CSSProperties}
    >
      <CustomArrow
        arrowType={arrowType}
        direction="left"
        onClick={handlePrev}
        disabled={isMobile ? false : !canGoPrev}
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