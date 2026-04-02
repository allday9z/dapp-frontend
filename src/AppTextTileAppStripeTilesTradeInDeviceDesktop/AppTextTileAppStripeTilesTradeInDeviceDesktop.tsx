import "./AppTextTileAppStripeTilesTradeInDeviceDesktop.css";

export interface IAppTextTileAppStripeTilesTradeInDeviceDesktopProps {
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

export const AppTextTileAppStripeTilesTradeInDeviceDesktop = ({
  appStripeTiles = "new",
  device = "desktop",
  className,
  ...props
}: IAppTextTileAppStripeTilesTradeInDeviceDesktopProps): JSX.Element => {
  const variantsClassName =
    "app-stripe-tiles-" + appStripeTiles + " device-" + device;

  return (
    <div
      className={
        "app-text-tile-app-stripe-tiles-trade-in-device-desktop " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="frame-736">
        <div className="badge">
          <div className="trade-in">TRADE-IN </div>
        </div>
        <div className="trade-in-your-device-for-credit-toward-a-new-one">
          <span>
            <span className="trade-in-your-device-for-credit-toward-a-new-one-span">
              Trade in your device for
            </span>
            <span className="trade-in-your-device-for-credit-toward-a-new-one-span2">
              credit toward a new one
            </span>
          </span>{" "}
        </div>
      </div>
    </div>
  );
};
