import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './StoreLocatorDrawer.css';

export interface StoreData {
  id: string;
  name: string;
  lat: number;
  lng: number;
  shortAddress: string;
  mapUrl: string;
  fullAddress: string;
  phoneUrl?: string;
  phoneText?: string;
  lineUrl?: string;
  hours: string;
  contactUrl?: string;
  contactText?: string;
}

interface StoreLocatorDrawerProps {
  onClose: () => void;
  onSelect: (storeName: string) => void;
  selectedStoreName?: string | null;
}

export const STORES_DATA: StoreData[] = [
  {
    id: "1",
    name: "iStudio เดอะมอลล์ ไลฟ์สโตร์ งามวงศ์วาน",
    lat: 13.74424,
    lng: 100.546207,
    shortAddress: "เมืองนนทบุรี, นนทบุรี",
    mapUrl: "",
    fullAddress: "เดอะมอลล์ไลฟ์สโตร์ งามวงศ์วาน ตั้งอยู่เลขที่ 30/39-50 (หรือ 430) ถนนงามวงศ์วาน ตำบลบางเขน อำเภอเมืองนนทบุรี จังหวัดนนทบุรี 11000",
    phoneUrl: "",
    phoneText: "",
    lineUrl: "",
    hours: "Every day 10:00 - 22:00",
    contactUrl: "",
    contactText: "ติดต่อสาขา"
  },
  {
    id: "2",
    name: "iStudio แฟชั่นไอส์แลนด์",
    lat: 13.8123983,
    lng: 100.0726558,
    shortAddress: "คันนายาว, กรุงเทพมหานคร",
    mapUrl: "",
    fullAddress: "",
    phoneUrl: "",
    phoneText: "",
    hours: "Every day 10:00 - 21:00"
  }
];

export function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

export function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
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

export default function StoreLocatorDrawer({ onClose, onSelect, selectedStoreName }: StoreLocatorDrawerProps) {
  const [distance, setDistance] = useState('all');
  const [expandedStoreId, setExpandedStoreId] = useState<string | null>(null);
  
  const initialStoreId = STORES_DATA.find(s => s.name === selectedStoreName)?.id || null;
  const [activeStoreId, setActiveStoreId] = useState<string | null>(initialStoreId);
  
  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  const toggleAccordion = (id: string) => {
    setExpandedStoreId(prev => (prev === id ? null : id));
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); 
  };

  const handleSelect = () => {
    if (activeStoreId) {
      const selectedStore = STORES_DATA.find(s => s.id === activeStoreId);
      if (selectedStore) {
        onSelect(selectedStore.name);
      }
    }
    handleClose();
  };

  const handleUseCurrentLocation = () => {
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          let nearestStoreId: string | null = null;
          let minDistance = Infinity;

          STORES_DATA.forEach(store => {
            const dist = getDistanceFromLatLonInKm(latitude, longitude, store.lat, store.lng);
            if (dist < minDistance) {
              minDistance = dist;
              nearestStoreId = store.id;
            }
          });

          if (nearestStoreId) {
            setActiveStoreId(nearestStoreId);
            const element = document.querySelector(`[data-id="${nearestStoreId}"]`);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  if (!isMounted) return null;

  return createPortal(
    <>
      <div className={`my-store-locator-drawer-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}></div>
      <div 
        className={`gradient my-store-locator-drawer ${isClosing ? 'closing' : ''}`} 
        tabIndex={-1} 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="MyStoreLocatorDrawerHeading" 
        data-hide-availability="false" 
      >
        <div className="my-store-locator-drawer__inner">
          <div className="my-store-locator-drawer__close-wrapper">
            <button className="js-store-locator-drawer-close my-store-locator__close" type="button" aria-label="ปิด" onClick={handleClose}>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="icon icon-close" fill="none" viewBox="0 0 18 17" width="18" height="17">
                <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor"></path>
              </svg>
            </button>
          </div>
          
          <h2 className="my-store-locator-drawer__title" id="MyStoreLocatorDrawerHeading" data-availability-title="สาขาที่พร้อมบริการ">
            สาขาของเรา
          </h2>
          
          <div className="my-store-locator-drawer__search">
            <form id="storeLocatorSearchForm" className="nosubmit_form my-store-locator-drawer__form" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="nosubmit my-store-locator-drawer__input" 
                id="storeLocatorSearch" 
                type="search" 
                name="storeLocatorSearch" 
                placeholder="ป้อนชื่อจังหวัดหรือรหัสไปรษณีย์" 
                aria-label="ป้อนชื่อจังหวัดหรือรหัสไปรษณีย์" 
                role="combobox" 
                aria-expanded="false" 
                aria-owns="myLocations" 
                aria-controls="myLocations" 
                aria-haspopup="listbox" 
                aria-autocomplete="list" 
                autoCorrect="off" 
                autoComplete="off" 
                autoCapitalize="off" 
                spellCheck="false" 
              />
            </form>
            <div className="js-store-locator-search-suggestions my-store-locator-drawer__suggestions hidden"></div>
            <p className="js-store-locator-search-error my-store-locator-drawer__error hidden">
              <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> กรุณากรอกข้อมูล
            </p>
            
            <button 
              className="js-store-locator-use-location-btn my-store-locator-drawer__use-location-btn" 
              type="button"
              onClick={handleUseCurrentLocation}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9023 5.98047C11.309 5.98047 10.729 6.15642 10.2356 6.48606C9.74229 6.8157 9.35777 7.28424 9.13071 7.83242C8.90364 8.3806 8.84423 8.9838 8.95999 9.56574C9.07574 10.1477 9.36147 10.6822 9.78102 11.1018C10.2006 11.5213 10.7351 11.8071 11.3171 11.9228C11.899 12.0386 12.5022 11.9792 13.0504 11.7521C13.5986 11.525 14.0671 11.1405 14.3968 10.6472C14.7264 10.1538 14.9023 9.57381 14.9023 8.98047C14.9014 8.1851 14.5851 7.42256 14.0227 6.86015C13.4603 6.29774 12.6977 5.98137 11.9023 5.98047ZM11.9023 10.4805C11.6057 10.4805 11.3157 10.3925 11.069 10.2277C10.8223 10.0628 10.6301 9.82858 10.5165 9.55449C10.403 9.2804 10.3733 8.9788 10.4312 8.68783C10.489 8.39686 10.6319 8.12959 10.8417 7.91981C11.0515 7.71003 11.3187 7.56717 11.6097 7.50929C11.9007 7.45141 12.2023 7.48112 12.4764 7.59465C12.7505 7.70818 12.9847 7.90044 13.1495 8.14711C13.3144 8.39379 13.4023 8.6838 13.4023 8.98047C13.4019 9.37815 13.2437 9.75942 12.9625 10.0406C12.6813 10.3218 12.3 10.48 11.9023 10.4805Z" fill="#0071E3"></path>
                <path d="M17.6676 3.21133C16.2423 1.78635 14.3396 0.939858 12.3268 0.835221C10.3141 0.730584 8.33391 1.37522 6.76849 2.64472C5.20307 3.91422 4.16338 5.71858 3.85009 7.70957C3.5368 9.70055 3.97212 11.737 5.07202 13.4259L10.7395 22.1265C10.8657 22.3201 11.0381 22.4792 11.2412 22.5893C11.4444 22.6994 11.6718 22.7571 11.9029 22.7571C12.1339 22.7571 12.3613 22.6994 12.5645 22.5893C12.7676 22.4792 12.9401 22.3201 13.0662 22.1265L18.7339 13.4259C19.7545 11.8592 20.2055 9.98931 20.0114 8.12962C19.8172 6.26993 18.9898 4.53348 17.6676 3.21133ZM17.4771 12.6071L11.9029 21.1642L6.32865 12.6071C4.6224 9.98782 4.98835 6.4825 7.19879 4.27197C7.81653 3.65421 8.54991 3.16418 9.35704 2.82985C10.1642 2.49551 11.0292 2.32344 11.9029 2.32344C12.7765 2.32344 13.6416 2.49551 14.4487 2.82985C15.2559 3.16418 15.9892 3.65421 16.607 4.27197C18.8174 6.4825 19.1833 9.98782 17.4771 12.6071Z" fill="#0071E3"></path>
              </svg>
              <span> ใช้ตำแหน่งปัจจุบันของฉัน</span>
            </button>
            
            <div className="my-store-locator-drawer__search-result-options">
              <span className="js-store-locator-results-count my-store-locator-drawer__search-result-label" data-results="ผลลัพธ์" data-result="ผลลัพธ์" data-results-near="สาขาใกล้คุณ" data-result-near="สาขาใกล้คุณ" data-results-near-you="สาขาใกล้คุณ" data-result-near-you="สาขาใกล้คุณ" data-no-results-found="no results found">
                {STORES_DATA.length} ผลลัพธ์
              </span>
              <label className="screenreader" htmlFor="storeLocatorDistanceSelectDrawer">
                Filter stores by distance
              </label>
              <select 
                className="js-store-locator-results-distance my-store-locator-drawer__search-distance-select hidden" 
                id="storeLocatorDistanceSelectDrawer"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              >
                <option value="all">ทุกสาขา</option>
                <option value="5">5 km</option>
                <option value="10">10 km</option>
                <option value="30">30 km</option>
                <option value="50">50 km</option>
                <option value="100">100 km</option>
              </select>
            </div>
          </div>

          <div id="myLocationResults" className="my-store-locator-drawer__search-results">
            {STORES_DATA.map((store) => (
              <div 
                key={store.id}
                className="js-my-location-result my-location-result my-location-result--drawer apl-section-stores-locator-result" 
                data-active={activeStoreId === store.id} 
                data-id={store.id} 
                data-name={store.name} 
                data-latitude={store.lat} 
                data-longitude={store.lng} 
                role="group"
              >
                <div 
                  className="my-location-result-details"
                  onClick={() => setActiveStoreId(activeStoreId === store.id ? null : store.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="my-location-result__my-store apl-section-stores-locator-store-label">สาขาของเรา</div>
                  <section className="js-my-results-details">
                    <div className="my-location-result__details">
                      <div className="my-location-result__name apl-section-stores-locator-store-name">{store.name}</div>
                      <div className="my-store-locator__details-distance apl-section-stores-locator-store-distance"></div>
                    </div>
                    <div className="my-location-result__address apl-section-stores-locator-store-address">
                      {store.shortAddress}
                    </div>
                  </section>
                </div>
                <ul className="list-unstyled my-location-result-details--contact">
                  <li className="my-location-result__address apl-section-stores-locator-store-address-1">
                    <span>ที่อยู่: </span>
                    <a href={store.mapUrl} target="_blank" rel="noopener noreferrer">{store.fullAddress}</a>
                  </li>
                  {store.phoneUrl && (
                    <li className="my-location-result__address apl-section-stores-locator-store-address-phone">
                      <span>โทร: </span>
                      <a href={store.phoneUrl}>{store.phoneText}</a>
                    </li>
                  )}
                  {store.lineUrl && (
                    <li className="my-location-result__address apl-section-stores-locator-store-address-email">
                      <span>LINE: </span>
                      <a href={store.lineUrl} target="_blank" rel="noopener noreferrer">{store.lineUrl}</a>
                    </li>
                  )}
                  <li className="my-location-result__address apl-section-stores-locator-store-address-hours">
                    <span>เวลาทำการ: </span>
                    <span>{store.hours}</span>
                  </li>
                  {store.contactUrl && (
                    <>
                      <li>
                        <button 
                          className="my-location-result__services-btn js-acc-button apl-section-stores-locator-store-services-btn" 
                          type="button" 
                          data-acc="true"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleAccordion(store.id);
                          }}
                        >
                          <span className="underlined-text">ดูบริการสาขา</span>
                          <i className={`myarrow fa fa-chevron-down my-location-result__services-icon js-acc-icon ${expandedStoreId === store.id ? 'expanded' : ''}`} aria-hidden="true" aria-expanded={expandedStoreId === store.id}></i>
                        </button>
                      </li>
                      {expandedStoreId === store.id && (
                        <li className="my-location-result__services js-acc-details" aria-expanded="true">
                          <p><a href={store.contactUrl} target="_blank" rel="noopener noreferrer"><span className="schedule_btn">{store.contactText || 'ติดต่อสาขา'}</span></a></p>
                        </li>
                      )}
                    </>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="my-store-locator-drawer__footer">
          <button className="js-store-locator-select-btn my-store-locator__details-btn button button--full-width" type="button" onClick={handleSelect}>
            เลือก
          </button>
        </div>
        
        <div id="storeLocatorDrawerLoading" className="my-store-locator-drawer__loading hidden">
          <i className="fa fa-spinner fa-spin" style={{ fontSize: '24px' }}></i>
        </div>
      </div>
    </>,
    document.body
  );
}