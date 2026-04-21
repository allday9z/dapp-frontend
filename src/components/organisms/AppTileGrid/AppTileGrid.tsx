import "./AppTileGrid.css";
import { ProductStripe } from "../ProductStripe/ProductStripe";
import { AppTile, type IAppTileProps } from "../../molecules/AppTile/AppTile";

export interface IAppTileGridProps {
  items: IAppTileProps[];
  heading?: string;
  className?: string;
}

export const AppTileGrid = ({
  items,
  heading = "ผลิตภัณฑ์ล่าสุดของ Apple",
  className = "",
}: IAppTileGridProps): JSX.Element => (
  <div className={`organism-device-desktop ${className}`}>
    <div className="hp-heading-row">
      <div className="see-what-s-new">{heading}</div>
    </div>
    <ProductStripe className="frame-1539">
      {items.map((item) => (
        <AppTile key={item.title} {...item} className="app-tile-instance"/>
      ))}
    </ProductStripe>  
    <div className="hp-divider"></div>
  </div>
);
