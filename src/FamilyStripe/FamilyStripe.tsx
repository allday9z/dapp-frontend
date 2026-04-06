import { useMemo, useRef, useState } from "react";
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
  disabled?: boolean;
}

const Arrow = ({ direction, onClick, disabled }: ArrowProps) => (
  <button
    className={`family-stripe__arrow family-stripe__arrow--${direction}${disabled ? " slick-disabled" : ""}`}
    onClick={onClick}
    aria-label={direction === "left" ? "สไลด์ก่อนหน้า" : "สไลด์ถัดไป"}
    disabled={disabled}
    type="button"
  >
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={
          direction === "left"
            ? "M12.1616 15.3233L13 14.4849L8.67671 10.1616L13 5.83836L12.1616 5L7 10.1616L12.1616 15.3233Z"
            : "M7.83836 15.3233L7 14.4849L11.3233 10.1616L7 5.83836L7.83836 5L13 10.1616L7.83836 15.3233Z"
        }
        fill="#595959"
      />
    </svg>
  </button>
);

export const FamilyStripe = ({
  items,
  seeAllLabel,
  seeAllHref,
}: IFamilyStripeProps) => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = useMemo(() => {
    const productSlides = items.map((item) => (
      <div key={item.id} className="family-stripe__slide">
        <a href={item.href ?? "#"} className="family-stripe__tile">
          <div className="family-stripe__image-wrap">
            <img
              src={item.imageSrc}
              alt={item.imageAlt}
              className="family-stripe__tile-img"
              loading="lazy"
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
  }, [items, seeAllHref, seeAllLabel]);

  const slideCount = slides.length;
  const slidesToScroll = 2;
  const canGoPrev = currentSlide > 0;
  const canGoNext = currentSlide < slideCount - 1;

  const settings: Settings = {
    slidesToShow: 4.5,
    slidesToScroll,
    infinite: false,
    variableWidth: true,
    speed: 1200,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    arrows: false,
    swipeToSlide: false,
    touchThreshold: 18,
    draggable: true,
    swipe: true,
    touchMove: true,
    waitForAnimate: true,
    accessibility: true,
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    if (!canGoPrev) return;
    sliderRef.current?.slickGoTo(Math.max(0, currentSlide - slidesToScroll));
  };

  const handleNext = () => {
    if (!canGoNext) return;
    sliderRef.current?.slickGoTo(Math.min(slideCount - 1, currentSlide + slidesToScroll));
  };

  return (
    <div className="family-stripe">
      <Arrow direction="left" onClick={handlePrev} disabled={!canGoPrev} />
      <Arrow direction="right" onClick={handleNext} disabled={!canGoNext} />

      <div className="family-stripe__viewport">
        <Slider ref={sliderRef} {...settings}>
          {slides}
        </Slider>
      </div>
    </div>
  );
};
