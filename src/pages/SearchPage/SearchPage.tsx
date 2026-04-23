"use client";

import { useState, useEffect, useRef } from "react";
import './SearchPage.css'

export const SearchPage = () => {

  const [isChecked, setIsChecked] = useState(false);

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
                    <span tabIndex={0} className="mobile-facets__close mobile-facets__close--no-js">
                    </span>
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
                  <span id="ProductCount">22 products</span>
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
                      <summary className="facets__summary facets__text focus-offset apl-section-facet-heading" aria-label="Get it fast (0 selected)" aria-expanded="true">
                        <div>
                          <span>ตัวเลือกการรับสินค้า <span className="facets__selected no-js-hidden hidden apl-section-facet-item-selected-count">(0)</span></span>
                        </div>
                      </summary>
                      <div id="Facet-1-template--20346294042676__main" className="parent-display facets__display-vertical">
                        <fieldset className="facets-wrap parent-wrap facets-wrap-vertical apl-section-facet-list">
                          <legend className="visually-hidden">ตัวเลือกการรับสินค้า</legend>
                          <ul className="list-unstyled no-js-hidden">
                            <li className="list-menu__item facets__item list-menu__item--pickup apl-section-facet-item active">
                              <label 
        className="facet-checkbox facet-checkbox--pickup facets__text apl-section-facet-item-title" 
        style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
      >
        <input 
          type="checkbox" 
          name="filter.v.m.apple.apl_VariantLocationAvailability" 
          value="79445033012" 
          id="Filter-filter.v.m.apple.apl_VariantLocationAvailability-3" 
          className="js-my-store-pickup-location-input active" 
          data-location-id="gid://shopify/Location/79445033012" 
          aria-label="Apple Norway" 
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
        />
        
        {!isChecked ? (
          <div className="icon icon-checkbox-off" style={{ width: "16px", height: "16px", padding: "1px" }}>
            <div style={{ display: "block", width: "14px", height: "14px", borderRadius: "1px", border: "1.69px solid #D2D2D7" }}></div>
          </div>
        ) : (
          <svg className="icon icon-checkbox-on" width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.865" y="1.365" width="13.27" height="13.27" rx=".427" fill="#0071E3" stroke="#0071E3" strokeWidth=".73"></rect>
            <path d="M7.417 11.994c-.14 0-.262-.067-.367-.2L4.605 8.78a.656.656 0 0 1-.081-.129.395.395 0 0 1-.024-.133c0-.095.032-.175.095-.238.067-.067.15-.1.248-.1.118 0 .221.058.31.176l2.25 2.808 4.438-6.989a.4.4 0 0 1 .129-.133.322.322 0 0 1 .176-.043c.095 0 .173.03.234.09.06.061.09.14.09.239a.405.405 0 0 1-.019.12.6.6 0 0 1-.067.137L7.77 11.8a.409.409 0 0 1-.353.195Z" fill="#fff"></path>
          </svg>
        )}
        
        <span>รับสินค้าที่สาขา</span>
        <span className="visually-hidden" style={{ display: "none" }}>79445033012</span>
      </label>
                              <button className="facets__item-pickup js-my-store-locator-search-drawer-launcher" type="button" aria-haspopup="dialog">Apple Norway</button>
                            </li>
                            <li className="list-menu__item facets__item show-more-item apl-section-facet-item">
                              <label htmlFor="Filter-Shipping-13" className="facet-checkbox facets__text apl-section-facet-item-title">
                                <input type="checkbox" name="filter.v.shipping" value="1" id="Filter-Shipping-13" />
                                <div className="icon icon-checkbox-off" style={{ width: "16px", height: "16px", padding: "1px" }}>
                                  <div style={{ display: "block", width: "14px", height: "14px", borderRadius: "1px", border: "1.69px solid #D2D2D7" }}></div>
                                </div>
                                <span aria-hidden="true">บริการจัดส่ง</span>
                                <span className="visually-hidden">บริการจัดส่ง</span>
                              </label>
                            </li>
                          </ul>
                        </fieldset>
                      </div>
                    </details>

                    <details id="Details-2-template--20346294042676__main" className="facets__disclosure-vertical js-filter" data-index="2" open data-filter-menus-expanded="true">
                      <summary className="facets__summary facets__text focus-offset apl-section-facet-heading" aria-label="Availability (0 selected)" aria-expanded="true">
                        <div>
                          <span>สถานะ<span className="facets__selected no-js-hidden hidden apl-section-facet-item-selected-count">(0)</span></span>
                        </div>
                      </summary>
                      <div id="Facet-2-template--20346294042676__main" className="parent-display facets__display-vertical">
                        <fieldset className="facets-wrap parent-wrap facets-wrap-vertical apl-section-facet-list">
                          <legend className="visually-hidden">สถานะ</legend>
                          <ul className="list-unstyled no-js-hidden">
                            <li className="list-menu__item facets__item apl-section-facet-item">
                              <label className="facet-checkbox facets__text apl-section-facet-item-title">
                                <input type="checkbox" name="filter.v.availability" value="1" id="Filter-filter.v.availability-1" aria-label="In stock" />
                                <div className="icon icon-checkbox-off" style={{ width: "16px", height: "16px", padding: "1px" }}>
                                  <div style={{ display: "block", width: "14px", height: "14px", borderRadius: "1px", border: "1.69px solid #D2D2D7" }}></div>
                                </div>
                                <span aria-hidden="true">พร้อมจำหน่าย <span className="filter-count">(17)</span></span>
                                <span className="visually-hidden">พร้อมจำหน่าย <span className="filter-count">(17 products)</span></span>
                              </label>

                              <label className="facet-checkbox facets__text apl-section-facet-item-title">
                                <input type="checkbox" name="filter.v.availability" value="1" id="Filter-filter.v.availability-1" aria-label="In stock" />
                                <div className="icon icon-checkbox-off" style={{ width: "16px", height: "16px", padding: "1px" }}>
                                  <div style={{ display: "block", width: "14px", height: "14px", borderRadius: "1px", border: "1.69px solid #D2D2D7" }}></div>
                                </div>
                                <span aria-hidden="true">สินค้าหมด <span className="filter-count">(17)</span></span>
                                <span className="visually-hidden">สินค้าหมด <span className="filter-count">(17 products)</span></span>
                              </label>
                            </li>
                          </ul>
                        </fieldset>
                      </div>
                    </details>

                    <details id="Details-5-template--20346294042676__main" className="facets__disclosure-vertical js-filter" data-index="5" open data-filter-menus-expanded="true">
                      <summary className="facets__summary facets__text focus-offset apl-section-facet-heading" aria-expanded="true">
                        <div>
                          <span>ราคา</span>
                        </div>
                      </summary>
                      <div id="Facet-5-template--20346294042676__main" className="facets__display-vertical">
                        <div className="facets__header-vertical apl-section-facet-details">
                          <span className="facets__selected" style={{ fontSize: '13px', color: '#6e6e73' }}>The highest price is $5,100.00</span>
                        </div>
                        <div className="facets__price">
                          <div className="field">
                            <label className="field__label" htmlFor="Filter-Price-GTE" style={{ fontSize: '12px' }}>From ($)</label>
                            <input className="field__input apl-section-facet-price-min" name="filter.v.price.gte" id="Filter-Price-GTE" type="number" placeholder="0" min="0" max="5100.00" />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="Filter-Price-LTE" style={{ fontSize: '12px' }}>To ($)</label>
                            <input className="field__input apl-section-facet-price-max" name="filter.v.price.lte" id="Filter-Price-LTE" type="number" min="0" placeholder="5100.00" max="5100.00" />
                          </div>
                        </div>
                      </div>
                    </details>

                  </div>
                </form>
              </div>

              <div className="small-hide">
                <form className="no-js">
                  <div className="facet-filters sorting caption">
                    <div className="facet-filters__field">
                      <div className="select" style={{ position: 'relative' }}>
                        <select name="sort_by" className="facet-filters__sort select__select facets__text apl-section-facets-sort" id="SortByNoJs" aria-describedby="a11y-refresh-page-message" defaultValue="relevance">
                          <option className="apl-section-facets-sort-relevance" value="relevance">Relevance</option>
                          <option className="apl-section-facets-sort-price-ascending" value="price-ascending">Price, low to high</option>
                          <option className="apl-section-facets-sort-price-descending" value="price-descending">Price, high to low</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <input type="hidden" name="q" value="15-inch MacBook Air: Apple M3 chip" />
                  <input name="options[prefix]" type="hidden" value="last" />
                </form>
              </div>
            </div>
          </aside>

          <div className="product-grid-container" id="ProductGridContainer">
            <div className="facets facets-vertical-sort no-js-hidden">
              <form className="facets-vertical-form" id="FacetSortForm">
                <div className="facet-filters sorting caption">
                  <div className="facet-filters__field" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px', position: 'relative' }}>
                    <select name="sort_by" className="facet-filters__sort select-custom apl-section-facets-sort" id="SortBy" aria-describedby="a11y-refresh-page-message" defaultValue="relevance">
                      <option className="apl-section-facets-sort-relevance" value="relevance">Relevance</option>
                      <option className="apl-section-facets-sort-price-ascending" value="price-ascending">Price, low to high</option>
                      <option className="apl-section-facets-sort-price-descending" value="price-descending">Price, high to low</option>
                    </select>
                  </div>
                </div>
                <div className="product-count-vertical light" role="status">
                  <h2 className="product-count__text text-body" style={{ margin: '0 0 20px 0', fontSize: '14px', color: '#6e6e73' }}>
                    <span id="ProductCountDesktop">22 products</span>
                  </h2>
                </div>
              </form>
            </div>

            <div className="template-search__results collection apl-section-search-results-grid" id="product-grid" data-id="template--20346294042676__main" role="region">
              <div className="loading-overlay gradient"></div>
              
              <div data-section-id="template--20346294042676__main" data-sectionid="template--20346294042676__main" className="grid product-grid grid--1-col-tablet-down grid--3-col-desktop" aria-label="Search resultscarousel">
                
                <div className="grid__item product-item search-product-card" aria-label="Slide 1 of 22">
                  <div className="underline-links-hover" style={{ height: '100%' }}>
                    <div className="card1 card apl-section-product-card card--standard card--media card1--46889580298292" style={{ '--ratio-percent': '100%' } as React.CSSProperties}>
                      <a href="/products/15-inch-macbook-air-mryp3ll-a" className="full-unstyled-link" aria-hidden="false">
                        <div className="you_may_also_like card-pro card__inner color-background-2 ratio" style={{ '--ratio-percent': '100%' } as React.CSSProperties}>
                          <div className="card__media">
                            <div className="media media--transparent media--hover-effect">
                              <img src="//appstaging.dev/cdn/shop/files/IMG-12357281_c7cc6bc0-58ca-4b1d-aba8-5a81d246086d_533x.jpg?v=1750710001" srcSet="//appstaging.dev/cdn/shop/files/IMG-12357281_c7cc6bc0-58ca-4b1d-aba8-5a81d246086d_165x.jpg?v=1750710001 165w, //appstaging.dev/cdn/shop/files/IMG-12357281_c7cc6bc0-58ca-4b1d-aba8-5a81d246086d_360x.jpg?v=1750710001 360w" sizes="(min-width: 1220px) 272px, (min-width: 990px) calc((100vw - 130px) / 4), calc((100vw - 35px) / 2)" loading="lazy" alt="MacBook_Air_15" className="motion-reduce img-reduce apl-section-product-card-image" width="4000" height="4000" />
                            </div>
                          </div>
                        </div>
                      </a>
                      <div className="card-info card__content">
                        <div className="card__information">
                          <h3 className="card-head h5 apl-section-product-title">
                            <a href="/products/15-inch-macbook-air-mryp3ll-a" className="full-unstyled-link full-unstyled-link-1">15-inch MacBook Air: Apple M3 chip with 8‑core CPU and 10‑core GPU, 256GB SSD - Silver</a>
                          </h3>
                          <div className="card-information">
                            <div className="fbt_cartCSS price price-product-GA-46889580298292 price-product" data-prodprice="$4,000.00 USD">
                              <div className="price__container_carousel price__container_">
                                <div className="price__regular apl-section-product-price">
                                  <div className="price-item-old-1">
                                    <span className="price-item price-item--regular">$4,000.00 USD</span>
                                  </div>
                                </div>
                              </div>
                              <div className="net-monthly-pricing net-monthly-pricing--product_card first-party apl-section-net-monthly-pricing">
                                <span>$333.33/mo. for 12 mo.</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="button-cart">
                          <div className="product-form__buttons card-slider-buttons button_primary_clckd" id="button_primary_clckd_46889580298292">
                            <a href="/products/15-inch-macbook-air-mryp3ll-a" className="button_primary_anchor card-btn button--full-width button--primary slider-form-46889580298292 apl-section-product-card-button">Shop</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid__item product-item search-product-card" aria-label="Slide 2 of 22">
                  <div className="underline-links-hover" style={{ height: '100%' }}>
                    <div className="card1 card apl-section-product-card card--standard card--media card1--46890827153460" style={{ '--ratio-percent': '100%' } as React.CSSProperties}>
                      <a href="/products/15-inch-macbook-air-mc9d4ll-a" className="full-unstyled-link" aria-hidden="false">
                        <div className="you_may_also_like card-pro card__inner color-background-2 ratio" style={{ '--ratio-percent': '100%' } as React.CSSProperties}>
                          <div className="card__media">
                            <div className="media media--transparent media--hover-effect">
                              <img src="//appstaging.dev/cdn/shop/files/IMG-12357290_397ece17-093c-4949-bd10-3a0c04dd6a6a_533x.jpg?v=1750128950" sizes="(min-width: 1220px) 272px, calc((100vw - 35px) / 2)" loading="lazy" alt="MacBook_Air_Space_Gray" className="motion-reduce img-reduce apl-section-product-card-image" width="4000" height="4000" />
                            </div>
                          </div>
                        </div>
                      </a>
                      <div className="card-info card__content">
                        <div className="card__information">
                          <h3 className="card-head h5 apl-section-product-title">
                            <a href="/products/15-inch-macbook-air-mc9d4ll-a" className="full-unstyled-link full-unstyled-link-1">15-inch MacBook Air: Apple M3 chip with 8‑core CPU and 10‑core GPU, 256GB SSD - Space Gray</a>
                          </h3>
                          <div className="card-information">
                            <div className="fbt_cartCSS price price-product-GA-46890827153460 price-product" data-prodprice="$5,000.00 USD">
                              <div className="price__container_carousel price__container_">
                                <div className="price__regular apl-section-product-price">
                                  <div className="price-item-old-1">
                                    <span className="price-item price-item--regular">$5,000.00 USD</span>
                                  </div>
                                </div>
                              </div>
                              <div className="net-monthly-pricing net-monthly-pricing--product_card first-party apl-section-net-monthly-pricing">
                                <span>$416.66/mo. for 12 mo.</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="button-cart">
                          <div className="product-form__buttons card-slider-buttons button_primary_clckd">
                            <a href="/products/15-inch-macbook-air-mc9d4ll-a" className="button_primary_anchor card-btn button--full-width button--primary slider-form-46890827153460 apl-section-product-card-button">Shop</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid__item product-item search-product-card" aria-label="Slide 21 of 22">
                  <div className="article-card-wrapper card-wrapper underline-links-hover" style={{ height: '100%' }}>
                    <div className="card1 card card--card card--text ratio color-background-2" style={{ '--ratio-percent': '100%', justifyContent: 'center', alignItems: 'center' } as React.CSSProperties}>
                      <div className="card__content" style={{ textAlign: 'center' }}>
                        <div className="card__information">
                          <h3 className="card__heading" style={{ fontSize: '20px', margin: '0' }}>
                            <a href="/pages/imac-m4" className="full-unstyled-link">iMac M4</a>
                          </h3>
                        </div>
                        <div className="card__badge" style={{ marginTop: '10px' }}>
                          <span className="badge color-background-1" style={{ fontSize: '12px', background: '#f5f5f7', padding: '4px 8px', borderRadius: '4px' }}>Page Content</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;