import "./LobStripeTile.css";
import type { LobStripeTileItem } from "./lobStripeTiles";

export interface ILobStripeTileProps {
  item: LobStripeTileItem;
  className?: string;
}

export const LobStripeTile = ({
  item,
  className = "",
}: ILobStripeTileProps): JSX.Element => {
  const variantClassName = `lob-stripe-tile--${item.id}`;
  const imageDimensionsById: Record<string, { width: number; height: number }> = {
    mac: { width: 100, height: 60 },
    "i-pad": { width: 77, height: 60 },
    "i-phone": { width: 60, height: 60 },
    watch: { width: 82, height: 60 },
    music: { width: 77, height: 60 },
    "tv-home": { width: 63, height: 60 },
    accessories: { width: 60, height: 60 },
    entertainment: { width: 100, height: 66 },
    airtag: { width: 80, height: 48 },
  };
  const imageDimensions = imageDimensionsById[item.id] ?? { width: 100, height: 60 };

  return (
    <div className={`lob-stripe-tile ${variantClassName} ${className}`.trim()} style={{ marginRight: '16px' }}>
      <div className="lob-stripe-tile__image-frame">
        <img
          className="lob-stripe-tile__image"
          src={item.imageSrc}
          alt={item.imageAlt}
          loading="lazy"
          decoding="async"
          width={imageDimensions.width}
          height={imageDimensions.height}
        />
      </div>
      <div className="lob-stripe-tile__description">
        <div className="lob-stripe-tile__name">
          {item.name}
        </div>
        <div className="lob-stripe-tile__price">
          {item.price}
        </div>
      </div>
    </div>
  );
};
