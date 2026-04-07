import "./AppTileGrid.css";
import { ProductStripe } from "../ProductStripe/ProductStripe";
import { AppTileMacBookPro } from "../AppTileMacBookPro/AppTileMacBookPro";
import { AppTileMacMini } from "../AppTileMacMini/AppTileMacMini";
import { AppTileHomePod } from "../AppTileHomePod/AppTileHomePod";
import { AppTileSwitchToMac } from "../AppTileSwitchToMac/AppTileSwitchToMac";
import { AppTileAppleTvHd } from "../AppTileAppleTvHd/AppTileAppleTvHd";
import { cloneElement, type JSX } from "react";

export interface IAppTileGridProps {
  device?: "mobile" | "desktop";
  heading?: string;
  text?: string;
  text2?: string;
  component?: JSX.Element;
  component2?: JSX.Element;
  component3?: JSX.Element;
  component4?: JSX.Element;
  component5?: JSX.Element;
  className?: string;
}

export const AppTileGrid = ({
  device = "desktop",
  heading = "ผลิตภัณฑ์ล่าสุดของ Apple",
  component,
  component2,
  component3,
  component4,
  component5,
  className,
  ...props
}: IAppTileGridProps): JSX.Element => {
  const variantsClassName = "device-" + device;
  const customTiles = [component, component2, component3, component4, component5].filter(
    Boolean
  ) as JSX.Element[];
  const tiles =
    customTiles.length > 0
      ? customTiles.map((tile, i) =>
          tile.key != null ? tile : cloneElement(tile, { key: `tile-${i}` })
        )
      : [
          <AppTileMacBookPro
            key="mac-book-pro"
            text="Available starting 1.24 from $1999 or $333/mo. for 6 mo.* before trade-in"
            className="app-tile-instance"
          />,
          <AppTileMacMini
            key="mac-mini"
            title="mac-mini"
            text="Available starting 1.24 from $738 or $123/mo. for 6 mo.* before trade-in"
            className="app-tile-instance"
          />,
          <AppTileHomePod
            key="home-pod"
            title="home-pod"
            text="Available starting 1.24 from $282 or $47/mo. for 6 mo.* before trade-in"
            className="app-tile-instance"
          />,
          <AppTileSwitchToMac
            key="switch-to-mac"
            title="switch-to-mac"
            className="app-tile-instance"
          />,
          <AppTileAppleTvHd
            key="apple-tv-hd"
            title="apple-tv-hd"
            text="Available from $342 or $57/mo. for 6 mo.* before trade-in"
            className="app-tile-instance"
          />,
        ];

  return (
    <div
      className={
        "organism-device-desktop " + className + " " + variantsClassName
      }
    >
      <div className="frame-1538">
        <div className="see-what-s-new">{heading}</div>
      </div>

      <ProductStripe className="frame-1539">
        {tiles}
      </ProductStripe>

      <div className="line-21"></div>
    </div>
  );
};
