import "./OrganismAppZigzagSectionDeviceDesktop.css";
import { AppZigzagProperty1NeedHelpDeviceDesktop } from "../AppZigzagProperty1NeedHelpDeviceDesktop/AppZigzagProperty1NeedHelpDeviceDesktop";
import { AppZigzagProperty1StoreNearYouDeviceDesktop } from "../AppZigzagProperty1StoreNearYouDeviceDesktop/AppZigzagProperty1StoreNearYouDeviceDesktop";
import { AppZigzagProperty1JoinAClassDeviceDesktop } from "../AppZigzagProperty1JoinAClassDeviceDesktop/AppZigzagProperty1JoinAClassDeviceDesktop";

export interface IOrganismAppZigzagSectionDeviceDesktopProps {
  device?: "mobile" | "desktop";
  className?: string;
}

export const OrganismAppZigzagSectionDeviceDesktop = ({
  device = "desktop",
  className,
  ...props
}: IOrganismAppZigzagSectionDeviceDesktopProps): JSX.Element => {
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
        <AppZigzagProperty1NeedHelpDeviceDesktop className="app-zigzag-instance"></AppZigzagProperty1NeedHelpDeviceDesktop>
        <AppZigzagProperty1StoreNearYouDeviceDesktop className="app-zigzag-instance2"></AppZigzagProperty1StoreNearYouDeviceDesktop>
        <AppZigzagProperty1JoinAClassDeviceDesktop className="app-zigzag-instance2"></AppZigzagProperty1JoinAClassDeviceDesktop>
      </div>
      <div className="line-23"></div>
    </div>
  );
};
