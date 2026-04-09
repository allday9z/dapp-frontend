export interface AttachModuleSliderItem {
  id: string;
  /** Product image URL — renders directly as <img src> */
  imageSrc?: string;
  /** Badge label — if omitted and new_price is set, auto-shows "ราคาพิเศษ" */
  badge?: string;
  /** Badge color — default #ff6900 orange; auto-set to #008900 when new_price exists */
  badgeColor?: string;
  /** Product name */
  name: string;
  /**
   * Info-mode subtitle (e.g. "AppleCare+ เริ่มต้น ฿3,200 สำหรับ 3 ปี").
   * When provided → renders info card layout (subtitle + description, no price/CTA).
   */
  subtitle?: string;
  /**
   * Info-mode description text below subtitle.
   */
  description?: string;
  /**
   * Price string (e.g. "฿23,500 THB").
   * When new_price is also set → rendered with strikethrough as original price.
   */
  price?: string;
  /**
   * Discounted price (e.g. "฿15,200 THB").
   * When provided → triggers discount layout automatically.
   */
  new_price?: string;
  /**
   * Discount amount label (e.g. "-฿8,300").
   * Shown in red next to the strikethrough price.
   */
  discount?: string;
  /** Installment / secondary price line */
  installment?: string;
  /** CTA button label — default "ซื้อเลย" */
  ctaLabel?: string;
  /** CTA button href */
  ctaHref?: string;
}

export interface AttachModuleSliderProps {
  /** Section heading */
  title: string;
  /** Heading alignment — default "center" */
  titleAlign?: "left" | "center";
  /** Number of slides visible at once — default 3 */
  slidesToShow?: number;
  items: AttachModuleSliderItem[];
  className?: string;
}
