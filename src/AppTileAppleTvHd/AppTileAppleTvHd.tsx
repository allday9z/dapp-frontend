import "./AppTileAppleTvHd.css";
import { AppBlockImageVariant5 } from "../AppBlockImageVariant5/AppBlockImageVariant5";

export interface IAppTileAppleTvHdProps {
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

export const AppTileAppleTvHd = ({
  device = "desktop",
  title = "mac-book-pro",
  category = "what-s-new",
  text = "undefined",
  className,
  ...props
}: IAppTileAppleTvHdProps): JSX.Element => {
  const variantsClassName =
    "device-" + device + " title-" + title + " category-" + category;

  return (
    <div
      className={
        "app-tile-device-desktop-title-apple-tv-hd-category-what-s-new " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="app-block-tile">
        <AppBlockImageVariant5 className="app-block-image-instance"></AppBlockImageVariant5>
        <div className="text-block">
          <div className="frame-1530">
            <div className="new">ใหม่ </div>
            <div className="apple-tv-hd">MacBook Pro M5 </div>
            <div className="the-apple-experience-cinematic-in-every-sense">
              เร็วและอัจฉริยะเหลือร้าย{" "}
            </div>
          </div>
          <div className="available-from-342-or-57-mo-for-6-mo-before-trade-in">
            เริ่มต้น ฿56,900{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
