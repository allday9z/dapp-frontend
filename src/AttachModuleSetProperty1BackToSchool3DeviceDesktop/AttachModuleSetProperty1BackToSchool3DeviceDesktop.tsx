import "./AttachModuleSetProperty1BackToSchool3DeviceDesktop.css";
import { ChevronRoundButtonProperty1ChevronRoundButtonProperty2Left } from "../ChevronRoundButtonProperty1ChevronRoundButtonProperty2Left/ChevronRoundButtonProperty1ChevronRoundButtonProperty2Left";
import { AttachModuleTileDeviceDesktop } from "../AttachModuleTileDeviceDesktop/AttachModuleTileDeviceDesktop";
import { AppBlockImageProperty1MacBookPro } from "../AppBlockImageProperty1MacBookPro/AppBlockImageProperty1MacBookPro";
import { AttachModuleImageProperty1MacBookAir } from "../AttachModuleImageProperty1MacBookAir/AttachModuleImageProperty1MacBookAir";
import { AppBlockImageAppleWatchUltraOrangeAlpineLoop } from "../AppBlockImageAppleWatchUltraOrangeAlpineLoop/AppBlockImageAppleWatchUltraOrangeAlpineLoop";
import { ChevronRoundButtonProperty1ChevronRoundButtonProperty2Right } from "../ChevronRoundButtonProperty1ChevronRoundButtonProperty2Right/ChevronRoundButtonProperty1ChevronRoundButtonProperty2Right";
import { BannerCarouselSliderCarouselNoBackgroundStates3rdDeviceDesktop } from "../BannerCarouselSliderCarouselNoBackgroundStates3rdDeviceDesktop/BannerCarouselSliderCarouselNoBackgroundStates3rdDeviceDesktop";

export interface IAttachModuleSetProperty1BackToSchool3DeviceDesktopProps {
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

export const AttachModuleSetProperty1BackToSchool3DeviceDesktop = ({
  property1 = "trade-in-1",
  device = "desktop",
  className,
  ...props
}: IAttachModuleSetProperty1BackToSchool3DeviceDesktopProps): JSX.Element => {
  const variantsClassName = "property-1-" + property1 + " device-" + device;

  return (
    <div
      className={
        "attach-module-set-property-1-back-to-school-3-device-desktop " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="conversion">
        <div className="full-attach">
          <ChevronRoundButtonProperty1ChevronRoundButtonProperty2Left className="chevron-round-button-instance"></ChevronRoundButtonProperty1ChevronRoundButtonProperty2Left>
          <div className="attach-row">
            <AttachModuleTileDeviceDesktop
              text="$756"
              className="attach-module-tile-instance"
            ></AttachModuleTileDeviceDesktop>
            <AttachModuleTileDeviceDesktop
              component={
                <AppBlockImageProperty1MacBookPro className="app-block-image-instance" />
              }
              text="MacBook Pro"
              text2="$836"
              className="attach-module-tile-instance"
            ></AttachModuleTileDeviceDesktop>
            <AttachModuleTileDeviceDesktop
              component={
                <AppBlockImageAppleWatchUltraOrangeAlpineLoop className="app-block-image-apple-watch-ultra-orange-alpine-loop-instance" />
              }
              text="SPECIAL OFFER"
              text2="Apple Watch Ultra Orange Alpine Loop"
              text3="$126"
              className="attach-module-tile-instance"
            ></AttachModuleTileDeviceDesktop>
          </div>
          <ChevronRoundButtonProperty1ChevronRoundButtonProperty2Right
            property2="right"
            className="chevron-round-button-instance"
          ></ChevronRoundButtonProperty1ChevronRoundButtonProperty2Right>
        </div>
        <BannerCarouselSliderCarouselNoBackgroundStates3rdDeviceDesktop
          carousel="no-background"
          states="3rd"
          className="banner-carousel-slider-instance"
        ></BannerCarouselSliderCarouselNoBackgroundStates3rdDeviceDesktop>
      </div>
    </div>
  );
};
