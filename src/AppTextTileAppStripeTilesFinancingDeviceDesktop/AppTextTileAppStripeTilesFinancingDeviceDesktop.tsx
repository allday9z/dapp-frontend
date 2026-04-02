import "./AppTextTileAppStripeTilesFinancingDeviceDesktop.css";

export interface IAppTextTileAppStripeTilesFinancingDeviceDesktopProps {
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

export const AppTextTileAppStripeTilesFinancingDeviceDesktop = ({
  appStripeTiles = "new",
  device = "desktop",
  className,
  ...props
}: IAppTextTileAppStripeTilesFinancingDeviceDesktopProps): JSX.Element => {
  const variantsClassName =
    "app-stripe-tiles-" + appStripeTiles + " device-" + device;

  return (
    <div
      className={
        "app-text-tile-app-stripe-tiles-financing-device-desktop " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="frame-736">
        <div className="badge">
          <div className="financing">FINANCING </div>
        </div>
        <div className="get-special-financing-pay-over-time-interest-free-with-apple-card">
          <span>
            <span className="get-special-financing-pay-over-time-interest-free-with-apple-card-span">
              Get special financing.
            </span>
            <span className="get-special-financing-pay-over-time-interest-free-with-apple-card-span2">
              Pay over time, interest-free with Apple Card
            </span>
          </span>{" "}
        </div>
      </div>
    </div>
  );
};
