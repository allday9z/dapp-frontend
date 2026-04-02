import "./AppTileDeviceDesktopTitleIPhoneAccessoriesCategoryAccessories.css";
import { AppBlockImageProperty1Variant16DeviceDesktop } from "../AppBlockImageProperty1Variant16DeviceDesktop/AppBlockImageProperty1Variant16DeviceDesktop";

export interface IAppTileDeviceDesktopTitleIPhoneAccessoriesCategoryAccessoriesProps {
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

export const AppTileDeviceDesktopTitleIPhoneAccessoriesCategoryAccessories = ({
  device = "desktop",
  title = "mac-book-pro",
  category = "what-s-new",
  className,
  ...props
}: IAppTileDeviceDesktopTitleIPhoneAccessoriesCategoryAccessoriesProps): JSX.Element => {
  const variantsClassName =
    "device-" + device + " title-" + title + " category-" + category;

  return (
    <div
      className={
        "app-tile-device-desktop-title-i-phone-accessories-category-accessories " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="app-block-tile">
        <AppBlockImageProperty1Variant16DeviceDesktop className="app-block-image-instance"></AppBlockImageProperty1Variant16DeviceDesktop>
        <div className="text-block">
          <div className="frame-1530">
            <div className="in-store">IN-STORE </div>
            <div className="i-phone-accessories">iPhone Accessories </div>
            <div className="shop-i-phone-accessories-here">
              Shop iPhone accessories here{" "}
            </div>
          </div>
          <div className="available-from-54-or-9-mo-for-6-mo-before-trade-in">
            Available from $54 or $9/mo. for 6 mo.* before trade-in{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
