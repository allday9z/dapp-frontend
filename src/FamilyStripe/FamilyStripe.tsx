import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FamilyStripe.css";
import type { FamilyStripeItem } from "./familyStripeData";

interface IFamilyStripeProps {
  items: FamilyStripeItem[];
  seeAllLabel?: string;
  seeAllHref?: string;
}

// Custom prev/next arrow buttons
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button className="family-stripe__arrow family-stripe__arrow--prev" onClick={onClick} aria-label="ก่อนหน้า">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button className="family-stripe__arrow family-stripe__arrow--next" onClick={onClick} aria-label="ถัดไป">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

const SLICK_SETTINGS = {
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 2,
  swipeToSlide: false,
  draggable: false,
  touchMove: false,
  arrows: true,
  dots: false,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    { breakpoint: 1100, settings: { slidesToShow: 4, slidesToScroll: 2 } },
    { breakpoint: 820, settings: { slidesToShow: 3, slidesToScroll: 2, draggable: true, touchMove: true } },
    { breakpoint: 540, settings: { slidesToShow: 2, slidesToScroll: 2, draggable: true, touchMove: true } },
  ],
};

export const FamilyStripe = ({ items, seeAllLabel, seeAllHref }: IFamilyStripeProps) => (
  <div className="family-stripe">
    <div className="family-stripe__slider-wrap">
      <Slider {...SLICK_SETTINGS}>
        {items.map((item) => (
          <div key={item.id} className="family-stripe__slide">
            <a href={item.href ?? "#"} className="family-stripe__tile">
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="family-stripe__tile-img"
                loading="lazy"
              />
              <div className="family-stripe__tile-text">
                {item.badge && (
                  <span className="family-stripe__tile-badge">{item.badge}</span>
                )}
                <span className="family-stripe__tile-name">
                  {item.name.split("\n").map((line, i) => (
                    <span key={i}>{i > 0 && <br />}{line}</span>
                  ))}
                </span>
                {item.priceLabel && (
                  <span className="family-stripe__tile-price">{item.priceLabel}</span>
                )}
              </div>
            </a>
          </div>
        ))}

        {/* See all — last slide */}
        {seeAllLabel && seeAllHref && (
          <div className="family-stripe__slide family-stripe__slide--see-all">
            <a href={seeAllHref} className="family-stripe__see-all">
              <span className="family-stripe__see-all-label">{seeAllLabel}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        )}
      </Slider>
    </div>
  </div>
);
