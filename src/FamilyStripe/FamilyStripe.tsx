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

// ── Custom arrows — full-height, flush to stripe edges ──────────────────
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button className="family-stripe__arrow family-stripe__arrow--prev" onClick={onClick} aria-label="ก่อนหน้า">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.1616 15.3233L13 14.4849L8.67671 10.1616L13 5.83836L12.1616 5L7 10.1616L12.1616 15.3233Z" fill="#595959" />
    </svg>
  </button>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button className="family-stripe__arrow family-stripe__arrow--next" onClick={onClick} aria-label="ถัดไป">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.83836 15.3233L7 14.4849L11.3233 10.1616L7 5.83836L7.83836 5L13 10.1616L7.83836 15.3233Z" fill="#595959" />
    </svg>
  </button>
);

const SLICK_SETTINGS = {
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 2,
  // drag locks to card position (not free-scroll)
  swipeToSlide: false,
  draggable: true,
  touchMove: true,
  arrows: true,
  dots: false,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 2 } },
    { breakpoint: 900,  settings: { slidesToShow: 3, slidesToScroll: 2 } },
    { breakpoint: 600,  settings: { slidesToShow: 2, slidesToScroll: 2 } },
  ],
};

export const FamilyStripe = ({ items, seeAllLabel, seeAllHref }: IFamilyStripeProps) => (
  <div className="family-stripe">
    <Slider {...SLICK_SETTINGS}>
      {items.map((item) => (
        <div key={item.id}>
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
        <div>
          <a href={seeAllHref} className="family-stripe__see-all">
            <span className="family-stripe__see-all-label">{seeAllLabel}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="family-stripe__see-all-icon">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      )}
    </Slider>
  </div>
);
