import "./AppZigzagGrid.css";
import { ZigzagNeedHelp } from "../ZigzagNeedHelp/ZigzagNeedHelp";
import { ZigzagStoreNearYou } from "../ZigzagStoreNearYou/ZigzagStoreNearYou";
import { ZigzagJoinAClass } from "../ZigzagJoinAClass/ZigzagJoinAClass";

export interface IAppZigzagGridProps {
  device?: "mobile" | "desktop";
  className?: string;
}

export const AppZigzagGrid = ({
  device = "desktop",
  className,
  ...props
}: IAppZigzagGridProps): JSX.Element => {
  const variantsClassName = "device-" + device;

  return (
    <div
      className={
        "organism-app-zigzag-section-device-desktop " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="frame-1814">
        <ZigzagNeedHelp className="app-zigzag-instance"></ZigzagNeedHelp>
        <ZigzagStoreNearYou className="app-zigzag-instance2"></ZigzagStoreNearYou>
        <ZigzagJoinAClass className="app-zigzag-instance2"></ZigzagJoinAClass>
      </div>
      <div className="hp-divider"></div>
    </div>
  );
};
