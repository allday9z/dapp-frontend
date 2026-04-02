import "./OrganismDeviceDesktop.css";
import { ProductStripe } from "../ProductStripe/ProductStripe";
import { AppTileDeviceDesktopCategoryWhatSNewTitleMacBookPro } from "../AppTileDeviceDesktopCategoryWhatSNewTitleMacBookPro/AppTileDeviceDesktopCategoryWhatSNewTitleMacBookPro";
import { AppTileDeviceDesktopTitleMacMiniCategoryWhatSNew } from "../AppTileDeviceDesktopTitleMacMiniCategoryWhatSNew/AppTileDeviceDesktopTitleMacMiniCategoryWhatSNew";
import { AppTileDeviceDesktopTitleHomePodCategoryWhatSNew } from "../AppTileDeviceDesktopTitleHomePodCategoryWhatSNew/AppTileDeviceDesktopTitleHomePodCategoryWhatSNew";
import { AppTileDeviceDesktopTitleSwitchToMacCategoryWhatSNew } from "../AppTileDeviceDesktopTitleSwitchToMacCategoryWhatSNew/AppTileDeviceDesktopTitleSwitchToMacCategoryWhatSNew";
import { AppTileDeviceDesktopTitleAppleTvHdCategoryWhatSNew } from "../AppTileDeviceDesktopTitleAppleTvHdCategoryWhatSNew/AppTileDeviceDesktopTitleAppleTvHdCategoryWhatSNew";

export interface IOrganismDeviceDesktopProps {
  device?: "mobile" | "desktop";
  text?: string;
  text2?: string;
  component?: JSX.Element;
  component2?: JSX.Element;
  component3?: JSX.Element;
  component4?: JSX.Element;
  component5?: JSX.Element;
  className?: string;
}

export const OrganismDeviceDesktop = ({
  device = "desktop",
  className,
  ...props
}: IOrganismDeviceDesktopProps): JSX.Element => {
  const variantsClassName = "device-" + device;

  return (
    <div
      className={
        "organism-device-desktop " + className + " " + variantsClassName
      }
    >
      {/* Heading — stays inside padded frame */}
      <div className="frame-1538">
        <div className="see-what-s-new">See what's new.</div>
      </div>

      {/* Tiles — full-width ProductStripe with < > arrows */}
      <ProductStripe className="frame-1539">
        <AppTileDeviceDesktopCategoryWhatSNewTitleMacBookPro
          text="Available starting 1.24 from $1999 or $333/mo. for 6 mo.* before trade-in"
          className="app-tile-instance"
        />
        <AppTileDeviceDesktopTitleMacMiniCategoryWhatSNew
          title="mac-mini"
          text="Available starting 1.24 from $738 or $123/mo. for 6 mo.* before trade-in"
          className="app-tile-instance"
        />
        <AppTileDeviceDesktopTitleHomePodCategoryWhatSNew
          title="home-pod"
          text="Available starting 1.24 from $282 or $47/mo. for 6 mo.* before trade-in"
          className="app-tile-instance"
        />
        <AppTileDeviceDesktopTitleSwitchToMacCategoryWhatSNew
          title="switch-to-mac"
          className="app-tile-instance"
        />
        <AppTileDeviceDesktopTitleAppleTvHdCategoryWhatSNew
          title="apple-tv-hd"
          text="Available from $342 or $57/mo. for 6 mo.* before trade-in"
          className="app-tile-instance"
        />
      </ProductStripe>

      <div className="line-21"></div>
    </div>
  );
};
