import "./BentoBoxTileDeviceDesktopBigLobAppleWatchFathers.css";
import { CtaButtonPrimaryStateDefault } from "../CtaButtonPrimaryStateDefault/CtaButtonPrimaryStateDefault";

export interface IBentoBoxTileDeviceDesktopBigLobAppleWatchFathersProps {
  device?: "mobile" | "desktop-small" | "desktop-big";
  lob?:
    | "apple-watch-band"
    | "air-pods"
    | "i-phone"
    | "apple-watch"
    | "apple-watch-fathers";
  text?: string;
  className?: string;
}

export const BentoBoxTileDeviceDesktopBigLobAppleWatchFathers = ({
  device = "desktop-big",
  lob = "air-pods",
  text = "undefined",
  className,
  ...props
}: IBentoBoxTileDeviceDesktopBigLobAppleWatchFathersProps): JSX.Element => {
  const variantsClassName = "device-" + device + " lob-" + lob;

  return (
    <div
      className={
        "bento-box-tile-device-desktop-big-lob-apple-watch-fathers " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="text-info">
        <div className="contents">
          <div className="copy-block">
            <div className="new-badge">
              <div className="father-s-day">FATHER’S DAY </div>
            </div>
            <div className="heading">
              <div className="apple-watch">Apple Watch </div>
            </div>
            <div className="subhead">
              <div className="there-s-an-apple-watch-for-every-dad-from-299">
                There’s an Apple Watch for every Dad.
                <br />
                From $299{" "}
              </div>
            </div>
          </div>
          <CtaButtonPrimaryStateDefault className="cta-instance"></CtaButtonPrimaryStateDefault>
        </div>
      </div>
      <img className="image-120" src="image-1200.png" />
    </div>
  );
};
