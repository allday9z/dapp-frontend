import "./AppTextTileAppStripeTilesSaleDeviceDesktop.css";

export interface IAppTextTileAppStripeTilesSaleDeviceDesktopProps {
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

export const AppTextTileAppStripeTilesSaleDeviceDesktop = ({
  appStripeTiles = "new",
  device = "desktop",
  className,
  ...props
}: IAppTextTileAppStripeTilesSaleDeviceDesktopProps): JSX.Element => {
  const variantsClassName =
    "app-stripe-tiles-" + appStripeTiles + " device-" + device;

  return (
    <div
      className={
        "app-text-tile-app-stripe-tiles-sale-device-desktop " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="frame-736">
        <div className="badge">
          <div className="sale">SALE </div>
        </div>
        <div className="find-low-everyday-prices-and-buy-online-for-delivery-or-in-store-pick-up">
          <span>
            <span className="find-low-everyday-prices-and-buy-online-for-delivery-or-in-store-pick-up-span">
              Find low everyday prices and buy online
            </span>
            <span className="find-low-everyday-prices-and-buy-online-for-delivery-or-in-store-pick-up-span2">
              for delivery or in-store pick-up
            </span>
          </span>{" "}
        </div>
      </div>
    </div>
  );
};
