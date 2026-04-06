import "./FamilyStripe.css";
import type { FamilyStripeConfig } from "./familyStripeData";

interface IFamilyStripeProps {
  config: FamilyStripeConfig;
}

export const FamilyStripe = ({ config }: IFamilyStripeProps) => (
  <div className="family-stripe">
    <div className="family-stripe__inner">
      <div className="family-stripe__scroll">
        {config.items.map((item) => (
          <a key={item.id} href={item.href ?? "#"} className="family-stripe__tile">
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
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </span>
              {item.priceLabel && (
                <span className="family-stripe__tile-price">{item.priceLabel}</span>
              )}
            </div>
          </a>
        ))}

        {/* See all link */}
        <a href={config.seeAllHref} className="family-stripe__see-all">
          <span className="family-stripe__see-all-label">{config.seeAllLabel}</span>
          <span className="family-stripe__see-all-chevron" aria-hidden="true">›</span>
        </a>
      </div>
    </div>
  </div>
);
