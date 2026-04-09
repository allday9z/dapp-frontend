export interface FamilyStripeItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  badge?: string;
  badgeColor?: "new" | "sale" | "default";
  name: string;
  priceLabel?: string;
  href?: string;
}

export const macCollectionFamilyItems: FamilyStripeItem[] = [
  {
    id: "macbook-air-13-m5",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/AMZ_Family-Stripe_MacBook_Pro_Neo_A18__en-US.avif?inline=true",
    imageAlt: "MacBook Neo",
    badge: "ใหม่",
    badgeColor: "new",
    name: "MacBook Neo",
    priceLabel: "เริ่มต้น ฿19,900 THB",
    href: "/collections/macbook-air",
  },
  {
    id: "macbook-air-13",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/AMZ_FamilyStripe_MacBook_Air_13_in_M4__en-US%20(1).avif?inline=true",
    imageAlt: "13-inch MacBook Air",
    badge: "ใหม่",
    badgeColor: "new",
    name: "13-inch MacBook Air M5",
    priceLabel: "เริ่มต้น ฿36,900 THB",
    href: "/collections/macbook-air",
  },
  {
    id: "macbook-air-15",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/AMZ_FamilyStripe_MacBook_Air_15_in_M4__en-US.avif?inline=true",
    imageAlt: "15-inch MacBook Air",
    badge: "ใหม่",
    badgeColor: "new",
    name: "15-inch MacBook Air M5",
    priceLabel: "เริ่มต้น ฿44,900 THB",
    href: "/collections/macbook-air",
  },
  {
    id: "macbook-pro-m5",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/Family_Stripe_MacBook_Pro_14_in_M3_c88141f3-0e6d-4193-96f6-2ff5e01238ca.avif?inline=true",
    imageAlt: "MacBook Pro M5",
    name: "MacBook Pro M5",
    priceLabel: "เริ่มต้น ฿56,900 THB",
    href: "/collections/macbook-pro",
  },
    {
    id: "macbook-pro-m5",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/Family_Stripe_MacBook_Pro_14_in_M3_c88141f3-0e6d-4193-96f6-2ff5e01238ca.avif?inline=true",
    imageAlt: "MacBook Pro M5",
    name: "MacBook Pro M4",
    priceLabel: "เริ่มต้น ฿54,900 THB",
    href: "/collections/macbook-pro",
  },
  {
    id: "macbook-pro-m3",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/Family_Stripe_MacBook_Pro_14_in_M3_c88141f3-0e6d-4193-96f6-2ff5e01238ca.avif?inline=true",
    imageAlt: "MacBook Pro M3",
    name: "MacBook Pro M3",
    priceLabel: "เริ่มต้น ฿48,900 THB",
    href: "/collections/macbook-pro",
  },
  {
    id: "macbook-neo",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/AMZ_Family-Stripe_iMac_M4_2-Port__en-US.avif?inline=true",
    imageAlt: "MacBook Neo",
    name: "24-inch iMac with Retina 4.5K display M4",
    priceLabel: "เริ่มต้น ฿44,900 THB",
    href: "/collections/macbook",
  },
  {
    id: "mac-mini",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/LOB_Mac_mini_with_M4_Tile__en-US.webp?inline=true",
    imageAlt: "Mac mini",
    name: "Mac mini (M4)",
    priceLabel: "เริ่มต้น ฿20,900 THB",
    href: "#",
  },
  {
    id: "studio-display",
    imageSrc: "/image-1110.png",
    imageAlt: "Studio Display",
    name: "Studio Display",
    priceLabel: "เริ่มต้น ฿52,900 THB",
    href: "#",
  },
  {
    id: "mac-accessories",
    imageSrc: "/product/family-stripe/mac-accessories.png",
    imageAlt: "Mac Accessories",
    name: "อุปกรณ์เสริม Mac",
    priceLabel: "เริ่มต้น ฿790 THB",
    href: "#",
  },
];

// ─── MacBook Air family stripe ───────────────────────────────────────────────
// Data source: JSON (src/data/products/macbook.json)
// Will be replaced by API call — keep this as fallback/static seed
export const macbookAirFamilyItems: FamilyStripeItem[] = [
  {
    id: "mba-15-m5",
    imageSrc: "/product/family-stripe/macbook-air-15-m2.png",
    imageAlt: "MacBook Air 15-inch M5",
    badge: "ใหม่",
    badgeColor: "new",
    name: "MacBook Air 15 นิ้ว\nชิป M5",
    priceLabel: "เริ่มต้น ฿44,900",
    href: "/collections/macbook-air",
  },
  {
    id: "mba-13-m5",
    imageSrc: "/product/family-stripe/macbook-air-13-m2.png",
    imageAlt: "MacBook Air 13-inch M5",
    badge: "ใหม่",
    badgeColor: "new",
    name: "MacBook Air 13 นิ้ว\nชิป M5",
    priceLabel: "เริ่มต้น ฿22,500",
    href: "/collections/macbook-air",
  },
  {
    id: "mbp-14-m4",
    imageSrc: "/product/family-stripe/macbook-pro-14-m1.png",
    imageAlt: "MacBook Pro 14-inch M4",
    badge: "ใหม่",
    badgeColor: "new",
    name: "MacBook Pro 14 นิ้ว\nชิป M4",
    priceLabel: "เริ่มต้น ฿69,900",
    href: "/collections/macbook-pro",
  },
  {
    id: "mbp-16-m4",
    imageSrc: "/product/family-stripe/macbook-pro-16-m1.png",
    imageAlt: "MacBook Pro 16-inch M4",
    badge: "ใหม่",
    badgeColor: "new",
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
    badge: "ใหม่",
    badgeColor: "new",
    name: "MacBook Pro 14 นิ้ว\nชิป M4",
    priceLabel: "เริ่มต้น ฿69,900",
    href: "/collections/macbook-pro",
  },
  {
    id: "mbp-16-m4",
    imageSrc: "/product/family-stripe/macbook-pro-16-m1.png",
    imageAlt: "MacBook Pro 16-inch M4",
    badge: "ใหม่",
    badgeColor: "new",
    name: "MacBook Pro 16 นิ้ว\nชิป M4",
    priceLabel: "เริ่มต้น ฿89,900",
    href: "/collections/macbook-pro",
  },
  {
    id: "mba-13-m5",
    imageSrc: "/product/family-stripe/macbook-air-13-m2.png",
    imageAlt: "MacBook Air 13-inch M5",
    badge: "ใหม่",
    badgeColor: "new",
    name: "MacBook Air 13 นิ้ว\nชิป M5",
    priceLabel: "เริ่มต้น ฿22,500",
    href: "/collections/macbook-air",
  },
  {
    id: "mba-15-m5",
    imageSrc: "/product/family-stripe/macbook-air-15-m2.png",
    imageAlt: "MacBook Air 15-inch M5",
    badge: "ใหม่",
    badgeColor: "new",
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
