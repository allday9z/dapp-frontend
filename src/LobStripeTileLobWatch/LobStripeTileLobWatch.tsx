import "./LobStripeTileLobWatch.css";

export interface ILobStripeTileLobWatchProps {
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

export const LobStripeTileLobWatch = ({
  lob = "mac",
  className,
  ...props
}: ILobStripeTileLobWatchProps): JSX.Element => {
  const variantsClassName = "lob-" + lob;

  return (
    <div
      className={
        "lob-stripe-tile-lob-watch " + className + " " + variantsClassName
      }
    >
      <div className="frame-1525">
        <img className="apple-watch" src="apple-watch0.png" />
      </div>
      <div className="product-description">
        <div className="lob-name">WATCH</div>
        <div className="price">เริ่มต้น ฿7,900</div>
      </div>
    </div>
  );
};
