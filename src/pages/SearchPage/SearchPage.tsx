"use client";

import { useState, useEffect } from "react";
import './SearchPage.css';
import StoreLocatorDrawer from '@/components/organisms/StoreLocator/StoreLocatorDrawer';
import { PRODUCTS } from './SearchPageProduct';

const ProductCard = ({ product }: { product: any }) => {
  if (product.type === 'article') {
    return (
      <div className="grid__item product-item search-product-card">
        <div className="article-card-wrapper card-wrapper underline-links-hover" style={{ height: '100%' }}>
          <div className="card1 card card--card card--text ratio color-background-2" style={{ '--ratio-percent': '100%', justifyContent: 'center', alignItems: 'center' } as React.CSSProperties}>
            <div className="card__content" style={{ textAlign: 'center' }}>
              <div className="card__information">
                <h3 className="card__heading" style={{ fontSize: '20px', margin: '0' }}>
                  <a href={product.url} className="full-unstyled-link">{product.title}</a>
                </h3>
              </div>
              <div className="card__badge" style={{ marginTop: '10px' }}>
                <span className="badge color-background-1" style={{ fontSize: '12px', background: '#f5f5f7', padding: '4px 8px', borderRadius: '4px' }}>{product.badge}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid__item product-item search-product-card">
      <div className="underline-links-hover" style={{ height: '100%' }}>
        <div className="card1 card apl-section-product-card card--standard card--media" style={{ '--ratio-percent': '100%' } as React.CSSProperties}>
          <a href={product.url} className="full-unstyled-link" aria-hidden="false">
            <div className="you_may_also_like card-pro card__inner color-background-2 ratio" style={{ '--ratio-percent': '100%' } as React.CSSProperties}>
              <div className="card__media">
                <div className="media media--transparent media--hover-effect">
                  <img src={product.image} loading="lazy" alt={product.title} className="motion-reduce img-reduce apl-section-product-card-image" width="4000" height="4000" />
                </div>
              </div>
            </div>
          </a>
          <div className="card-info card__content">
            <div className="card__information">
              <h3 className="card-head h5 apl-section-product-title">
                <a href={product.url} className="full-unstyled-link full-unstyled-link-1">{product.title}</a>
              </h3>
              <div className="card-information">
                <div className="fbt_cartCSS price price-product" data-prodprice={product.price}>
                  <div className="price__container_carousel price__container_">
                    <div className="price__regular apl-section-product-price">
                      <div className="price-item-old-1">
                        <span className="price-item price-item--regular">{product.price}</span>
                      </div>
                    </div>
                  </div>
                  <div className="net-monthly-pricing net-monthly-pricing--product_card first-party apl-section-net-monthly-pricing">
                    <span>{product.monthly}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-cart">
              <div className="product-form__buttons card-slider-buttons button_primary_clckd">
                <a href={product.url} className="button_primary_anchor card-btn button--full-width button--primary apl-section-product-card-button">Shop</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
  if (typeof window === 'undefined') return null;
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

const CheckboxIcon = ({ checked }: { checked: boolean }) => {
  if (!checked) {
    return (
      <div className="icon icon-checkbox-off" style={{ width: "16px", height: "16px", padding: "1px" }}>
        <div style={{ display: "block", width: "14px", height: "14px", borderRadius: "1px", border: "1.69px solid #D2D2D7" }}></div>
      </div>
    );
  }
  return (
    <svg className="icon icon-checkbox-on" width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.865" y="1.365" width="13.27" height="13.27" rx=".427" fill="#0071E3" stroke="#0071E3" strokeWidth=".73"></rect>
      <path d="M7.417 11.994c-.14 0-.262-.067-.367-.2L4.605 8.78a.656.656 0 0 1-.081-.129.395.395 0 0 1-.024-.133c0-.095.032-.175.095-.238.067-.067.15-.1.248-.1.118 0 .221.058.31.176l2.25 2.808 4.438-6.989a.4.4 0 0 1 .129-.133.322.322 0 0 1 .176-.043c.095 0 .173.03.234.09.06.061.09.14.09.239a.405.405 0 0 1-.019.12.6.6 0 0 1-.067.137L7.77 11.8a.409.409 0 0 1-.353.195Z" fill="#fff"></path>
    </svg>
  );
};

export const SearchPage = () => {
  const [filters, setFilters] = useState<Record<string, boolean>>({
    pickup: false,
    shipping: false,
    inStock: false,
    outOfStock: false,
    brandAnker: false,
    brandApple: false,
    brandStm: false,
    catAirtag: false,
    catAppleWatch: false,
    catAccessories: false,
    compIphone17: false,
    compIphone17Pro: false,
    compIphone17ProMax: false,
    cap64gb: false,
    cap128gb: false
  });

  const [selectedStoreName, setSelectedStoreName] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const savedStore = getStoreFromStorage();
    if (savedStore) setSelectedStoreName(savedStore);

    const handleLocalUpdate = () => {
      const updatedStore = getStoreFromStorage();
      if (updatedStore) setSelectedStoreName(updatedStore);
    };

    window.addEventListener('local-store-update', handleLocalUpdate);
    return () => window.removeEventListener('local-store-update', handleLocalUpdate);
  }, []);

  const handleStoreSelect = (name: string) => {
    setSelectedStoreName(name);
    saveStoreToStorage(name);
    setIsDrawerOpen(false);
  };

  const handleFilterChange = (key: string, checked: boolean) => {
    setFilters(prev => ({ ...prev, [key]: checked }));
  };

  return (
    <div id="SearchPage" className="search-page">
      <div className="template-search section-template--20346294042676__main-padding apl-section-main-search">
        <div className="template-search__header page-width">
          <h1 className="template-search__header-inner h2 center">ผลลัพธ์การค้นหา</h1>
        </div>

        <div className="facets-vertical page-width">
          <aside aria-labelledby="verticalTitle" className="facets-wrapper apl-section-facets" id="main-search-filters" data-id="template--20346294042676__main">
            <div className="facets-container">
              <div className="mobile-facets__wrapper medium-hide large-up-hide" data-breakpoint="mobile">
                <details className="mobile-facets__disclosure disclosure-has-popup">
                  <summary className="mobile-facets__open-wrapper focus-offset">
                    <span className="mobile-facets__open">
                      <span className="mobile-facets__open-label button-label medium-hide large-up-hide">Add filter</span>
                      <span className="mobile-facets__open-label button-label small-hide">Filter</span>
                    </span>
                    <span tabIndex={0} className="mobile-facets__close mobile-facets__close--no-js"></span>
                  </summary>
                  <div className="mobile-facets">
                    <div className="mobile-facets__inner gradient">
                      <div className="mobile-facets__header">
                        <div className="mobile-facets__header-inner">
                          <h2 className="mobile-facets__heading medium-hide large-up-hide">Filter</h2>
                          <h2 className="mobile-facets__heading small-hide">Filter</h2>
                        </div>
                      </div>
                      <div className="mobile-facets__main gradient">
                        <div id="main-search-filters-mobile"></div>
                        <div className="mobile-facets__footer">
                          <button type="button" className="no-js-hidden button button--secondary button--full-width">
                            Apply
                          </button>
                          <noscript><button className="button button--primary">Apply</button></noscript>
                        </div>
                      </div>
                      <input type="hidden" name="q" value="15-inch MacBook Air: Apple M3 chip" />
                      <input name="options[prefix]" type="hidden" value="last" />
                    </div>
                  </div>
                </details>
              </div>

              <div className="product-count light hidden" role="status">
                <h2 className="product-count__text text-body">
                  <span id="ProductCount">{PRODUCTS.length} products</span>
                </h2>
              </div>
            </div>

            <div id="facets-container">
              <div className="facets" data-filter-menus-expanded="true">
                <form id="FacetFiltersForm" className="facets__form-vertical apl-section-facets-form">
                  <input type="hidden" name="q" value="15-inch MacBook Air: Apple M3 chip" />
                  <input name="options[prefix]" type="hidden" value="last" />
                  
                  <div id="FacetsWrapperDesktop">
                    <div className="active-facets active-facets-desktop apl-section-facets-active hidden">
                      <div className="active-facets-vertical-filter">
                        <h2 className="facets__heading facets__heading--vertical facets__text text-body apl-section-facets-active-section-title" id="verticalTitle" tabIndex={-1}>
                          Filter by
                        </h2>
                        <div className="active-facets__button-wrapper">
                          <a href="?q=15-inch MacBook Air: Apple M3 chip&amp;options%5Bprefix%5D=last&amp;sort_by=relevance" className="active-facets__button-remove underlined-link apl-section-facets-active-clear-all" role="button">
                            <span>Clear all</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <details id="Details-1-template--20346294042676__main" className="facets__disclosure-vertical js-filter" data-index="1" open data-filter-menus-expanded="true">
                      <summary className="facets__summary facets__text focus-offset apl-section-facet-heading" aria-expanded="true">
                        <div>
                          <span>ตัวเลือกการรับสินค้า <span className="facets__selected no-js-hidden hidden apl-section-facet-item-selected-count"></span></span>
                        </div>
                      </summary>
                      <div id="Facet-1-template--20346294042676__main" className="parent-display facets__display-vertical">
                        <fieldset className="facets-wrap parent-wrap facets-wrap-vertical apl-section-facet-list">
                          <ul className="list-unstyled no-js-hidden">
                            <li className="list-menu__item facets__item list-menu__item--pickup apl-section-facet-item active">
                              <label 
                                className="facet-checkbox facet-checkbox--pickup facets__text apl-section-facet-item-title" 
                                style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
                              >
                                <input 
                                  type="checkbox" 
                                  className="js-my-store-pickup-location-input active" 
                                  checked={filters.pickup}
                                  onChange={(e) => handleFilterChange('pickup', e.target.checked)}
                                  style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
                                />
                                <CheckboxIcon checked={filters.pickup} />
                                <span>รับสินค้าที่สาขา</span>
                              </label>
                              <button 
                                className="facets__item-pickup js-my-store-locator-search-drawer-launcher" 
                                type="button" 
                                aria-haspopup="dialog"
                                onClick={() => setIsDrawerOpen(true)}
                              >
                                {selectedStoreName || 'เลือกสาขา'}
                              </button>
                            </li>
                            <li className="list-menu__item facets__item show-more-item apl-section-facet-item">
                              <label 
                                className="facet-checkbox facets__text apl-section-facet-item-title"
                                style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
                              >
                                <input 
                                  type="checkbox" 
                                  checked={filters.shipping}
                                  onChange={(e) => handleFilterChange('shipping', e.target.checked)}
                                  style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
                                />
                                <CheckboxIcon checked={filters.shipping} />
                                <span aria-hidden="true">บริการจัดส่ง</span>
                              </label>
                            </li>
                          </ul>
                        </fieldset>
                      </div>
                    </details>

                    <details id="Details-2-template--20346294042676__main" className="facets__disclosure-vertical js-filter" data-index="2" open data-filter-menus-expanded="true">
                      <summary className="facets__summary facets__text focus-offset apl-section-facet-heading" aria-expanded="true">
                        <div>
                          <span>สถานะ<span className="facets__selected no-js-hidden hidden apl-section-facet-item-selected-count"></span></span>
                        </div>
                      </summary>
                      <div id="Facet-2-template--20346294042676__main" className="parent-display facets__display-vertical">
                        <fieldset className="facets-wrap parent-wrap facets-wrap-vertical apl-section-facet-list">
                          <ul className="list-unstyled no-js-hidden">
                            <li className="list-menu__item facets__item apl-section-facet-item">
                              <label 
                                className="facet-checkbox facets__text apl-section-facet-item-title"
                                style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer"}}
                              >
                                <input 
                                  type="checkbox" 
                                  checked={filters.inStock}
                                  onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                                  style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
                                />
                                <CheckboxIcon checked={filters.inStock} />
                                <span aria-hidden="true">พร้อมจำหน่าย</span>
                              </label>

                              <label 
                                className="facet-checkbox facets__text apl-section-facet-item-title"
                                style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
                              >
                                <input 
                                  type="checkbox" 
                                  checked={filters.outOfStock}
                                  onChange={(e) => handleFilterChange('outOfStock', e.target.checked)}
                                  style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
                                />
                                <CheckboxIcon checked={filters.outOfStock} />
                                <span aria-hidden="true">สินค้าหมด</span>
                              </label>
                            </li>
                          </ul>
                        </fieldset>
                      </div>
                    </details>

                    <details id="Details-3-template--20346294042676__main" className="facets__disclosure-vertical js-filter" data-index="3" open data-filter-menus-expanded="true">
                      <summary className="facets__summary facets__text focus-offset apl-section-facet-heading" aria-expanded="true">
                        <div>
                          <span>แบรนด์<span className="facets__selected no-js-hidden hidden apl-section-facet-item-selected-count"></span></span>
                        </div>
                      </summary>
                      <div id="Facet-3-template--20346294042676__main" className="parent-display facets__display-vertical">
                        <fieldset className="facets-wrap parent-wrap facets-wrap-vertical apl-section-facet-list">
                          <ul className="list-unstyled no-js-hidden">
                            {[
                              { id: 'brandAnker', label: 'ANKER' },
                              { id: 'brandApple', label: 'Apple' },
                              { id: 'brandStm', label: 'STM' }
                            ].map((brand) => (
                              <li key={brand.id} className="list-menu__item facets__item apl-section-facet-item">
                                <label 
                                  className="facet-checkbox facets__text apl-section-facet-item-title"
                                  style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
                                >
                                  <input 
                                    type="checkbox" 
                                    checked={filters[brand.id]}
                                    onChange={(e) => handleFilterChange(brand.id, e.target.checked)}
                                    style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
                                  />
                                  <CheckboxIcon checked={filters[brand.id]} />
                                  <span aria-hidden="true">{brand.label}</span>
                                </label>
                              </li>
                            ))}
                          </ul>
                        </fieldset>
                      </div>
                    </details>

                    <details id="Details-4-template--20346294042676__main" className="facets__disclosure-vertical js-filter" data-index="4" open data-filter-menus-expanded="true">
                      <summary className="facets__summary facets__text focus-offset apl-section-facet-heading" aria-expanded="true">
                        <div>
                          <span>หมวดหมู่<span className="facets__selected no-js-hidden hidden apl-section-facet-item-selected-count"></span></span>
                        </div>
                      </summary>
                      <div id="Facet-4-template--20346294042676__main" className="parent-display facets__display-vertical">
                        <fieldset className="facets-wrap parent-wrap facets-wrap-vertical apl-section-facet-list">
                          <ul className="list-unstyled no-js-hidden">
                            {[
                              { id: 'catAirtag', label: 'AirTag' },
                              { id: 'catAppleWatch', label: 'Apple Watch' },
                              { id: 'catAccessories', label: 'อุปกรณ์เสริม' }
                            ].map((cat) => (
                              <li key={cat.id} className="list-menu__item facets__item apl-section-facet-item">
                                <label 
                                  className="facet-checkbox facets__text apl-section-facet-item-title"
                                  style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
                                >
                                  <input 
                                    type="checkbox" 
                                    checked={filters[cat.id]}
                                    onChange={(e) => handleFilterChange(cat.id, e.target.checked)}
                                    style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
                                  />
                                  <CheckboxIcon checked={filters[cat.id]} />
                                  <span aria-hidden="true">{cat.label}</span>
                                </label>
                              </li>
                            ))}
                          </ul>
                        </fieldset>
                      </div>
                    </details>

                    <details id="Details-5-template--20346294042676__main" className="facets__disclosure-vertical js-filter" data-index="5" open data-filter-menus-expanded="true">
                      <summary className="facets__summary facets__text focus-offset apl-section-facet-heading" aria-expanded="true">
                        <div>
                          <span>ความเข้ากันได้<span className="facets__selected no-js-hidden hidden apl-section-facet-item-selected-count"></span></span>
                        </div>
                      </summary>
                      <div id="Facet-5-template--20346294042676__main" className="parent-display facets__display-vertical">
                        <fieldset className="facets-wrap parent-wrap facets-wrap-vertical apl-section-facet-list">
                          <ul className="list-unstyled no-js-hidden">
                            {[
                              { id: 'compIphone17', label: 'iPhone 17' },
                              { id: 'compIphone17Pro', label: 'iPhone 17 Pro' },
                              { id: 'compIphone17ProMax', label: 'iPhone 17 Pro Max' }
                            ].map((comp) => (
                              <li key={comp.id} className="list-menu__item facets__item apl-section-facet-item">
                                <label 
                                  className="facet-checkbox facets__text apl-section-facet-item-title"
                                  style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
                                >
                                  <input 
                                    type="checkbox" 
                                    checked={filters[comp.id]}
                                    onChange={(e) => handleFilterChange(comp.id, e.target.checked)}
                                    style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
                                  />
                                  <CheckboxIcon checked={filters[comp.id]} />
                                  <span aria-hidden="true">{comp.label}</span>
                                </label>
                              </li>
                            ))}
                          </ul>
                        </fieldset>
                      </div>
                    </details>

                    <details id="Details-6-template--20346294042676__main" className="facets__disclosure-vertical js-filter" data-index="6" open data-filter-menus-expanded="true">
                      <summary className="facets__summary facets__text focus-offset apl-section-facet-heading" aria-expanded="true">
                        <div>
                          <span>ราคา</span>
                        </div>
                      </summary>
                      <div id="Facet-6-template--20346294042676__main" className="facets__display-vertical">
                        <div className="facets__header-vertical apl-section-facet-details">
                          <span className="facets__selected" style={{ fontSize: '14px' }}>ราคาสูงสุดอยู่ที่ ฿0</span>
                        </div>
                        <div className="facets__price">
                          <span className="field-currency">฿</span>
                          <div className="field">
                            <input className="field__input apl-section-facet-price-min" name="filter.v.price.gte" id="Filter-Price-GTE" type="number" placeholder="จาก" min="0" max="5400.00" />
                          </div><div className="field">
                            <input className="field__input apl-section-facet-price-max" name="filter.v.price.lte" id="Filter-Price-LTE" type="number" min="0" placeholder="ถึง" max="5400.00" />
                          </div>
                        </div>
                      </div>
                    </details>

                    <details id="Details-7-template--20346294042676__main" className="facets__disclosure-vertical js-filter" data-index="7" open data-filter-menus-expanded="true">
                      <summary className="facets__summary facets__text focus-offset apl-section-facet-heading" aria-expanded="true">
                        <div>
                          <span>ความจุ<span className="facets__selected no-js-hidden hidden apl-section-facet-item-selected-count"></span></span>
                        </div>
                      </summary>
                      <div id="Facet-7-template--20346294042676__main" className="parent-display facets__display-vertical">
                        <fieldset className="facets-wrap parent-wrap facets-wrap-vertical apl-section-facet-list">
                          <ul className="list-unstyled no-js-hidden">
                            {[
                              { id: 'cap64gb', label: '64GB' },
                              { id: 'cap128gb', label: '128GB' }
                            ].map((cap) => (
                              <li key={cap.id} className="list-menu__item facets__item apl-section-facet-item">
                                <label 
                                  className="facet-checkbox facets__text apl-section-facet-item-title"
                                  style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
                                >
                                  <input 
                                    type="checkbox" 
                                    checked={filters[cap.id]}
                                    onChange={(e) => handleFilterChange(cap.id, e.target.checked)}
                                    style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
                                  />
                                  <CheckboxIcon checked={filters[cap.id]} />
                                  <span aria-hidden="true">{cap.label}</span>
                                </label>
                              </li>
                            ))}
                          </ul>
                        </fieldset>
                      </div>
                    </details>

                  </div>
                </form>
              </div>
            </div>
          </aside>

          <div className="product-grid-container" id="ProductGridContainer">
            <div className="facets facets-vertical-sort no-js-hidden">
              <form className="facets-vertical-form" id="FacetSortForm">
                <div className="product-count-vertical light" role="status">
                  <h2 className="product-count__text text-body" style={{ margin: 0, fontSize: '14px', fontWeight: '400', color: '#6e6e73' }}>
                    <span id="ProductCount">{PRODUCTS.length} สินค้า</span>
                  </h2>
                </div>
                <div className="facet-filters sorting caption">
                  <div className="facet-filters__field" style={{ display: 'flex', position: 'relative' }}>
                    <select name="sort_by" className="facet-filters__sort select-custom apl-section-facets-sort" id="SortBy" aria-describedby="a11y-refresh-page-message" defaultValue="relevance">
                      <option className="apl-section-facets-sort-relevance" value="relevance">ที่เกี่ยวข้องที่สุด</option>
                      <option className="apl-section-facets-sort-price-ascending" value="price-ascending">Price, low to high</option>
                      <option className="apl-section-facets-sort-price-descending" value="price-descending">Price, high to low</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>

            <div className="template-search__results collection apl-section-search-results-grid" id="product-grid" data-id="template--20346294042676__main" role="region">
              <div className="loading-overlay gradient"></div>
              
              <div data-section-id="template--20346294042676__main" data-sectionid="template--20346294042676__main" className="grid product-grid grid--1-col-tablet-down grid--3-col-desktop" aria-label="Search resultscarousel">
                {PRODUCTS.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isDrawerOpen && (
        <StoreLocatorDrawer
          selectedStoreName={selectedStoreName}
          onClose={() => setIsDrawerOpen(false)}
          onSelect={handleStoreSelect}
        />
      )}
    </div>
  );
};

export default SearchPage;