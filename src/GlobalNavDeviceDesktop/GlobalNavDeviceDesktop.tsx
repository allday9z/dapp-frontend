import { useEffect, useRef } from "react";
import "./GlobalNavDeviceDesktop.css";
import { LogoPartner } from "../LogoPartner/LogoPartner";
import { LogoWipApp } from "../LogoWipApp/LogoWipApp";
import { SearchInputStatusDefault } from "../SearchInputStatusDefault/SearchInputStatusDefault";
import { StoreLocatorDropdownStatusGeo } from "../StoreLocatorDropdownStatusGeo/StoreLocatorDropdownStatusGeo";
import { AccountProfileProperty1Default } from "../AccountProfileProperty1Default/AccountProfileProperty1Default";
import { BagCartProperty1Bag } from "../BagCartProperty1Bag/BagCartProperty1Bag";
import { TextGlobalNavCategory } from "../TextGlobalNavCategory/TextGlobalNavCategory";

export interface IGlobalNavDeviceDesktopProps {
  device?: "mobile-nav-open" | "desktop" | "mobile";
  className?: string;
}

export const GlobalNavDeviceDesktop = ({
  device = "desktop",
  className,
  ...props
}: IGlobalNavDeviceDesktopProps): JSX.Element => {
  const variantsClassName = "device-" + device;
  const lastY = useRef(0);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ANNOUNCEMENT_H = 38; // px — announcement bar height (2.375rem)

    const onScroll = () => {
      const el = navRef.current;
      if (!el) return;
      const y = window.scrollY;
      const navH = el.offsetHeight || 134;

      // Direct DOM: no React re-renders on scroll
      el.style.top = `${Math.max(0, ANNOUNCEMENT_H - y)}px`;

      // Hide-on-scroll activates ONLY after announcement bar + nav height + 10px scrolled
      const hideThreshold = ANNOUNCEMENT_H + navH + 10;
      if (y < hideThreshold) {
        el.classList.remove("nav--hidden");
        el.classList.add("nav--visible");
      } else if (y < lastY.current) {
        el.classList.remove("nav--hidden");   // scrolling up → reveal immediately
        el.classList.add("nav--visible");
      } else if (y > lastY.current + 4) {
        el.classList.remove("nav--visible");  // scrolling down > 4px → hide
        el.classList.add("nav--hidden");
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={navRef}
      style={{ top: "38px" }}
      className={
        "global-nav-device-desktop nav--visible " + className + " " + variantsClassName
      }
    >
      <div className="frame-751">
        <div className="frame-541">
          <LogoPartner className="logo-partner-instance"></LogoPartner>
          <LogoWipApp className="logo-wip-app-instance"></LogoWipApp>
        </div>
        <SearchInputStatusDefault className="search-input-instance"></SearchInputStatusDefault>
        <StoreLocatorDropdownStatusGeo
          text="Select your store"
          visibleComponent={false}
          className="store-locator-dropdown-instance"
        ></StoreLocatorDropdownStatusGeo>
        <div className="nav-language-selector">ภาษาไทย ▾</div>
        <div className="frame-750">
          <AccountProfileProperty1Default className="account-profile-instance"></AccountProfileProperty1Default>
          <BagCartProperty1Bag className="bag-cart-instance"></BagCartProperty1Bag>
        </div>
      </div>
      <div className="nav-items-row-black">
        <TextGlobalNavCategory
          text="Mac"
          className="text-global-nav-category-instance"
        ></TextGlobalNavCategory>
        <TextGlobalNavCategory
          text="iPad"
          className="text-global-nav-category-instance"
        ></TextGlobalNavCategory>
        <TextGlobalNavCategory
          text="iPhone"
          className="text-global-nav-category-instance"
        ></TextGlobalNavCategory>
        <TextGlobalNavCategory
          text="Watch"
          className="text-global-nav-category-instance"
        ></TextGlobalNavCategory>
        <TextGlobalNavCategory
          text="Music"
          className="text-global-nav-category-instance"
        ></TextGlobalNavCategory>
        <TextGlobalNavCategory
          text="TV และบ้าน"
          className="text-global-nav-category-instance"
        ></TextGlobalNavCategory>
        <TextGlobalNavCategory
          text="อุปกรณ์เสริม"
          className="text-global-nav-category-instance"
        ></TextGlobalNavCategory>
        <TextGlobalNavCategory
          text="บริการช่วยเหลือ"
          className="text-global-nav-category-instance"
        ></TextGlobalNavCategory>
        <div className="nav-divider">
          <div className="div">| </div>
        </div>
        <TextGlobalNavCategory
          text="ข้อเสนอ"
          className="text-global-nav-category-instance"
        ></TextGlobalNavCategory>
        <TextGlobalNavCategory
          text="สำหรับการศึกษา"
          className="text-global-nav-category-instance"
        ></TextGlobalNavCategory>
        <TextGlobalNavCategory
          text="สาขาของเรา"
          className="text-global-nav-category-instance"
        ></TextGlobalNavCategory>
      </div>
    </div>
  );
};
