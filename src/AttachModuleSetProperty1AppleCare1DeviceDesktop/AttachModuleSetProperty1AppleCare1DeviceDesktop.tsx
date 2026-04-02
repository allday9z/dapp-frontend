import "./AttachModuleSetProperty1AppleCare1DeviceDesktop.css";
import { ChevronRoundButtonChevronRoundButtonLeft } from "../ChevronRoundButtonChevronRoundButtonLeft/ChevronRoundButtonChevronRoundButtonLeft";
import { AttachModuleImageProperty1AppleCareIPhone } from "../AttachModuleImageProperty1AppleCareIPhone/AttachModuleImageProperty1AppleCareIPhone";
import { AttachModuleImageProperty1MacBookAir } from "../AttachModuleImageProperty1MacBookAir/AttachModuleImageProperty1MacBookAir";
import { AttachModuleTileDeviceDesktop } from "../AttachModuleTileDeviceDesktop/AttachModuleTileDeviceDesktop";
import { AttachModuleImageProperty1AppleCareIPad } from "../AttachModuleImageProperty1AppleCareIPad/AttachModuleImageProperty1AppleCareIPad";
import { AttachModuleImageProperty1AppleCareMacbook } from "../AttachModuleImageProperty1AppleCareMacbook/AttachModuleImageProperty1AppleCareMacbook";
import { ChevronRoundButtonProperty1ChevronRoundButtonProperty2Right } from "../ChevronRoundButtonProperty1ChevronRoundButtonProperty2Right/ChevronRoundButtonProperty1ChevronRoundButtonProperty2Right";

export interface IAttachModuleSetProperty1AppleCare1DeviceDesktopProps {
  property1?:
    | "trade-in-1"
    | "trade-in-3"
    | "trade-in-2"
    | "back-to-school-3"
    | "all-things-i-pad-3"
    | "back-to-school-1"
    | "back-to-school-2"
    | "all-things-i-pad-1"
    | "all-things-i-pad-2"
    | "apple-care-1"
    | "apple-care-2"
    | "apple-care-3"
    | "quick-checkout-1"
    | "quick-checkout-2"
    | "quick-checkout-3";
  device?: "desktop";
  className?: string;
}

export const AttachModuleSetProperty1AppleCare1DeviceDesktop = ({
  property1 = "trade-in-1",
  device = "desktop",
  className,
  ...props
}: IAttachModuleSetProperty1AppleCare1DeviceDesktopProps): JSX.Element => {
  const variantsClassName = "property-1-" + property1 + " device-" + device;

  return (
    <div
      className={
        "attach-module-set-property-1-apple-care-1-device-desktop " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="conversion">
        <div className="full-attach">
          <ChevronRoundButtonChevronRoundButtonLeft className="chevron-round-button-instance"></ChevronRoundButtonChevronRoundButtonLeft>
          <div className="attach-row">
            <AttachModuleTileDeviceDesktop
              component={
                <AttachModuleImageProperty1AppleCareIPhone className="attach-module-image-instance" />
              }
              text="NEW"
              text2="iPhone 14 Pro"
              text3="$1099"
              className="attach-module-tile-instance"
            ></AttachModuleTileDeviceDesktop>
            <AttachModuleTileDeviceDesktop
              component={
                <AttachModuleImageProperty1AppleCareIPad className="attach-module-image-instance" />
              }
              text="NEW"
              text2="iPad Pro"
              text3="$588"
              className="attach-module-tile-instance"
            ></AttachModuleTileDeviceDesktop>
            <AttachModuleTileDeviceDesktop
              component={
                <AttachModuleImageProperty1AppleCareMacbook className="attach-module-image-instance" />
              }
              text="NEW"
              text2="MacBook Air"
              text3="$1599"
              className="attach-module-tile-instance"
            ></AttachModuleTileDeviceDesktop>
          </div>
          <ChevronRoundButtonProperty1ChevronRoundButtonProperty2Right
            property2="right"
            className="chevron-round-button-instance2"
          ></ChevronRoundButtonProperty1ChevronRoundButtonProperty2Right>
        </div>
        <div className="carousel-control">
          <div className="ellipse-6"></div>
          <div className="ellipse-7"></div>
          <div className="ellipse-8"></div>
        </div>
      </div>
    </div>
  );
};
