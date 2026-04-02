import "./AppTileDeviceDesktopTitleJoinAClassCategoryStoreService.css";
import { AppBlockImageProperty1Variant6DeviceDesktop } from "../AppBlockImageProperty1Variant6DeviceDesktop/AppBlockImageProperty1Variant6DeviceDesktop";

export interface IAppTileDeviceDesktopTitleJoinAClassCategoryStoreServiceProps {
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

export const AppTileDeviceDesktopTitleJoinAClassCategoryStoreService = ({
  device = "desktop",
  title = "mac-book-pro",
  category = "what-s-new",
  className,
  ...props
}: IAppTileDeviceDesktopTitleJoinAClassCategoryStoreServiceProps): JSX.Element => {
  const variantsClassName =
    "device-" + device + " title-" + title + " category-" + category;

  return (
    <div
      className={
        "app-tile-device-desktop-title-join-a-class-category-store-service " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="app-block-tile">
        <AppBlockImageProperty1Variant6DeviceDesktop className="app-block-image-instance"></AppBlockImageProperty1Variant6DeviceDesktop>
        <div className="text-block">
          <div className="frame-1530">
            <div className="in-store">IN-STORE </div>
            <div className="join-a-class">Join a class </div>
            <div className="free-sessions">Free sessions </div>
          </div>
          <div className="free-sessions-that-inspire-hands-on-creativity-in-photography-art-music-and-more">
            Free sessions that inspire hands-on creativity in photography, art,
            music, and more.
            <br />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
