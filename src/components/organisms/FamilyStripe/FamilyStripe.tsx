import { useMemo, useRef, useState, useEffect } from "react";
import Slider, { type Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FamilyStripe.css";
import type { FamilyStripeItem } from "./familyStripeData";

interface IFamilyStripeProps {
  items: FamilyStripeItem[];
  seeAllLabel?: string;
  seeAllHref?: string;
}

interface ArrowProps {
  direction: "left" | "right";
  onClick?: () => void;
}

const Arrow = ({ direction, onClick }: ArrowProps) => {
  const sideClass = direction === "left" ? "prev" : "next";
  return (
    <button
      className={`family-stripe__arrow family-stripe__arrow--${sideClass}`}
      onClick={onClick}
      aria-label={direction === "left" ? "สไลด์ก่อนหน้า" : "สไลด์ถัดไป"}
      type="button"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className={`family-stripe__arrow-icon family-stripe__arrow-icon--${direction}`}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.83836 15.3233L7 14.4849L11.3233 10.1616L7 5.83836L7.83836 5L13 10.1616L7.83836 15.3233Z"
          fill="#595959"
        />
      </svg>
    </button>
  );
};

export const FamilyStripe = ({
  items,
  seeAllLabel,
  seeAllHref,
}: IFamilyStripeProps) => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlidesToShow, setCurrentSlidesToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width >= 1200) setCurrentSlidesToShow(3);
      else if (width >= 1024) setCurrentSlidesToShow(2);
      else if (width >= 768) setCurrentSlidesToShow(2);
      else setCurrentSlidesToShow(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = useMemo(() => {
    const productSlides = items.map((item) => (
      <div key={item.id} className="family-stripe__slide">
        <a
          href={item.href ?? "#"}
          className="family-stripe__tile"
          draggable={false}
          onClick={(e) => {
            if (isDragging) {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
          onDragStart={(e) => e.preventDefault()}
        >
          <div className="family-stripe__image-wrap">
            <img
              src={item.imageSrc}
              alt={item.imageAlt}
              className="family-stripe__tile-img"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              loading="lazy"
              decoding="async"
              width={84}
              height={84}
            />
          </div>
          <div className="family-stripe__tile-text">
            <div className="family-stripe__tile-badge-wrap">
              {item.badge && (
                <span className={`family-stripe__tile-badge family-stripe__tile-badge--${item.badgeColor ?? "new"}`}>
                  {item.badge}
                </span>
              )}
            </div>
            <span className="family-stripe__tile-name">{item.name}</span>
            {item.priceLabel && (
              <span className="family-stripe__tile-price">{item.priceLabel}</span>
            )}
          </div>
        </a>
      </div>
    ));

    if (!seeAllLabel || !seeAllHref) {
      return productSlides;
    }

    return [
      ...productSlides,
      <div key="family-stripe-see-all" className="family-stripe__slide family-stripe__slide--cta">
        <a href={seeAllHref} className="family-stripe__see-all">
          <span className="family-stripe__see-all-label">{seeAllLabel}</span>
          <svg width="5" height="9" viewBox="0 0 5 9" fill="none" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.649682 8.5L0 7.85032L3.35032 4.5L0 1.14968L0.649682 0.5L4.64968 4.5L0.649682 8.5Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>,
    ];
  }, [items, seeAllHref, seeAllLabel, isDragging]);

  const slideCount = slides.length;
  const canGoPrev = isMobile ? false : currentSlide > 0;
  const canGoNext = isMobile ? true : currentSlide < slideCount - currentSlidesToShow;

  const settings: Settings = {
    slidesToShow: currentSlidesToShow,
    slidesToScroll: isMobile ? 1 : 3,
    infinite: isMobile,
    speed: isMobile ? 500 : 1200,
    variableWidth: true,
    cssEase: "ease-in-out",
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 100,
    draggable: true,
    swipe: true,
    touchMove: true,
    waitForAnimate: true,
    accessibility: true,
    centerPadding: "0px",
    onSwipe: () => setIsDragging(true),
    beforeChange: () => setIsDragging(true),
    afterChange: (index) => {
      setCurrentSlide(index);
      setTimeout(() => setIsDragging(false), 50);
    },
  };

  return (
    <div className={`family-stripe${isDragging ? " is-dragging" : ""}`}>
      {canGoPrev && <Arrow direction="left" onClick={() => sliderRef.current?.slickPrev()} />}
      {canGoNext && <Arrow direction="right" onClick={() => sliderRef.current?.slickNext()} />}

      <div className="family-stripe__viewport">
        <Slider ref={sliderRef} {...settings}>
          {slides}
        </Slider>
      </div>
    </div>
  );
};