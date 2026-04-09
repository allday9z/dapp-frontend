import "./AppTileHomePod.css";
import { AppBlockImageVariant3 } from "../AppBlockImageVariant3/AppBlockImageVariant3";

export interface IAppTileHomePodProps {
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
  text?: string;
  className?: string;
}

export const AppTileHomePod = ({
  device = "desktop",
  title = "mac-book-pro",
  category = "what-s-new",
  text = "undefined",
  className,
  ...props
}: IAppTileHomePodProps): JSX.Element => {
  const variantsClassName =
    "device-" + device + " title-" + title + " category-" + category;

  return (
    <div
      className={
        "app-tile-device-desktop-title-home-pod-category-what-s-new " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="app-block-tile">
        <AppBlockImageVariant3 className="app-block-image-instance"></AppBlockImageVariant3>
        <div className="text-block">
          <div className="frame-1530">
            <div className="new">NEW </div>
            <div className="home-pod">MacBook Air M5</div>
            <div className="immersive-audio-advanced-intelligence">
              พลังเร็วติดปีก{" "}
            </div>
          </div>
          <div className="available-starting-1-24-from-282-or-47-mo-for-6-mo-before-trade-in">
            เริ่มต้น ฿36,900{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
