import type { ReactNode } from "react";
import { ProductStripe } from "../../ProductStripe/ProductStripe";
import "./TradeInCarousel.css";

export interface TradeInItem {
  id: string;
  image: ReactNode;
  badge?: string;
  badgeColor?: string;
  name: string;
  price: string;
  new_price: string;
  discount: string;
  installment: string;
  ctaLabel: string;
  ctaHref: string;
}

interface TradeInCarouselProps {
  title?: string;
  items: TradeInItem[];
}

export const TradeInCarousel = ({
  title = "TRADE IN : เก่าแลกใหม่",
  items,
}: TradeInCarouselProps) => {
  return (
    <section className="trade-in-section">
      <h2 className="trade-in-section__title">{title}</h2>

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
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768,  settings: { slidesToShow: 1 } },
          ]}
        >
          {items.map((item) => (
            <div key={item.id} className="trade-in-slide">
              <a href={item.ctaHref} className="trade-in-card" draggable={false}>
                <div className="trade-in-card__image-wrapper">
                  {item.badge && (
                    <span
                      className="trade-in-card__badge"
                      style={{ background: item.badgeColor ?? "#0071bc" }}
                    >
                      {item.badge}
                    </span>
                  )}
                  <div className="trade-in-card__image-scale">
                    {item.image}
                  </div>
                </div>
                <div className="trade-in-card__content">
                  <h3 className="trade-in-card__title">{item.name}</h3>
                  <div className="trade-in-card__price-original">
                    <span className="strike">{item.price}</span>{" "}
                    <span className="discount">{item.discount}</span>
                  </div>
                  <div className="trade-in-card__price">{item.new_price}</div>
                  <div className="trade-in-card__monthly">{item.installment}</div>
                  <span className="trade-in-card__btn">{item.ctaLabel}</span>
                </div>
              </a>
            </div>
          ))}
        </ProductStripe>
      </div>
    </section>
  );
};
