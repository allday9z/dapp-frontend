import type { CSSProperties } from "react";
import "./PLPProductRow.css";

export interface PLPProduct {
  id: string;
  badge?: string;
  badgeColor?: string;
  name: string;
  /** Supports \n for line-breaks */
  description: string;
  imageSrc: string;
  imageAlt: string;
  detailHref?: string;
  buyHref?: string;
  /** "plp" = 15.5rem image | "lob" = 29rem image (default: "plp") */
  variant?: "plp" | "lob";
}

interface IPLPProductRowProps {
  product: PLPProduct;
  variant?: "plp" | "lob";
}

export const PLPProductRow = ({ product, variant = "plp" }: IPLPProductRowProps) => {
  const { badge, badgeColor = "#bf4800", name, description, imageSrc, imageAlt, detailHref = "#", buyHref = "#" } = product;

  const badgeStyle = { color: badgeColor } as CSSProperties;

  return (
    <div className={`plp-product-row plp-product-row--${variant}`}>
      {/* Left: text */}
      <div className="plp-product-row__content">
        <div className="plp-product-row__meta">
          {badge && (
            <span className="plp-product-row__badge" style={badgeStyle}>
              {badge}
            </span>
          )}
          <h2 className="plp-product-row__name">{name}</h2>
          <p className="plp-product-row__description">
            {description.split("\n").map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </p>
        </div>

        <div className="plp-product-row__actions">
          <a href={detailHref} className="plp-product-row__detail-link">
            ดูรายละเอียดสินค้า
            <span className="plp-product-row__chevron" aria-hidden="true">›</span>
          </a>
          <a href={buyHref} className="plp-product-row__buy-btn">
            สั่งซื้อ
          </a>
        </div>
      </div>

      {/* Right: image */}
      <div className="plp-product-row__image-wrap">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="plp-product-row__image"
          loading="lazy"
        />
      </div>
    </div>
  );
};
