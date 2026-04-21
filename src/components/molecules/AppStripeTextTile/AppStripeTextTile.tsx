import React from "react";
import "./AppStripeTextTile.css";
import type { AppStripeTextTileItem } from "./appStripeTextTiles";

export interface IAppStripeTextTileProps {
  item: AppStripeTextTileItem;
  className?: string;
}

export const AppStripeTextTile = ({
  item,
  className = "",
}: IAppStripeTextTileProps): JSX.Element => {
  return (
    <div className={`partner_cards ${className}`.trim()}>
      <a 
        className="imageAndTextContainer" 
        href={item.href} 
        draggable={false}
      >
        <div className="partner_images_container">
          <div className="ratio" style={{ "--ratio-percent": "66.6015625%" } as any}>
            <img className="partner_images" src={item.imageSrc} alt={item.title} loading="lazy" draggable={false} />
          </div>
        </div>
        <div className="PartnerDiv">
          <div className="PartnerLabel" style={{ color: item.badgeColor }}>
            {item.badge}
          </div>
          <div className="PartnerHeading">{item.title}</div>
          <div className="PartnerSubHeading">{item.subtitle}</div>
          <div className="PartnerSubText">{item.description}</div>
        </div>
      </a>
    </div>
  );
};
