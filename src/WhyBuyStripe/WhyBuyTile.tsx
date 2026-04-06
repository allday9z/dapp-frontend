import type { CSSProperties } from "react";
import "./WhyBuyTile.css";
import type { WhyBuyItem } from "./whyBuyData";

interface IWhyBuyTileProps {
  item: WhyBuyItem;
  className?: string;
}

export const WhyBuyTile = ({ item, className = "" }: IWhyBuyTileProps) => {
  const style = { "--why-buy-accent": item.accentColor } as CSSProperties;

  return (
    <div
      className={`why-buy-tile ${className}`.trim()}
      style={style}
    >
      <div className="why-buy-tile__content">
        <div className="why-buy-tile__badge">{item.badge}</div>
        <div className="why-buy-tile__copy">
          {item.body.map((seg, i) => (
            <span
              key={i}
              className={
              seg.tone === "accent" ? "why-buy-tile__copy-segment--accent"
              : seg.tone === "muted" ? "why-buy-tile__copy-segment--muted"
              : ""
            }
            >
              {seg.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
