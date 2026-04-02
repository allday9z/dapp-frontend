import "./AppTileDeviceDesktopTitleIPadAccessoriesCategoryAccessories.css";
import { AppBlockImageProperty1Variant13DeviceDesktop } from "../AppBlockImageProperty1Variant13DeviceDesktop/AppBlockImageProperty1Variant13DeviceDesktop";

export interface IAppTileDeviceDesktopTitleIPadAccessoriesCategoryAccessoriesProps {
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

export const AppTileDeviceDesktopTitleIPadAccessoriesCategoryAccessories = ({
  device = "desktop",
  title = "mac-book-pro",
  category = "what-s-new",
  className,
  ...props
}: IAppTileDeviceDesktopTitleIPadAccessoriesCategoryAccessoriesProps): JSX.Element => {
  const variantsClassName =
    "device-" + device + " title-" + title + " category-" + category;

  return (
    <div
      className={
        "app-tile-device-desktop-title-i-pad-accessories-category-accessories " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="app-block-tile-variant-2">
        <AppBlockImageProperty1Variant13DeviceDesktop className="app-block-image-instance"></AppBlockImageProperty1Variant13DeviceDesktop>
        <div className="text-block">
          <div className="frame-1531">
            <div className="new">NEW </div>
            <div className="i-pad-accessories">iPad Accessories </div>
            <div className="shop-i-pad-accessories-here">
              Shop iPad accessories here{" "}
            </div>
          </div>
          <div className="available-from-42-or-7-mo-for-6-mo-before-trade-in">
            Available from $42 or $7/mo. for 6 mo.* before trade-in{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
