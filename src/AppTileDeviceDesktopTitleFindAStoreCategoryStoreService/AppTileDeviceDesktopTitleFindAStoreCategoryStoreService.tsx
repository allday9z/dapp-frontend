import "./AppTileDeviceDesktopTitleFindAStoreCategoryStoreService.css";
import { AppBlockImageProperty1Variant9DeviceDesktop } from "../AppBlockImageProperty1Variant9DeviceDesktop/AppBlockImageProperty1Variant9DeviceDesktop";

export interface IAppTileDeviceDesktopTitleFindAStoreCategoryStoreServiceProps {
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

export const AppTileDeviceDesktopTitleFindAStoreCategoryStoreService = ({
  device = "desktop",
  title = "mac-book-pro",
  category = "what-s-new",
  className,
  ...props
}: IAppTileDeviceDesktopTitleFindAStoreCategoryStoreServiceProps): JSX.Element => {
  const variantsClassName =
    "device-" + device + " title-" + title + " category-" + category;

  return (
    <div
      className={
        "app-tile-device-desktop-title-find-a-store-category-store-service " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="app-block-tile">
        <AppBlockImageProperty1Variant9DeviceDesktop className="app-block-image-instance"></AppBlockImageProperty1Variant9DeviceDesktop>
        <div className="text-block">
          <div className="frame-1530">
            <div className="in-store">IN-STORE </div>
            <div className="find-a-store">Find a Store </div>
            <div className="shop-the-latest-apple-products">
              Shop the latest Apple products{" "}
            </div>
          </div>
          <div className="more-ways-to-shop-find-an-apple-store-or-other-retailer-near-you">
            More ways to shop: Find an Apple Store or other retailer near you.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
