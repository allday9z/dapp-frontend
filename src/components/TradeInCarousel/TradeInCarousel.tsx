import React, { useEffect, useRef } from "react";
import { Carousel, Arrows } from "@fancyapps/ui";
import { Dots } from "@fancyapps/ui/dist/carousel/carousel.dots.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "./TradeInCarousel.css";

const mockupData = [
  {
    id: 1,
    title: "iPhone Air",
    originalPrice: "฿55,900 THB",
    discount: "-฿10,000",
    price: "฿45,900 THB",
    monthly: "฿4,590/mo. for 10 months",
    image: "image-590.png",
    buttonText: "แจ้งเตือนฉัน"
  },
  {
    id: 2,
    title: "iPhone Air",
    originalPrice: "฿39,900 THB",
    discount: "-฿10,000",
    price: "฿29,900 THB",
    monthly: "฿2,990/mo. for 10 months",
    image: "image-590.png",
    buttonText: "สั่งซื้อ"
  },
  {
    id: 3,
    title: "iPhone Air",
    originalPrice: "฿39,900 THB",
    discount: "-฿10,000",
    price: "฿29,900 THB",
    monthly: "฿2,990/mo. for 10 months",
    image: "image-590.png",
    buttonText: "แจ้งเตือนฉัน"
  },
  {
    id: 4,
    title: "iPhone Air",
    originalPrice: "฿42,900 THB",
    discount: "-฿5,000",
    price: "฿37,900 THB",
    monthly: "฿3,790/mo. for 10 months",
    image: "image-590.png",
    buttonText: "สั่งซื้อ"
  },
  {
    id: 5,
    title: "iPhone Air",
    originalPrice: "฿45,900 THB",
    discount: "-฿8,000",
    price: "฿37,900 THB",
    monthly: "฿3,790/mo. for 10 months",
    image: "image-590.png",
    buttonText: "สั่งซื้อ"
  },
  {
    id: 6,
    title: "iPhone Air",
    originalPrice: "฿39,900 THB",
    discount: "-฿10,000",
    price: "฿29,900 THB",
    monthly: "฿2,990/mo. for 10 months",
    image: "image-590.png",
    buttonText: "สั่งซื้อ"
  },
  {
    id: 7,
    title: "iPhone Air",
    originalPrice: "฿39,900 THB",
    discount: "-฿10,000",
    price: "฿29,900 THB",
    monthly: "฿2,990/mo. for 10 months",
    image: "image-590.png",
    buttonText: "แจ้งเตือนฉัน"
  }
];

export const TradeInCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const carousel = Carousel(
      container,
      {
        adaptiveHeight: false,
        center: false,
        dragFree: false, // 1 step dragging
        fill: false,
        infinite: false,
        initialPage: 0,
        slidesPerPage: 3,
        transition: "slide",
        Dots: true,
        Arrows: {
          prevClass: "trade-in-arrow trade-in-arrow--prev",
          nextClass: "trade-in-arrow trade-in-arrow--next",
          prevTpl:
            '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 18L9 12L15 6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          nextTpl:
            '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        },
      },
      { Arrows, Dots }
    ).init();

    return () => {
      carousel.destroy();
    };
  }, []);

  return (
    <section className="trade-in-section">
      <h2 className="trade-in-section__title">TRADE IN : เก่าแลกใหม่</h2>
      
      <div className="trade-in-carousel-wrapper">
        <div ref={carouselRef} className="f-carousel trade-in-carousel" role="region" aria-label="Trade In Products">
          <div className="f-carousel__viewport">
            <div className="f-carousel__track">
              {mockupData.map((item) => (
                <div key={item.id} className="f-carousel__slide trade-in-slide">
                  <div className="trade-in-card">
                    <div className="trade-in-card__image-wrapper">
                      <img src={item.image} alt={item.title} className="trade-in-card__image" />
                    </div>
                    <div className="trade-in-card__content">
                      <h3 className="trade-in-card__title">{item.title}</h3>
                      <div className="trade-in-card__price-original">
                        <span className="strike">{item.originalPrice}</span> <span className="discount">{item.discount}</span>
                      </div>
                      <div className="trade-in-card__price">{item.price}</div>
                      <div className="trade-in-card__monthly">{item.monthly}</div>
                      <button className="trade-in-card__btn">{item.buttonText}</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
