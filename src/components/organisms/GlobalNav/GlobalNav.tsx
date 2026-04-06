import { useEffect, useRef, useState } from 'react';
import './GlobalNav.css';
import { LogoPartner } from '../../../LogoPartner/LogoPartner';
import { LogoWipApp } from '../../../LogoWipApp/LogoWipApp';
import { SearchInput } from '../../molecules/SearchInput/SearchInput';
import { StoreLocator } from '../../molecules/StoreLocator/StoreLocator';
import { AccountProfileProperty1Default } from '../../../AccountProfileProperty1Default/AccountProfileProperty1Default';
import { BagCartProperty1Bag } from '../../../BagCartProperty1Bag/BagCartProperty1Bag';
import navMenu from '../../../data/navigation.json';

interface GlobalNavProps {
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
  const submenuId = hasDropdown
    ? `nav-submenu-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
    : undefined;

  return (
    <div
      className={`nav-menu-item${hasDropdown ? ' nav-menu-item--has-dropdown' : ''}${
        isActive ? ' is-active' : ''
      }`}
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
        <a href={item.href} className="nav-menu-item__label">
          {item.label}
        </a>
      )}
      {hasDropdown && (
        <ul id={submenuId} className="nav-submenu" aria-hidden={!isActive}>
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

export const GlobalNav = ({ className = '' }: GlobalNavProps) => {
  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // ── Smart sticky: hide on scroll-down, show on scroll-up ──────────────────
  useEffect(() => {
    const SCROLL_THRESHOLD = navRef.current?.offsetHeight ?? 100;
    // Small dead-zones prevent flickering from micro-scroll movements
    const DOWN_DELTA = 6;  // px scrolled down before hiding
    const UP_DELTA   = 4;  // px scrolled up before showing

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = Math.max(0, window.scrollY);

        if (currentY < SCROLL_THRESHOLD) {
          // ── At the top of the page — always visible ──
          setIsHidden(false);
        } else if (currentY > lastScrollY.current + DOWN_DELTA) {
          // ── Scrolling DOWN past threshold — hide nav ──
          setIsHidden(true);
          // Close any open dropdown when nav hides
          setActiveMenu(null);
        } else if (currentY < lastScrollY.current - UP_DELTA) {
          // ── Scrolling UP — show nav ──
          setIsHidden(false);
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Close dropdown when clicking outside nav ───────────────────────────────
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  const toggleMenu = (label: string) => {
    setActiveMenu((prev) => (prev === label ? null : label));
  };

  return (
    <div
      ref={navRef}
      className={`global-nav${isHidden ? ' global-nav--hidden' : ''} ${className}`.trim()}
      role="navigation"
      aria-label="เมนูหลัก"
    >
      {/* ── Top bar: logos / search / utilities ── */}
      <div className="global-nav__top-bar">
        <div className="global-nav__logos">
          <LogoPartner className="global-nav__logo-partner" />
          <LogoWipApp className="global-nav__logo-wip" />
        </div>
        <SearchInput className="global-nav__search" />
        <StoreLocator text="เลือกสาขา" className="global-nav__store-locator" />
        <div className="global-nav__language">ภาษาไทย ▾</div>
        <div className="global-nav__utilities">
          <AccountProfileProperty1Default className="global-nav__account" />
          <BagCartProperty1Bag className="global-nav__bag" />
        </div>
      </div>

      {/* ── Nav items row ── */}
      <div className="global-nav__menu-row">
        {navMenu.primary.map((item) => (
          <NavMenuItem
            key={item.label}
            item={item}
            isActive={activeMenu === item.label}
            onToggle={() => toggleMenu(item.label)}
          />
        ))}

        <div className="global-nav__divider" aria-hidden="true">|</div>

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
