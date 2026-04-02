import "./LobStripeTileLobMac.css";

export interface ILobStripeTileLobMacProps {
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

export const LobStripeTileLobMac = ({
  lob = "mac",
  className,
  ...props
}: ILobStripeTileLobMacProps): JSX.Element => {
  const variantsClassName = "lob-" + lob;

  return (
    <div
      className={
        "lob-stripe-tile-lob-mac " + className + " " + variantsClassName
      }
    >
      <div className="frame-1523">
        <img className="mac" src="mac0.png" />
      </div>
      <div className="product-description">
        <div className="lob-name">Mac</div>
        <div className="price">เริ่มต้น ฿34,900</div>
      </div>
    </div>
  );
};
