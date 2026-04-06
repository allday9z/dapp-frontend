import './ProductCard.css';
import { Badge } from '../../atoms/Badge/Badge';
import { formatPrice } from '../../../utils/formatPrice';
import type { Product } from '../../../types';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className = '' }: ProductCardProps) => {
  const {
    name,
    badge,
    price,
    imageSrc,
    imageAlt,
    ctaLabel,
    ctaHref,
    detailHref,
    tradeInEligible,
  } = product;

  return (
    <div className={`product-card ${className}`.trim()}>
      <div className="product-card__img-wrap">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="product-card__img"
          loading="lazy"
        />
      </div>
      <div className="product-card__body">
        {badge && <Badge label={badge} className="product-card__badge" />}
        <h3 className="product-card__name">{name}</h3>
        <div className="product-card__pricing">
          {price.base > 0 && (
            <span className="product-card__price">{formatPrice(price.base)}</span>
          )}
          {price.monthly && price.monthlyTerm && (
            <span className="product-card__monthly">
              หรือ {formatPrice(price.monthly)}/เดือน นาน {price.monthlyTerm} เดือน
            </span>
          )}
        </div>
        {tradeInEligible && (
          <p className="product-card__trade-in">รองรับการแลกซื้อ Trade-In</p>
        )}
        <div className="product-card__actions">
          {detailHref && (
            <a href={detailHref} className="product-card__detail-link">
              ดูรายละเอียด <span aria-hidden="true">›</span>
            </a>
          )}
          {ctaLabel && ctaHref && (
            <a href={ctaHref} className="product-card__cta-btn">
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
