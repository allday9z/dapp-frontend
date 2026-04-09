import "./AppTileSwitchToMac.css";
import { AppBlockImageVariant4 } from "../AppBlockImageVariant4/AppBlockImageVariant4";

export interface IAppTileSwitchToMacProps {
  device?: "desktop" | "mobile";
  title?:
    | "mac-book-pro"
    | "mac-mini"
    | "home-pod"
    | "switch-to-mac"
    | "apple-tv-hd"
    | "join-a-class"
    | "appointment"
    | "delivery-and-pickup"
    | "find-a-store"
    | "apple-repair"
    | "mac-accessories"
    | "i-pad-accessories"
    | "apple-tv-accessories"
    | "watch-accessories"
    | "i-phone-accessories";
  category?: "what-s-new" | "store-service" | "accessories";
  className?: string;
}

export const AppTileSwitchToMac = ({
  device = "desktop",
  title = "mac-book-pro",
  category = "what-s-new",
  className,
  ...props
}: IAppTileSwitchToMacProps): JSX.Element => {
  const variantsClassName =
    "device-" + device + " title-" + title + " category-" + category;

  return (
    <div
      className={
        "app-tile-device-desktop-title-switch-to-mac-category-what-s-new " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="app-block-tile">
        <AppBlockImageVariant4 className="app-block-image-instance"></AppBlockImageVariant4>
        <div className="text-block">
          <div className="frame-1530">
            <div className="new">ใหม่</div>
            <div className="switch-to-mac">iPad Air M4</div>
            <div className="mac-makes-it-simple">ฟิ้วววว</div>
          </div>
          <div className="learn-more">
            เริ่มต้น ฿21,900
            <br />
            <br />
            <br />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
