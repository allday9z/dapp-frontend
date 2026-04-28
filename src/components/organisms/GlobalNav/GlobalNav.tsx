"use client";

import { useEffect, useRef, useState } from 'react';
import './GlobalNav.css';
import { LogoPartner } from '../../atoms/logos/LogoPartner/LogoPartner';
import { LogoWipApp } from '../../atoms/logos/LogoWipApp/LogoWipApp';
import { SearchInput } from '../../molecules/SearchInput/SearchInput';
import { StoreLocator } from '../../molecules/StoreLocator/StoreLocator';
import { AccountProfile } from '../AccountProfile/AccountProfile';
import { BagCart } from '../BagCart/BagCart';
import StoreLocatorDrawer from '../StoreLocator/StoreLocatorDrawer';
import { STORES_DATA } from '../StoreLocator/StoreList';
import navMenu from '@/data/navigation.json';
import SearchDrawerMobile from '../SearchDrawer/SearchDrawer';

type Breakpoints = {
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
}

type NavItem = {
  label: string;
  href: string;
  items?: { label: string; href: string }[];
};

type NavStack = {
  view: 'root' | 'submenu';
  label?: string;
  items?: { label: string; href: string }[];
};

const STORE_STORAGE_KEY = 'user_selected_store';
const STORE_EXPIRY_MS = 60 * 60 * 1000;

const saveStoreToStorage = (storeName: string) => {
  const data = {
    name: storeName,
    expiry: new Date().getTime() + STORE_EXPIRY_MS,
  };
  localStorage.setItem(STORE_STORAGE_KEY, JSON.stringify(data));
  window.dispatchEvent(new Event('local-store-update'));
};

const getStoreFromStorage = (): string | null => {
  const itemStr = localStorage.getItem(STORE_STORAGE_KEY);
  if (!itemStr) return null;
  try {
    const item = JSON.parse(itemStr);
    const now = new Date().getTime();
    if (now > item.expiry) {
      localStorage.removeItem(STORE_STORAGE_KEY);
      return null;
    }
    return item.name;
  } catch (e) {
    return null;
  }
};

const useBreakpoint = (): Breakpoints => {
  const [breakpoints, setBreakpoints] = useState<Breakpoints>({
    mobile: true,
    tablet: false,
    desktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setBreakpoints({
        mobile: width < 750,
        tablet: width >= 750 && width < 1024,
        desktop: width >= 1024,
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoints;
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

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
}

const StoreDetailsPopup = ({ 
  onClose, 
  onOpenDrawer, 
  alignRight = false, 
  storeName,
  userLocation 
}: { 
  onClose: () => void, 
  onOpenDrawer: () => void, 
  alignRight?: boolean, 
  storeName?: string | null,
  userLocation?: {lat: number, lng: number} | null 
}) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const store = STORES_DATA.find(s => s.name === storeName) || STORES_DATA[0];

  const distanceVal = (userLocation && store) 
    ? getDistanceFromLatLonInKm(userLocation.lat, userLocation.lng, store.lat, store.lng) 
    : null;

  const isStoreLocatorPage = typeof window !== 'undefined' && window.location.pathname.includes('store-locator');

  return (
    <div 
      className="js-my-store-locator-details my-store-locator__details" 
      tabIndex={-1} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="MyStoreDetailsHeading"
      onClick={(e) => e.stopPropagation()}
    >
      <button 
        className="js-my-store-locator-close my-store-locator__close" 
        type="button" 
        aria-label="Close"
        onClick={onClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="icon icon-close" fill="none" viewBox="0 0 18 17" width="18" height="17">
          <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor"></path>
        </svg>
      </button>
      <div className="my-store-locator__details-header">
        <h2 className="my-store-locator__details-title" id="MyStoreDetailsHeading">{store.name}</h2>
        {distanceVal !== null && (
          <span className="js-my-store-locator-distance my-store-locator__details-distance apl-section-stores-locator-store-distance">
            {distanceVal.toFixed(1)} กิโลเมตร
          </span>
        )}
      </div>
      <div className="js-my-store-locator-location my-store-locator__details-location">{store.shortAddress}</div>
      <div className="my-store-locator-content">
        <div className="js-my-store-locator-address my-store-locator__details-info">
          ที่อยู่: <a href={store.mapUrl || '#'} target="_blank" rel="noreferrer" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: '600' }}>{store.fullAddress || store.shortAddress}</a>
        </div>
        {store.phoneText && (
          <div className="js-my-store-locator-telephone my-store-locator__details-info">
            โทร: <a href={store.phoneUrl || `tel:${store.phoneText.replace(/\s+/g, '')}`} style={{ color: '#0066cc', textDecoration: 'none', fontWeight: '600' }}>{store.phoneText}</a>
          </div>
        )}
        <div className="js-my-store-locator-hours my-store-locator__details-info">
          เวลาทำการ: <span>{store.hours}</span>
        </div>
        <div className="js-my-store-locator-services">
          <button 
            className="my-location-result__services-btn apl-section-stores-locator-store-services-btn" 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsServicesOpen(!isServicesOpen);
            }}
            style={{ background: 'none', border: 'none', padding: 0, color: '#0066cc', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'SFProThai' }}
          >
            <span className="underlined-text">ดูบริการสาขา</span>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" style={{ transform: isServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
              <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"/>
            </svg>
          </button>
          {isServicesOpen && (
            <div aria-expanded="true" style={{ marginTop: '12px'}}>
              {store.services && store.services.length > 0 && (
                <ul style={{ paddingLeft: '24px', margin: '0 0 8px', listStyleType: 'disc', textAlign: 'left' }}>
                  {store.services.map((service, index) => (
                    <li key={index}>
                      <a href={service.url} className="apl-section-stores-locator-store-services-link" style={{color: '#0071e3', fontSize: '14px'}}>
                        {service.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {store.contactUrl && (
                <p style={{ margin: 0, marginTop: '8px' }}>
                  <a href={store.contactUrl} target="_blank" rel="noopener noreferrer" className="apl-section-stores-locator-store-services-link" style={{ color: '#0066cc', textDecoration: 'none' }}>
                    {store.contactText || 'Schedule Appointment'}
                  </a>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
      
      {!isStoreLocatorPage && (
        <div className="my-store-locator__details-footer" style={{ display: 'flex', flexDirection: 'column'}}>
          <a 
            className="my-store-locator__details-btn--secondary button button--secondary button--full-width" 
            href="/pages/store-locator"
          >
            ดูสาขาในแผนที่
          </a>
          <button 
            className="my-store-locator__details-btn" 
            type="button" 
            aria-haspopup="dialog"
            onClick={() => {
              onClose();
              onOpenDrawer();
            }}
          >
            เลือกสาขาอื่น
          </button>
        </div>
      )}
    </div>
  );
}

export const GlobalNav = ({ className = '' }: { className?: string }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const [navHeight, setNavHeight] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const isFixedRef = useRef(false);
  const [isHidden, setIsHidden] = useState(false);

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ภาษาไทย');
  const [navStack, setNavStack] = useState<NavStack[]>([]);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isClosingDrawer, setIsClosingDrawer] = useState(false);
  
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedStoreName, setSelectedStoreName] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [isLoadingStore, setIsLoadingStore] = useState(false);
  
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isClosingMobileSearch, setIsClosingMobileSearch] = useState(false);

  const isStoreOpenRef = useRef(isStoreOpen);

  useEffect(() => {
    isStoreOpenRef.current = isStoreOpen;
  }, [isStoreOpen]);

  useEffect(() => {
    const fetchLocationAndStore = () => {
      if (typeof window !== 'undefined') {
        const savedStore = getStoreFromStorage();
        if (savedStore) {
          setSelectedStoreName(savedStore);
        } else {
          setIsLoadingStore(true);
        }

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setUserLocation({ lat: latitude, lng: longitude });
              
              if (!savedStore) {
                let nearestStoreName: string | null = null;
                let minDistance = Infinity;

                STORES_DATA.forEach(store => {
                  const dist = getDistanceFromLatLonInKm(latitude, longitude, store.lat, store.lng);
                  if (dist < minDistance) {
                    minDistance = dist;
                    nearestStoreName = store.name;
                  }
                });

                if (nearestStoreName) {
                  setSelectedStoreName(nearestStoreName);
                  saveStoreToStorage(nearestStoreName);
                }
              }
              setIsLoadingStore(false);
            },
            () => {
              setIsLoadingStore(false);
            }
          );
        } else {
          setIsLoadingStore(false);
        }
      }
    };

    fetchLocationAndStore();

    const handleLocalUpdate = () => {
      const savedStore = getStoreFromStorage();
      if (savedStore) setSelectedStoreName(savedStore);
    };

    window.addEventListener('local-store-update', handleLocalUpdate);
    return () => window.removeEventListener('local-store-update', handleLocalUpdate);
  }, []);

  useEffect(() => {
    if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    const updateHeight = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    };
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const breakpoints = useBreakpoint();
  const isMobile = breakpoints.mobile;
  const isTablet = breakpoints.tablet;
  const isDesktop = breakpoints.desktop;

  useEffect(() => {
    if (navRef.current) setNavHeight(navRef.current.offsetHeight);
  }, [isMobile, isTablet]);

  const mobileDrawerOpen = navStack.length > 0;
  const currentView = navStack[navStack.length - 1];

  const openSubmenu = (label: string, items?: { label: string; href: string }[]) => {
    setNavStack([...navStack, { view: 'submenu', label, items }]);
  };

  const goBack = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setNavStack(navStack.slice(0, -1));
      setIsAnimatingOut(false);
    }, 350);
  };

  const closeDrawer = () => {
    if (isClosingDrawer) return;
    setIsClosingDrawer(true);
    setTimeout(() => {
      setNavStack([]);
      setIsClosingDrawer(false);
    }, 350);
  };

  const closeDrawerImmediate = () => {
    setNavStack([]);
    setIsClosingDrawer(false);
  };

  const openMobileSearch = () => {
    setIsMobileSearchOpen(true);
  };

  const closeMobileSearch = () => {
    if (isClosingMobileSearch) return;
    setIsClosingMobileSearch(true);
    setTimeout(() => {
      setIsMobileSearchOpen(false);
      setIsClosingMobileSearch(false);
    }, 350);
  };

  useEffect(() => {
    if (!isMobile && mobileDrawerOpen) closeDrawerImmediate();
  }, [isMobile, mobileDrawerOpen]);

  useEffect(() => {
    if (isMobile && (mobileDrawerOpen || isMobileSearchOpen)) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [isMobile, mobileDrawerOpen, isMobileSearchOpen]);

  useEffect(() => {
    const DOWN_DELTA = 6;
    const UP_DELTA = 4;

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = Math.max(0, window.scrollY);

        if (currentY <= navHeight) {
          setIsFixed(false);
          isFixedRef.current = false;
          setIsHidden(false);
        }
        else if (currentY > lastScrollY.current + DOWN_DELTA) {
          if (!isStoreOpenRef.current) {
            setIsFixed(true);
            isFixedRef.current = true;
            setIsHidden(true);
            setActiveMenu(null);
          }
        }
        else if (currentY < lastScrollY.current - UP_DELTA) {
          setIsFixed(true);
          isFixedRef.current = true;
          setIsHidden(false);
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navHeight]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setActiveMenu(null);
        setLangOpen(false);
        setIsStoreOpen(false);
      }
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  const toggleMenu = (label: string) => {
    setLangOpen(false);
    setIsStoreOpen(false);
    setActiveMenu((prev) => (prev === label ? null : label));
  };

  const toggleLang = () => {
    setActiveMenu(null);
    setIsStoreOpen(false);
    setLangOpen((prev) => !prev);
  };

  const handleStoreSelect = (name: string) => {
    setSelectedStoreName(name);
    saveStoreToStorage(name);
  };

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const input = e.target as HTMLInputElement;
      if (input.tagName === 'INPUT' && input.value.trim() !== '') {
        window.location.href = `/search?q=${encodeURIComponent(input.value.trim())}`;
      }
    }
  };

  const displayStoreName = selectedStoreName ? selectedStoreName : 'เลือกสาขา';

  return (
    <div ref={wrapperRef} className="global-nav-wrapper" style={{ height: isFixed ? navHeight : undefined, minHeight: navHeight || undefined }}>
      <div
        ref={navRef}
        className={`global-nav ${isFixed ? 'global-nav--fixed' : ''} ${isHidden ? 'global-nav--hidden' : ''} ${isMobile ? 'global-nav--mobile' : ''} ${isTablet ? 'global-nav--tablet' : ''} ${isDesktop ? 'global-nav--desktop' : ''} ${className}`.trim()}
        role="navigation"
        aria-label="เมนูหลัก"
      >
        {isMobile && mobileDrawerOpen && (
          <div 
            className="global-nav__mobile-backdrop"
            onClick={closeDrawer}
            aria-hidden="true"
          />
        )}

        {isMobile && (
          <>
            <div className="my-store-locator my-store-locator--mobile" style={{ position: 'relative', width: '100%' }}>
              <button 
                className='my-store-locator-btn--mobile' 
                type="button" 
                aria-haspopup="dialog" 
                disabled={isLoadingStore}
                onClick={() => {
                  if (isLoadingStore) return;
                  if (selectedStoreName) {
                    setIsStoreOpen(!isStoreOpen);
                  } else {
                    setIsDrawerOpen(true);
                  }
                }}
                style={{ 
                  cursor: isLoadingStore ? 'default' : 'pointer', 
                  background: 'transparent', 
                  border: 'none',
                  opacity: isLoadingStore ? 0.5 : 1,
                  pointerEvents: isLoadingStore ? 'none' : 'auto'
                }}
              >
                <div className="my-store-locator__icon" style={{ display: 'flex', alignItems: 'center' }}>
                  <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                    <path d="M12.7742 13.3755H3.05191C2.2285 13.3755 1.55871 12.7056 1.55871 11.8822L1.55859 5.46973H2.29228V11.8822C2.29228 12.301 2.63304 12.6417 3.0518 12.6417H12.7743C13.1931 12.6417 13.5338 12.3011 13.5338 11.8822L13.534 5.46973H14.2676V11.8822C14.2676 12.7056 13.5977 13.3755 12.7743 13.3755H12.7742Z" fill="#1D1D1F" />
                    <path d="M6.19597 6.04216C5.04487 6.04216 4.1084 5.10557 4.1084 3.95459H4.84209C4.84209 4.70103 5.44941 5.30836 6.19597 5.30836C6.94253 5.30836 7.54985 4.70103 7.54985 3.95459H8.28354C8.28354 5.10557 7.34707 6.04216 6.19597 6.04216Z" fill="#1D1D1F" />
                    <path d="M9.63738 6.04397C8.48628 6.04397 7.5498 5.10738 7.5498 3.95639V2.43213H8.28349V3.95639C8.28349 4.70284 8.89082 5.31016 9.63738 5.31016C10.3839 5.31016 10.9913 4.70284 10.9913 3.95639H11.7249C11.7249 5.10738 10.7885 6.04397 9.63738 6.04397Z" fill="#1D1D1F" />
                    <path d="M13.0793 6.04286C11.9282 6.04286 10.9917 5.10627 10.9917 3.95529V2.43102H11.7254V3.95529C11.7254 4.70173 12.3327 5.30906 13.0793 5.30906C13.8258 5.30906 14.4333 4.70173 14.4333 3.95529V2.54174L13.231 0.73392H2.60295L1.40068 2.54163V3.95517C1.40068 4.70162 2.00812 5.30894 2.75468 5.30894C3.50124 5.30894 4.10856 4.70162 4.10856 3.95517V2.43091H4.84225V3.95517C4.84225 5.10627 3.90578 6.04275 2.75468 6.04275C1.60347 6.04275 0.666992 5.10616 0.666992 3.95517V2.43091C0.666992 2.35862 0.688332 2.2879 0.728328 2.22768L2.10075 0.16379C2.16868 0.0614505 2.28342 0 2.40621 0H13.4275C13.5503 0 13.6651 0.0614477 13.733 0.16379L15.1057 2.22779C15.1458 2.28802 15.167 2.35874 15.167 2.43102V3.95529C15.167 5.10627 14.2305 6.04286 13.0793 6.04286H13.0793Z" fill="#1D1D1F" />
                    <path d="M1.0332 2.06055H14.7997V2.79435H1.0332V2.06055Z" fill="#1D1D1F" />
                    <rect x="5.4806" y="8.38246" width="4.63549" height="4.63549" rx="0.534864" stroke="black" strokeWidth="0.713153" />
                  </svg>
                </div>
                <p className="my-store-locator__info--mobile">
                  <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
                    {isLoadingStore ? 'กำลังโหลดสาขา...' : displayStoreName}
                  </span>
                </p>
              </button>
              {isStoreOpen && selectedStoreName && !isLoadingStore && <StoreDetailsPopup onClose={() => setIsStoreOpen(false)} onOpenDrawer={() => setIsDrawerOpen(true)} storeName={selectedStoreName} userLocation={userLocation} />}
            </div>

            <div className="global-nav__mobile-header">
              <button
                type="button"
                className="global-nav__hamburger"
                aria-label={mobileDrawerOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
                aria-expanded={mobileDrawerOpen}
                onClick={() => (mobileDrawerOpen ? closeDrawer() : setNavStack([{ view: 'root' }]))}
              >
                {mobileDrawerOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 18 17" width="18" height="17">
                    <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 18 16" width="18" height="16">
                    <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor" />
                  </svg>
                )}
              </button>
              <div className="global-nav__mobile-logos">
                <LogoPartner className="global-nav__logo-partner"/>
                <LogoWipApp className="global-nav__logo-wip" />
              </div>
              <div className="global-nav__mobile-right-icons">
                <button
                  type="button"
                  className="global-nav__mobile-search-toggle"
                  aria-label="ค้นหา"
                  onClick={openMobileSearch}
                >
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.5 7c0 2.485-2.015 4.5-4.5 4.5S2.5 9.485 2.5 7 4.515 2.5 7 2.5 11.5 4.515 11.5 7zM16 15.293l-4.512-4.512A6.467 6.467 0 0013 7c0-3.314-2.686-6-6-6S1 3.686 1 7s2.686 6 6 6c1.4 0 2.685-.48 3.78-1.28l4.513 4.512L16 15.293z" />
                  </svg>
                </button>
                <a href="/account/login" className="global-nav__mobile-account" aria-label="เข้าสู่ระบบ">
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z" fill="currentColor"/>
                  </svg>
                </a>
                <BagCart className="global-nav__bag" />
              </div>
            </div>
          </>
        )}

        {isMobile && (mobileDrawerOpen || isClosingDrawer) && (
          <div className={`global-nav__mobile-drawer${isClosingDrawer ? ' closing' : ''}`}>
            <div className="global-nav__mobile-drawer-view global-nav__mobile-drawer-view--root">
                <nav className="global-nav__mobile-menu">
                  <ul>
                    {navMenu.primary.map((item) => (
                      <li key={item.label}>
                        <button
                          className="global-nav__mobile-menu-item"
                          onClick={() => openSubmenu(item.label, item.items)}
                        >
                          {item.label}
                          <svg className="global-nav__icon-right" width="6" height="11" viewBox="0 0 6 11" fill="none" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.838357 10.3233L0 9.48493L4.32329 5.16164L0 0.838358L0.838357 0L6 5.16164L0.838357 10.3233Z" fill="currentColor"/>
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                <ul className="global-nav__mobile-menu-secondary">
                  {navMenu.secondary.map((item) => (
                    <li key={item.label}>
                      {item.items && item.items.length > 0 ? (
                        <button
                          className="global-nav__mobile-menu-item"
                          onClick={() => openSubmenu(item.label, item.items)}
                        >
                          {item.label}
                          <svg className="global-nav__icon-right" width="6" height="11" viewBox="0 0 6 11" fill="none" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.838357 10.3233L0 9.48493L4.32329 5.16164L0 0.838358L0.838357 0L6 5.16164L0.838357 10.3233Z" fill="currentColor"/>
                          </svg>
                        </button>
                      ) : (
                        <a href={item.href} className="global-nav__mobile-menu-item global-nav__mobile-menu-link">
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="global-nav__mobile-utility">
                <div className="global-nav__mobile-lang">
                  <div 
                    className={`disclosure${langOpen ? ' is-open' : ''}`} 
                    style={{ position: 'relative', display: 'block' }}
                  >
                    <button
                      type="button"
                      className="global-nav__mobile-lang-btn"
                      aria-expanded={langOpen}
                      onClick={() => setLangOpen(prev => !prev)}
                    >
                      <span>{currentLang}</span>
                      <svg aria-hidden="true" focusable="false" className="icon-caret" viewBox="0 0 10 6" width="10" height="6">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor" />
                      </svg>
                    </button>
                    {langOpen && (
                      <ul 
                        className="global-nav__mobile-lang-list"
                      >
                        {LANGS.map((lang) => (
                          <li key={lang.code}>
                            <a
                              href="#"
                              className={`global-nav__mobile-lang-link${currentLang === lang.label ? ' is-active' : ''}`}
                              style={{ padding: '12px 18px', display: 'block' }}
                              onClick={(e) => { 
                                e.preventDefault(); 
                                setCurrentLang(lang.label); 
                                setLangOpen(false); 
                              }}
                            >
                              {lang.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <a href="/account/login" className="global-nav__mobile-account-link">
                  <svg aria-hidden="true" focusable="false" width="18" height="19" viewBox="0 0 18 19" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z" fill="currentColor"/>
                  </svg>
                  เข้าสู่ระบบ
                </a>
              </div>
            </div>

            {navStack.length > 1 && currentView?.view === 'submenu' && (
              <div 
                className={`global-nav__mobile-drawer-view global-nav__mobile-drawer-view--submenu ${isAnimatingOut ? 'exiting' : ''}`}
              >
                <div 
                  className="global-nav__mobile-submenu-header"
                  onClick={goBack}
                  role="button"
                  tabIndex={0}
                >
                  <button
                    type="button"
                    className="global-nav__mobile-back"
                    aria-label="ย้อนกลับ"
                  >
                    <svg className="global-nav__icon-right global-nav__icon-right--back" width="6" height="11" viewBox="0 0 6 11" fill="none" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.838357 10.3233L0 9.48493L4.32329 5.16164L0 0.838358L0.838357 0L6 5.16164L0.838357 10.3233Z" fill="currentColor"/>
                    </svg>
                  </button>
                  <span className="global-nav__mobile-submenu-title">{currentView.label}</span>
                </div>
                <nav className="global-nav__mobile-menu">
                  <ul>
                    {currentView.items?.map((item) => (
                      <li key={item.label}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </div>
        )}

        {(isTablet || isDesktop) && (
          <>
            <div className="global-nav__top-bar">
              <div className="global-nav__logos">
                <LogoPartner className="global-nav__logo-partner" />
                <LogoWipApp className="global-nav__logo-wip" />
              </div>
              <div onKeyDown={handleSearchSubmit} style={{ display: 'contents' }}>
                <SearchInput className="global-nav__search" />
              </div>
              
              <div 
                className="global-nav__store-container"
                onClick={() => {
                  if (isLoadingStore) return;
                  if (selectedStoreName) {
                    setIsStoreOpen(!isStoreOpen);
                  } else {
                    setIsDrawerOpen(true);
                  }
                }}
                role="button"
                tabIndex={isLoadingStore ? -1 : 0}
                style={{
                  opacity: isLoadingStore ? 0.5 : 1,
                  pointerEvents: isLoadingStore ? 'none' : 'auto',
                  cursor: isLoadingStore ? 'default' : 'pointer'
                }}
              >
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
                <StoreLocator text={isLoadingStore ? 'กำลังโหลดสาขา...' : displayStoreName} className="global-nav__store-locator" />
                {isStoreOpen && selectedStoreName && !isLoadingStore && <StoreDetailsPopup onClose={() => setIsStoreOpen(false)} onOpenDrawer={() => setIsDrawerOpen(true)} alignRight storeName={selectedStoreName} userLocation={userLocation} />}
              </div>

              <div className="global-nav__utilities">
                <div className="global-nav__utilities-group">
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
                  <AccountProfile className="global-nav__account" />
                </div>
                <BagCart className="global-nav__bag" />
              </div>
            </div>

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
          </>
        )}
        
        {isDrawerOpen && (
          <StoreLocatorDrawer
            selectedStoreName={selectedStoreName}
            onClose={() => setIsDrawerOpen(false)}
            onSelect={handleStoreSelect}
          />
        )}
        
        {isMobileSearchOpen && (
          <div className={`global-nav__mobile-search-drawer ${isClosingMobileSearch ? 'slide-out-right' : 'slide-in-right'}`}>
            <SearchDrawerMobile onClose={closeMobileSearch} />
          </div>
        )}

        <div id="global-nav-addon-slot" />
      </div>
    </div>
  );
};