import "./AppTileAppleTvAccessories.css";
import { AppBlockImageVariant14 } from "../AppBlockImageVariant14/AppBlockImageVariant14";

export interface IAppTileAppleTvAccessoriesProps {
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

export const AppTileAppleTvAccessories = ({
  device = "desktop",
  title = "mac-book-pro",
  category = "what-s-new",
  className,
  ...props
}: IAppTileAppleTvAccessoriesProps): JSX.Element => {
  const variantsClassName =
    "device-" + device + " title-" + title + " category-" + category;

  return (
    <div
      className={
        "app-tile-device-desktop-title-apple-tv-accessories-category-accessories " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="app-block-tile">
        <AppBlockImageVariant14 className="app-block-image-instance"></AppBlockImageVariant14>
        <div className="text-block">
          <div className="frame-1530">
            <div className="sale">SALE </div>
            <div className="apple-tv-accessories">Apple TV Accessories </div>
            <div className="shop-apple-tv-accessories-here">
              Shop Apple TV accessories here{" "}
            </div>
          </div>
          <div className="available-from-102-or-17-mo-for-6-mo-before-trade-in">
            Available from $102 or $17/mo. for 6 mo.* before trade-in{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
