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

  return (
    <div className={`lob-stripe-tile ${variantClassName} ${className}`.trim()} style={{ marginRight: '16px' }}>
      <div className="lob-stripe-tile__image-frame">
        <img
          className="lob-stripe-tile__image"
          src={item.imageSrc}
          alt={item.imageAlt}
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
