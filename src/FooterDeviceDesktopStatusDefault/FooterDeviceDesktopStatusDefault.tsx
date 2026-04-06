import "./FooterDeviceDesktopStatusDefault.css";
import { DawnDivider } from "../DawnDivider/DawnDivider";
import { TextFieldStatusDefault } from "../TextFieldStatusDefault/TextFieldStatusDefault";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import { IconFacebook } from "../IconFacebook/IconFacebook";
import { IconInstagram } from "../IconInstagram/IconInstagram";
import { IconTiktok } from "../IconTiktok/IconTiktok";
import { IconYoutube } from "../IconYoutube/IconYoutube";
import { IconTwitter } from "../IconTwitter/IconTwitter";

export interface IFooterDeviceDesktopStatusDefaultProps {
  device?: "desktop" | "mobile-expanded" | "mobile";
  status?: "default" | "expanded";
  className?: string;
}

const footerSections = {
  shop: [
    { label: "Mac", href: "/collections/mac" },
    { label: "iPad", href: "/collections/ipad" },
    { label: "iPhone", href: "/collections/iphone" },
    { label: "Watch", href: "/collections/apple-watch" },
    { label: "Music", href: "/collections/music" },
    { label: "TV & Home", href: "/collections/tv-home" },
    { label: "Accessories", href: "/collections/accessories" },
  ],
  services: [
    { label: "AppleCare+", href: "/pages/applecare-plus" },
    { label: "Mac Test Drive", href: "/pages/mac-test-drive" },
    { label: "In Store Workshop", href: "/pages/workshop" },
    { label: "Trade-in Program", href: "/pages/trade-in" },
    { label: "Blog", href: "/blogs/news" },
    { label: "iMedic Service Provider", href: "/pages/imedic-service" },
    { label: "SMB Retail Business", href: "/pages/smb-retail" },
  ],
  about: [
    { label: "Contact Us", href: "/pages/contact-us" },
    { label: "Find a Store", href: "/pages/store-locator" },
    { label: "About UFICON", href: "/pages/about-uficon" },
    { label: "iStudio Store Location", href: "/pages/istudio-locations" },
    { label: "U•Store Store Location", href: "/pages/ustore-locations" },
    { label: "iMedic Store Location", href: "/pages/imedic-locations" },
  ],
  policies: [
    { label: "Claims & Warranty", href: "/pages/claims-warranty" },
    { label: "Return Policy", href: "/pages/return-policy" },
    { label: "Privacy Policy", href: "/pages/privacy-policy" },
    { label: "Terms and Conditions", href: "/pages/terms-conditions" },
    { label: "My Account", href: "/account" },
  ],
};

export const FooterDeviceDesktopStatusDefault = ({
  device = "desktop",
  status = "default",
  className = "",
}: IFooterDeviceDesktopStatusDefaultProps): JSX.Element => {
  const variantsClassName = `device-${device} status-${status}`;

  return (
    <footer className={`footer-device-desktop ${className} ${variantsClassName}`}>
      <div className="footer-content">
        <div className="footer-grid">
          {/* Shop Column */}
          <div className="footer-column">
            <h2 className="footer-column-title">Shop</h2>
            <nav aria-label="Shop links">
              <ul className="footer-link-list">
                {footerSections.shop.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="footer-link">{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services Column */}
          <div className="footer-column">
            <h2 className="footer-column-title">Services</h2>
            <nav aria-label="Services links">
              <ul className="footer-link-list">
                {footerSections.services.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="footer-link">{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* About Column */}
          <div className="footer-column">
            <h2 className="footer-column-title">About</h2>
            <nav aria-label="About links">
              <ul className="footer-link-list">
                {footerSections.about.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="footer-link">{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Policies Column */}
          <div className="footer-column">
            <h2 className="footer-column-title">Policies</h2>
            <nav aria-label="Policies links">
              <ul className="footer-link-list">
                {footerSections.policies.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="footer-link">{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Apple Premium Partner Column */}
          <div className="footer-column partner-column">
            <h2 className="footer-column-title">Apple Premium Partner</h2>
            <div className="partner-logos-stack">
              <img src="/apple-partner-footer/apple-partner-1.svg" alt="Apple Premium Partner" className="partner-logo-img premium-partner" onError={(e) => { e.currentTarget.src = '/group0.svg'; }} />
              <img src="/apple-partner-footer/apple-partner-2.svg" alt="Authorized Service Provider" className="partner-logo-img service-provider" onError={(e) => { e.currentTarget.src = '/vector0.svg'; }} />
              <img src="/apple-partner-footer/apple-partner-3.svg" alt="Authorized Education Specialist" className="partner-logo-img education-specialist" onError={(e) => { e.currentTarget.src = '/vector2.svg'; }} />
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-bottom-left">
            <div className="subscribe-section">
              <h3 className="subscribe-title">รับจดหมายข่าวสารจากเรา</h3>
              <div className="subscribe-input-wrapper">
                <input type="email" placeholder="อีเมล" className="subscribe-input-field" />
                <button className="subscribe-button" aria-label="Subscribe">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="footer-bottom-right">
            <div className="social-icons-row">
              <a href="#" aria-label="Facebook"><IconFacebook className="footer-social-icon" /></a>
              <a href="#" aria-label="Instagram"><IconInstagram className="footer-social-icon" /></a>
              <a href="#" aria-label="Line">
                <img src="/group-14120.svg" alt="Line" className="footer-social-icon-img" />
              </a>
              <a href="#" aria-label="TikTok"><IconTiktok className="footer-social-icon" /></a>
              <a href="#" aria-label="YouTube"><IconYoutube className="footer-social-icon" /></a>
              <a href="#" aria-label="X"><IconTwitter className="footer-social-icon" /></a>
            </div>
            
            <div className="payment-icons-row">
              <img src="/frame-360.svg" alt="Visa" className="payment-icon" />
              <img src="/image-60.png" alt="Payment Methods" className="payment-icon-group" />
            </div>

            <div className="footer-copyright-text">
              © {new Date().getFullYear()} iStudio. Powered by UFicon. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
