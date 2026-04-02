import { useEffect, useRef, useState } from "react";
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
}: IGlobalNavDeviceDesktopProps): JSX.Element => {
  const variantsClassName = "device-" + device;

  const [isHidden, setIsHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastY.current && scrollTop > 100) {
        setIsHidden(true);
      } else if (scrollTop < lastY.current) {
        setIsHidden(false);
      }

      lastY.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`global-nav-device-desktop ${className || ""} ${variantsClassName} ${
        isHidden ? "nav-hidden" : ""
      }`}
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
        <TextGlobalNavCategory text="Mac" className="text-global-nav-category-instance" />
        <TextGlobalNavCategory text="iPad" className="text-global-nav-category-instance" />
        <TextGlobalNavCategory text="iPhone" className="text-global-nav-category-instance" />
        <TextGlobalNavCategory text="Watch" className="text-global-nav-category-instance" />
        <TextGlobalNavCategory text="Music" className="text-global-nav-category-instance" />
        <TextGlobalNavCategory text="TV และบ้าน" className="text-global-nav-category-instance" />
        <TextGlobalNavCategory text="อุปกรณ์เสริม" className="text-global-nav-category-instance" />
        <TextGlobalNavCategory text="บริการช่วยเหลือ" className="text-global-nav-category-instance" />
        <div className="nav-divider">
          <div className="div">| </div>
        </div>
        <TextGlobalNavCategory text="ข้อเสนอ" className="text-global-nav-category-instance" />
        <TextGlobalNavCategory text="สำหรับการศึกษา" className="text-global-nav-category-instance" />
        <TextGlobalNavCategory text="สาขาของเรา" className="text-global-nav-category-instance" />
      </div>
    </div>
  );
};
