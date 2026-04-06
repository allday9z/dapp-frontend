import type { ReactNode } from "react";

export interface AttachModuleSliderItem {
  id: string;
  /** React node for the product image */
  image?: ReactNode;
  /** Badge label — if omitted and new_price is set, auto-shows "ราคาพิเศษ" */
  badge?: string;
  /** Badge color — default #ff6900 orange; auto-set to #008900 when new_price exists */
  badgeColor?: string;
  /** Product name — fixed 2-line height */
  name: string;
  /**
   * Price string (e.g. "฿23,500 THB").
   * When new_price is also set → rendered with strikethrough as original price.
   */
  price: string;
  /**
   * Discounted price (e.g. "฿15,200 THB").
   * When provided → triggers discount layout automatically.
   */
  new_price?: string;
  /**
   * Discount amount label (e.g. "-฿8,300").
   * Shown in red next to the strikethrough price.
   * If omitted, only the strikethrough price is shown.
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
  /** Section heading — 2-line height reserved */
  title: string;
  items: AttachModuleSliderItem[];
  className?: string;
}
