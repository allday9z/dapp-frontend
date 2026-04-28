import React from 'react';
import './SearchDrawer.css'

export default function SearchDrawerMobile({ onClose }: { onClose?: () => void }) {
  const quickLinks = [
    { label: 'Find a Store', href: '/pages/store-locator' },
    { label: 'AirPods', href: '/collections/airpods-3rd-gen' },
    { label: 'iPhone 17', href: '/collections/iphone-17' },
    { label: 'Partner Trade-in', href: '/pages/trade-in' },
    { label: 'Partner Business', href: '/pages/partner-business-account-terms' },
  ];

  const ArrowRightIcon = () => (
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 7.63221C12 7.71991 11.9825 7.80177 11.9474 7.87778C11.9123 7.94794 11.8626 8.01518 11.7983 8.0795L4.79076 14.745C4.67382 14.8678 4.52765 14.9291 4.35224 14.9291C4.247 14.9291 4.1476 14.9028 4.05405 14.8502C3.9605 14.7976 3.88741 14.7245 3.83479 14.631C3.78217 14.5433 3.75586 14.4409 3.75586 14.324C3.75586 14.1661 3.81141 14.0258 3.9225 13.903L10.5178 7.63221L3.9225 1.3614C3.81141 1.23861 3.75586 1.09829 3.75586 0.940421C3.75586 0.823483 3.78217 0.721162 3.83479 0.633458C3.88741 0.539908 3.9605 0.466822 4.05405 0.414199C4.1476 0.361577 4.247 0.335266 4.35224 0.335266C4.52765 0.335266 4.67382 0.393735 4.79076 0.510673L11.7983 7.18492C11.8626 7.24924 11.9123 7.3194 11.9474 7.39541C11.9825 7.46557 12 7.5445 12 7.63221Z" fill="black" />
    </svg>
  );

  return (
    <div className="search-modal modal__content gradient" role="dialog" aria-modal="true" aria-label="Search">
      <div className="modal-overlay" />
      <div className="search-modal__content search-modal__content-bottom" tabIndex={-1}>
        <button type="button" onClick={onClose} className="search-modal__close-button modal__close-button link link--text focus-inset" aria-label="Close">
          <svg className="icon icon-close" aria-hidden="true" focusable="false">
            <use href="#icon-close" />
          </svg>
        </button>
        <div className="search-modal__form" data-loading-text="Loading...">
          <form action="/search" method="get" role="search" className="search search-modal__form">
            <div className="field">
              <input
                className="search__input field__input"
                id="Search-In-Modal"
                type="search"
                name="q"
                defaultValue=""
                placeholder="Search"
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
              <label className="field__label" htmlFor="Search-In-Modal">Search</label>
              <input type="hidden" name="options[prefix]" value="last" />
              <button type="reset" className="reset__button field__button hidden" aria-label="Clear search term">
                <svg className="icon icon-close" aria-hidden="true" focusable="false">
                  <use href="#icon-reset" />
                </svg>
              </button>
              <button className="search__button field__button" aria-label="Search">
                <svg className="icon icon-search" aria-hidden="true" focusable="false">
                  <use href="#icon-search" />
                </svg>
              </button>
            </div>
            <div className="predictive-search predictive-search--header" tabIndex={-1} data-predictive-search="">
            </div>
            <span className="predictive-search-status visually-hidden" role="status" aria-hidden="true" />
          </form>
        </div>
        <div className="search-modal__content__nav search-quick-links">
          <h2 className="search-quick-links__heading">Quick links</h2>
          <ul className="list-unstyled">
            {quickLinks.map((link) => (
              <li key={link.href}>
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
  );
}