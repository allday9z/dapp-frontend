import "./LobStripeTileLobMusic.css";

export interface ILobStripeTileLobMusicProps {
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

export const LobStripeTileLobMusic = ({
  lob = "mac",
  className,
  ...props
}: ILobStripeTileLobMusicProps): JSX.Element => {
  const variantsClassName = "lob-" + lob;

  return (
    <div
      className={
        "lob-stripe-tile-lob-music " + className + " " + variantsClassName
      }
    >
      <div className="frame-1526">
        <img className="mac" src="mac0.png" />
      </div>
      <div className="product-description">
        <div className="lob-name">Music</div>
        <div className="price">เริ่มต้น ฿4,990</div>
      </div>
    </div>
  );
};
