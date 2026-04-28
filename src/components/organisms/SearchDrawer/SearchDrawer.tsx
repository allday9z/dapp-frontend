import React from 'react';
import './SearchDrawer.css'

export default function SearchDrawerMobile({ onClose }: { onClose?: () => void }) {
  const quickLinks = [
    { label: 'โปรโมชันประจำเดือน', href: '/collections/airpods-3rd-gen' },
    { label: 'โปรโมชันบัตรเครดิต', href: '/collections/airpods-3rd-gen' },
    { label: 'ค้นหาสาขาใกล้ฉัน', href: '/pages/store-locator' },
    { label: 'เก่าแลกใหม่', href: '/pages/trade-in' },
    { label: 'สำหรับธุรกิจ', href: '/pages/partner-business-account-terms' },
    { label: 'สำหรับการศึกษา', href: '/pages/partner-business-account-terms' },
  ];

  const ArrowRightIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.83836 15L7 14.1616L11.3233 9.83834L7 5.51505L7.83836 4.6767L13 9.83834L7.83836 15Z" fill="#0071E3" />
    </svg>
  );

  return (
    <div className="search-modal modal__content gradient" role="dialog" aria-modal="true" aria-label="Search">
      <div className="modal-overlay" />
      <div className="search-modal__content search-modal__content-bottom" tabIndex={-1}>
        <button type="button" onClick={onClose} className="search-modal__close-button modal__close-button link link--text focus-inset" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 18 17" width="18" height="17"><path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor"></path></svg>
        </button>
        <div className="search-modal__form" data-loading-text="Loading...">
          <form action="/search" method="get" role="search">
            <div className="field" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#888', display: 'flex' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <input
                className="search__input field__input"
                style={{ paddingLeft: '44px' }}
                id="Search-In-Modal"
                type="search"
                name="q"
                defaultValue=""
                placeholder="ค้นหา"
                role="combobox"
                aria-expanded="false"
                aria-owns="predictive-search-results"
                aria-controls="predictive-search-results"
                aria-haspopup="listbox"
                aria-autocomplete="list"
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck="false"
              />
              <label className="field__label" htmlFor="Search-In-Modal" style={{ left: '28px' }}>ค้นหา</label>
              <input type="hidden" name="options[prefix]" value="last" />
            </div>
            <div className="predictive-search predictive-search--header" tabIndex={-1} data-predictive-search="">
            </div>
            <span className="predictive-search-status visually-hidden" role="status" aria-hidden="true" />
          </form>

          <div className="search-modal__content__nav search-quick-links">
            <h2 className="search-quick-links__heading">แนะนำสำหรับคุณ</h2>
            <ul className="list-unstyled">
              {quickLinks.map((link) => (
                <li key={link.href} className="quick-links-uficon">
                  <a href={link.href} className="search-quick-links__link link link--text">
                    {link.label}&nbsp;
                    <ArrowRightIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}