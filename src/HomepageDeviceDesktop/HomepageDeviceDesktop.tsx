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
import { AppTile } from "../AppTile/AppTile";
import { AttachModuleSetProperty1BackToSchool3DeviceDesktop } from "../AttachModuleSetProperty1BackToSchool3DeviceDesktop/AttachModuleSetProperty1BackToSchool3DeviceDesktop";
import { OrganismValuePropSectionDeviceDesktop } from "../OrganismValuePropSectionDeviceDesktop/OrganismValuePropSectionDeviceDesktop";
import { AttachModuleSetProperty1AllThingsIPad1DeviceDesktop } from "../AttachModuleSetProperty1AllThingsIPad1DeviceDesktop/AttachModuleSetProperty1AllThingsIPad1DeviceDesktop";
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
        component={<AppTile image="image-1170.png" badge="IN-STORE" title="Join a class" cta="Free sessions" description="Free sessions that inspire hands-on creativity in photography, art, music, and more." />}
        component2={<AppTile image="image-1100.png" badge="IN-STORE" title="Appointment" cta="Apple Support has you covered" description="From setting up your device to recovering your Apple ID to replacing the screen, Apple Support has you covered." />}
        component3={<AppTile image="image-1180.png" badge="IN-STORE" title="Delivery and Pickup" cta="Get free delivery or in-store pick-up" description="Pick up your online order at the Apple Store." />}
        component4={<AppTile image="image-1180.png" badge="IN-STORE" title="Find a Store" cta="Shop the latest Apple products" description="More ways to shop: Find an Apple Store or other retailer near you." />}
        component5={<AppTile image="screen-shot-2022-11-01-at-9-27-10.png" badge="IN-STORE" title="Apple Repair" cta="Schedule a visit" description="Online or over the phone, we'll arrange shipment for your product to an Apple Repair Center." />}
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
        component={<AppTile image="image-1170.png" badge="IN-STORE" title="Mac Accessories" cta="Shop Mac accessories here" description="Available from $342 or $57/mo. for 6 mo.* before trade-in" />}
        component2={<AppTile image="image-1110.png" badge="NEW" title="iPad Accessories" cta="Shop iPad accessories here" description="Available from $42 or $7/mo. for 6 mo.* before trade-in" />}
        component3={<AppTile image="screen-shot-2022-11-01-at-9-27-20.png" badge="SALE" title="Apple TV Accessories" cta="Shop Apple TV accessories here" description="Available from $102 or $17/mo. for 6 mo.* before trade-in" />}
        component4={<AppTile image="image-1170.png" badge="CYBER MONDAY" title="Watch Accessories" cta="Shop Watch accessories here" description="Available from $138 or $23/mo. for 6 mo.* before trade-in" />}
        component5={<AppTile image="image-1170.png" badge="IN-STORE" title="iPhone Accessories" cta="Shop iPhone accessories here" description="Available from $54 or $9/mo. for 6 mo.* before trade-in" />}
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
