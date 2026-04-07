import "./AppTileIPadAccessories.css";
import { AppBlockImageVariant13 } from "../AppBlockImageVariant13/AppBlockImageVariant13";

export interface IAppTileIPadAccessoriesProps {
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

export const AppTileIPadAccessories = ({
  device = "desktop",
  title = "mac-book-pro",
  category = "what-s-new",
  className,
  ...props
}: IAppTileIPadAccessoriesProps): JSX.Element => {
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
        <AppBlockImageVariant13 className="app-block-image-instance"></AppBlockImageVariant13>
        <div className="text-block">
          <div className="frame-1531">
            <div className="new">NEW </div>
            <div className="i-pad-accessories">อุปกรณ์เสริท iPad </div>
            <div className="shop-i-pad-accessories-here">
              เติมเต็มการใช้งาน iPad ให้หลากหลาย ทั้งทำงานและความบันเทิง{" "}
            </div>
          </div>
          <div className="available-from-42-or-7-mo-for-6-mo-before-trade-in">
            เริ่มต้น ฿390{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
