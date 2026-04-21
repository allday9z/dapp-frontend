"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import "./StoreLocatorPage.css";
import { STORES_DATA } from "@/components/organisms/StoreLocator/StoreList";

interface StoreLocatorPageProps {}

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

export const StoreLocatorPage = (props: StoreLocatorPageProps) => {
  const [selectedStoreName, setSelectedStoreName] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [isLoadingStore, setIsLoadingStore] = useState(false);
  const [maxDistance, setMaxDistance] = useState<number | 'all'>(30);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [activePopupStore, setActivePopupStore] = useState<any | null>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const mapRef = useRef<any>(null);
  const markersLayerRef = useRef<any>(null);

  const fetchUserLocation = useCallback((shouldSelectNearest: boolean) => {
    setIsLoadingStore(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });

          if (shouldSelectNearest) {
            let nearestStoreName: string | null = null;
            let minDistance = Infinity;

            STORES_DATA.forEach((store: any) => {
              const lat = parseFloat(String(store.lat));
              const lng = parseFloat(String(store.lng));
              if (!isNaN(lat) && !isNaN(lng)) {
                const dist = getDistanceFromLatLonInKm(latitude, longitude, lat, lng);
                if (dist < minDistance) {
                  minDistance = dist;
                  nearestStoreName = store.name;
                }
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
  }, []);

  useEffect(() => {
    const fetchLocationAndStore = () => {
      if (typeof window !== 'undefined') {
        const savedStore = getStoreFromStorage();
        if (savedStore) {
          setSelectedStoreName(savedStore);
          fetchUserLocation(false);
        } else {
          fetchUserLocation(true);
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
  }, [fetchUserLocation]);

  useEffect(() => {
    const initializeMap = () => {
      const L = (window as any).L;
      if (!L) return;

      try {
        if (!mapRef.current) {
          mapRef.current = L.map("desktopMapWrapper", { zoomControl: true }).setView([13.7563, 100.5018], 6);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(mapRef.current);
        }
        setIsMapLoaded(true);
      } catch (error) {
      }
    };

    if ((window as any).L) {
      initializeMap();
    } else {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.async = true;
      script.crossOrigin = "";
      script.onload = initializeMap;
      document.body.appendChild(script);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!isMapLoaded || !mapRef.current) return;
    const map = mapRef.current;
    
    const handleMapClick = () => {
      setActivePopupStore(null);
    };
    
    map.on('click', handleMapClick);
    
    return () => {
      map.off('click', handleMapClick);
    };
  }, [isMapLoaded]);

  useEffect(() => {
    if (!mapRef.current || !activePopupStore) return;
    const map = mapRef.current;

    const updatePos = () => {
      const point = map.latLngToContainerPoint([activePopupStore.lat, activePopupStore.lng]);
      setPopupPosition({ x: point.x, y: point.y });
    };

    updatePos();

    map.on('move', updatePos);
    map.on('zoom', updatePos);

    return () => {
      map.off('move', updatePos);
      map.off('zoom', updatePos);
    };
  }, [activePopupStore, isMapLoaded]);

  const handleStoreSelect = (name: string) => {
    setSelectedStoreName(name);
    saveStoreToStorage(name);
    setActivePopupStore(null);
  };

  const handleDistanceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setMaxDistance(value === 'all' ? 'all' : Number(value));
  };

  const filteredStores = useMemo(() => {
    let stores = STORES_DATA.map((store: any) => {
      const lat = parseFloat(String(store.lat));
      const lng = parseFloat(String(store.lng));
      const distanceVal = (userLocation && !isNaN(lat) && !isNaN(lng))
        ? getDistanceFromLatLonInKm(userLocation.lat, userLocation.lng, lat, lng) 
        : null;
      return { ...store, lat, lng, distanceVal };
    });

    if (userLocation && maxDistance !== 'all') {
      stores = stores.filter((store: any) => store.distanceVal !== null && store.distanceVal <= maxDistance);
    }

    if (userLocation) {
      stores.sort((a: any, b: any) => {
        if (a.distanceVal === null) return 1;
        if (b.distanceVal === null) return -1;
        return a.distanceVal - b.distanceVal;
      });
    }
    
    return stores;
  }, [userLocation, maxDistance]);

  useEffect(() => {
    if (!mapRef.current || !(window as any).L || !isMapLoaded) return;

    const L = (window as any).L;
    const map = mapRef.current;
    
    if (markersLayerRef.current) {
      map.removeLayer(markersLayerRef.current);
    }

    markersLayerRef.current = L.layerGroup().addTo(map);
    const validCoords: [number, number][] = [];

    filteredStores.forEach((store: any) => {
      const isSelected = selectedStoreName === store.name;
      const markerColor = isSelected ? "#0071E3" : "#FF3B30";
      
      const lat = parseFloat(String(store.lat));
      const lng = parseFloat(String(store.lng));

      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: `<div style="background-color: ${markerColor}; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      if (!isNaN(lat) && !isNaN(lng)) {
        const marker = L.marker([lat, lng], { icon: customIcon });
        
        marker.on('click', () => {
          setActivePopupStore(store);
          map.setView([lat, lng], 16);
        });

        marker.addTo(markersLayerRef.current);
        validCoords.push([lat, lng]);
      }
    });

    let focusedCoords: [number, number] | null = null;
    if (selectedStoreName) {
      const sStore = STORES_DATA.find((s: any) => s.name === selectedStoreName);
      if (sStore) {
        const sLat = parseFloat(String(sStore.lat));
        const sLng = parseFloat(String(sStore.lng));
        if (!isNaN(sLat) && !isNaN(sLng)) {
          focusedCoords = [sLat, sLng];
        }
      }
    }

    if (focusedCoords) {
      map.setView(focusedCoords, 15);
    } else if (validCoords.length > 0) {
      try {
        const bounds = L.latLngBounds(validCoords);
        if (bounds && bounds.isValid()) {
          map.fitBounds(bounds, { padding: [50, 50], maxZoom: 16 });
        }
      } catch (e) {
      }
    }
  }, [filteredStores, selectedStoreName, isMapLoaded]);

  return (
    <div className="store-locator-page">
      <main id="MainContent" className="content-for-layout focus-none" role="main" tabIndex={-1}>
          <div className="store-location-find-main page-width section-stores-locator-padding apl-section-stores-locator">
            <div className="locator_grid">
              <div className="one-search_details">
                <div className="my-store-locator gradient" tabIndex={-1}>
                  <div className="my-store-locator-drawer__inner">
                    <h2 className="my-store-locator-drawer__title locator_head h1 apl-section-stores-locator-title" id="MyStoreLocatorDrawerHeading">
                      สาขาของเรา
                    </h2>
                    <div className="my-store-locator-drawer__search">
                      <form id="storeLocatorSearchForm" className="nosubmit_form my-store-locator-drawer__form apl-section-stores-locator-search">
                        <input className="nosubmit my-store-locator-drawer__input" id="storeLocatorSearch" type="search" name="storeLocatorSearch" placeholder="ป้อนชื่อจังหวัดหรือรหัสไปรษณีย์" aria-label="Enter City or Postal Code" role="combobox" aria-expanded="false" aria-owns="myLocations" aria-controls="myLocations" aria-haspopup="listbox" aria-autocomplete="list" autoCorrect="off" autoComplete="off" autoCapitalize="off" spellCheck={false} />
                      </form>
                      <div className="js-store-locator-search-suggestions my-store-locator-drawer__suggestions hidden"></div>
                      <p className="js-store-locator-search-error my-store-locator-drawer__error hidden">
                        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Please fill this out
                      </p>
                      <button className="js-store-locator-use-location-btn my-store-locator-drawer__use-location-btn apl-section-stores-locator-search-current-location" type="button" onClick={() => fetchUserLocation(true)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9023 5.98047C11.309 5.98047 10.729 6.15642 10.2356 6.48606C9.74229 6.8157 9.35777 7.28424 9.13071 7.83242C8.90364 8.3806 8.84423 8.9838 8.95999 9.56574C9.07574 10.1477 9.36147 10.6822 9.78102 11.1018C10.2006 11.5213 10.7351 11.8071 11.3171 11.9228C11.899 12.0386 12.5022 11.9792 13.0504 11.7521C13.5986 11.525 14.0671 11.1405 14.3968 10.6472C14.7264 10.1538 14.9023 9.57381 14.9023 8.98047C14.9014 8.1851 14.5851 7.42256 14.0227 6.86015C13.4603 6.29774 12.6977 5.98137 11.9023 5.98047ZM11.9023 10.4805C11.6057 10.4805 11.3157 10.3925 11.069 10.2277C10.8223 10.0628 10.6301 9.82858 10.5165 9.55449C10.403 9.2804 10.3733 8.9788 10.4312 8.68783C10.489 8.39686 10.6319 8.12959 10.8417 7.91981C11.0515 7.71003 11.3187 7.56717 11.6097 7.50929C11.9007 7.45141 12.2023 7.48112 12.4764 7.59465C12.7505 7.70818 12.9847 7.90044 13.1495 8.14711C13.3144 8.39379 13.4023 8.6838 13.4023 8.98047C13.4019 9.37815 13.2437 9.75942 12.9625 10.0406C12.6813 10.3218 12.3 10.48 11.9023 10.4805Z" fill="#0071E3"></path>
                          <path d="M17.6676 3.21133C16.2423 1.78635 14.3396 0.939858 12.3268 0.835221C10.3141 0.730584 8.33391 1.37522 6.76849 2.64472C5.20307 3.91422 4.16338 5.71858 3.85009 7.70957C3.5368 9.70055 3.97212 11.737 5.07202 13.4259L10.7395 22.1265C10.8657 22.3201 11.0381 22.4792 11.2412 22.5893C11.4444 22.6994 11.6718 22.7571 11.9029 22.7571C12.1339 22.7571 12.3613 22.6994 12.5645 22.5893C12.7676 22.4792 12.9401 22.3201 13.0662 22.1265L18.7339 13.4259C19.7545 11.8592 20.2055 9.98931 20.0114 8.12962C19.8172 6.26993 18.9898 4.53348 17.6676 3.21133ZM17.4771 12.6071L11.9029 21.1642L6.32865 12.6071C4.6224 9.98782 4.98835 6.4825 7.19879 4.27197C7.81653 3.65421 8.54991 3.16418 9.35704 2.82985C10.1642 2.49551 11.0292 2.32344 11.9029 2.32344C12.7765 2.32344 13.6416 2.49551 14.4487 2.82985C15.2559 3.16418 15.9892 3.65421 16.607 4.27197C18.8174 6.4825 19.1833 9.98782 17.4771 12.6071Z" fill="#0071E3"></path>
                        </svg>
                        <span> ใช้ตำแหน่งที่ตั้งของคุณ</span>
                      </button>
                      <div className="my-store-locator-drawer__search-result-options">
                        <span className="js-store-locator-results-count my-store-locator-drawer__search-result-label apl-section-stores-locator-results-count" data-results="results" data-result="result" data-results-near="results near" data-result-near="result near" data-results-near-you="results near you" data-result-near-you="result near you" data-no-results-found="no results found">{filteredStores.length} สาขาใกล้คุณ</span>
                        <label className="screenreader" htmlFor="storeLocatorDistanceSelect">
                          Filter stores by distance
                        </label>
                        <select className="js-store-locator-results-distance my-store-locator-drawer__search-distance-select apl-section-stores-locator-distance" id="storeLocatorDistanceSelect" value={maxDistance} onChange={handleDistanceChange}>
                          <option value="all">ทุกสาขา</option>
                          <option value="5">5 กิโลเมตร</option>
                          <option value="10">10 กิโลเมตร</option>
                          <option value="30">30 กิโลเมตร</option>
                          <option value="50">50 กิโลเมตร</option>
                          <option value="100">100 กิโลเมตร</option>
                        </select>
                      </div>
                    </div>
                    <div id="mobileMapWrapper" className="my-store-locator__mobile-map-wrapper" tabIndex={0} aria-label="Interactive map showing store locations"></div>
                    <div id="myLocationResults" className="my-store-locator-drawer__search-results apl-section-stores-locator-results">
                      {filteredStores.map((store: any) => {
                        const isSelected = selectedStoreName === store.name;

                        return (
                          <div key={store.id || store.name} className="js-my-location-result my-location-result apl-section-stores-locator-result" data-active={isSelected ? "true" : "false"} data-id={store.id} data-name={store.name} data-latitude={store.lat} data-longitude={store.lng} role="group" data-events-added="true">
                            {isSelected && (
                                <div className="my-location-result__my-store apl-section-stores-locator-store-label">สาขาที่เลือก</div>
                              )}
                            <div className="my-location-result__image apl-section-stores-locator-store-image" style={{ position: 'relative' }}>
                              <img src={store.imageUrl} alt={store.name} />
                            </div>
                            <section className="js-my-results-details">
                              <div className="my-location-result__details">
                                <div className="my-location-result__name apl-section-stores-locator-store-name">{store.name}</div>
                                <div className="my-store-locator__details-distance apl-section-stores-locator-store-distance">
                                  {store.distanceVal !== null ? `${store.distanceVal.toFixed(1)} กิโลเมตร` : ''}
                                </div>
                              </div>
                              <div className="my-location-result__address my-location-result__location apl-section-stores-locator-store-address">
                                {store.shortAddress}
                              </div>
                              <ul className="list-unstyled my-location-result__business">
                                <li className="my-location-result__address apl-section-stores-locator-store-address-1">
                                  <span>ที่อยู่: </span>
                                  <a style={{color:"#0071e3", fontWeight:"600"}} href={`https://maps.apple.com/place?q=${encodeURIComponent(store.name)}&ll=${store.lat},${store.lng}`} target="_blank" rel="noreferrer">{store.fullAddress}</a>
                                </li>
                                {store.phoneUrl && store.phoneText && (
                                  <li className="my-location-result__address apl-section-stores-locator-store-address-phone">
                                    <span>โทร: </span>
                                    <a style={{color:"#0071e3", fontWeight:"600"}} href={store.phoneUrl}>{store.phoneText}</a>
                                  </li>
                                )}
                                <li className="my-location-result__address apl-section-stores-locator-store-address-hours">
                                  <span>เวลาทำการ: </span>
                                  <span>{store.hours}</span>
                                </li>
                              </ul>
                              <div className="my-location-result__link js-my-location-link visually-hidden">
                                <a href={`https://maps.apple.com/place?q=${encodeURIComponent(store.name)}&ll=${store.lat},${store.lng}`} style={{fontWeight :'600'}} target="_blank" rel="noopener noreferrer">Get Directions</a>
                              </div>
                            </section>
                            {store.services && store.services.length > 0 && (
                              <>
                                <button className="my-location-result__services-btn js-acc-button apl-section-stores-locator-store-services-btn" type="button">
                                  <span className="underlined-text">View store services</span>
                                  <i className="myarrow fa fa-chevron-down my-location-result__services-icon js-acc-icon" aria-hidden="true"></i>
                                </button>
                                <div className="my-location-result__services" aria-expanded="false">
                                  <ul>
                                    {store.services.map((service: any, sIndex: number) => (
                                      <li key={sIndex}><a href={service.url} className="apl-section-stores-locator-store-services-link">{service.label}</a></li>
                                    ))}
                                  </ul>
                                </div>
                              </>
                            )}
                            
                            {!isSelected && (
                              <button 
                                className="js-make-my-store-btn button button--secondary button--full-width my-location-result__make-my-store-btn apl-section-stores-locator-store-set-store make-this-store__button"
                                onClick={() => handleStoreSelect(store.name)}
                              >
                                เลือกสาขานี้
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="my-store-locator-drawer__footer visually-hidden">
                      <button className="js-store-locator-select-btn my-store-locator__details-btn button button--full-width" type="button">
                        Select
                      </button>
                    </div>
                  </div>
                  <div id="storeLocatorDrawerLoading" className={`my-store-locator-drawer__loading ${!isLoadingStore ? 'hidden' : ''}`}>
                    <i className="fa fa-spinner fa-spin" style={{ fontSize: "24px" }}></i>
                  </div>
                </div>
                <div className="my-store-locator-drawer__bg"></div>
              </div>

              <div style={{ position: "relative", minHeight: "500px", zIndex: 1, width: "100%" }}>
                <div id="desktopMapWrapper" className="two-location_map" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}></div>
                
                {activePopupStore && (
                  <div 
                    style={{
                      position: "absolute",
                      left: popupPosition.x,
                      top: popupPosition.y,
                      transform: "translate(-50%, calc(-100% - 15px))",
                      zIndex: 1000,
                      pointerEvents: "auto",
                      filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.15))"
                    }}
                  >
                    <div className="my-location-result__callout my-location-result__callout--apple" slot="mk-slot-94tapelj">
                      <div className="my-location-result__details">
                        <div className="my-location-result__name apl-section-stores-locator-store-name">{activePopupStore.name}</div>
                        <div className="my-store-locator__details-distance apl-section-stores-locator-store-distance">
                          {activePopupStore.distanceVal !== null && activePopupStore.distanceVal !== undefined ? `${activePopupStore.distanceVal.toFixed(1)} กิโลเมตร` : ''}
                        </div>
                      </div>
                      <div className="my-location-result__address my-location-result__location apl-section-stores-locator-store-address">
                        {activePopupStore.shortAddress}
                      </div>
                      <ul className="list-unstyled my-location-result__business">
                        <li className="my-location-result__address apl-section-stores-locator-store-address-1">
                          <span>ที่อยู่: </span>
                          <a href={`https://maps.apple.com/place?q=${encodeURIComponent(activePopupStore.name || '')}&ll=${activePopupStore.lat},${activePopupStore.lng}`} target="_blank" rel="noopener noreferrer">
                            {activePopupStore.fullAddress}
                          </a>
                        </li>
                        {activePopupStore.phoneUrl && activePopupStore.phoneText && (
                          <li className="my-location-result__address apl-section-stores-locator-store-address-phone">
                            <span>โทร: </span>
                            <a href={activePopupStore.phoneUrl}>{activePopupStore.phoneText}</a>
                          </li>
                        )}
                        {activePopupStore.email && (
                          <li className="my-location-result__address apl-section-stores-locator-store-address-email">
                            <span>Email: </span>
                            <a href={`mailto:${activePopupStore.email}`}>{activePopupStore.email}</a>
                          </li>
                        )}
                        <li className="my-location-result__address apl-section-stores-locator-store-address-hours">
                          <span>เวลาทำการ: </span>
                          <span>{activePopupStore.hours}</span>
                        </li>
                      </ul>
                      <div className="my-location-result__link js-my-location-link visually-hidden">
                        <a href={`https://maps.apple.com/place?q=${encodeURIComponent(activePopupStore.name || '')}&ll=${activePopupStore.lat},${activePopupStore.lng}`} target="_blank" rel="noopener noreferrer">Get Directions</a>
                      </div>
                      <a href={`https://maps.apple.com/place?q=${encodeURIComponent(activePopupStore.name || '')}&ll=${activePopupStore.lat},${activePopupStore.lng}`} target="_blank" rel="noopener noreferrer">Get Directions</a>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
          <div id="store-overlay" className={`store-overlay-spin ${!isLoadingStore ? 'hidden' : ''}`}>
            <i className="fa fa-spinner fa-spin" style={{ fontSize: "24px" }}></i>
          </div>
      </main>
    </div>
  );
};