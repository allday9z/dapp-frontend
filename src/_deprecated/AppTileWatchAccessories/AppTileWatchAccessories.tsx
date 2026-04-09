import "./AppTileWatchAccessories.css";
import { AppBlockImageVariant15 } from "../AppBlockImageVariant15/AppBlockImageVariant15";

export interface IAppTileWatchAccessoriesProps {
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

export const AppTileWatchAccessories = ({
  device = "desktop",
  title = "mac-book-pro",
  category = "what-s-new",
  className,
  ...props
}: IAppTileWatchAccessoriesProps): JSX.Element => {
  const variantsClassName =
    "device-" + device + " title-" + title + " category-" + category;

  return (
    <div
      className={
        "app-tile-device-desktop-title-watch-accessories-category-accessories " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="app-block-tile">
        <AppBlockImageVariant15 className="app-block-image-instance"></AppBlockImageVariant15>
        <div className="text-block">
          <div className="frame-1530">
            <div className="cyber-monday">CYBER MONDAY </div>
            <div className="watch-accessories">Watch Accessories </div>
            <div className="shop-watch-accessories-here">
              Shop Watch accessories here{" "}
            </div>
          </div>
          <div className="available-from-138-or-23-mo-for-6-mo-before-trade-in">
            Available from $138 or $23/mo. for 6 mo.* before trade-in{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
