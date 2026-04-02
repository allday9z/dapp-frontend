import "./AppTileDeviceDesktopTitleAppleRepairCategoryStoreService.css";
import { AppBlockImageProperty1Variant11DeviceDesktop } from "../AppBlockImageProperty1Variant11DeviceDesktop/AppBlockImageProperty1Variant11DeviceDesktop";

export interface IAppTileDeviceDesktopTitleAppleRepairCategoryStoreServiceProps {
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

export const AppTileDeviceDesktopTitleAppleRepairCategoryStoreService = ({
  device = "desktop",
  title = "mac-book-pro",
  category = "what-s-new",
  className,
  ...props
}: IAppTileDeviceDesktopTitleAppleRepairCategoryStoreServiceProps): JSX.Element => {
  const variantsClassName =
    "device-" + device + " title-" + title + " category-" + category;

  return (
    <div
      className={
        "app-tile-device-desktop-title-apple-repair-category-store-service " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="app-block-tile">
        <AppBlockImageProperty1Variant11DeviceDesktop className="app-block-image-instance"></AppBlockImageProperty1Variant11DeviceDesktop>
        <div className="text-block">
          <div className="frame-1530">
            <div className="in-store">IN-STORE </div>
            <div className="apple-repair">Apple Repair </div>
            <div className="schedule-a-visit">Schedule a visit </div>
          </div>
          <div className="online-or-over-the-phone-we-ll-arrange-shipment-for-your-product-to-an-apple-repair-center">
            Online or over the phone, we&#039;ll arrange shipment for your
            product to an Apple Repair Center.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
