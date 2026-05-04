"use client";

import React, { useState, useEffect } from "react";
import "./CartPage.css";
import StoreLocatorDrawer from '@/components/organisms/StoreLocator/StoreLocatorDrawer';

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

const CART_ITEMS = [
  {
    id: "47085389643828",
    title: "AirPods Pro 3",
    sku: "MFHP4LL/A",
    barcode: "195950543698",
    price: 8490.00,
    currency: "THB",
    quantity: 1,
    image: "//appstaging.dev/cdn/shop/files/IMG-18063697_m_jpeg_1.jpg?v=1758135574&width=300",
    shipping: "Ships in 1-2 days",
    pickup: "Unavailable at Apple Norway"
  }
];

const ADDITIONAL_SERVICES = [
  {
    id: "ac-1",
    title: "AppleCare+ สำหรับ AirPods Pro (แผน 2 ปี)",
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
  },
  {
    id: "uj-1",
    title: "U•Joy",
    price: null,
    currency: "",
    description: "ได้รับคะแนน - คะแนน",
    image: "//appstaging.dev/cdn/shop/files/TRADE-IN_BUY_BACK_black_x100.svg?v=1750142163"
  }
];

interface CartPageProps {}

export const CartPage = (props: CartPageProps) => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>(
    CART_ITEMS.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
  );

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isClosingDrawer, setIsClosingDrawer] = useState(false);
  const [selectedStoreName, setSelectedStoreName] = useState<string | null>(null);
  const [isLoadingStore, setIsLoadingStore] = useState(true);

  useEffect(() => {
    const fetchStore = () => {
      const savedStore = getStoreFromStorage();
      if (savedStore) {
        setSelectedStoreName(savedStore);
      }
      setIsLoadingStore(false);
    };
    fetchStore();

    const handleLocalUpdate = () => {
      const savedStore = getStoreFromStorage();
      if (savedStore) setSelectedStoreName(savedStore);
    };

    window.addEventListener('local-store-update', handleLocalUpdate);
    return () => window.removeEventListener('local-store-update', handleLocalUpdate);
  }, []);

  const openDrawer = () => setIsDrawerOpen(true);
  
  const closeDrawer = () => {
    if (isClosingDrawer) return;
    setIsClosingDrawer(true);
    setTimeout(() => {
      setIsDrawerOpen(false);
      setIsClosingDrawer(false);
    }, 350);
  };

  const handleStoreSelect = (name: string) => {
    setSelectedStoreName(name);
    saveStoreToStorage(name);
    closeDrawer();
  };

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
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <main id="MainContent" className="cart-page" role="main" tabIndex={-1}>
        <div>
          <div className="cart-items page-width section-template--20346292535348__cart-items-padding cart_main_page apl-section-main-cart-items">
            
            <div className="title-wrapper-with-link title-wrapper-with-link--note">
              <h1 className="title title--primary">ตะกร้าสินค้าของคุณ</h1>
              <div className="cart-note-wrapper">
                <a href="/" className="underlined-link">
                  เลือกซื้อต่อ <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>

            <form action="/cart" className="cart__contents critical-hidden" method="post" id="cart">
              <div className="cart__items apl-section-cart" id="main-cart-items" data-id="template--20346292535348__cart-items">
                <div className="js-contents">
                  <table className="cart-items">
                    <thead>
                      <tr>
                        <th className="caption-with-letter-spacing" colSpan={2} scope="col">สินค้า</th>
                        <th className="cart-items__heading--quantity caption-with-letter-spacing" colSpan={1} scope="col">จำนวน</th>
                        <th className="right caption-with-letter-spacing" colSpan={1} scope="col">ยอดรวม</th>
                      </tr>
                    </thead>

                    <tbody>
                      {CART_ITEMS.map((item, index) => (
                        <React.Fragment key={item.id}>
                          <tr className="cart-item apl-section-cart-item" id={`CartItem-${index + 1}`}>
                            <td className="cart-item__media">
                              <div className="cart-item__image-container gradient global-media-settings">
                                <a href="#">
                                  <img src={item.image} className="cart-item__image apl-section-cart-item-image" alt={item.title} loading="eager" width="150" height="150" aria-hidden="true" />
                                </a>
                              </div>
                            </td>

                            <td className="cart-item__details">
                              <a href="#" className="cart-item__name h4 break apl-section-product-title">{item.title}</a>
                              <p className="item-sku-barcode-message">
                                <span> SKU: {item.sku} </span>
                                <span> Barcode: {item.barcode}</span>
                              </p>
                              <span className="cart-item__details-options"></span>
                              <dl></dl>
                              <p className="product-option"></p>
                              <ul className="discounts list-unstyled" aria-label="Discount apl-section-cart-discounts"></ul>
                            </td>

                            <td className="cart-item__quantity">
                              <div className="quantity-popover">
                                <div className="cart-item__quantity-wrapper quantity-popover-wrapper">
                                  <div className="quantity-popover-container">
                                    <button 
                                      className="quantity__button no-js-hidden" 
                                      name="minus" 
                                      type="button" 
                                      onClick={() => handleQuantityChange(item.id, -1)}
                                      disabled={quantities[item.id] <= 1}
                                    ><svg width="8" height="3" viewBox="0 0 8 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2.51562V0.382812H0V2.51562H8Z" fill="#000000" fillOpacity="0.75"></path>
              </svg></button>
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
                                    <button 
                                      className="quantity__button no-js-hidden" 
                                      name="plus" 
                                      type="button" 
                                      onClick={() => handleQuantityChange(item.id, 1)}
                                    ><svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.99219 5.44531H9.21875V3.42969H5.99219V0.242188H4V3.42969H0.78125V5.44531H4V8.64062H5.99219V5.44531Z" fill="#000000" fillOpacity="0.75"></path>
              </svg></button>
                                  </div>
                                  <div className="cart-remove-button" id={`Remove-${index + 1}`}>
                                    <a href="#" className="button button--tertiary" aria-label="Remove">
                                      <span>ลบ </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td className="cart-item__totals right">
                              <div className="cart-item__price-wrapper apl-section-product-price">
                                <div className="product_tag_display_cart"></div>
                                <span className="price price--end">
                                  <span className="apl-section-product-price-original">฿{formatPrice(item.price * quantities[item.id])} {item.currency}</span>
                                </span>
                              </div>
                            </td>
                          </tr>
                          
                          <tr className="cart_itemadd cart_itemadd--cto">
                            <td className="empty-div-desktop"></td>
                            <td colSpan={3} className="set_applecare-img-info cart_itemadd_details--cto">
                              <div className="cart-delivery-methods cart-delivery-methods--cto-product cart-item-cto-border-bottom">
                                <div className="pickup-availability product__pickup-availabilities no-js-hidden apl-section-pickup is-overridden">
                                  <div className="pickup-availability-preview">
                                    <div className="pickup-availability-info">
                                      <p className="caption-large apl-section-pickup-title">
                                        <b>Pickup</b>
                                      </p>
                                      <div className="js-pickup-availability-info">
                                        <div className="pickup-availability-info-details apl-section-pickup-availability">
                                          <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 16 14" fill="none"><path d="M12.7742 13.3755H3.05191C2.2285 13.3755 1.55871 12.7056 1.55871 11.8822L1.55859 5.46973H2.29228V11.8822C2.29228 12.301 2.63304 12.6417 3.0518 12.6417H12.7743C13.1931 12.6417 13.5338 12.3011 13.5338 11.8822L13.534 5.46973H14.2676V11.8822C14.2676 12.7056 13.5977 13.3755 12.7743 13.3755H12.7742Z" fill="#1D1D1F"></path><path d="M6.19597 6.04216C5.04487 6.04216 4.1084 5.10557 4.1084 3.95459H4.84209C4.84209 4.70103 5.44941 5.30836 6.19597 5.30836C6.94253 5.30836 7.54985 4.70103 7.54985 3.95459H8.28354C8.28354 5.10557 7.34707 6.04216 6.19597 6.04216Z" fill="#1D1D1F"></path><path d="M9.63738 6.04397C8.48628 6.04397 7.5498 5.10738 7.5498 3.95639V2.43213H8.28349V3.95639C8.28349 4.70284 8.89082 5.31016 9.63738 5.31016C10.3839 5.31016 10.9913 4.70284 10.9913 3.95639H11.7249C11.7249 5.10738 10.7885 6.04397 9.63738 6.04397Z" fill="#1D1D1F"></path><path d="M13.0793 6.04286C11.9282 6.04286 10.9917 5.10627 10.9917 3.95529V2.43102H11.7254V3.95529C11.7254 4.70173 12.3327 5.30906 13.0793 5.30906C13.8258 5.30906 14.4333 4.70173 14.4333 3.95529V2.54174L13.231 0.73392H2.60295L1.40068 2.54163V3.95517C1.40068 4.70162 2.00812 5.30894 2.75468 5.30894C3.50124 5.30894 4.10856 4.70162 4.10856 3.95517V2.43091H4.84225V3.95517C4.84225 5.10627 3.90578 6.04275 2.75468 6.04275C1.60347 6.04275 0.666992 5.10616 0.666992 3.95517V2.43091C0.666992 2.35862 0.688332 2.2879 0.728328 2.22768L2.10075 0.16379C2.16868 0.0614505 2.28342 0 2.40621 0H13.4275C13.5503 0 13.6651 0.0614477 13.733 0.16379L15.1057 2.22779C15.1458 2.28802 15.167 2.35874 15.167 2.43102V3.95529C15.167 5.10627 14.2305 6.04286 13.0793 6.04286H13.0793Z" fill="#1D1D1F"></path><path d="M1.0332 2.06055H14.7997V2.79435H1.0332V2.06055Z" fill="#1D1D1F"></path><rect x="5.4806" y="8.38246" width="4.63549" height="4.63549" rx="0.534864" stroke="black" stroke-width="0.713153"></rect></svg>
                                          <p className="caption unavailable apl-section-pickup-availability-unavailable">
                                            <span className="pickup-availability__unavailable-override">รับที่สาขา</span>
                                          </p>
                                          <button 
                                            type="button" 
                                            className="js-my-store-locator-drawer-btn pickup-availability-button link link--text apl-section-pickup-availability-cta"
                                            onClick={openDrawer}
                                          >
                                            <span className="underlined-text">{isLoadingStore ? 'กำลังโหลด...' : (selectedStoreName || 'เลือกสาขา')}</span>
                                            <i className="fa-solid fa-chevron-right cto-chevron" style={{ marginLeft: '4px' }}></i>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 12" fill="none">
    <path d="M1.89353 9.84661C1.43772 9.84661 1.09151 9.72831 0.854906 9.49171C0.618302 9.2551 0.5 8.9089 0.5 8.45308V1.7464C0.5 1.28711 0.618302 0.939166 0.854906 0.702562C1.09151 0.465958 1.43772 0.347656 1.89353 0.347656H9.40919C9.865 0.347656 10.2112 0.467698 10.4478 0.707782C10.6844 0.947865 10.8027 1.29407 10.8027 1.7464V9.02198L10.1608 9.39776V1.75684C10.1608 1.50284 10.0946 1.31321 9.96242 1.18795C9.8302 1.05921 9.64057 0.994838 9.39353 0.994838H1.90397C1.65344 0.994838 1.46381 1.05921 1.33507 1.18795C1.20633 1.31321 1.14196 1.50284 1.14196 1.75684V8.43743C1.14196 8.69143 1.20633 8.8828 1.33507 9.01154C1.46381 9.14028 1.65344 9.20465 1.90397 9.20465H2.89562V9.84661H1.89353ZM10.4322 3.88628V3.24432H12.2902C12.5303 3.24432 12.7356 3.27737 12.9061 3.34348C13.08 3.40959 13.2383 3.51919 13.381 3.67229L15.1555 5.67647C15.2843 5.8226 15.373 5.967 15.4217 6.10966C15.4739 6.25232 15.5 6.43499 15.5 6.65768V8.45308C15.5 8.9089 15.3817 9.2551 15.1451 9.49171C14.9085 9.72831 14.5623 9.84661 14.1065 9.84661H13.3601V9.20465H14.0908C14.3413 9.20465 14.531 9.14028 14.6597 9.01154C14.7919 8.8828 14.858 8.69143 14.858 8.43743V6.64202C14.858 6.54111 14.8389 6.44021 14.8006 6.33931C14.7624 6.23492 14.7067 6.14098 14.6336 6.05747L12.9426 4.1629C12.8452 4.05503 12.7408 3.98196 12.6294 3.94369C12.5181 3.90542 12.3876 3.88628 12.238 3.88628H10.4322ZM11.7422 6.64202C11.6239 6.64202 11.5282 6.60722 11.4551 6.53764C11.3855 6.46805 11.3507 6.3741 11.3507 6.2558V4.41864H12.1284C12.2189 4.41864 12.2989 4.43777 12.3685 4.47605C12.4381 4.51084 12.5007 4.55782 12.5564 4.61697L14.1117 6.3654C14.15 6.40716 14.1795 6.44891 14.2004 6.49066C14.2248 6.53242 14.237 6.58287 14.237 6.64202H11.7422ZM4.27349 11.3341C3.95338 11.3341 3.6611 11.2558 3.39666 11.0992C3.1357 10.9426 2.92693 10.7321 2.77035 10.4677C2.61378 10.2067 2.53549 9.9162 2.53549 9.59609C2.53549 9.27598 2.61378 8.98544 2.77035 8.72448C2.92693 8.46004 3.1357 8.25128 3.39666 8.09818C3.6611 7.9416 3.95338 7.86331 4.27349 7.86331C4.5936 7.86331 4.88413 7.9416 5.14509 8.09818C5.40605 8.25128 5.61482 8.46004 5.7714 8.72448C5.92798 8.98544 6.00626 9.27598 6.00626 9.59609C6.00626 9.9162 5.92798 10.2067 5.7714 10.4677C5.61482 10.7321 5.40605 10.9426 5.14509 11.0992C4.88413 11.2558 4.5936 11.3341 4.27349 11.3341ZM4.27349 10.7756C4.48921 10.7756 4.6858 10.7217 4.86326 10.6138C5.04419 10.5095 5.18685 10.3668 5.29123 10.1859C5.39562 10.0084 5.44781 9.81182 5.44781 9.59609C5.44781 9.37688 5.39562 9.17855 5.29123 9.0011C5.18685 8.82365 5.04419 8.68273 4.86326 8.57835C4.6858 8.47048 4.48921 8.41655 4.27349 8.41655C4.05428 8.41655 3.85595 8.47048 3.6785 8.57835C3.50104 8.68273 3.35839 8.82365 3.25052 9.0011C3.14266 9.17855 3.08873 9.37688 3.08873 9.59609C3.08873 9.81182 3.14266 10.0084 3.25052 10.1859C3.35839 10.3668 3.50104 10.5095 3.6785 10.6138C3.85595 10.7217 4.05428 10.7756 4.27349 10.7756ZM11.8622 11.3341C11.5456 11.3341 11.255 11.2558 10.9906 11.0992C10.7262 10.9426 10.5157 10.7321 10.3591 10.4677C10.2025 10.2067 10.1242 9.9162 10.1242 9.59609C10.1242 9.27598 10.2025 8.98544 10.3591 8.72448C10.5157 8.46004 10.7262 8.25128 10.9906 8.09818C11.255 7.9416 11.5456 7.86331 11.8622 7.86331C12.1823 7.86331 12.4729 7.9416 12.7338 8.09818C12.9983 8.25128 13.207 8.46004 13.3601 8.72448C13.5167 8.98544 13.595 9.27598 13.595 9.59609C13.595 9.9162 13.5167 10.2067 13.3601 10.4677C13.207 10.7321 12.9983 10.9426 12.7338 11.0992C12.4729 11.2558 12.1823 11.3341 11.8622 11.3341ZM11.8622 10.7756C12.0814 10.7756 12.2797 10.7217 12.4572 10.6138C12.6347 10.5095 12.7756 10.3668 12.88 10.1859C12.9843 10.0084 13.0365 9.81182 13.0365 9.59609C13.0365 9.37688 12.9826 9.17855 12.8747 9.0011C12.7704 8.82365 12.6294 8.68273 12.452 8.57835C12.2745 8.47048 12.0779 8.41655 11.8622 8.41655C11.6465 8.41655 11.4499 8.47048 11.2724 8.57835C11.095 8.68273 10.9523 8.82365 10.8445 9.0011C10.7366 9.17855 10.6827 9.37688 10.6827 9.59609C10.6827 9.81182 10.7366 10.0084 10.8445 10.1859C10.9523 10.3668 11.095 10.5095 11.2724 10.6138C11.4499 10.7217 11.6465 10.7756 11.8622 10.7756ZM5.70355 9.84661V9.20465H10.4896V9.84661H5.70355Z" fill="black"></path>
  </svg>
                                  </div>
                                  <span className="cart-delivery-label">จัดส่ง <span>1-2 วัน</span></span>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </React.Fragment>
                      ))}

                      <tr className="cart_itemadd cart_itemadd--cto cart_itemadd_details--cto-container">
                        <td className="empty-div-desktop"></td>
                        <td colSpan={3} className="set_applecare-img-info cart_itemadd_details--cto">
                          <h3 className="cart-item-cto-heading apl-section-cart-item-heading">บริการเพิ่มเติม</h3>
                        </td>
                      </tr>

                      {ADDITIONAL_SERVICES.map(service => (
                        <tr className="cart_itemadd apl-section-cart-applecare" key={service.id}>
                          <td className="empty-div-desktop"></td>
                          <td colSpan={3} className="set_applecare-img-info">
                            <div className="applecare-products-on-cart">
                              <div className="one-not-added applecare-item-img">
                                <a className="care-img apl-section-cart-applecare-image" href="#">
                                  <img src={service.image} loading="lazy" className="add-on-image-cart" width="100" height="100" alt={service.title} />
                                </a>
                              </div>
                              <div className="apple-care-card-two two-not-added applecare-item-title">
                                <p className="apple-care-card-title apl-section-cart-applecare-title">
                                  {service.title} {service.price ? `${formatPrice(service.price)} ${service.currency}` : ''}
                                </p>
                                {service.description && (
                                  <p className="spandesc">
                                    {service.description}
                                  </p>
                                )}
                                <div className="learnmore apl-section-cart-applecare-cta">
                                  <span className="seedkit-component-standalone">
                                    <a className="ac-modal-trigger icon apl-section-applecare-learn" href="#">
                                      <span className="read-more-text">อ่านเพิ่มเติม</span>
                                      <i className="fa-solid fa-chevron-right"></i>
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="three-not-added">&nbsp;</div>
                              <div className="four-not-added">
                                <button type="button" className="care-btn add-cart-apple-care btn product-form__submit apl-section-cart-applecare-add-remove">
                                  {service.actionText} <i className="fa-solid fa-chevron-right"></i>
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

        </div>
      </main>

      {isDrawerOpen && (
        <>
            <StoreLocatorDrawer
              selectedStoreName={selectedStoreName}
              onClose={closeDrawer}
              onSelect={handleStoreSelect}
            />
        </>
      )}
    </>
  );
};