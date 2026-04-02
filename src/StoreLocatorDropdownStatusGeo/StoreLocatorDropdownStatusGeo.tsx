import "./StoreLocatorDropdownStatusGeo.css";
import { IconStore } from "../IconStore/IconStore";
import { IconChevronDirectionDown } from "../IconChevronDirectionDown/IconChevronDirectionDown";

export interface IStoreLocatorDropdownStatusGeoProps {
  status?: "geo" | "no-geo";
  text?: string;
  visibleComponent?: boolean;
  className?: string;
}

export const StoreLocatorDropdownStatusGeo = ({
  status = "geo",
  text = "undefined",
  visibleComponent = undefined,
  className,
  ...props
}: IStoreLocatorDropdownStatusGeoProps): JSX.Element => {
  const variantsClassName = "status-" + status;

  return (
    <div
      className={
        "store-locator-dropdown-status-geo " +
        className +
        " " +
        variantsClassName
      }
    >
      <IconStore className="icon-store-instance"></IconStore>
      <div className="frame-1178">
        <div className="text-global-nav-store-locator">
          <div className="qorem-ipsum-dolor-sit-ametor">
            {text}
          </div>
        </div>
        <IconChevronDirectionDown
          direction="down"
          className="icon-chevron-instance"
        ></IconChevronDirectionDown>
      </div>
    </div>
  );
};
