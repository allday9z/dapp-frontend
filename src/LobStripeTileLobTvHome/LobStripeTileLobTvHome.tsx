import "./LobStripeTileLobTvHome.css";

export interface ILobStripeTileLobTvHomeProps {
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

export const LobStripeTileLobTvHome = ({
  lob = "mac",
  className,
  ...props
}: ILobStripeTileLobTvHomeProps): JSX.Element => {
  const variantsClassName = "lob-" + lob;

  return (
    <div
      className={
        "lob-stripe-tile-lob-tv-home " + className + " " + variantsClassName
      }
    >
      <div className="frame-1527">
        <img className="asdf-1" src="asdf-10.png" />
      </div>
      <div className="product-description">
        <div className="lob-name">TV และบ้าน</div>
        <div className="price">เริ่มต้น ฿2,390</div>
      </div>
    </div>
  );
};
