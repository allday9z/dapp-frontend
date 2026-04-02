import "./LobStripeTileLobAirtag.css";

export interface ILobStripeTileLobAirtagProps {
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

export const LobStripeTileLobAirtag = ({
  lob = "mac",
  className,
  ...props
}: ILobStripeTileLobAirtagProps): JSX.Element => {
  const variantsClassName = "lob-" + lob;

  return (
    <div
      className={
        "lob-stripe-tile-lob-airtag " + className + " " + variantsClassName
      }
    >
      <div className="frame-1529">
        <img className="air-tag" src="air-tag0.png" />
      </div>
      <div className="product-description">
        <div className="lob-name">AirTag</div>
        <div className="price">เริ่มต้น ฿1,190</div>
      </div>
    </div>
  );
};
