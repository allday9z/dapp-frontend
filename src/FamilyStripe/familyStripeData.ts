export interface FamilyStripeItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  badge?: string;
  name: string;
  priceLabel?: string;
  href?: string;
}

// ─── MacBook Air family stripe ───────────────────────────────────────────────
// Data source: JSON (src/data/products/macbook-air.json)
// Will be replaced by API call — keep this as fallback/static seed
export const macbookAirFamilyItems: FamilyStripeItem[] = [
  {
    id: "mba-15-m5",
    imageSrc: "/product/family-stripe/macbook-air-15-m2.png",
    imageAlt: "MacBook Air 15-inch M5",
    badge: "NEW",
    name: "MacBook Air 15 นิ้ว\nชิป M5",
    priceLabel: "เริ่มต้น ฿44,900",
    href: "/collections/macbook-air",
  },
  {
    id: "mba-13-m5",
    imageSrc: "/product/family-stripe/macbook-air-13-m2.png",
    imageAlt: "MacBook Air 13-inch M5",
    badge: "NEW",
    name: "MacBook Air 13 นิ้ว\nชิป M5",
    priceLabel: "เริ่มต้น ฿22,500",
    href: "/collections/macbook-air",
  },
  {
    id: "mbp-14-m4",
    imageSrc: "/product/family-stripe/macbook-pro-14-m1.png",
    imageAlt: "MacBook Pro 14-inch M4",
    badge: "NEW",
    name: "MacBook Pro 14 นิ้ว\nชิป M4",
    priceLabel: "เริ่มต้น ฿69,900",
    href: "/collections/macbook-pro",
  },
  {
    id: "mbp-16-m4",
    imageSrc: "/product/family-stripe/macbook-pro-16-m1.png",
    imageAlt: "MacBook Pro 16-inch M4",
    badge: "NEW",
    name: "MacBook Pro 16 นิ้ว\nชิป M4",
    priceLabel: "เริ่มต้น ฿89,900",
    href: "/collections/macbook-pro",
  },
  {
    id: "mac-accessories",
    imageSrc: "/product/family-stripe/mac-accessories.png",
    imageAlt: "Mac Accessories",
    name: "Mac Accessories",
    href: "/pages/mac-accessories",
  },
];

// ─── MacBook Pro family stripe ───────────────────────────────────────────────
export const macbookProFamilyItems: FamilyStripeItem[] = [
  {
    id: "mbp-14-m4",
    imageSrc: "/product/family-stripe/macbook-pro-14-m1.png",
    imageAlt: "MacBook Pro 14-inch M4",
    badge: "NEW",
    name: "MacBook Pro 14 นิ้ว\nชิป M4",
    priceLabel: "เริ่มต้น ฿69,900",
    href: "/collections/macbook-pro",
  },
  {
    id: "mbp-16-m4",
    imageSrc: "/product/family-stripe/macbook-pro-16-m1.png",
    imageAlt: "MacBook Pro 16-inch M4",
    badge: "NEW",
    name: "MacBook Pro 16 นิ้ว\nชิป M4",
    priceLabel: "เริ่มต้น ฿89,900",
    href: "/collections/macbook-pro",
  },
  {
    id: "mba-13-m5",
    imageSrc: "/product/family-stripe/macbook-air-13-m2.png",
    imageAlt: "MacBook Air 13-inch M5",
    badge: "NEW",
    name: "MacBook Air 13 นิ้ว\nชิป M5",
    priceLabel: "เริ่มต้น ฿22,500",
    href: "/collections/macbook-air",
  },
  {
    id: "mba-15-m5",
    imageSrc: "/product/family-stripe/macbook-air-15-m2.png",
    imageAlt: "MacBook Air 15-inch M5",
    badge: "NEW",
    name: "MacBook Air 15 นิ้ว\nชิป M5",
    priceLabel: "เริ่มต้น ฿44,900",
    href: "/collections/macbook-air",
  },
  {
    id: "mac-accessories",
    imageSrc: "/product/family-stripe/mac-accessories.png",
    imageAlt: "Mac Accessories",
    name: "Mac Accessories",
    href: "/pages/mac-accessories",
  },
];
