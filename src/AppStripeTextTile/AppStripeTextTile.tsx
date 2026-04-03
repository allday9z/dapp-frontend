import "./AppStripeTextTile.css";
import type { CSSProperties } from "react";
import type { AppStripeTextTileItem, AppStripeTextTileSegment } from "./appStripeTextTiles";

export interface IAppStripeTextTileProps {
  item: AppStripeTextTileItem;
  className?: string;
}

const segmentClassName = (segment: AppStripeTextTileSegment): string => {
  if (segment.tone === "accent") return "app-stripe-text-tile__copy-segment--accent";
  if (segment.tone === "muted") return "app-stripe-text-tile__copy-segment--muted";
  return "";
};

export const AppStripeTextTile = ({
  item,
  className = "",
}: IAppStripeTextTileProps): JSX.Element => {
  const accentStyle = {
    "--app-stripe-text-tile-accent": item.accentColor,
  } as CSSProperties;

  return (
    <div
      className={`app-stripe-text-tile app-stripe-text-tile--${item.id} ${className}`.trim()}
      style={accentStyle}
    >
      <div className="app-stripe-text-tile__content">
        <div className="app-stripe-text-tile__badge">{item.badge}</div>
        <div className="app-stripe-text-tile__copy">
          {item.body.map((segment, index) => (
            <span
              key={`${item.id}-${index}`}
              className={`app-stripe-text-tile__copy-segment ${segmentClassName(segment)}`.trim()}
            >
              {segment.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
