import "./AttachModuleSetProperty1AllThingsIPad1DeviceDesktop.css";
import { ChevronRoundButtonChevronRoundButtonLeft } from "../ChevronRoundButtonChevronRoundButtonLeft/ChevronRoundButtonChevronRoundButtonLeft";
import { AppBlockImageIPadAir } from "../AppBlockImageIPadAir/AppBlockImageIPadAir";
import { AttachModuleImageProperty1MacBookAir } from "../AttachModuleImageProperty1MacBookAir/AttachModuleImageProperty1MacBookAir";
import { AttachModuleTileDeviceDesktop } from "../AttachModuleTileDeviceDesktop/AttachModuleTileDeviceDesktop";
import { AppBlockImageIPadPro } from "../AppBlockImageIPadPro/AppBlockImageIPadPro";
import { AppBlockImageMagicKeyboardFolioForIPad109Inch } from "../AppBlockImageMagicKeyboardFolioForIPad109Inch/AppBlockImageMagicKeyboardFolioForIPad109Inch";
import { ChevronRoundButtonProperty1ChevronRoundButtonProperty2Right } from "../ChevronRoundButtonProperty1ChevronRoundButtonProperty2Right/ChevronRoundButtonProperty1ChevronRoundButtonProperty2Right";

export interface IAttachModuleSetProperty1AllThingsIPad1DeviceDesktopProps {
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

export const AttachModuleSetProperty1AllThingsIPad1DeviceDesktop = ({
  property1 = "trade-in-1",
  device = "desktop",
  className,
  ...props
}: IAttachModuleSetProperty1AllThingsIPad1DeviceDesktopProps): JSX.Element => {
  const variantsClassName = "property-1-" + property1 + " device-" + device;

  return (
    <div
      className={
        "attach-module-set-property-1-all-things-i-pad-1-device-desktop " +
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
                <AppBlockImageIPadAir className="app-block-image-i-pad-air-instance" />
              }
              text="iPad Air"
              text2="$49 "
              text3="Shop models"
              className="attach-module-tile-instance"
            ></AttachModuleTileDeviceDesktop>
            <AttachModuleTileDeviceDesktop
              component={
                <AppBlockImageIPadPro className="app-block-image-i-pad-pro-instance" />
              }
              text="SPECIAL OFFER"
              text2="iPad Pro"
              text3="$588"
              className="attach-module-tile-instance"
            ></AttachModuleTileDeviceDesktop>
            <AttachModuleTileDeviceDesktop
              component={
                <AppBlockImageMagicKeyboardFolioForIPad109Inch className="app-block-image-magic-keyboard-folio-for-i-pad-10-9-inch-instance" />
              }
              text="NEW"
              text2="Magic Keyboard Folio for iPad 10.9-inch"
              text3="$126"
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
