import "./AttachModuleSetProperty1QuickCheckout1DeviceDesktop.css";
import { ChevronRoundButtonChevronRoundButtonLeft } from "../ChevronRoundButtonChevronRoundButtonLeft/ChevronRoundButtonChevronRoundButtonLeft";
import { AttachModuleImageProperty1SmartFolioForIPadAir5thGeneration } from "../AttachModuleImageProperty1SmartFolioForIPadAir5thGeneration/AttachModuleImageProperty1SmartFolioForIPadAir5thGeneration";
import { AttachModuleImageProperty1MacBookAir } from "../AttachModuleImageProperty1MacBookAir/AttachModuleImageProperty1MacBookAir";
import { AttachModuleTileDeviceDesktop } from "../AttachModuleTileDeviceDesktop/AttachModuleTileDeviceDesktop";
import { AttachModuleImageProperty1ApplePencil2ndGeneration } from "../AttachModuleImageProperty1ApplePencil2ndGeneration/AttachModuleImageProperty1ApplePencil2ndGeneration";
import { AppBlockImageMagicKeyboardFolioForIPad109Inch } from "../AppBlockImageMagicKeyboardFolioForIPad109Inch/AppBlockImageMagicKeyboardFolioForIPad109Inch";
import { ChevronRoundButtonProperty1ChevronRoundButtonProperty2Right } from "../ChevronRoundButtonProperty1ChevronRoundButtonProperty2Right/ChevronRoundButtonProperty1ChevronRoundButtonProperty2Right";

export interface IAttachModuleSetProperty1QuickCheckout1DeviceDesktopProps {
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

export const AttachModuleSetProperty1QuickCheckout1DeviceDesktop = ({
  property1 = "trade-in-1",
  device = "desktop",
  className,
  ...props
}: IAttachModuleSetProperty1QuickCheckout1DeviceDesktopProps): JSX.Element => {
  const variantsClassName = "property-1-" + property1 + " device-" + device;

  return (
    <div
      className={
        "attach-module-set-property-1-quick-checkout-1-device-desktop " +
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
                <AttachModuleImageProperty1SmartFolioForIPadAir5thGeneration className="attach-module-image-instance" />
              }
              text="NEW"
              text2="Smart Folio for iPad Air (5th generation)"
              text3="$83"
              text4="Add to bag"
              className="attach-module-tile-instance"
            ></AttachModuleTileDeviceDesktop>
            <AttachModuleTileDeviceDesktop
              component={
                <AttachModuleImageProperty1ApplePencil2ndGeneration className="attach-module-image-instance2" />
              }
              text="SPECIAL OFFER"
              text2="Apple Pencil 2nd Generation"
              text3="$138"
              text4="Add to bag"
              className="attach-module-tile-instance"
            ></AttachModuleTileDeviceDesktop>
            <AttachModuleTileDeviceDesktop
              component={
                <AppBlockImageMagicKeyboardFolioForIPad109Inch className="app-block-image-magic-keyboard-folio-for-i-pad-10-9-inch-instance" />
              }
              text="NEW"
              text2="Magic Keyboard Folio for iPad 10.9-inch"
              text3="$126"
              text4="Add to bag"
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
