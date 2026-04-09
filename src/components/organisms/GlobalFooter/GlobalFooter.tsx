import './GlobalFooter.css';
import { IconFacebook } from '../../../IconFacebook/IconFacebook';
import { IconInstagram } from '../../../IconInstagram/IconInstagram';
import { IconTiktok } from '../../../IconTiktok/IconTiktok';
import { IconYoutube } from '../../../IconYoutube/IconYoutube';
import { IconTwitter } from '../../../IconTwitter/IconTwitter';

interface GlobalFooterProps {
  className?: string;
}

const footerSections = {
  shop: [
    { label: 'Mac', href: '/collections/mac' },
    { label: 'iPad', href: '/collections/ipad' },
    { label: 'iPhone', href: '/collections/iphone' },
    { label: 'Watch', href: '/collections/apple-watch' },
    { label: 'Music', href: '/collections/music' },
    { label: 'TV และ บ้าน', href: '/collections/tv-home' },
    { label: 'อุปกรณ์เสริม', href: '/collections/accessories' },
  ],
  services: [
    { label: 'โปรโมชันบัตรเครดิต (หน้าร้าน)', href: '/pages/applecare-plus' },
    { label: 'โปรโมชันบัตรเครดิต (ออนไลน์)', href: '/pages/mac-test-drive' },
    { label: 'U•Eazy บริการผ่อนไม่ใช้บัตร', href: '/pages/workshop' },
    { label: 'กิจกรรม Workshop', href: '/pages/trade-in' },
    { label: 'บริการเก่าแลกใหม่', href: '/blogs/news' },
    { label: 'โปรโมชันประจำเดือน', href: '/pages/imedic-service' },
    { label: 'บทความ', href: '/pages/smb-retail' },
    { label: 'ศูนย์บริการ iMedic', href: '/pages/smb-retail' },
  ],
  about: [
    { label: 'Contact Us', href: '/pages/contact-us' },
    { label: 'Find a Store', href: '/pages/store-locator' },
    { label: 'About UFICON', href: '/pages/about-uficon' },
    { label: 'iStudio Store Location', href: '/pages/istudio-locations' },
    { label: 'U•Store Store Location', href: '/pages/ustore-locations' },
    { label: 'iMedic Store Location', href: '/pages/imedic-locations' },
  ],
  policies: [
    { label: 'Claims & Warranty', href: '/pages/claims-warranty' },
    { label: 'Return Policy', href: '/pages/return-policy' },
    { label: 'Privacy Policy', href: '/pages/privacy-policy' },
    { label: 'Terms and Conditions', href: '/pages/terms-conditions' },
    { label: 'My Account', href: '/account' },
  ],
};

export const GlobalFooter = ({ className = '' }: GlobalFooterProps) => {
  return (
    <footer className={`global-footer ${className}`.trim()}>
      <div className="global-footer__content">
        <div className="global-footer__sitemap">
          {/* Shop Column */}
          <div className="global-footer__sitemap-col">
            <h2 className="global-footer__col-title">Shop</h2>
            <nav aria-label="Shop links">
              <ul className="global-footer__col-links">
                {footerSections.shop.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="global-footer__link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services Column */}
          <div className="global-footer__sitemap-col">
            <h2 className="global-footer__col-title">Services</h2>
            <nav aria-label="Services links">
              <ul className="global-footer__col-links">
                {footerSections.services.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="global-footer__link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* About Column */}
          <div className="global-footer__sitemap-col">
            <h2 className="global-footer__col-title">About</h2>
            <nav aria-label="About links">
              <ul className="global-footer__col-links">
                {footerSections.about.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="global-footer__link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Policies Column */}
          <div className="global-footer__sitemap-col">
            <h2 className="global-footer__col-title">Policies</h2>
            <nav aria-label="Policies links">
              <ul className="global-footer__col-links">
                {footerSections.policies.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="global-footer__link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Partner Column */}
          <div className="global-footer__sitemap-col global-footer__partner-col">
            <h2 className="global-footer__col-title">Apple Premium Partner</h2>
            <div className="global-footer__partner-logos">
              <img
                src="/apple-partner-footer/apple-partner-1.svg"
                alt="Apple Premium Partner"
                className="global-footer__partner-logo global-footer__partner-logo--premium"
                onError={(e) => {
                  e.currentTarget.src = '/group0.svg';
                }}
              />
              <img
                src="/apple-partner-footer/apple-partner-2.svg"
                alt="Authorized Service Provider"
                className="global-footer__partner-logo global-footer__partner-logo--service"
                onError={(e) => {
                  e.currentTarget.src = '/vector0.svg';
                }}
              />
              <img
                src="/apple-partner-footer/apple-partner-3.svg"
                alt="Authorized Education Specialist"
                className="global-footer__partner-logo global-footer__partner-logo--education"
                onError={(e) => {
                  e.currentTarget.src = '/vector2.svg';
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="global-footer__bottom">
          <div className="global-footer__subscribe">
            <h3 className="global-footer__subscribe-title">รับจดหมายข่าวสารจากเรา</h3>
            <div className="global-footer__subscribe-input-wrapper">
              <input
                type="email"
                placeholder="อีเมล"
                className="global-footer__subscribe-input"
              />
              <button className="global-footer__subscribe-btn" aria-label="Subscribe">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>

          <div className="global-footer__social">
            <a href="#" aria-label="Facebook">
              <IconFacebook className="global-footer__social-icon" />
            </a>
            <a href="#" aria-label="Instagram">
              <IconInstagram className="global-footer__social-icon" />
            </a>
            <a href="#" aria-label="TikTok">
              <IconTiktok className="global-footer__social-icon" />
            </a>
            <a href="#" aria-label="YouTube">
              <IconYoutube className="global-footer__social-icon" />
            </a>
            <a href="#" aria-label="Twitter">
              <IconTwitter className="global-footer__social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
