import "./AppTileMacMini.css";
import { AppBlockImageVariant2 } from "../AppBlockImageVariant2/AppBlockImageVariant2";

export interface IAppTileMacMiniProps {
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
  text?: string;
  className?: string;
}

export const AppTileMacMini = ({
  device = "desktop",
  title = "mac-book-pro",
  category = "what-s-new",
  text = "undefined",
  className,
  ...props
}: IAppTileMacMiniProps): JSX.Element => {
  const variantsClassName =
    "device-" + device + " title-" + title + " category-" + category;

  return (
    <div
      className={
        "app-tile-device-desktop-title-mac-mini-category-what-s-new " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="app-block-tile-variant-2">
        <AppBlockImageVariant2 className="app-block-image-instance"></AppBlockImageVariant2>
        <div className="text-block">
          <div className="frame-1531">
            <div className="new">ใหม่ </div>
            <div className="mac-mini">MacBook Neo </div>
            <div className="supercharged-by-m-2-and-m-2-pro">
              สุดปัง ในราคาสุดว้าว{" "}
            </div>
          </div>
          <div className="available-starting-1-24-from-738-or-123-mo-for-6-mo-before-trade-in">
            เริ่มต้น ฿19,900{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
