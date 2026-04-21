import { useRef, type CSSProperties } from "react";
import "./WhyBuyTile.css";
import type { WhyBuyItem } from "./whyBuyData";

interface IWhyBuyTileProps {
  item: WhyBuyItem;
  className?: string;
}

export const WhyBuyTile = ({ item, className = "" }: IWhyBuyTileProps) => {
  const style = { "--why-buy-accent": item.accentColor } as CSSProperties;
  const dragging = useRef(false);
  const cls = `why-buy-tile${item.href ? " why-buy-tile--link" : ""} ${className}`.trim();

  const content = (
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
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        className={cls}
        style={style}
        draggable={false}
        onMouseDown={() => { dragging.current = false; }}
        onMouseMove={() => { dragging.current = true; }}
        onClick={(e) => { if (dragging.current) e.preventDefault(); }}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={cls} style={style}>
      {content}
    </div>
  );
};
