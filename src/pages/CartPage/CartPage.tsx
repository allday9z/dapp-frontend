"use client";

import React, { useState } from "react";
import "./CartPage.css";

const CART_ITEMS = [
  {
    id: "47085389643828",
    title: "AirPods Pro 3",
    sku: "MFHP4LL/A",
    barcode: "195950543698",
    price: 2000.00,
    currency: "USD",
    quantity: 1,
    image: "//appstaging.dev/cdn/shop/files/IMG-18063697_m_jpeg_1.jpg?v=1758135574&width=300",
    shipping: "Ships in 1-2 days",
    pickup: "Unavailable at Apple Norway"
  }
];

const ADDITIONAL_SERVICES = [
  {
    id: "ac-1",
    title: "AppleCare+ for AirPods Pro (2 year plan)",
    price: 500.00,
    currency: "USD",
    description: "",
    image: "//appstaging.dev/cdn/shop/files/AppleCare_Plus_Icon_large_728033d6-b72f-44c6-96ca-a2131689cb17_x100.png?v=1750121067",
    actionText: "Add"
  },
  {
    id: "tr-1",
    title: "Trade-in Apple device to save up to $300",
    price: null,
    currency: "",
    description: "Pay in full today, receive trade-in value once device is submitted.",
    image: "//appstaging.dev/cdn/shop/files/TRADE-IN_BUY_BACK_black_x100.svg?v=1750142163",
    actionText: "Start trade-in"
  }
];

const RECOMMENDATIONS = [
  {
    id: "rec-1",
    title: "AirTag",
    price: 2000.00,
    image: "//appstaging.dev/cdn/shop/files/IMG-6206978_2200x_b91f929e-632b-480b-9698-64ac9491e527_533x.webp?v=1750119183"
  },
  {
    id: "rec-2",
    title: "AirTag FineWoven Key Ring - Chartreuse",
    price: 2000.00,
    image: "//appstaging.dev/cdn/shop/files/IMG-14666077_05c2009a-943d-44b7-91e4-7e0cff11b405_533x.png?v=1750712015"
  },
  {
    id: "rec-3",
    title: "Apple Watch Magnetic Fast Charger to USB-C Cable (1 m)",
    price: 2000.00,
    image: "//appstaging.dev/cdn/shop/files/MLWJ3_533x.png?v=1750105089"
  },
  {
    id: "rec-4",
    title: "iPhone 16e Silicone Case – Winter Blue",
    price: 2000.00,
    image: "//appstaging.dev/cdn/shop/files/ab4fe081-bb55-50b2-9122-0fe489a5dc65_m_jpg_1_533x.jpg?v=1750128751"
  }
];

interface CartPageProps {}

export const CartPage = (props: CartPageProps) => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>(
    CART_ITEMS.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
  );

  const [specialInstructions, setSpecialInstructions] = useState("หีควยแตด");

  const handleQuantityChange = (id: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }));
  };

  const formatPrice = (price: number | null) => {
    if (price === null) return "";
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const totalPrice = CART_ITEMS.reduce((sum, item) => sum + (item.price * (quantities[item.id] || 1)), 0);

  return (
    <main id="MainContent" className="content-for-layout focus-none" role="main" tabIndex={-1}>
      <div id="shopify-section-template--20346292535348__cart-items" className="shopify-section">
        <div className="cart-items page-width section-template--20346292535348__cart-items-padding cart_main_page apl-section-main-cart-items">
          
          <div className="title-wrapper-with-link title-wrapper-with-link--note">
            <h1 className="title title--primary">Your cart</h1>
            <div className="cart-note-wrapper">
              <a href="/" className="underlined-link">
                Continue shopping<i className="fa-solid fa-angle-right billboard_icon"></i>
              </a>
              <div className="cart-note cart-note--mobile">
                <details id="Details-CartDrawer">
                  <summary aria-expanded="false">
                    <span className="summary__title">
                      Order special instructions
                    </span>
                  </summary>
                  <div className="cart-note cart__note field">
                    <label className="visually-hidden" htmlFor="CartDrawer-Note">Order special instructions</label>
                    <textarea 
                      id="CartDrawer-Note" 
                      className="text-area text-area--resize-vertical field__input" 
                      name="note" 
                      placeholder="Order special instructions"
                      value={specialInstructions}
                      onChange={(e) => setSpecialInstructions(e.target.value)}
                    ></textarea>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <form action="/cart" className="cart__contents critical-hidden" method="post" id="cart">
            <div className="cart__items apl-section-cart" id="main-cart-items" data-id="template--20346292535348__cart-items">
              <div className="js-contents">
                <table className="cart-items">
                  <caption className="visually-hidden">Your cart</caption>
                  <thead>
                    <tr>
                      <th className="caption-with-letter-spacing" colSpan={2} scope="col">Product</th>
                      <th className="medium-hide large-up-hide right caption-with-letter-spacing" colSpan={1} scope="col">Total</th>
                      <th className="cart-items__heading--wide cart-items__heading--quantity small-hide caption-with-letter-spacing" colSpan={1} scope="col">Quantity</th>
                      <th className="small-hide right caption-with-letter-spacing total-right-space" colSpan={1} scope="col">Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {CART_ITEMS.map((item, index) => (
                      <React.Fragment key={item.id}>
                        <tr className="cart-item apl-section-cart-item" id={`CartItem-${index + 1}`}>
                          <td className="cart-item__media">
                            <a href="#" className="cart-item__link" aria-hidden="true" tabIndex={-1}></a>
                            <div className="cart-item__image-container gradient global-media-settings">
                              <a href="#">
                                <img src={item.image} className="cart-item__image apl-section-cart-item-image" alt={item.title} loading="eager" width="150" height="150" aria-hidden="true" />
                              </a>
                            </div>
                            <div className="mobile_cart cart-item-heading">{item.title}</div>
                            <p className="item-sku-barcode-message mobile-only">
                              <span> SKU: {item.sku} </span>
                              <span> Barcode: {item.barcode}</span>
                            </p>
                          </td>

                          <td className="cart-item__details">
                            <a href="#" className="cart-item__name h4 break apl-section-product-title">{item.title}</a>
                            <p className="item-sku-barcode-message desktop-only">
                              <span> SKU: {item.sku} </span>
                              <span> Barcode: {item.barcode}</span>
                            </p>
                            <span className="cart-item__details-options"></span>
                            <dl></dl>
                            <p className="product-option"></p>
                            <ul className="discounts list-unstyled" aria-label="Discount apl-section-cart-discounts"></ul>
                          </td>

                          <td className="cart-item__totals right medium-hide large-up-hide">
                            <div className="cart-item__price-wrapper apl-section-product-price">
                              <div className="product_tag_display_cart"></div>
                              <span className="price price--end">${formatPrice(item.price)} {item.currency}</span>
                            </div>
                          </td>

                          <td className="cart-item__quantity">
                            <div className="quantity-popover">
                              <div className="cart-item__quantity-wrapper quantity-popover-wrapper">
                                <label className="visually-hidden" htmlFor={`Quantity-${index + 1}`}>Quantity</label>
                                <div className="quantity-popover-container">
                                  <div className="quantity-input quantity cart-quantity js-qty-input apl-section-product-quantity">
                                    <button className="quantity__button no-js-hidden" name="minus" type="button" onClick={() => handleQuantityChange(item.id, -1)}>
                                      <span className="visually-hidden">Decrease quantity</span>
                                    </button>
                                    <input 
                                      className="quantity__input" 
                                      type="number" 
                                      name="updates[]" 
                                      value={quantities[item.id]} 
                                      min="1" 
                                      step="1" 
                                      aria-label="Quantity" 
                                      id={`Quantity-${index + 1}`} 
                                      readOnly
                                    />
                                    <button className="quantity__button no-js-hidden" name="plus" type="button" onClick={() => handleQuantityChange(item.id, 1)}>
                                      <span className="visually-hidden">Increase quantity</span>
                                    </button>
                                  </div>
                                </div>
                                <div className="cart-remove-button" id={`Remove-${index + 1}`}>
                                  <a href="#" className="button button--tertiary" aria-label="Remove">
                                    <span>Remove </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="mobile_cart price_delete">
                            <div className="mobile-cart-tag">
                              <div className="product_tag_display_cart"></div>
                              <div className="cart-item__price-wrapper apl-section-product-price">
                                <span className="price price--end">
                                  <span className="apl-section-product-price-original">${formatPrice(item.price * quantities[item.id])} {item.currency}</span>
                                </span>
                              </div>
                            </div>
                            <div className="cart-remove-button">
                              <a href="#" className="button button--tertiary" aria-label="Remove">
                                <span>Remove </span>
                              </a>
                            </div>
                          </td>

                          <td className="cart-item__totals right small-hide ">
                            <div className="cart-item__price-wrapper apl-section-product-price">
                              <div className="product_tag_display_cart"></div>
                              <span className="price price--end">
                                <span className="apl-section-product-price-original">${formatPrice(item.price * quantities[item.id])} {item.currency}</span>
                              </span>
                            </div>
                          </td>
                        </tr>
                        
                        <tr className="cart_itemadd cart_itemadd--cto">
                          <td className="empty-div-desktop"></td>
                          <td colSpan={4} className="set_applecare-img-info cart_itemadd_details--cto">
                            <div className="cart-delivery-methods cart-delivery-methods--cto-product cart-item-cto-border-bottom desktop-only">
                              <div className="pickup-availability product__pickup-availabilities no-js-hidden apl-section-pickup is-overridden">
                                <div className="pickup-availability-preview">
                                  <div className="pickup-availability-info">
                                    <p className="caption-large apl-section-pickup-title">
                                      <b>Pickup</b>
                                    </p>
                                    <div className="js-pickup-availability-info">
                                      <div className="pickup-availability-info-details apl-section-pickup-availability">
                                        <p className="caption unavailable apl-section-pickup-availability-unavailable">
                                          <span className="pickup-availability__unavailable-override">Pickup <span>unavailable</span></span>
                                        </p>
                                        <button className="js-my-store-locator-drawer-btn pickup-availability-button link link--text apl-section-pickup-availability-cta">
                                          <span className="underlined-text">Apple Norway</span>
                                          <i className="fa-solid fa-chevron-right cto-chevron"></i>
                                        </button>
                                      </div>
                                    </div>
                                    <p className="caption-w100">
                                      <span className="pickup-availability__confirm-store apl-section-pickup-availability-confirm-store"></span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="cart-delivery-shipping apl-section-shipping">
                                <div className="cart-delivery-icon">
                                </div>
                                <span className="cart-delivery-label">Ships in <span>1-2 days</span></span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}

                    <tr className="cart_itemadd cart_itemadd--cto cart_itemadd_details--cto-container">
                      <td className="empty-div-desktop"></td>
                      <td colSpan={4} className="set_applecare-img-info cart_itemadd_details--cto">
                        <h3 className="cart-item-cto-heading apl-section-cart-item-heading">Additional services</h3>
                      </td>
                    </tr>

                    {ADDITIONAL_SERVICES.map(service => (
                      <tr className="cart_itemadd apl-section-cart-applecare" key={service.id}>
                        <td className="empty-div-desktop"></td>
                        <td colSpan={4} className="set_applecare-img-info">
                          <div className="applecare-products-on-cart">
                            <div className="one-not-added applecare-item-img">
                              <a className="care-img apl-section-cart-applecare-image" href="#">
                                <img src={service.image} loading="lazy" className="add-on-image-cart" width="100" height="100" alt={service.title} />
                              </a>
                            </div>
                            <div className="apple-care-card-two two-not-added applecare-item-title">
                              <p className="apple-care-card-title apl-section-cart-applecare-title">
                                {service.title} <br /> {service.price ? `$${formatPrice(service.price)} ${service.currency}` : ''}
                              </p>
                              {service.description && (
                                <p className="spandesc">
                                  {service.description}
                                </p>
                              )}
                              <div className="learnmore apl-section-cart-applecare-cta">
                                <span className="seedkit-component-standalone">
                                  <a className="ac-modal-trigger icon apl-section-applecare-learn" href="#">
                                    <span className="underlined-text">Learn more</span>
                                    <i className="fa-solid fa-angle-right billboard_icon"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                            <div className="three-not-added">&nbsp;</div>
                            <div className="four-not-added">
                              <button type="button" className="care-btn add-cart-apple-care btn product-form__submit apl-section-cart-applecare-add-remove">
                                {service.actionText} <i className="fa-solid fa-angle-right billboard_icon"></i>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </form>
        </div>

        <div className="page-width cart_main_page" id="main-cart-payment-blocks">
          <div className="cart-payment-blocks">
            <div className="cart-payment-blocks__block apl-section-cart-payment-block">
              <div className="net-monthly-pricing net-monthly-pricing--cart_payment_block first-party ">
                <div className="cart-payment-blocks__title cart-payment-blocks__title--nmp apl-section-cart-payment-block-text">
                  Pay ${formatPrice(totalPrice / 12)}/mo. for 12 mo.
                </div>
                <div className="cart-payment-blocks__buttons apl-section-cart-payment-block-buttons">
                  <button className="button button--primary cart-payment-blocks__button ac-modal-trigger apl-section-cart-payment-block-button">
                    Start financing
                  </button>
                </div>
              </div>
            </div>
            
            <div className="cart-payment-blocks__block apl-section-cart-payment-block">
              <div className="cart-payment-blocks__title apl-section-cart-payment-block-text">
                Pay in full
                <br className="hide-tablet-and-up" />
                ${formatPrice(totalPrice)} USD
              </div>
              <div className="cart-payment-blocks__buttons apl-section-cart-payment-block-button">
                <div className="expedited-checkout visually-hidden apl-section-expeditedcheckout-button">
                  <button type="submit" form="cart" name="checkout" className="apple-button apple-button--cto" lang="en">
                    <span className="apple-button--cto__text">
                      <span className="apple-button-text">Checkout with</span>
                      <span className="apple-button--cto__icon"></span>
                    </span>
                  </button>
                  <button type="submit" form="cart" name="checkout" className="checkout-button checkout-button__link">
                    <span className="underlined-text">Checkout with more payment options</span>
                    <i className="fa-solid fa-chevron-right cto-chevron"></i>
                  </button>
                </div>
                <button type="submit" id="checkout-block" className="button button--primary cart-payment-blocks__button apl-section-cart-payment-block-button" name="checkout" form="cart">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="shopify-section-template--20346292535348__899b2089-0581-4b85-afb0-e100fffd95d4" className="shopify-section collection_slider slider-container">
          <div className="collection-slider_outer slider-container page-width section-template--20346292535348__899b2089-0581-4b85-afb0-e100fffd95d4-padding isolate apl-section-collection-slider">
            <h2 className="collection_main_heading apl-section-collection-slider-section-title">Power up.</h2>
            
            <div className="arrows-slider apl-section-carousel-arrows">
              <button className="prev apl-section-carousel-arrows-previous slick-arrow" type="button" aria-label="Previous slide" style={{ display: "block" }}>
                <img loading="lazy" className="left-arrow-image" src="https://cdn.shopify.com/s/files/1/0600/7318/1334/files/left-arrow.png?v=1648296984" width="12" height="21" alt="" aria-hidden="true" />
              </button>
            </div>
            
            <div className="slick-frame home_collection_courosel product-list-contain slick-initialized slick-slider slick-dotted is-observed">
              <div aria-live="polite" className="slick-list draggable">
                <div className="slick-track" style={{ opacity: 1, display: "flex", gap: "20px", overflowX: "auto" }}>
                  
                  {RECOMMENDATIONS.map((rec, index) => (
                    <div key={rec.id} className="product-card product-scratch-list collection_slider_slide apl-section-product-card-slide slick-slide" aria-label={`Slide ${index + 1}`} tabIndex={0} style={{ minWidth: "280px" }}>
                      <div className="underline-links-hover">
                        <div className="card1 card apl-section-product-card card--standard card--media">
                          <a href="#" className="full-unstyled-link" tabIndex={0}>
                            <div className="you_may_also_like card-pro card__inner color-background-2 ratio">
                              <div className="card__media">
                                <div className=" media media--transparent media--hover-effect">
                                  <img src={rec.image} loading="lazy" alt={rec.title} className="motion-reduce img-reduce apl-section-product-card-image" width="100%" height="auto" />
                                </div>
                              </div>
                            </div>
                          </a>
                          <div className=" card-info card__content">
                            <div className="card__information">
                              <h3 className="card-head h5 apl-section-product-title">
                                <a href="#" className="full-unstyled-link full-unstyled-link-1">{rec.title}</a>
                              </h3>
                              <div className="card-information">
                                <div className="price price-product">
                                  <div className="price__container_carousel price__container_">
                                    <div className="price__regular apl-section-product-price">
                                      <div className="price-item-old-1">
                                        <span className="price-item price-item--regular">
                                          ${formatPrice(rec.price)} USD
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="net-monthly-pricing net-monthly-pricing--product_card first-party apl-section-net-monthly-pricing">
                                  <span>${formatPrice(rec.price / 12)}/mo. for 12 mo.</span>
                                </div>
                              </div>
                            </div>
                            <div className="button-cart">
                              <div className="product-form__buttons card-slider-buttons button_primary_clckd">
                                <a href="#" className="slider-form button_primary_anchor card-btn button--full-width button--primary apl-section-product-card-button" tabIndex={0}>
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                </div>
              </div>
            </div>

            <div className="arrows-slider apl-section-carousel-arrows">
              <button className="next apl-section-carousel-arrows-next slick-arrow" type="button" aria-label="Next slide" style={{ display: "block" }}>
                <img loading="lazy" className="right-arrow-image" src="https://cdn.shopify.com/s/files/1/0600/7318/1334/files/right-arrow.png?v=1648296894" width="12" height="21" alt="" aria-hidden="true" />
              </button>
            </div>
            
          </div>
        </div>

      </div>
    </main>
  );
};