import "./HomepageDeviceDesktop.css";
import { BannerCarouselProperty1OrganismProperty2HomepageBannerSection } from "../BannerCarouselProperty1OrganismProperty2HomepageBannerSection/BannerCarouselProperty1OrganismProperty2HomepageBannerSection";
import { LobStripeTileList } from "../LobStripeTile";
import { ProductStripe } from "../ProductStripe/ProductStripe";
import { AppStripeTextTileList } from "../AppStripeTextTile";
import { OrganismDeviceDesktop } from "../OrganismDeviceDesktop/OrganismDeviceDesktop";
import { BentoBoxTileDeviceDesktopBigLobAppleWatchFathers } from "../BentoBoxTileDeviceDesktopBigLobAppleWatchFathers/BentoBoxTileDeviceDesktopBigLobAppleWatchFathers";
import { BentoBoxTileDeviceDesktopSmallLobAirPods } from "../BentoBoxTileDeviceDesktopSmallLobAirPods/BentoBoxTileDeviceDesktopSmallLobAirPods";
import { BentoBoxTileDeviceDesktopSmallLobAppleWatchBand } from "../BentoBoxTileDeviceDesktopSmallLobAppleWatchBand/BentoBoxTileDeviceDesktopSmallLobAppleWatchBand";
import { AttachModuleSetProperty1TradeIn1DeviceDesktop } from "../AttachModuleSetProperty1TradeIn1DeviceDesktop/AttachModuleSetProperty1TradeIn1DeviceDesktop";
import { AttachModuleSectionDeviceDesktop } from "../AttachModuleSectionDeviceDesktop/AttachModuleSectionDeviceDesktop";
import { AppTileDeviceDesktopTitleJoinAClassCategoryStoreService } from "../AppTileDeviceDesktopTitleJoinAClassCategoryStoreService/AppTileDeviceDesktopTitleJoinAClassCategoryStoreService";
import { AppTileDeviceDesktopTitleAppointmentCategoryStoreService } from "../AppTileDeviceDesktopTitleAppointmentCategoryStoreService/AppTileDeviceDesktopTitleAppointmentCategoryStoreService";
import { AppTileDeviceDesktopTitleDeliveryAndPickupCategoryStoreService } from "../AppTileDeviceDesktopTitleDeliveryAndPickupCategoryStoreService/AppTileDeviceDesktopTitleDeliveryAndPickupCategoryStoreService";
import { AppTileDeviceDesktopTitleFindAStoreCategoryStoreService } from "../AppTileDeviceDesktopTitleFindAStoreCategoryStoreService/AppTileDeviceDesktopTitleFindAStoreCategoryStoreService";
import { AppTileDeviceDesktopTitleAppleRepairCategoryStoreService } from "../AppTileDeviceDesktopTitleAppleRepairCategoryStoreService/AppTileDeviceDesktopTitleAppleRepairCategoryStoreService";
import { AttachModuleSetProperty1BackToSchool3DeviceDesktop } from "../AttachModuleSetProperty1BackToSchool3DeviceDesktop/AttachModuleSetProperty1BackToSchool3DeviceDesktop";
import { OrganismValuePropSectionDeviceDesktop } from "../OrganismValuePropSectionDeviceDesktop/OrganismValuePropSectionDeviceDesktop";
import { AttachModuleSetProperty1AllThingsIPad1DeviceDesktop } from "../AttachModuleSetProperty1AllThingsIPad1DeviceDesktop/AttachModuleSetProperty1AllThingsIPad1DeviceDesktop";
import { AppTileDeviceDesktopTitleMacAccessoriesCategoryAccessories } from "../AppTileDeviceDesktopTitleMacAccessoriesCategoryAccessories/AppTileDeviceDesktopTitleMacAccessoriesCategoryAccessories";
import { AppTileDeviceDesktopTitleIPadAccessoriesCategoryAccessories } from "../AppTileDeviceDesktopTitleIPadAccessoriesCategoryAccessories/AppTileDeviceDesktopTitleIPadAccessoriesCategoryAccessories";
import { AppTileDeviceDesktopTitleAppleTvAccessoriesCategoryAccessories } from "../AppTileDeviceDesktopTitleAppleTvAccessoriesCategoryAccessories/AppTileDeviceDesktopTitleAppleTvAccessoriesCategoryAccessories";
import { AppTileDeviceDesktopTitleWatchAccessoriesCategoryAccessories } from "../AppTileDeviceDesktopTitleWatchAccessoriesCategoryAccessories/AppTileDeviceDesktopTitleWatchAccessoriesCategoryAccessories";
import { AppTileDeviceDesktopTitleIPhoneAccessoriesCategoryAccessories } from "../AppTileDeviceDesktopTitleIPhoneAccessoriesCategoryAccessories/AppTileDeviceDesktopTitleIPhoneAccessoriesCategoryAccessories";
import { OrganismAppZigzagSectionDeviceDesktop } from "../OrganismAppZigzagSectionDeviceDesktop/OrganismAppZigzagSectionDeviceDesktop";
import { AttachModuleSetProperty1AppleCare1DeviceDesktop } from "../AttachModuleSetProperty1AppleCare1DeviceDesktop/AttachModuleSetProperty1AppleCare1DeviceDesktop";
import { AttachModuleSetProperty1QuickCheckout1DeviceDesktop } from "../AttachModuleSetProperty1QuickCheckout1DeviceDesktop/AttachModuleSetProperty1QuickCheckout1DeviceDesktop";

export interface IHomepageDeviceDesktopProps {
  className?: string;
}

export const HomepageDeviceDesktop = ({
  className = "",
}: IHomepageDeviceDesktopProps): JSX.Element => {
  return (
    <div className={`homepage-device-desktop ${className}`}>
      <h1 className="sr-only">iStudio Homepage</h1>

      <BannerCarouselProperty1OrganismProperty2HomepageBannerSection className="banner-carousel-instance" />

      <section className="hp-products" aria-labelledby="all-apple-products-heading">
        <div className="hp-heading-row">
          <h2 id="all-apple-products-heading" className="hp-heading">
            ผลิตภัณฑ์ของ Apple ทั้งหมด
          </h2>
        </div>
        <ProductStripe className="hp-product-stripe" ariaLabel="ผลิตภัณฑ์ของ Apple ทั้งหมด">
          <LobStripeTileList className="lob-stripe-tile-instance" />
        </ProductStripe>
        <div className="hp-divider" />
      </section>

      <OrganismDeviceDesktop
        text="Available starting 1.24 from $1999 or $333/mo. for 6 mo.* before trade-in"
        text2="Available starting 1.24 from $738 or $123/mo. for 6 mo.* before trade-in"
        className="organism-instance"
      />

      <section className="hp-partners" aria-labelledby="partner-services-heading">
        <div className="hp-heading-row">
          <h2 id="partner-services-heading" className="hp-heading">
            บริการและสิทธิพิเศษเพิ่มเติม
          </h2>
        </div>
        <ProductStripe className="hp-partner-stripe" ariaLabel="บริการและสิทธิพิเศษเพิ่มเติม">
          <AppStripeTextTileList className="app-text-tile-instance" />
        </ProductStripe>
        <div className="hp-divider" />
      </section>

      <div className="hp-bento">
        <div className="hp-bento__grid">
          <BentoBoxTileDeviceDesktopBigLobAppleWatchFathers
            lob="apple-watch-fathers"
            text="Shop models"
            className="bento-box-tile-instance"
          />
          <div className="hp-bento__col">
            <BentoBoxTileDeviceDesktopSmallLobAirPods
              device="desktop-small"
              text="Shop models"
              className="bento-box-tile-instance"
            />
            <BentoBoxTileDeviceDesktopSmallLobAppleWatchBand
              device="desktop-small"
              lob="apple-watch-band"
              text="Shop models"
              className="bento-box-tile-instance2"
            />
          </div>
        </div>
      </div>

      <AttachModuleSectionDeviceDesktop
        component={<AttachModuleSetProperty1TradeIn1DeviceDesktop className="attach-module-set-instance" />}
        text="Trade-in your current device."
        text2="Shop models"
        text3="Shop models"
        text4="Shop models"
        className="attach-module-section-instance"
      />

      <OrganismDeviceDesktop
        heading="View in-store classes and support."
        component={<AppTileDeviceDesktopTitleJoinAClassCategoryStoreService className="app-tile-instance" title="join-a-class" category="store-service" />}
        component2={<AppTileDeviceDesktopTitleAppointmentCategoryStoreService className="app-tile-instance" title="appointment" category="store-service" />}
        component3={<AppTileDeviceDesktopTitleDeliveryAndPickupCategoryStoreService className="app-tile-instance" title="delivery-and-pickup" category="store-service" />}
        component4={<AppTileDeviceDesktopTitleFindAStoreCategoryStoreService className="app-tile-instance" title="find-a-store" category="store-service" />}
        component5={<AppTileDeviceDesktopTitleAppleRepairCategoryStoreService className="app-tile-instance" title="apple-repair" category="store-service" />}
        className="organism-instance"
      />

      <AttachModuleSectionDeviceDesktop
        component={<AttachModuleSetProperty1BackToSchool3DeviceDesktop className="attach-module-set-instance2" property1="back-to-school-3" />}
        text="Shop models"
        text2="Shop models"
        text3="Shop models"
        className="attach-module-section-instance"
      />

      <OrganismValuePropSectionDeviceDesktop className="organism-value-prop-section-instance" />

      <AttachModuleSectionDeviceDesktop
        component={<AttachModuleSetProperty1AllThingsIPad1DeviceDesktop className="attach-module-set-instance2" property1="all-things-i-pad-1" />}
        text="All things iPad."
        text2="Shop models"
        text3="Shop models"
        className="attach-module-section-instance"
      />

      <OrganismDeviceDesktop
        heading="Featured Apple Accessories."
        component={<AppTileDeviceDesktopTitleMacAccessoriesCategoryAccessories className="app-tile-instance" title="mac-accessories" category="accessories" />}
        component2={<AppTileDeviceDesktopTitleIPadAccessoriesCategoryAccessories className="app-tile-instance" title="i-pad-accessories" category="accessories" />}
        component3={<AppTileDeviceDesktopTitleAppleTvAccessoriesCategoryAccessories className="app-tile-instance" title="apple-tv-accessories" category="accessories" />}
        component4={<AppTileDeviceDesktopTitleWatchAccessoriesCategoryAccessories className="app-tile-instance" title="watch-accessories" category="accessories" />}
        component5={<AppTileDeviceDesktopTitleIPhoneAccessoriesCategoryAccessories className="app-tile-instance" title="i-phone-accessories" category="accessories" />}
        className="organism-instance"
      />

      <OrganismAppZigzagSectionDeviceDesktop className="frame-1825-instance" />

      <AttachModuleSectionDeviceDesktop
        component={<AttachModuleSetProperty1AppleCare1DeviceDesktop className="attach-module-set-instance2" property1="apple-care-1" />}
        text="Peace of mind with AppleCare+."
        text2="Shop models"
        text3="Shop models"
        text4="Shop models"
        className="attach-module-section-instance"
      />

      <AttachModuleSectionDeviceDesktop
        component={<AttachModuleSetProperty1QuickCheckout1DeviceDesktop className="attach-module-set-instance2" property1="quick-checkout-1" />}
        text="Quick checkout."
        text2="Add to cart"
        text3="Add to cart    "
        text4="Add to cart"
        className="attach-module-section-instance"
      />
    </div>
  );
};
