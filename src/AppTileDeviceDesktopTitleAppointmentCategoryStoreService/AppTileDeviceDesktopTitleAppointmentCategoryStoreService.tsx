import "./AppTileDeviceDesktopTitleAppointmentCategoryStoreService.css";
import { AppBlockImageProperty1Variant7DeviceDesktop } from "../AppBlockImageProperty1Variant7DeviceDesktop/AppBlockImageProperty1Variant7DeviceDesktop";

export interface IAppTileDeviceDesktopTitleAppointmentCategoryStoreServiceProps {
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

export const AppTileDeviceDesktopTitleAppointmentCategoryStoreService = ({
  device = "desktop",
  title = "mac-book-pro",
  category = "what-s-new",
  className,
  ...props
}: IAppTileDeviceDesktopTitleAppointmentCategoryStoreServiceProps): JSX.Element => {
  const variantsClassName =
    "device-" + device + " title-" + title + " category-" + category;

  return (
    <div
      className={
        "app-tile-device-desktop-title-appointment-category-store-service " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="app-block-tile-variant-2">
        <AppBlockImageProperty1Variant7DeviceDesktop className="app-block-image-instance"></AppBlockImageProperty1Variant7DeviceDesktop>
        <div className="text-block">
          <div className="frame-1531">
            <div className="in-store">IN-STORE </div>
            <div className="appointment">Appointment </div>
            <div className="apple-support-has-you-covered">
              Apple Support has you covered{" "}
            </div>
          </div>
          <div className="from-setting-up-your-device-to-recovering-your-apple-id-to-replacing-the-screen-apple-support-has-you-covered">
            From setting up your device to recovering your Apple ID to replacing
            the screen, Apple Support has you covered.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
