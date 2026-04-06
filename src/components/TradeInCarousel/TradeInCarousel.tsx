import React from "react";
import { ProductStripe } from "../../ProductStripe/ProductStripe";
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
  return (
    <section className="trade-in-section">
      <h2 className="trade-in-section__title">TRADE IN : เก่าแลกใหม่</h2>
      
      <div className="trade-in-carousel-wrapper">
        <ProductStripe 
          arrowType="blue-circle" 
          showDots={true} 
          slidesToShow={3} 
          slidesToScroll={1} 
          variableWidth={false}
          infinite={false}
          gap={24}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
          ]}
        >
          {mockupData.map((item) => (
            <div key={item.id} className="trade-in-slide">
              <a href="#" className="trade-in-card" draggable={false}>
                <div className="trade-in-card__image-wrapper">
                  <img src={item.image} alt={item.title} className="trade-in-card__image" draggable={false} />
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
              </a>
            </div>
          ))}
        </ProductStripe>
      </div>
    </section>
  );
};
