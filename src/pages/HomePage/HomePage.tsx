/**
 * HomePage — iStudio Apple Premium Partner Thailand
 *
 * Composes all page sections in order.
 * Each section is independently editable in src/sections/.
 * CSS scoping lives in HomepageDeviceDesktop.css (unchanged, 100% original).
 */
import '@/styles/homepage.css';

import { HeroBannerSection }    from '@/sections/HeroBannerSection/HeroBannerSection';
import { LOBStripeSection }     from '@/sections/LOBStripeSection/LOBStripeSection';
import { WhatsNewSection }      from '@/sections/WhatsNewSection/WhatsNewSection';
import { WhyBuySection }        from '@/sections/WhyBuySection/WhyBuySection';
import { PartnerStripeSection } from '@/sections/PartnerStripeSection/PartnerStripeSection';
import { BentoBoxSection }      from '@/sections/BentoBoxSection/BentoBoxSection';
import { TradeInSection }       from '@/sections/TradeInSection/TradeInSection';
import { BackToSchoolSection }  from '@/sections/BackToSchoolSection/BackToSchoolSection';
import { ValuePropsSection }    from '@/sections/ValuePropsSection/ValuePropsSection';
import { AllThingsIPadSection } from '@/sections/AllThingsIPadSection/AllThingsIPadSection';
import { AccessoriesSection }   from '@/sections/AccessoriesSection/AccessoriesSection';
import { ZigzagSection }        from '@/sections/ZigzagSection/ZigzagSection';
import { AppleCareSection }     from '@/sections/AppleCareSection/AppleCareSection';
import { QuickCheckoutSection } from '@/sections/QuickCheckoutSection/QuickCheckoutSection';

export const HomePage = () => (
  <div className="homepage-device-desktop">
    <h1 className="sr-only">iStudio — Apple Premium Partner Thailand</h1>

    {/* 1. Hero Banner */}
    <HeroBannerSection />

    {/* 2. LOB Stripe — ผลิตภัณฑ์ของ Apple ทั้งหมด */}
    <LOBStripeSection />

    {/* 3. What's New — สินค้าใหม่ล่าสุด */}
    <WhatsNewSection />

    {/* 4. Why Buy — อีกหลายเหตุผลในการเลือกซื้อกับเรา */}
    <WhyBuySection />

    {/* 5. Bento Box — Featured promotions */}
    <BentoBoxSection />

    {/* 6. Trade-In */}
    <TradeInSection />

    {/* 4. Partner Stripe — บริการและสิทธิพิเศษเพิ่มเติม */}
    <PartnerStripeSection />
    {/* 7. In-Store Services */}
    {/* <ServicesSection /> */}

    {/* 8. Back to School */}
    <BackToSchoolSection />

    {/* 9. Value Props */}
    <ValuePropsSection />

    {/* 10. All Things iPad */}
    <AllThingsIPadSection />

    {/* 11. Featured Accessories */}
    <AccessoriesSection />

    {/* 12. Zigzag / Store Near You */}
    <ZigzagSection />

    {/* 13. AppleCare+ */}
    <AppleCareSection />

    {/* 14. Quick Checkout */}
    <QuickCheckoutSection />
  </div>
);
