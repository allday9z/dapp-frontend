import "./LobStripeTileLobIPhone.css";

export interface ILobStripeTileLobIPhoneProps {
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

export const LobStripeTileLobIPhone = ({
  lob = "mac",
  className,
  ...props
}: ILobStripeTileLobIPhoneProps): JSX.Element => {
  const variantsClassName = "lob-" + lob;

  return (
    <div
      className={
        "lob-stripe-tile-lob-i-phone " + className + " " + variantsClassName
      }
    >
      <div className="image">
        <img className="i-phone" src="i-phone0.png" />
      </div>
      <div className="product-description">
        <div className="lob-name">iPhone</div>
        <div className="price">เริ่มต้น ฿14,500</div>
      </div>
    </div>
  );
};
