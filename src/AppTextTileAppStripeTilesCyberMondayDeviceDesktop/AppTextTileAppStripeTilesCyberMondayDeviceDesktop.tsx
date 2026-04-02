import "./AppTextTileAppStripeTilesCyberMondayDeviceDesktop.css";

export interface IAppTextTileAppStripeTilesCyberMondayDeviceDesktopProps {
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

export const AppTextTileAppStripeTilesCyberMondayDeviceDesktop = ({
  appStripeTiles = "new",
  device = "desktop",
  className,
  ...props
}: IAppTextTileAppStripeTilesCyberMondayDeviceDesktopProps): JSX.Element => {
  const variantsClassName =
    "app-stripe-tiles-" + appStripeTiles + " device-" + device;

  return (
    <div
      className={
        "app-text-tile-app-stripe-tiles-cyber-monday-device-desktop " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="frame-736">
        <div className="badge">
          <div className="cyber-monday">CYBER MONDAY </div>
        </div>
        <div className="exclusive-deals-online-only-four-days-august-1-4">
          <span>
            <span className="exclusive-deals-online-only-four-days-august-1-4-span">
              Exclusive deals online only. Four days
            </span>
            <span className="exclusive-deals-online-only-four-days-august-1-4-span2">
              August 1–4
            </span>
          </span>{" "}
        </div>
      </div>
    </div>
  );
};
