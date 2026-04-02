import "./LobStripeTile.css";
import type { CSSProperties } from "react";
import type { LobStripeTileItem } from "./lobStripeTiles";

export interface ILobStripeTileProps {
  item: LobStripeTileItem;
  className?: string;
}

export const LobStripeTile = ({
  item,
  className = "",
}: ILobStripeTileProps): JSX.Element => {
  const frameStyle = {
    padding: item.framePadding,
    alignItems:
      item.frameAlign === "stretch"
        ? "stretch"
        : item.frameAlign === "start"
          ? "flex-start"
          : "center",
    justifyContent: item.imageJustify === "start" ? "flex-start" : "center",
  } satisfies CSSProperties;

  const imageStyle = {
    width: item.imageWidth,
    height: item.imageHeight,
  } satisfies CSSProperties;

  const descriptionStyle = {
    justifyContent: item.contentJustify === "center" ? "center" : "flex-start",
  } satisfies CSSProperties;

  const nameStyle = {
    width: item.labelWidth,
  } satisfies CSSProperties;

  const priceStyle = {
    width: item.priceWidth,
  } satisfies CSSProperties;

  return (
    <div className={`lob-stripe-tile ${className} lob-${item.id}`}>
      <div className="lob-stripe-tile__image-frame" style={frameStyle}>
        <img
          className="lob-stripe-tile__image"
          src={item.imageSrc}
          alt={item.imageAlt}
          style={imageStyle}
        />
      </div>
      <div className="lob-stripe-tile__description" style={descriptionStyle}>
        <div className="lob-stripe-tile__name" style={nameStyle}>
          {item.name}
        </div>
        <div className="lob-stripe-tile__price" style={priceStyle}>
          {item.price}
        </div>
      </div>
    </div>
  );
};
