import "./LobStripeTileLobIPad.css";

export interface ILobStripeTileLobIPadProps {
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

export const LobStripeTileLobIPad = ({
  lob = "mac",
  className,
  ...props
}: ILobStripeTileLobIPadProps): JSX.Element => {
  const variantsClassName = "lob-" + lob;

  return (
    <div
      className={
        "lob-stripe-tile-lob-i-pad " + className + " " + variantsClassName
      }
    >
      <div className="frame-1524">
        <img className="i-pad" src="i-pad0.png" />
      </div>
      <div className="product-description">
        <div className="lob-name">iPad</div>
        <div className="price">เริ่มต้น ฿12,900</div>
      </div>
    </div>
  );
};
