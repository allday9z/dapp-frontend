import "./LobStripeTileLobAccessories.css";

export interface ILobStripeTileLobAccessoriesProps {
  lob?:
    | "mac"
    | "i-pad"
    | "i-phone"
    | "watch"
    | "music"
    | "tv-home"
    | "accessories"
    | "entertainment"
    | "airtag";
  className?: string;
}

export const LobStripeTileLobAccessories = ({
  lob = "mac",
  className,
  ...props
}: ILobStripeTileLobAccessoriesProps): JSX.Element => {
  const variantsClassName = "lob-" + lob;

  return (
    <div
      className={
        "lob-stripe-tile-lob-accessories " + className + " " + variantsClassName
      }
    >
      <div className="frame-1528">
        <img className="accessories" src="accessories0.png" />
      </div>
      <div className="product-description">
        <div className="lob-name">อุปกรณ์เสริม</div>
        <div className="price">เริ่มต้น ฿790</div>
      </div>
    </div>
  );
};
