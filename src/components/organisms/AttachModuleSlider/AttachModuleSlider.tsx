import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AttachModuleSlider.css";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import type { AttachModuleSliderProps, AttachModuleSliderItem } from "./attachModuleSliderTypes";

function useDragLink() {
  const dragging = useRef(false);
  const onMouseDown = () => { dragging.current = false; };
  const onMouseMove = () => { dragging.current = true; };
  const onClick = (e: React.MouseEvent) => { if (dragging.current) e.preventDefault(); };
  return { onMouseDown, onMouseMove, onClick };
}

const Tile = ({ item }: { item: AttachModuleSliderItem }) => {
  const isInfoMode = Boolean(item.subtitle);
  const hasDiscount = Boolean(item.new_price);
  const dragLink = useDragLink();

  const badge = item.badge ?? (hasDiscount ? "ราคาพิเศษ" : "");
  const badgeColor = item.badgeColor ?? (hasDiscount ? "#008900" : "#ff6900");

  return (
    <div className={`attach-slider__tile${isInfoMode ? " attach-slider__tile--info" : ""}`}>
      {item.ctaHref ? (
        <a
          href={item.ctaHref}
          className="attach-slider__image-link"
          draggable={false}
          tabIndex={-1}
          aria-hidden="true"
          {...dragLink}
        >
          <div className="attach-slider__image-frame">
            {item.imageSrc && <img src={item.imageSrc} alt={item.name} draggable={false} loading="lazy" decoding="async" />}
          </div>
        </a>
      ) : (
        <div className="attach-slider__image-frame">
          {item.imageSrc && <img src={item.imageSrc} alt={item.name} draggable={false} loading="lazy" decoding="async" />}
        </div>
      )}

      <div className="attach-slider__info">
        {isInfoMode ? (
          <>
            <div className="attach-slider__name attach-slider__name--info">{item.name}</div>
            {item.subtitle && (
              <div className="attach-slider__subtitle">{item.subtitle}</div>
            )}
            {item.description && (
              <div className="attach-slider__description">{item.description}</div>
            )}
          </>
        ) : (
          <>
            <div
              className="attach-slider__badge"
              style={badge ? { color: badgeColor } : undefined}
            >
              {badge}
            </div>

            {item.ctaHref ? (
              <a href={item.ctaHref} className="attach-slider__name attach-slider__name-link" draggable={false} {...dragLink}>{item.name}</a>
            ) : (
              <div className="attach-slider__name">{item.name}</div>
            )}

            {item.price && (
              <div className="attach-slider__prices">
                {hasDiscount ? (
                  <>
                    <div className="attach-slider__price-row">
                      <span className="attach-slider__price-original">{item.price}</span>
                      {item.discount && (
                        <span className="attach-slider__discount">{item.discount}</span>
                      )}
                    </div>
                    <div className="attach-slider__price-new">{item.new_price}</div>
                  </>
                ) : (
                  <div className="attach-slider__price">{item.price}</div>
                )}
                <div className="attach-slider__installment">{item.installment ?? "\u00A0"}</div>
              </div>
            )}

            {(item.ctaHref || item.ctaLabel) && (
              item.ctaHref ? (
                <a href={item.ctaHref} className="attach-slider__cta" draggable={false} {...dragLink}>
                  {item.ctaLabel ?? "สั่งซื้อ"}
                </a>
              ) : (
                <button type="button" className="attach-slider__cta">
                  {item.ctaLabel ?? "สั่งซื้อ"}
                </button>
              )
            )}
          </>
        )}
      </div>
    </div>
  );
};

function getSlidesToShow(slidesToShowProp: number, w: number): number {
  if (w <= 580) return 2;    // mobile: use integer slidesToShow for stable infinite alignment
  if (w <= 768) return 2;    // tablet: 2 items
  if (w <= 1024) return Math.min(slidesToShowProp, 3);
  return slidesToShowProp;
}

export const AttachModuleSlider = ({
  title,
  titleAlign = "center",
  slidesToShow: slidesToShowProp = 3,
  items,
  className = "",
}: AttachModuleSliderProps): JSX.Element => {
  const sliderRef = useRef<Slider | null>(null);
  const [, setCurrentSlide] = useState(0);

  // ตรวจ window width ตั้งแต่ render แรก — ไม่ flash desktop layout
  const [winWidth, setWinWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1220
  );

  useEffect(() => {
    const handleResize = () => setWinWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideCount = items.length;
  const activeSlidesToShow = getSlidesToShow(slidesToShowProp, winWidth);

  const settings: Settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    slidesToShow: activeSlidesToShow,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    dotsClass: "slick-dots attach-slider__dots",
    afterChange: (index) => setCurrentSlide(index),
    swipeToSlide: true,
  };

  return (
    <section className={`attach-slider ${className}`}>
      <div className="attach-slider__head" style={titleAlign === "left" ? { textAlign: "left" } : undefined}>
        <h2 className="attach-slider__title" style={titleAlign === "left" ? { justifyContent: "flex-start", minHeight: "unset" } : undefined}>{title}</h2>
      </div>

      <div className="attach-slider__carousel-wrap">
        <button
          className={`attach-slider__arrow attach-slider__arrow--prev`}
          onClick={() => sliderRef.current?.slickPrev()}
          aria-label="ก่อนหน้า"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="attach-slider__track">
          {slideCount > 0 ? (
            <Slider ref={sliderRef} {...settings}>
              {items.map((item) => (
                <div key={item.id} className="attach-slider__item-outer">
                  <Tile item={item} />
                </div>
              ))}
            </Slider>
          ) : (
             <div className="attach-slider__empty">
              {[0, 1, 2].map((i) => (
                <div key={i} className="attach-slider__empty-card" />
              ))}
            </div>
          )}
        </div>

        <button
          className={`attach-slider__arrow attach-slider__arrow--next`}
          onClick={() => sliderRef.current?.slickNext()}
          aria-label="ถัดไป"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {slideCount === 0 && (
        <div className="attach-slider__static-dots">
          {[0, 1, 2].map((i) => (
            <span key={i} className={`attach-slider__static-dot${i === 0 ? " is-active" : ""}`} />
          ))}
        </div>
      )}

      <div className="hp-divider" />
    </section>
  );
};