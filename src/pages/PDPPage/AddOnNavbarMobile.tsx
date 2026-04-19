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
      <div className="addon-navbar-mobile__wrapper">
        <div className="addon-navbar-mobile__header">
          <div className="addon-navbar-mobile__left">
            <div className="addon-navbar-mobile__name">{productName}</div>
          </div>
          <div className="addon-navbar-mobile__right">
            <div className="addon-navbar-mobile__pricing">
              <span className="addon-navbar-mobile__price">{price}</span>
              <span className="addon-navbar-mobile__sep"> or </span>
              <button
                className="addon-navbar-mobile__monthly"
                onClick={onMonthlyClick}
                aria-label="ดูข้อมูลการผ่อนชำระ"
              >
                {monthly}/mo. for {monthlyTerm} mo. ›
              </button>
            </div>
          </div>
        </div>
        <div className="addon-navbar-mobile__delivery">
          <div className="addon-navbar-mobile__delivery-item">
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
              <rect x="0.5" y="0.5" width="10" height="9" rx="0.5" stroke="#1d1d1f" strokeWidth="0.9"/>
              <path d="M10.5 3.5H13L15.5 6.5V10.5H10.5V3.5Z" stroke="#1d1d1f" strokeWidth="0.9"/>
              <circle cx="3.5" cy="11.5" r="1.5" stroke="#1d1d1f" strokeWidth="0.9"/>
              <circle cx="12.5" cy="11.5" r="1.5" stroke="#1d1d1f" strokeWidth="0.9"/>
            </svg>
            <span>จัดส่ง <strong>1–3 วัน</strong></span>
          </div>
          <div className="addon-navbar-mobile__delivery-item">
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="14" height="10" rx="1" stroke="#1d1d1f" strokeWidth="0.9"/>
              <path d="M4 7h8M8 4v6" stroke="#1d1d1f" strokeWidth="0.9" strokeLinecap="round"/>
            </svg>
            <span>รับที่ร้าน <strong>ตรวจสอบสาขา</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};
