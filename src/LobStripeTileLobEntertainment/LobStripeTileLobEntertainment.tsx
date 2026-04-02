import "./LobStripeTileLobEntertainment.css";

export interface ILobStripeTileLobEntertainmentProps {
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

export const LobStripeTileLobEntertainment = ({
  lob = "mac",
  className,
  ...props
}: ILobStripeTileLobEntertainmentProps): JSX.Element => {
  const variantsClassName = "lob-" + lob;

  return (
    <div
      className={
        "lob-stripe-tile-lob-entertainment " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="image">
        <img className="accessories" src="accessories0.png" />
      </div>
      <div className="product-description">
        <div className="lob-name">Entertainment</div>
        <div className="price">เริ่มต้น ฿990</div>
      </div>
    </div>
  );
};
