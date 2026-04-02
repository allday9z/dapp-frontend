import "./AppTextTileAppStripeTilesNewDeviceDesktop.css";

export interface IAppTextTileAppStripeTilesNewDeviceDesktopProps {
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

export const AppTextTileAppStripeTilesNewDeviceDesktop = ({
  appStripeTiles = "new",
  device = "desktop",
  className,
  ...props
}: IAppTextTileAppStripeTilesNewDeviceDesktopProps): JSX.Element => {
  const variantsClassName =
    "app-stripe-tiles-" + appStripeTiles + " device-" + device;

  return (
    <div
      className={
        "app-text-tile-app-stripe-tiles-new-device-desktop " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="text">
        <div className="badge">
          <div className="new">NEW </div>
        </div>
        <div className="partner-delivery-and-pickup-pick-up-your-online-order-at-a-partner-store">
          <span>
            <span className="partner-delivery-and-pickup-pick-up-your-online-order-at-a-partner-store-span">
              Partner Delivery and Pickup.
            </span>
            <span className="partner-delivery-and-pickup-pick-up-your-online-order-at-a-partner-store-span2">
              Pick up your online order at a &lt;Partner&gt; Store
            </span>
          </span>{" "}
        </div>
      </div>
    </div>
  );
};
