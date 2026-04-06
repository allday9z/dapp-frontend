import "./AppTileDeviceDesktopCategoryWhatSNewTitleMacBookPro.css";
import { AppBlockImageProperty1Varient1DeviceDesktop } from "../AppBlockImageProperty1Varient1DeviceDesktop/AppBlockImageProperty1Varient1DeviceDesktop";

export interface IAppTileDeviceDesktopCategoryWhatSNewTitleMacBookProProps {
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

export const AppTileDeviceDesktopCategoryWhatSNewTitleMacBookPro = ({
  device = "desktop",
  title = "mac-book-pro",
  category = "what-s-new",
  text = "undefined",
  className,
  ...props
}: IAppTileDeviceDesktopCategoryWhatSNewTitleMacBookProProps): JSX.Element => {
  const variantsClassName =
    "device-" + device + " title-" + title + " category-" + category;

  return (
    <div
      className={
        "app-tile-device-desktop-category-what-s-new-title-mac-book-pro " +
        className +
        " " +
        variantsClassName
      }
    >
      <AppBlockImageProperty1Varient1DeviceDesktop className="app-block-image-instance"></AppBlockImageProperty1Varient1DeviceDesktop>
      <div className="text-block">
        <div className="frame-1530">
          <div className="new">ใหม่</div>
          <div className="mac-book-pro">AirPods Max 2</div>
          <div className="supercharged-by-m-2-pro-and-m-2-max">
            ประสบการณ์เสียงในเวอร์ชั่นรีมาสเตอร์{" "}
          </div>
        </div>
        <div className="available-starting-1-24-from-1999-or-333-mo-for-6-mo-before-trade-in">
          
เริ่มต้น ฿18,900{" "}
        </div>
      </div>
    </div>
  );
};
