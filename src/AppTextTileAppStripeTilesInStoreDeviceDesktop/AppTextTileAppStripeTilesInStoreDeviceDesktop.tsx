import "./AppTextTileAppStripeTilesInStoreDeviceDesktop.css";

export interface IAppTextTileAppStripeTilesInStoreDeviceDesktopProps {
  appStripeTiles?:
    | "new"
    | "financing"
    | "cyber-monday"
    | "in-store"
    | "sale"
    | "trade-in";
  device?: "desktop" | "mobile";
  className?: string;
}

export const AppTextTileAppStripeTilesInStoreDeviceDesktop = ({
  appStripeTiles = "new",
  device = "desktop",
  className,
  ...props
}: IAppTextTileAppStripeTilesInStoreDeviceDesktopProps): JSX.Element => {
  const variantsClassName =
    "app-stripe-tiles-" + appStripeTiles + " device-" + device;

  return (
    <div
      className={
        "app-text-tile-app-stripe-tiles-in-store-device-desktop " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="frame-736">
        <div className="badge">
          <div className="in-store">IN-STORE </div>
        </div>
        <div className="learn-create-and-be-inspired-in-hands-on-sessions-at-your-partner-store">
          <span>
            <span className="learn-create-and-be-inspired-in-hands-on-sessions-at-your-partner-store-span">
              Learn, create, and be inspired in
            </span>
            <span className="learn-create-and-be-inspired-in-hands-on-sessions-at-your-partner-store-span2">
              hands-on sessions at your &lt;Partner&gt; Store
            </span>
          </span>{" "}
        </div>
      </div>
    </div>
  );
};
