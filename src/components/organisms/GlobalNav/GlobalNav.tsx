import { useEffect, useRef, useState } from 'react';
import './GlobalNav.css';
import { LogoPartner } from '../../../LogoPartner/LogoPartner';
import { LogoWipApp } from '../../../LogoWipApp/LogoWipApp';
import { SearchInput } from '../../molecules/SearchInput/SearchInput';
import { StoreLocator } from '../../molecules/StoreLocator/StoreLocator';
import { AccountProfile } from '../../../AccountProfile/AccountProfile';
import { BagCart } from '../../../BagCart/BagCart';
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

const LANGS = [
  { label: 'ภาษาไทย', code: 'th' },
  { label: 'English', code: 'en' },
];

export const GlobalNav = ({ className = '' }: GlobalNavProps) => {
  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ภาษาไทย');

  // ── Smart sticky: hide on scroll-down, show on scroll-up ──────────────────
  useEffect(() => {
    const SCROLL_THRESHOLD = navRef.current?.offsetHeight ?? 100;
    const DOWN_DELTA = 6;
    const UP_DELTA   = 4;

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = Math.max(0, window.scrollY);

        if (currentY < SCROLL_THRESHOLD) {
          setIsHidden(false);
        } else if (currentY > lastScrollY.current + DOWN_DELTA) {
          setIsHidden(true);
          setActiveMenu(null);
        } else if (currentY < lastScrollY.current - UP_DELTA) {
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
        setLangOpen(false);
      }
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  const toggleMenu = (label: string) => {
    setLangOpen(false);
    setActiveMenu((prev) => (prev === label ? null : label));
  };

  const toggleLang = () => {
    setActiveMenu(null);
    setLangOpen((prev) => !prev);
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="my-store-locator__icon">
            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
              <path d="M12.7742 13.3755H3.05191C2.2285 13.3755 1.55871 12.7056 1.55871 11.8822L1.55859 5.46973H2.29228V11.8822C2.29228 12.301 2.63304 12.6417 3.0518 12.6417H12.7743C13.1931 12.6417 13.5338 12.3011 13.5338 11.8822L13.534 5.46973H14.2676V11.8822C14.2676 12.7056 13.5977 13.3755 12.7743 13.3755H12.7742Z" fill="#1D1D1F"></path>
              <path d="M6.19597 6.04216C5.04487 6.04216 4.1084 5.10557 4.1084 3.95459H4.84209C4.84209 4.70103 5.44941 5.30836 6.19597 5.30836C6.94253 5.30836 7.54985 4.70103 7.54985 3.95459H8.28354C8.28354 5.10557 7.34707 6.04216 6.19597 6.04216Z" fill="#1D1D1F"></path>
              <path d="M9.63738 6.04397C8.48628 6.04397 7.5498 5.10738 7.5498 3.95639V2.43213H8.28349V3.95639C8.28349 4.70284 8.89082 5.31016 9.63738 5.31016C10.3839 5.31016 10.9913 4.70284 10.9913 3.95639H11.7249C11.7249 5.10738 10.7885 6.04397 9.63738 6.04397Z" fill="#1D1D1F"></path>
              <path d="M13.0793 6.04286C11.9282 6.04286 10.9917 5.10627 10.9917 3.95529V2.43102H11.7254V3.95529C11.7254 4.70173 12.3327 5.30906 13.0793 5.30906C13.8258 5.30906 14.4333 4.70173 14.4333 3.95529V2.54174L13.231 0.73392H2.60295L1.40068 2.54163V3.95517C1.40068 4.70162 2.00812 5.30894 2.75468 5.30894C3.50124 5.30894 4.10856 4.70162 4.10856 3.95517V2.43091H4.84225V3.95517C4.84225 5.10627 3.90578 6.04275 2.75468 6.04275C1.60347 6.04275 0.666992 5.10616 0.666992 3.95517V2.43091C0.666992 2.35862 0.688332 2.2879 0.728328 2.22768L2.10075 0.16379C2.16868 0.0614505 2.28342 0 2.40621 0H13.4275C13.5503 0 13.6651 0.0614477 13.733 0.16379L15.1057 2.22779C15.1458 2.28802 15.167 2.35874 15.167 2.43102V3.95529C15.167 5.10627 14.2305 6.04286 13.0793 6.04286H13.0793Z" fill="#1D1D1F"></path>
              <path d="M1.0332 2.06055H14.7997V2.79435H1.0332V2.06055Z" fill="#1D1D1F"></path>
              <rect x="5.4806" y="8.38246" width="4.63549" height="4.63549" rx="0.534864" stroke="black" strokeWidth="0.713153"></rect>
            </svg>
          </div>
          <StoreLocator text="เลือกสาขา" className="global-nav__store-locator" />
        </div>

        <div className="global-nav__lang">
          <h2 className="global-nav__visually-hidden" id="HeaderLanguageLabel">ภาษา</h2>
          <div className={`disclosure${langOpen ? ' is-open' : ''}`}>
            <button
              type="button"
              className="disclosure__button"
              aria-expanded={langOpen}
              aria-controls="HeaderLanguageList"
              aria-describedby="HeaderLanguageLabel"
              onClick={toggleLang}
            >
              <span className="disclosure__text">{currentLang}</span>
              <svg aria-hidden="true" focusable="false" className="icon-caret" viewBox="0 0 10 6" width="10" height="6">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor" />
              </svg>
            </button>
            <div className="disclosure__list-wrapper" hidden={!langOpen}>
              <ul id="HeaderLanguageList" className="disclosure__list">
                {LANGS.map((lang) => (
                  <li key={lang.code} className="disclosure__item">
                    <a
                      href="#"
                      className={`disclosure__link${currentLang === lang.label ? ' disclosure__link--active' : ''}`}
                      hrefLang={lang.code}
                      lang={lang.code}
                      aria-current={currentLang === lang.label ? true : undefined}
                      onClick={(e) => { e.preventDefault(); setCurrentLang(lang.label); setLangOpen(false); }}
                    >
                      {lang.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="global-nav__utilities">
          <AccountProfile className="global-nav__account" />
          <BagCart className="global-nav__bag" />
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
