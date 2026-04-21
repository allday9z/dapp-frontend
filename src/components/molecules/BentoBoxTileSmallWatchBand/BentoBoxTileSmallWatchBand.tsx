import "./BentoBoxTileSmallWatchBand.css";
import { CtaButtonPrimaryStateDefault } from "../../atoms/CtaButtonPrimaryStateDefault/CtaButtonPrimaryStateDefault";

export interface IBentoBoxTileSmallWatchBandProps {
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

export const BentoBoxTileSmallWatchBand = ({
  device = "desktop-big",
  lob = "air-pods",
  text = "undefined",
  className,
  ...props
}: IBentoBoxTileSmallWatchBandProps): JSX.Element => {
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
        <img className="image-120" src="https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/IMG-iphone17e-homepage_highlight_3_banner_retina_medium.jpg?inline=true"  alt="" />
      </div>
      <div className="frame-487">
        <div className="contents">
          <div className="copy-block">
            <div className="new-badge"></div>
            <div className="new">ใหม่</div>
            <div className="heading">
              <div className="apple-watch-ocean-band">
                iPhone 17e{" "}
              </div>
            </div>
            <div className="subhead">
              <div className="a-gift-fit-for-dad-from-49">
                เก่งล้นตัว คุ้มเหลือล้น
                <br />
                เริ่มต้น ฿22,900{" "}
              </div>
            </div>
          </div>
          <CtaButtonPrimaryStateDefault className="cta-instance"></CtaButtonPrimaryStateDefault>
        </div>
      </div>
    </div>
  );
};
