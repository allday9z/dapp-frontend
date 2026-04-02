import "./AttachModuleSetProperty1BackToSchool1DeviceDesktop.css";
import { ChevronRoundButtonProperty1ChevronRoundButtonProperty2Left } from "../ChevronRoundButtonProperty1ChevronRoundButtonProperty2Left/ChevronRoundButtonProperty1ChevronRoundButtonProperty2Left";
import { AppBlockImageAirPodsPro2ndGeneration } from "../AppBlockImageAirPodsPro2ndGeneration/AppBlockImageAirPodsPro2ndGeneration";
import { AttachModuleImageProperty1MacBookAir } from "../AttachModuleImageProperty1MacBookAir/AttachModuleImageProperty1MacBookAir";
import { AttachModuleTileDeviceDesktop } from "../AttachModuleTileDeviceDesktop/AttachModuleTileDeviceDesktop";
import { AppBlockImageApplePencil2ndGeneration } from "../AppBlockImageApplePencil2ndGeneration/AppBlockImageApplePencil2ndGeneration";
import { AppBlockImageIPhone14ProMaxClearCaseWithMagSafe } from "../AppBlockImageIPhone14ProMaxClearCaseWithMagSafe/AppBlockImageIPhone14ProMaxClearCaseWithMagSafe";
import { ChevronRoundButtonProperty1ChevronRoundButtonProperty2Right } from "../ChevronRoundButtonProperty1ChevronRoundButtonProperty2Right/ChevronRoundButtonProperty1ChevronRoundButtonProperty2Right";
import { BannerCarouselSliderCarouselNoBackgroundStatesDefaultDeviceDesktop } from "../BannerCarouselSliderCarouselNoBackgroundStatesDefaultDeviceDesktop/BannerCarouselSliderCarouselNoBackgroundStatesDefaultDeviceDesktop";

export interface IAttachModuleSetProperty1BackToSchool1DeviceDesktopProps {
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

export const AttachModuleSetProperty1BackToSchool1DeviceDesktop = ({
  property1 = "trade-in-1",
  device = "desktop",
  className,
  ...props
}: IAttachModuleSetProperty1BackToSchool1DeviceDesktopProps): JSX.Element => {
  const variantsClassName = "property-1-" + property1 + " device-" + device;

  return (
    <div
      className={
        "attach-module-set-property-1-back-to-school-1-device-desktop " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="conversion">
        <div className="full-attach">
          <ChevronRoundButtonProperty1ChevronRoundButtonProperty2Left className="chevron-round-button-instance"></ChevronRoundButtonProperty1ChevronRoundButtonProperty2Left>
          <div className="attach-row">
            <div className="attach-row2">
              <AttachModuleTileDeviceDesktop
                component={
                  <AppBlockImageAirPodsPro2ndGeneration className="app-block-image-air-pods-pro-2nd-generation-instance" />
                }
                text="NEW"
                text2="AirPods Pro 2nd Generation"
                text3="$276"
                text4="Shop models"
                className="attach-module-tile-instance"
              ></AttachModuleTileDeviceDesktop>
              <AttachModuleTileDeviceDesktop
                component={
                  <AppBlockImageApplePencil2ndGeneration className="app-block-image-apple-pencil-2nd-generation-instance" />
                }
                text="SPECIAL OFFER"
                text2="Apple Pencil 2nd Generation"
                text3="$138"
                text4="Shop models"
                className="attach-module-tile-instance"
              ></AttachModuleTileDeviceDesktop>
              <AttachModuleTileDeviceDesktop
                component={
                  <AppBlockImageIPhone14ProMaxClearCaseWithMagSafe className="app-block-image-i-phone-14-pro-max-clear-case-with-mag-safe-instance" />
                }
                text="NEW"
                text2="iPhone 14 Pro Max Clear Case with MagSafe"
                text3="$136"
                text4="Shop models"
                className="attach-module-tile-instance"
              ></AttachModuleTileDeviceDesktop>
            </div>
          </div>
          <ChevronRoundButtonProperty1ChevronRoundButtonProperty2Right
            property2="right"
            className="chevron-round-button-instance"
          ></ChevronRoundButtonProperty1ChevronRoundButtonProperty2Right>
        </div>
        <BannerCarouselSliderCarouselNoBackgroundStatesDefaultDeviceDesktop
          carousel="no-background"
          className="banner-carousel-slider-instance"
        ></BannerCarouselSliderCarouselNoBackgroundStatesDefaultDeviceDesktop>
      </div>
    </div>
  );
};
