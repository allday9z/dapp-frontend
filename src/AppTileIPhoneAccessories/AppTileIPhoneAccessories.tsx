import "./AppTileIPhoneAccessories.css";
import { AppBlockImageVariant16 } from "../AppBlockImageVariant16/AppBlockImageVariant16";

export interface IAppTileIPhoneAccessoriesProps {
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

export const AppTileIPhoneAccessories = ({
  device = "desktop",
  title = "mac-book-pro",
  category = "what-s-new",
  className,
  ...props
}: IAppTileIPhoneAccessoriesProps): JSX.Element => {
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
        <AppBlockImageVariant16 className="app-block-image-instance"></AppBlockImageVariant16>
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
