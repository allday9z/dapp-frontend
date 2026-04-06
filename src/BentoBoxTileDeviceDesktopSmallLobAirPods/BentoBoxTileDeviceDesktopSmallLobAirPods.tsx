import "./BentoBoxTileDeviceDesktopSmallLobAirPods.css";
import { CtaButtonPrimaryStateDefault } from "../CtaButtonPrimaryStateDefault/CtaButtonPrimaryStateDefault";

export interface IBentoBoxTileDeviceDesktopSmallLobAirPodsProps {
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

export const BentoBoxTileDeviceDesktopSmallLobAirPods = ({
  device = "desktop-big",
  lob = "air-pods",
  text = "undefined",
  className,
  ...props
}: IBentoBoxTileDeviceDesktopSmallLobAirPodsProps): JSX.Element => {
  const variantsClassName = "device-" + device + " lob-" + lob;

  return (
    <div
      className={
        "bento-box-tile-device-desktop-small-lob-air-pods " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="image-area">
        <img className="image-103" src="/image-1030.png"  alt="" />
      </div>
      <div className="frame-487">
        <div className="contents">
          <div className="copy-block">
            <div className="new-badge">
              <div className="new">ใหม่ </div>
            </div>
            <div className="heading">
              <div className="i-phone-14-pro">AirPods Max 2</div>
            </div>
            <div className="subhead">
              <div className="_2nd-generation-magically-connect-to-your-apple-watch-from-249">
                ประสบการณ์เสียง ในเวอร์ชั่นรีมาสเตอร์
                <br />
                เริ่มต้น ฿18,990{" "}
              </div>
            </div>
          </div>
          <CtaButtonPrimaryStateDefault className="cta-instance"></CtaButtonPrimaryStateDefault>
        </div>
      </div>
    </div>
  );
};
