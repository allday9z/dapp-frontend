import "./AppTileDeviceDesktopTitleDeliveryAndPickupCategoryStoreService.css";
import { AppBlockImageProperty1Variant8DeviceDesktop } from "../AppBlockImageProperty1Variant8DeviceDesktop/AppBlockImageProperty1Variant8DeviceDesktop";

export interface IAppTileDeviceDesktopTitleDeliveryAndPickupCategoryStoreServiceProps {
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

export const AppTileDeviceDesktopTitleDeliveryAndPickupCategoryStoreService = ({
  device = "desktop",
  title = "mac-book-pro",
  category = "what-s-new",
  className,
  ...props
}: IAppTileDeviceDesktopTitleDeliveryAndPickupCategoryStoreServiceProps): JSX.Element => {
  const variantsClassName =
    "device-" + device + " title-" + title + " category-" + category;

  return (
    <div
      className={
        "app-tile-device-desktop-title-delivery-and-pickup-category-store-service " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="app-block-tile">
        <AppBlockImageProperty1Variant8DeviceDesktop className="app-block-image-instance"></AppBlockImageProperty1Variant8DeviceDesktop>
        <div className="text-block">
          <div className="frame-1530">
            <div className="in-store">IN-STORE </div>
            <div className="delivery-and-pickup">Delivery and Pickup </div>
            <div className="get-free-delivery-or-in-store-pick-up">
              Get free delivery or in-store pick-up{" "}
            </div>
          </div>
          <div className="pick-up-your-online-order-at-the-apple-store">
            Pick up your online order at the Apple Store.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
