import React from "react";
import "./StoreLocatorPage.css";

interface StoreLocatorPageProps {
  // สามารถเพิ่ม props ที่ต้องการใช้งานในอนาคตได้ที่นี่
}

export const StoreLocatorPage = (props: StoreLocatorPageProps) => {
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
                        <input className="nosubmit my-store-locator-drawer__input" id="storeLocatorSearch" type="search" name="storeLocatorSearch" placeholder="Enter City or Postal Code" aria-label="Enter City or Postal Code" role="combobox" aria-expanded="false" aria-owns="myLocations" aria-controls="myLocations" aria-haspopup="listbox" aria-autocomplete="list" autoCorrect="off" autoComplete="off" autoCapitalize="off" spellCheck={false} />
                      </form>
                      <div className="js-store-locator-search-suggestions my-store-locator-drawer__suggestions hidden"></div>
                      <p className="js-store-locator-search-error my-store-locator-drawer__error hidden">
                        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Please fill this out
                      </p>
                      <button className="js-store-locator-use-location-btn my-store-locator-drawer__use-location-btn apl-section-stores-locator-search-current-location" type="button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9023 5.98047C11.309 5.98047 10.729 6.15642 10.2356 6.48606C9.74229 6.8157 9.35777 7.28424 9.13071 7.83242C8.90364 8.3806 8.84423 8.9838 8.95999 9.56574C9.07574 10.1477 9.36147 10.6822 9.78102 11.1018C10.2006 11.5213 10.7351 11.8071 11.3171 11.9228C11.899 12.0386 12.5022 11.9792 13.0504 11.7521C13.5986 11.525 14.0671 11.1405 14.3968 10.6472C14.7264 10.1538 14.9023 9.57381 14.9023 8.98047C14.9014 8.1851 14.5851 7.42256 14.0227 6.86015C13.4603 6.29774 12.6977 5.98137 11.9023 5.98047ZM11.9023 10.4805C11.6057 10.4805 11.3157 10.3925 11.069 10.2277C10.8223 10.0628 10.6301 9.82858 10.5165 9.55449C10.403 9.2804 10.3733 8.9788 10.4312 8.68783C10.489 8.39686 10.6319 8.12959 10.8417 7.91981C11.0515 7.71003 11.3187 7.56717 11.6097 7.50929C11.9007 7.45141 12.2023 7.48112 12.4764 7.59465C12.7505 7.70818 12.9847 7.90044 13.1495 8.14711C13.3144 8.39379 13.4023 8.6838 13.4023 8.98047C13.4019 9.37815 13.2437 9.75942 12.9625 10.0406C12.6813 10.3218 12.3 10.48 11.9023 10.4805Z" fill="#0071E3"></path>
                          <path d="M17.6676 3.21133C16.2423 1.78635 14.3396 0.939858 12.3268 0.835221C10.3141 0.730584 8.33391 1.37522 6.76849 2.64472C5.20307 3.91422 4.16338 5.71858 3.85009 7.70957C3.5368 9.70055 3.97212 11.737 5.07202 13.4259L10.7395 22.1265C10.8657 22.3201 11.0381 22.4792 11.2412 22.5893C11.4444 22.6994 11.6718 22.7571 11.9029 22.7571C12.1339 22.7571 12.3613 22.6994 12.5645 22.5893C12.7676 22.4792 12.9401 22.3201 13.0662 22.1265L18.7339 13.4259C19.7545 11.8592 20.2055 9.98931 20.0114 8.12962C19.8172 6.26993 18.9898 4.53348 17.6676 3.21133ZM17.4771 12.6071L11.9029 21.1642L6.32865 12.6071C4.6224 9.98782 4.98835 6.4825 7.19879 4.27197C7.81653 3.65421 8.54991 3.16418 9.35704 2.82985C10.1642 2.49551 11.0292 2.32344 11.9029 2.32344C12.7765 2.32344 13.6416 2.49551 14.4487 2.82985C15.2559 3.16418 15.9892 3.65421 16.607 4.27197C18.8174 6.4825 19.1833 9.98782 17.4771 12.6071Z" fill="#0071E3"></path>
                        </svg>
                        <span> ใช้ตำแหน่งที่ตั้งของคุณ</span>
                      </button>
                      <div className="my-store-locator-drawer__search-result-options">
                        <span className="js-store-locator-results-count my-store-locator-drawer__search-result-label apl-section-stores-locator-results-count" data-results="results" data-result="result" data-results-near="results near" data-result-near="result near" data-results-near-you="results near you" data-result-near-you="result near you" data-no-results-found="no results found">(number) สาขาใกล้คุณ</span>
                        <label className="screenreader" htmlFor="storeLocatorDistanceSelect">
                          Filter stores by distance
                        </label>
                        <select className="js-store-locator-results-distance my-store-locator-drawer__search-distance-select apl-section-stores-locator-distance" id="storeLocatorDistanceSelect" defaultValue="30">
                          <option value="all">All stores</option>
                          <option value="5">5 miles</option>
                          <option value="10">10 miles</option>
                          <option value="30">30 miles</option>
                          <option value="50">50 miles</option>
                          <option value="100">100 miles</option>
                        </select>
                      </div>
                    </div>
                    <div id="mobileMapWrapper" className="my-store-locator__mobile-map-wrapper" tabIndex={0} aria-label="Interactive map showing store locations"></div>
                    <div id="myLocationResults" className="my-store-locator-drawer__search-results apl-section-stores-locator-results">
                      
                      {/* Location Result 1 */}
                      <div className="js-my-location-result my-location-result apl-section-stores-locator-result" data-active="true" data-id="gid://shopify/Location/79445033012" data-name="Apple Norway" data-latitude="60.12105010000001" data-longitude="11.4663429" role="group" data-events-added="true">
                        <div className="my-location-result__my-store apl-section-stores-locator-store-label">My store</div>
                        <div className="my-location-result__image apl-section-stores-locator-store-image">
                          <img src="https://cdn.shopify.com/s/files/1/0712/7203/8452/files/apple-irvine.jpg?v=1750142148" alt="Apple Norway" />
                        </div>
                        <section className="js-my-results-details">
                          <div className="my-location-result__details">
                            <div className="my-location-result__name apl-section-stores-locator-store-name">Apple Norway</div>
                            <div className="my-store-locator__details-distance apl-section-stores-locator-store-distance">1631 miles</div>
                          </div>
                          <div className="my-location-result__address my-location-result__location apl-section-stores-locator-store-address">
                            Årnes
                          </div>
                          <ul className="list-unstyled my-location-result__business">
                            <li className="my-location-result__address apl-section-stores-locator-store-address-1">
                              <span>Address: </span>
                              <a href="https://maps.apple.com/place?q=Apple%20Norway&amp;address=Hennivangvegen%20123%2C2150%20%C3%85rnes%2CNorway&amp;ll=60.12105010000001,11.4663429" target="_blank" rel="noreferrer">Hennivangvegen 123, 2150 Årnes, Norway</a>
                            </li>
                            <li className="my-location-result__address apl-section-stores-locator-store-address-phone">
                              <span>Telephone: </span>
                              <a href="tel:(949) 255-1500">(949) 255-1500</a>
                            </li>
                            <li className="my-location-result__address apl-section-stores-locator-store-address-email">
                              <span>Email: </span>
                              <a href="mailto:irvinespectrum@apple.com">irvinespectrum@apple.com</a>
                            </li>
                            <li className="my-location-result__address apl-section-stores-locator-store-address-hours">
                              <span>Hours: </span>
                              <span>10:00 a.m. - 9:00 p.m.</span>
                            </li>
                          </ul>
                          <div className="my-location-result__link js-my-location-link visually-hidden">
                            <a href="https://maps.apple.com/place?q=Apple%20Norway&amp;address=Hennivangvegen%20123%2C2150%20%C3%85rnes%2CNorway&amp;ll=60.12105010000001,11.4663429" target="_blank" rel="noopener noreferrer">Get Directions</a>
                          </div>
                        </section>
                        <button className="my-location-result__services-btn js-acc-button apl-section-stores-locator-store-services-btn" type="button">
                          <span className="underlined-text">View store services</span>
                          <i className="myarrow fa fa-chevron-down my-location-result__services-icon js-acc-icon" aria-hidden="true"></i>
                        </button>
                        <div className="my-location-result__services js-acc-details" aria-expanded="false">
                          <ul>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">Apple Official Technical Support</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">See all sessions at this store</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">Reserve a shopping session</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">See what your device is worth</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">Get help here</a></li>
                          </ul>
                          <p><a href="/" className="apl-section-stores-locator-store-services-link"> Schedule Appointment</a></p>
                        </div>
                        <button className="js-make-my-store-btn button button--secondary button--full-width my-location-result__make-my-store-btn apl-section-stores-locator-store-set-store">
                          Make this my store
                        </button>
                      </div>
                      
                      {/* Location Result 2 */}
                      <div className="js-my-location-result my-location-result apl-section-stores-locator-result" data-active="false" data-id="gid://shopify/Location/79482126388" data-name="Test Store Location" data-latitude="37.3326256" data-longitude="-122.0052894" role="group" data-events-added="true">
                        <div className="my-location-result__my-store apl-section-stores-locator-store-label">My store</div>
                        <div className="my-location-result__image apl-section-stores-locator-store-image">
                          <img src="https://cdn.shopify.com/s/files/1/0712/7203/8452/files/appleStore_example_smaller.jpg?v=1750143989" alt="Test Store Location" />
                        </div>
                        <section className="js-my-results-details">
                          <div className="my-location-result__details">
                            <div className="my-location-result__name apl-section-stores-locator-store-name">Test Store Location</div>
                            <div className="my-store-locator__details-distance apl-section-stores-locator-store-distance">6462.7 miles</div>
                          </div>
                          <div className="my-location-result__address my-location-result__location apl-section-stores-locator-store-address">
                            Cupertino, CA
                          </div>
                          <ul className="list-unstyled my-location-result__business">
                            <li className="my-location-result__address apl-section-stores-locator-store-address-1">
                              <span>Address: </span>
                              <a href="https://maps.apple.com/place?q=Test%20Store%20Location&amp;address=10600%20North%20Tantau%20Avenue%2CCupertino%20CA%2095014%2CUnited%20States&amp;ll=37.3326256,-122.0052894" target="_blank" rel="noreferrer">10600 North Tantau Avenue, Cupertino CA 95014, United States</a>
                            </li>
                            <li className="my-location-result__address apl-section-stores-locator-store-address-phone">
                              <span>Telephone: </span>
                              <a href="tel:(555) 555-5555">(555) 555-5555</a>
                            </li>
                            <li className="my-location-result__address apl-section-stores-locator-store-address-email">
                              <span>Email: </span>
                              <a href="mailto:apple@apple.com">apple@apple.com</a>
                            </li>
                            <li className="my-location-result__address apl-section-stores-locator-store-address-hours">
                              <span>Hours: </span>
                              <span>Monday 10:00 a.m. - 8:00 p.m.</span>
                            </li>
                          </ul>
                          <div className="my-location-result__link js-my-location-link visually-hidden">
                            <a href="https://maps.apple.com/place?q=Test%20Store%20Location&amp;address=10600%20North%20Tantau%20Avenue%2CCupertino%20CA%2095014%2CUnited%20States&amp;ll=37.3326256,-122.0052894" target="_blank" rel="noopener noreferrer">Get Directions</a>
                          </div>
                        </section>
                        <button className="my-location-result__services-btn js-acc-button apl-section-stores-locator-store-services-btn" type="button">
                          <span className="underlined-text">View store services</span>
                          <i className="myarrow fa fa-chevron-down my-location-result__services-icon js-acc-icon" aria-hidden="true"></i>
                        </button>
                        <div className="my-location-result__services js-acc-details" aria-expanded="false">
                          <ul>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">Apple Official Technical Support</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">See all sessions at this store</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">Reserve a shopping session</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">See what your device is worth</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">Get help here</a></li>
                          </ul>
                          <p><a href="/" className="apl-section-stores-locator-store-services-link">Schedule Appointment</a></p>
                        </div>
                        <button className="js-make-my-store-btn button button--secondary button--full-width my-location-result__make-my-store-btn apl-section-stores-locator-store-set-store">
                          Make this my store
                        </button>
                      </div>

                      {/* Location Result 3 */}
                      <div className="js-my-location-result my-location-result apl-section-stores-locator-result" data-active="false" data-id="gid://shopify/Location/79445065780" data-name="Apple Pasadena" data-latitude="34.145403" data-longitude="-118.1516282" role="group" data-events-added="true">
                        <div className="my-location-result__my-store apl-section-stores-locator-store-label">My store</div>
                        <div className="my-location-result__image apl-section-stores-locator-store-image">
                          <img src="https://cdn.shopify.com/s/files/1/0712/7203/8452/files/apple-pasadena.jpg?v=1750142146" alt="Apple Pasadena" />
                        </div>
                        <section className="js-my-results-details">
                          <div className="my-location-result__details">
                            <div className="my-location-result__name apl-section-stores-locator-store-name">Apple Pasadena</div>
                            <div className="my-store-locator__details-distance apl-section-stores-locator-store-distance">6501.1 miles</div>
                          </div>
                          <div className="my-location-result__address my-location-result__location apl-section-stores-locator-store-address">
                            Pasadena, CA
                          </div>
                          <ul className="list-unstyled my-location-result__business">
                            <li className="my-location-result__address apl-section-stores-locator-store-address-1">
                              <span>Address: </span>
                              <a href="https://maps.apple.com/place?q=Apple%20Pasadena&amp;address=54%20West%20Colorado%20Boulevard%2CPasadena%20CA%2091105%2CUnited%20States&amp;ll=34.145403,-118.1516282" target="_blank" rel="noreferrer">54 West Colorado Boulevard, Pasadena CA 91105, United States</a>
                            </li>
                            <li className="my-location-result__address apl-section-stores-locator-store-address-phone">
                              <span>Telephone: </span>
                              <a href="tel:+1 (626) 463-62232">+1 (626) 463-62232</a>
                            </li>
                            <li className="my-location-result__address apl-section-stores-locator-store-address-email">
                              <span>Email: </span>
                              <a href="mailto:pasadena@apple.com">pasadena@apple.com</a>
                            </li>
                            <li className="my-location-result__address apl-section-stores-locator-store-address-hours">
                              <span>Hours: </span>
                              <span>10:00 a.m. - 9:00 p.m.</span>
                            </li>
                          </ul>
                          <div className="my-location-result__link js-my-location-link visually-hidden">
                            <a href="https://maps.apple.com/place?q=Apple%20Pasadena&amp;address=54%20West%20Colorado%20Boulevard%2CPasadena%20CA%2091105%2CUnited%20States&amp;ll=34.145403,-118.1516282" target="_blank" rel="noopener noreferrer">Get Directions</a>
                          </div>
                        </section>
                        <button className="my-location-result__services-btn js-acc-button apl-section-stores-locator-store-services-btn" type="button">
                          <span className="underlined-text">View store services</span>
                          <i className="myarrow fa fa-chevron-down my-location-result__services-icon js-acc-icon" aria-hidden="true"></i>
                        </button>
                        <div className="my-location-result__services js-acc-details" aria-expanded="false">
                          <ul>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">Apple Official Technical Support</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">See all sessions at this store</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">Reserve a shopping session</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">See what your device is worth</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">Get help here</a></li>
                          </ul>
                          <p><a href="/" className="apl-section-stores-locator-store-services-link"> Schedule Appointment</a></p>
                        </div>
                        <button className="js-make-my-store-btn button button--secondary button--full-width my-location-result__make-my-store-btn apl-section-stores-locator-store-set-store">
                          Make this my store
                        </button>
                      </div>

                      {/* Location Result 4 */}
                      <div className="js-my-location-result my-location-result apl-section-stores-locator-result" data-active="false" data-id="gid://shopify/Location/79481995316" data-name="Apple The Grove" data-latitude="34.072253" data-longitude="-118.35781" role="group" data-events-added="true">
                        <div className="my-location-result__my-store apl-section-stores-locator-store-label">My store</div>
                        <div className="my-location-result__image apl-section-stores-locator-store-image">
                          <img src="https://cdn.shopify.com/s/files/1/0712/7203/8452/files/apple-the-grove.jpg?v=1750142148" alt="Apple The Grove" />
                        </div>
                        <section className="js-my-results-details">
                          <div className="my-location-result__details">
                            <div className="my-location-result__name apl-section-stores-locator-store-name">Apple The Grove</div>
                            <div className="my-store-locator__details-distance apl-section-stores-locator-store-distance">6512.5 miles</div>
                          </div>
                          <div className="my-location-result__address my-location-result__location apl-section-stores-locator-store-address">
                            Los Angeles, CA
                          </div>
                          <ul className="list-unstyled my-location-result__business">
                            <li className="my-location-result__address apl-section-stores-locator-store-address-1">
                              <span>Address: </span>
                              <a href="https://maps.apple.com/place?q=Apple%20The%20Grove&amp;address=Apple%20The%20Grove%2C%20189%20The%20Grove%20Drive%2CLos%20Angeles%20CA%2090036%2CUnited%20States&amp;ll=34.072253,-118.35781" target="_blank" rel="noreferrer">Apple The Grove, 189 The Grove Drive, Los Angeles CA 90036, United States</a>
                            </li>
                            <li className="my-location-result__address apl-section-stores-locator-store-address-phone">
                              <span>Telephone: </span>
                              <a href="tel:+918861766654">+918861766654</a>
                            </li>
                            <li className="my-location-result__address apl-section-stores-locator-store-address-email">
                              <span>Email: </span>
                              <a href="mailto:thegrove@apple.com">thegrove@apple.com</a>
                            </li>
                            <li className="my-location-result__address apl-section-stores-locator-store-address-hours">
                              <span>Hours: </span>
                              <span>10:00 a.m. - 8:00 p.m.</span>
                            </li>
                          </ul>
                          <div className="my-location-result__link js-my-location-link visually-hidden">
                            <a href="https://maps.apple.com/place?q=Apple%20The%20Grove&amp;address=Apple%20The%20Grove%2C%20189%20The%20Grove%20Drive%2CLos%20Angeles%20CA%2090036%2CUnited%20States&amp;ll=34.072253,-118.35781" target="_blank" rel="noopener noreferrer">Get Directions</a>
                          </div>
                        </section>
                        <button className="my-location-result__services-btn js-acc-button apl-section-stores-locator-store-services-btn" type="button">
                          <span className="underlined-text">View store services</span>
                          <i className="myarrow fa fa-chevron-down my-location-result__services-icon js-acc-icon" aria-hidden="true"></i>
                        </button>
                        <div className="my-location-result__services js-acc-details" aria-expanded="false">
                          <ul>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">Apple Official Technical Support</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">See all sessions at this store</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">Reserve a shopping session</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">See what your device is worth</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">Get help here</a></li>
                          </ul>
                          <p><a href="/" className="apl-section-stores-locator-store-services-link">Schedule Appointment</a></p>
                        </div>
                        <button className="js-make-my-store-btn button button--secondary button--full-width my-location-result__make-my-store-btn apl-section-stores-locator-store-set-store">
                          Make this my store
                        </button>
                      </div>

                      {/* Location Result 5 */}
                      <div className="js-my-location-result my-location-result apl-section-stores-locator-result" data-active="false" data-id="gid://shopify/Location/79481700404" data-name="Apple South Coast Plaza" data-latitude="33.6919413" data-longitude="-117.8928597" role="group" data-events-added="true">
                        <div className="my-location-result__my-store apl-section-stores-locator-store-label">My store</div>
                        <div className="my-location-result__image apl-section-stores-locator-store-image">
                          <img src="https://cdn.shopify.com/s/files/1/0712/7203/8452/files/apple-south-coast-plaza.jpg?v=1750142149" alt="Apple South Coast Plaza" />
                        </div>
                        <section className="js-my-results-details">
                          <div className="my-location-result__details">
                            <div className="my-location-result__name apl-section-stores-locator-store-name">Apple South Coast Plaza</div>
                            <div className="my-store-locator__details-distance apl-section-stores-locator-store-distance">6515.7 miles</div>
                          </div>
                          <div className="my-location-result__address my-location-result__location apl-section-stores-locator-store-address">
                            Costa Mesa, CA
                          </div>
                          <ul className="list-unstyled my-location-result__business">
                            <li className="my-location-result__address apl-section-stores-locator-store-address-1">
                              <span>Address: </span>
                              <a href="https://maps.apple.com/place?q=Apple%20South%20Coast%20Plaza&amp;address=3333%20Bear%20Street%2CCosta%20Mesa%20CA%2092626%2CUnited%20States&amp;ll=33.6919413,-117.8928597" target="_blank" rel="noreferrer">3333 Bear Street, Costa Mesa CA 92626, United States</a>
                            </li>
                            <li className="my-location-result__address apl-section-stores-locator-store-address-phone">
                              <span>Telephone: </span>
                              <a href="tel:(714) 424-6331">(714) 424-6331</a>
                            </li>
                            <li className="my-location-result__address apl-section-stores-locator-store-address-email">
                              <span>Email: </span>
                              <a href="mailto:southcoastplaza@apple.com">southcoastplaza@apple.com</a>
                            </li>
                            <li className="my-location-result__address apl-section-stores-locator-store-address-hours">
                              <span>Hours: </span>
                              <span>10:00 a.m. - 10:00 p.m.</span>
                            </li>
                          </ul>
                          <div className="my-location-result__link js-my-location-link visually-hidden">
                            <a href="https://maps.apple.com/place?q=Apple%20South%20Coast%20Plaza&amp;address=3333%20Bear%20Street%2CCosta%20Mesa%20CA%2092626%2CUnited%20States&amp;ll=33.6919413,-117.8928597" target="_blank" rel="noopener noreferrer">Get Directions</a>
                          </div>
                        </section>
                        <button className="my-location-result__services-btn js-acc-button apl-section-stores-locator-store-services-btn" type="button">
                          <span className="underlined-text">View store services</span>
                          <i className="myarrow fa fa-chevron-down my-location-result__services-icon js-acc-icon" aria-hidden="true"></i>
                        </button>
                        <div className="my-location-result__services js-acc-details" aria-expanded="false">
                          <ul>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">Apple Official Technical Support</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">See all sessions at this store</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">Reserve a shopping session</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">See what your device is worth</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">Get help here</a></li>
                          </ul>
                          <p><a href="/" className="apl-section-stores-locator-store-services-link">Schedule Appointment</a></p>
                        </div>
                        <button className="js-make-my-store-btn button button--secondary button--full-width my-location-result__make-my-store-btn apl-section-stores-locator-store-set-store">
                          Make this my store
                        </button>
                      </div>

                      {/* Location Result 6 */}
                      <div className="js-my-location-result my-location-result apl-section-stores-locator-result" data-active="false" data-id="gid://shopify/Location/79482060852" data-name="Apple Third Street Promenade" data-latitude="34.01544210000001" data-longitude="-118.4952918" role="group" data-events-added="true">
                        <div className="my-location-result__my-store apl-section-stores-locator-store-label">My store</div>
                        <div className="my-location-result__image apl-section-stores-locator-store-image">
                          <img src="https://cdn.shopify.com/s/files/1/0712/7203/8452/files/apple-third-street-promenade.jpg?v=1750142150" alt="Apple Third Street Promenade" />
                        </div>
                        <section className="js-my-results-details">
                          <div className="my-location-result__details">
                            <div className="my-location-result__name apl-section-stores-locator-store-name">Apple Third Street Promenade</div>
                            <div className="my-store-locator__details-distance apl-section-stores-locator-store-distance">6520.5 miles</div>
                          </div>
                          <div className="my-location-result__address my-location-result__location apl-section-stores-locator-store-address">
                            Santa Monica, CA
                          </div>
                          <ul className="list-unstyled my-location-result__business">
                            <li className="my-location-result__address apl-section-stores-locator-store-address-1">
                              <span>Address: </span>
                              <a href="https://maps.apple.com/place?q=Apple%20Third%20Street%20Promenade&amp;address=1415%20Third%20Street%20Promenade%2CSanta%20Monica%20CA%2090401%2CUnited%20States&amp;ll=34.01544210000001,-118.4952918" target="_blank" rel="noreferrer">1415 Third Street Promenade, Santa Monica CA 90401, United States</a>
                            </li>
                            <li className="my-location-result__address apl-section-stores-locator-store-address-phone">
                              <span>Telephone: </span>
                              <a href="tel:(310) 633-2670">(310) 633-2670</a>
                            </li>
                            <li className="my-location-result__address apl-section-stores-locator-store-address-email">
                              <span>Email: </span>
                              <a href="mailto:thirdstreetpromenade@apple.com">thirdstreetpromenade@apple.com</a>
                            </li>
                            <li className="my-location-result__address apl-section-stores-locator-store-address-hours">
                              <span>Hours: </span>
                              <span>10:00 a.m. - 8:00 p.m.</span>
                            </li>
                          </ul>
                          <div className="my-location-result__link js-my-location-link visually-hidden">
                            <a href="https://maps.apple.com/place?q=Apple%20Third%20Street%20Promenade&amp;address=1415%20Third%20Street%20Promenade%2CSanta%20Monica%20CA%2090401%2CUnited%20States&amp;ll=34.01544210000001,-118.4952918" target="_blank" rel="noopener noreferrer">Get Directions</a>
                          </div>
                        </section>
                        <button className="my-location-result__services-btn js-acc-button apl-section-stores-locator-store-services-btn" type="button">
                          <span className="underlined-text">View store services</span>
                          <i className="myarrow fa fa-chevron-down my-location-result__services-icon js-acc-icon" aria-hidden="true"></i>
                        </button>
                        <div className="my-location-result__services js-acc-details" aria-expanded="false">
                          <ul>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">Apple Official Technical Support</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">See all sessions at this store</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">Reserve a shopping session</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">See what your device is worth</a></li>
                            <li><a href="/" className="apl-section-stores-locator-store-services-link">Get help here</a></li>
                          </ul>
                          <p><a href="/" className="apl-section-stores-locator-store-services-link">Schedule Appointment</a></p>
                        </div>
                        <button className="js-make-my-store-btn button button--secondary button--full-width my-location-result__make-my-store-btn apl-section-stores-locator-store-set-store">
                          Make this my store
                        </button>
                      </div>
                    </div>

                    <div className="my-store-locator-drawer__footer visually-hidden">
                      <button className="js-store-locator-select-btn my-store-locator__details-btn button button--full-width" type="button">
                        Select
                      </button>
                    </div>
                  </div>
                  <div id="storeLocatorDrawerLoading" className="my-store-locator-drawer__loading hidden">
                    <i className="fa fa-spinner fa-spin" style={{ fontSize: "24px" }}></i>
                  </div>
                </div>
                <div className="my-store-locator-drawer__bg"></div>
              </div>

              <div id="desktopMapWrapper" className="two-location_map" tabIndex={0} aria-label="Interactive map showing store locations">
                <div id="map" className="apl-section-stores-locator-map">
                  <div className="mk-map-view mk-disable-all-gestures" style={{ position: "relative" }}>
                    <canvas width="794" height="1192" className="syrup-canvas" aria-hidden="true" style={{ width: "794px", height: "1192px", backgroundColor: "rgb(249, 245, 237)" }}></canvas>
                    <canvas className="rt-root" aria-hidden="true" width="794" height="1192" style={{ width: "794px", height: "1192px" }}></canvas>
                    <div className="mk-map-node-element" style={{ width: "794px", height: "1192px" }}>
                      <div className="mk-annotation-container">
                        <div className="cd-annotation default_icon_color" slot="mk-slot-gu4v1s9d"><i className="fa fa-location-dot active"></i></div>
                        <div className="cd-annotation default_icon_color" slot="mk-slot-ti7n35nd"><i className="fa fa-location-dot"></i></div>
                        <div className="cd-annotation default_icon_color" slot="mk-slot-s93spsjs"><i className="fa fa-location-dot"></i></div>
                        <div className="cd-annotation default_icon_color" slot="mk-slot-pgj4vip3"><i className="fa fa-location-dot"></i></div>
                        <div className="cd-annotation default_icon_color" slot="mk-slot-m4h2l0co"><i className="fa fa-location-dot"></i></div>
                        <div className="cd-annotation default_icon_color" slot="mk-slot-unmkd7l4"><i className="fa fa-location-dot"></i></div>
                      </div>
                      <div className="mk-controls-container" style={{ inset: "0px" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="store-overlay" className="store-overlay-spin">
            <i className="fa fa-spinner fa-spin" style={{ fontSize: "24px" }}></i>
          </div>

          <script src="//appstaging.dev/cdn/shop/t/64/assets/map-page.js?v=103384211591196203711774018334" defer></script>
      </main>
    </div>
  );
};