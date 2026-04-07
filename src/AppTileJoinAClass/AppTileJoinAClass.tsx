import "./AppTileJoinAClass.css";
import { AppBlockImageVariant6 } from "../AppBlockImageVariant6/AppBlockImageVariant6";

export interface IAppTileJoinAClassProps {
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

export const AppTileJoinAClass = ({
  device = "desktop",
  title = "mac-book-pro",
  category = "what-s-new",
  className,
  ...props
}: IAppTileJoinAClassProps): JSX.Element => {
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
        <AppBlockImageVariant6 className="app-block-image-instance"></AppBlockImageVariant6>
        <div className="text-block">
          <div className="frame-1530">
            <div className="in-store">IN-STORE </div>
            <div className="join-a-class">Group Demo</div>
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
