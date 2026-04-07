import { useEffect, useRef, useState } from "react";
import "./GlobalNav.css";
import { LogoPartner } from "../LogoPartner/LogoPartner";
import { LogoWipApp } from "../LogoWipApp/LogoWipApp";
import { SearchInputStatusDefault } from "../SearchInputStatusDefault/SearchInputStatusDefault";
import { StoreLocatorDropdownStatusGeo } from "../StoreLocatorDropdownStatusGeo/StoreLocatorDropdownStatusGeo";
import { AccountProfile } from "../AccountProfile/AccountProfile";
import { BagCart } from "../BagCart/BagCart";
import navMenu from "../data/navMenu.json";

export interface IGlobalNavProps {
  device?: "mobile-nav-open" | "desktop" | "mobile";
  className?: string;
}

type NavItem = {
  label: string;
  href: string;
  items?: { label: string; href: string }[];
};

function NavMenuItem({
  item,
  isActive,
  onToggle,
}: {
  item: NavItem;
  isActive: boolean;
  onToggle: () => void;
}) {
  const hasDropdown = item.items && item.items.length > 0;
  const submenuId = hasDropdown ? `nav-submenu-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` : undefined;
  return (
    <div
      className={`nav-menu-item${hasDropdown ? " nav-menu-item--has-dropdown" : ""}${isActive ? " is-active" : ""}`}
    >
      {hasDropdown ? (
        <button
          type="button"
          className="nav-menu-item__label"
          aria-expanded={isActive}
          aria-controls={submenuId}
          onClick={onToggle}
        >
          {item.label}
        </button>
      ) : (
        <a
          href={item.href}
          className="nav-menu-item__label"
        >
          {item.label}
        </a>
      )}
      {hasDropdown && (
        <ul
          id={submenuId}
          className="nav-submenu"
          aria-hidden={!isActive}
        >
          {item.items!.map((sub) => (
            <li key={sub.label}>
              <a href={sub.href} className="nav-submenu__link">
                {sub.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export const GlobalNav = ({
  device = "desktop",
  className,
}: IGlobalNavProps): JSX.Element => {
  const navRef = useRef<HTMLDivElement>(null);
  const lastY = useRef(0);
  const [isHidden, setIsHidden] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // ── Scroll: sticky nav, hide on scroll-down past 100px ──
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY || document.documentElement.scrollTop;

      if (currentY <= 100) {
        setIsHidden(false);
      } else if (currentY > lastY.current) {
        setIsHidden(true);   // scrolling down
      } else {
        setIsHidden(false);  // scrolling up
      }

      lastY.current = currentY <= 0 ? 0 : currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close dropdown when clicking outside nav ──
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  const toggleMenu = (label: string) => {
    setActiveMenu((prev) => (prev === label ? null : label));
  };

  return (
    <div
      ref={navRef}
      className={`global-nav-device-desktop${isHidden ? " nav-hidden" : ""} device-${device} ${className ?? ""}`}
      role="navigation"
      aria-label="เมนูหลัก"
    >
      {/* ── Top bar: logos / search / utilities ── */}
      <div className="frame-751">
        <div className="frame-541">
          <LogoPartner className="logo-partner-instance" />
          <LogoWipApp className="logo-wip-app-instance" />
        </div>
        <SearchInputStatusDefault className="search-input-instance" />
        <StoreLocatorDropdownStatusGeo
          text="Select your store"
          visibleComponent={false}
          className="store-locator-dropdown-instance"
        />
        <div className="nav-language-selector">ภาษาไทย ▾</div>
        <div className="frame-750">
          <AccountProfile className="account-profile-instance" />
          <BagCart className="bag-cart-instance" />
        </div>
      </div>

      {/* ── Nav items row: dynamic from navMenu.json ── */}
      <div className="nav-items-row-black">
        {navMenu.primary.map((item) => (
          <NavMenuItem
            key={item.label}
            item={item}
            isActive={activeMenu === item.label}
            onToggle={() => toggleMenu(item.label)}
          />
        ))}

        <div className="nav-divider" aria-hidden="true">|</div>

        {navMenu.secondary.map((item) => (
          <NavMenuItem
            key={item.label}
            item={item}
            isActive={activeMenu === item.label}
            onToggle={() => toggleMenu(item.label)}
          />
        ))}
      </div>
    </div>
  );
};
