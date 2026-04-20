import "./AddOnNavbarMobile.css";

interface AddOnNavbarMobileProps {
  productName: string;
  price: string;
  monthly: string;
  monthlyTerm: number;
  onMonthlyClick?: () => void;
}

export const AddOnNavbarMobile = ({
  productName,
  price,
  monthly,
  monthlyTerm,
  onMonthlyClick,
}: AddOnNavbarMobileProps) => {
  return (
    <div className="addon-navbar-mobile">
      {/* Row 1: product name + price + monthly — single line */}
      <div className="addon-navbar-mobile__header">
        <span className="addon-navbar-mobile__name">{productName}</span>
        <span className="addon-navbar-mobile__price">{price}</span>
        <span className="addon-navbar-mobile__sep">or</span>
        <button
          className="addon-navbar-mobile__monthly"
          onClick={onMonthlyClick}
          aria-label="ดูข้อมูลการผ่อนชำระ"
        >
          {monthly}/mo. for {monthlyTerm} mo. ›
        </button>
      </div>

      {/* Row 2: delivery / pickup — horizontal scroll */}
      <div className="addon-navbar-mobile__delivery">
        <div className="addon-navbar-mobile__delivery-item">
          <svg width="14" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
            <path d="M1.89 9.85c-.46 0-.8-.12-1.04-.36C.62 9.26.5 8.91.5 8.45V1.75c0-.46.12-.81.35-1.04C1.09.47 1.44.35 1.89.35h7.52c.46 0 .8.12 1.04.36.24.24.36.59.36 1.04v7.28l-.64.38V1.76c0-.25-.07-.44-.2-.57-.13-.13-.32-.19-.57-.19H1.9c-.25 0-.44.07-.57.19-.13.13-.19.32-.19.57v6.68c0 .25.07.44.19.57.13.13.32.19.57.19h.99v.64H1.89Zm8.54-5.96v-.64h1.86c.24 0 .44.03.61.1.17.07.33.17.48.33l1.77 2c.13.15.22.29.27.43.05.14.08.33.08.55v1.8c0 .45-.12.8-.36 1.04-.24.24-.59.35-1.04.35h-.75v-.64h.73c.25 0 .44-.07.57-.19.13-.13.19-.32.19-.57V6.64c0-.1-.02-.2-.06-.3a.64.64 0 0 0-.17-.28l-1.69-1.9a.52.52 0 0 0-.31-.14 1.43 1.43 0 0 0-.39-.04h-1.8Zm1.31 2.76a.33.33 0 0 1-.29-.1.35.35 0 0 1-.1-.28V4.42h.78a.5.5 0 0 1 .24.06c.07.03.13.08.18.14l1.56 1.75c.04.04.07.08.09.12a.3.3 0 0 1 .04.15h-2.5ZM4.27 11.33a2.15 2.15 0 0 1-1.74-3.47 2.11 2.11 0 0 1 1.74-.87c.32 0 .61.08.87.24.26.16.47.36.63.63.16.26.23.55.23.87s-.08.61-.23.87c-.16.27-.37.47-.63.63-.26.16-.55.24-.87.24Zm0-.56c.22 0 .41-.05.59-.16.18-.1.32-.25.43-.43.1-.18.16-.37.16-.59 0-.22-.05-.41-.16-.59-.1-.18-.25-.32-.43-.43A1.1 1.1 0 0 0 4.27 8.42c-.22 0-.42.05-.6.16-.17.1-.32.25-.43.42-.1.18-.16.37-.16.6 0 .21.05.41.16.59.11.18.25.32.43.43.18.1.37.16.6.16Zm7.59.56a2.15 2.15 0 0 1-1.74-3.47c.26-.26.53-.46.87-.62.26-.16.55-.24.87-.24.32 0 .61.08.87.24.27.16.47.37.63.63.16.26.24.55.24.87s-.08.61-.24.87c-.15.27-.36.47-.63.63-.26.16-.55.24-.87.24Zm0-.56c.22 0 .42-.05.6-.16.17-.1.32-.25.43-.43.1-.18.15-.37.15-.59 0-.22-.05-.42-.15-.6-.1-.17-.25-.32-.43-.42a1.1 1.1 0 0 0-.6-.16c-.21 0-.41.05-.59.16-.18.1-.32.25-.43.42-.1.18-.16.37-.16.6 0 .22.05.41.16.59.1.18.25.32.43.43.18.1.37.16.59.16ZM5.7 9.85v-.64h4.79v.64H5.7Z" fill="#1d1d1f"/>
          </svg>
          <span>จัดส่ง <strong>1–3 วัน</strong></span>
        </div>
        <span className="addon-navbar-mobile__delivery-sep" aria-hidden="true">|</span>
        <div className="addon-navbar-mobile__delivery-item">
          <svg width="14" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
            <path d="M12.77 13.38H3.05a1.49 1.49 0 0 1-1.49-1.49V5.47h.73v6.41c0 .42.34.76.76.76h9.72c.42 0 .76-.34.76-.76V5.47h.73v6.41c0 .82-.67 1.49-1.49 1.49Z" fill="#1D1D1F"/>
            <path d="M6.2 6.04a2.09 2.09 0 0 1-2.09-2.09h.73c0 .75.61 1.35 1.36 1.35.75 0 1.35-.61 1.35-1.35h.73A2.09 2.09 0 0 1 6.2 6.04Z" fill="#1D1D1F"/>
            <path d="M9.64 6.04a2.09 2.09 0 0 1-2.09-2.08V2.43h.73v1.52c0 .75.61 1.35 1.35 1.35.75 0 1.36-.6 1.36-1.35h.73a2.09 2.09 0 0 1-2.09 2.09Z" fill="#1D1D1F"/>
            <path d="M13.08 6.04a2.09 2.09 0 0 1-2.09-2.09V2.43h.73v1.52c0 .75.61 1.36 1.36 1.36.75 0 1.35-.61 1.35-1.36V2.54L13.23.73H2.6L1.4 2.54v1.41c0 .75.61 1.35 1.35 1.35.75 0 1.36-.6 1.36-1.35V2.43h.73v1.52A2.09 2.09 0 0 1 2.75 6.04 2.09 2.09 0 0 1 .67 3.96V2.43c0-.07.02-.14.06-.2L2.1.16A.37.37 0 0 1 2.41 0h11.02c.12 0 .24.06.31.16l1.37 2.06c.04.06.06.13.06.2v1.52a2.09 2.09 0 0 1-2.09 2.09Z" fill="#1D1D1F"/>
            <path d="M1.03 2.06h13.77v.73H1.03V2.06Z" fill="#1D1D1F"/>
            <rect x="5.48" y="8.38" width="4.64" height="4.64" rx=".53" stroke="#000" strokeWidth=".71"/>
          </svg>
          <span>รับที่ร้าน <strong>ตรวจสอบสาขา</strong></span>
        </div>
      </div>
    </div>
  );
};
