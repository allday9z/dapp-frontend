import "./BentoBoxTileDeviceDesktopSmallLobAppleWatchBand.css";
import { CtaButtonPrimaryStateDefault } from "../CtaButtonPrimaryStateDefault/CtaButtonPrimaryStateDefault";

export interface IBentoBoxTileDeviceDesktopSmallLobAppleWatchBandProps {
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

export const BentoBoxTileDeviceDesktopSmallLobAppleWatchBand = ({
  device = "desktop-big",
  lob = "air-pods",
  text = "undefined",
  className,
  ...props
}: IBentoBoxTileDeviceDesktopSmallLobAppleWatchBandProps): JSX.Element => {
  const variantsClassName = "device-" + device + " lob-" + lob;

  return (
    <div
      className={
        "bento-box-tile-device-desktop-small-lob-apple-watch-band " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="image-area">
        <img className="image-120" src="image-1200.png"  alt="" />
      </div>
      <div className="frame-487">
        <div className="contents">
          <div className="copy-block">
            <div className="new-badge"></div>
            <div className="heading">
              <div className="apple-watch-ocean-band">
                Apple Watch Ocean Band{" "}
              </div>
            </div>
            <div className="subhead">
              <div className="a-gift-fit-for-dad-from-49">
                A gift fit for Dad.
                <br />
                From $49{" "}
              </div>
            </div>
          </div>
          <CtaButtonPrimaryStateDefault className="cta-instance"></CtaButtonPrimaryStateDefault>
        </div>
      </div>
    </div>
  );
};
