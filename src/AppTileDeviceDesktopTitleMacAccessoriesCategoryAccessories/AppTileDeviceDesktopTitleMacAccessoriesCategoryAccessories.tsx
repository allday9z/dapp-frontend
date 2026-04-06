import "./AppTileDeviceDesktopTitleMacAccessoriesCategoryAccessories.css";
import { AppBlockImageProperty1Variant12DeviceDesktop } from "../AppBlockImageProperty1Variant12DeviceDesktop/AppBlockImageProperty1Variant12DeviceDesktop";

export interface IAppTileDeviceDesktopTitleMacAccessoriesCategoryAccessoriesProps {
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

export const AppTileDeviceDesktopTitleMacAccessoriesCategoryAccessories = ({
  device = "desktop",
  title = "mac-book-pro",
  category = "what-s-new",
  className,
  ...props
}: IAppTileDeviceDesktopTitleMacAccessoriesCategoryAccessoriesProps): JSX.Element => {
  const variantsClassName =
    "device-" + device + " title-" + title + " category-" + category;

  return (
    <div
      className={
        "app-tile-device-desktop-title-mac-accessories-category-accessories " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="app-block-tile">
        <AppBlockImageProperty1Variant12DeviceDesktop className="app-block-image-instance"></AppBlockImageProperty1Variant12DeviceDesktop>
        <div className="text-block">
          <div className="frame-1530">
            <div className="in-store">IN-STORE </div>
            <div className="mac-accessories">อุปกรณ์เสริม Mac </div>
            <div className="shop-mac-accessories-here">
              อุปกรณ์เสริมที่ช่วยเพิ่มประสิทธิภาพการทำงานบน Mac ให้สะดวกและครบยิ่งขึ้น{" "}
            </div>
          </div>
          <div className="available-from-342-or-57-mo-for-6-mo-before-trade-in">
            เริ่มต้น ฿790{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
