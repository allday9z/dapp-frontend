import "./AttachModuleSetProperty1TradeIn1DeviceDesktop.css";
import { ChevronRoundButtonChevronRoundButtonLeft } from "../ChevronRoundButtonChevronRoundButtonLeft/ChevronRoundButtonChevronRoundButtonLeft";
import { AttachModuleTileDeviceDesktop } from "../AttachModuleTileDeviceDesktop/AttachModuleTileDeviceDesktop";
import { AppBlockImageProperty1MacBookPro } from "../AppBlockImageProperty1MacBookPro/AppBlockImageProperty1MacBookPro";
import { AttachModuleImageProperty1MacBookAir } from "../AttachModuleImageProperty1MacBookAir/AttachModuleImageProperty1MacBookAir";
import { AppBlockImageIMac } from "../AppBlockImageIMac/AppBlockImageIMac";
import { ChevronRoundButtonChevronRoundButtonRight } from "../ChevronRoundButtonChevronRoundButtonRight/ChevronRoundButtonChevronRoundButtonRight";
import { BannerCarouselSliderCarouselNoBackgroundStatesDefaultDeviceDesktop } from "../BannerCarouselSliderCarouselNoBackgroundStatesDefaultDeviceDesktop/BannerCarouselSliderCarouselNoBackgroundStatesDefaultDeviceDesktop";

export interface IAttachModuleSetProperty1TradeIn1DeviceDesktopProps {
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

export const AttachModuleSetProperty1TradeIn1DeviceDesktop = ({
  property1 = "trade-in-1",
  device = "desktop",
  className,
  ...props
}: IAttachModuleSetProperty1TradeIn1DeviceDesktopProps): JSX.Element => {
  const variantsClassName = "property-1-" + property1 + " device-" + device;

  return (
    <div
      className={
        "attach-module-set-property-1-trade-in-1-device-desktop " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="frame-1261">
        <div className="frame-1561">
          <ChevronRoundButtonChevronRoundButtonLeft className="chevron-round-button-instance"></ChevronRoundButtonChevronRoundButtonLeft>
          <div className="attach-row">
            <AttachModuleTileDeviceDesktop
              text="$756"
              text2="Shop models"
              className="attach-module-tile-instance"
            ></AttachModuleTileDeviceDesktop>
            <AttachModuleTileDeviceDesktop
              component={
                <AppBlockImageProperty1MacBookPro className="app-block-image-instance" />
              }
              text="MacBook Pro"
              text2="$836"
              text3="Shop models"
              className="attach-module-tile-instance2"
            ></AttachModuleTileDeviceDesktop>
            <AttachModuleTileDeviceDesktop
              component={
                <AppBlockImageIMac className="app-block-image-i-mac-instance" />
              }
              text="iMac"
              text2="$1599"
              text3="Shop models"
              className="attach-module-tile-instance2"
            ></AttachModuleTileDeviceDesktop>
          </div>
          <ChevronRoundButtonChevronRoundButtonRight
            chevronRoundButton="right"
            className="chevron-round-button-instance2"
          ></ChevronRoundButtonChevronRoundButtonRight>
        </div>
        <BannerCarouselSliderCarouselNoBackgroundStatesDefaultDeviceDesktop
          carousel="no-background"
          className="banner-carousel-slider-instance"
        ></BannerCarouselSliderCarouselNoBackgroundStatesDefaultDeviceDesktop>
      </div>
    </div>
  );
};
