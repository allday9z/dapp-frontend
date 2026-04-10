// ── Shopify Storefront Product Types ──────────────────────────────────────
// Based on Shopify /products/:handle.json response format
// Used by Apple Partner (iStudio) store API

export interface ShopifyQuantityRule {
  min: number;
  max: number | null;
  increment: number;
}

export interface ShopifyVariant {
  id: number;
  title: string;
  option1: string | null;
  option2: string | null;
  option3: string | null;
  sku: string;
  requires_shipping: boolean;
  taxable: boolean;
  featured_image: null | { src: string; alt: string };
  available: boolean;
  name: string;
  public_title: string | null;
  options: string[];
  /** Price in satang (1/100 of THB) — divide by 100 to get ฿ */
  price: number;
  weight: number;
  compare_at_price: number | null;
  inventory_management: string;
  barcode: string;
  quantity_rule: ShopifyQuantityRule;
  quantity_price_breaks: unknown[];
  requires_selling_plan: boolean;
  selling_plan_allocations: unknown[];
}

export interface ShopifyPreviewImage {
  aspect_ratio: number;
  height: number;
  width: number;
  src: string;
}

export type ShopifyMediaType = "image" | "video" | "external_video" | "model";

export interface ShopifyVideoSource {
  format: "mp4" | "m3u8";
  height: number;
  mime_type: string;
  url: string;
  width: number;
}

export interface ShopifyMedia {
  alt: string | null;
  id: number;
  position: number;
  preview_image: ShopifyPreviewImage;
  aspect_ratio: number;
  media_type: ShopifyMediaType;
  src: string;
  height: number;
  width: number;
  // Video-only fields
  duration?: number;
  sources?: ShopifyVideoSource[];
}

export interface ShopifyOption {
  name: string;
  position: number;
  values: string[];
}

export interface ShopifyProduct {
  id: number;
  title: string;
  handle: string;
  description: string;
  published_at: string;
  created_at: string;
  vendor: string;
  type: string;
  tags: string[];
  /** Price in satang (5190000 = ฿51,900) */
  price: number;
  price_min: number;
  price_max: number;
  available: boolean;
  price_varies: boolean;
  compare_at_price: number | null;
  compare_at_price_min: number;
  compare_at_price_max: number;
  compare_at_price_varies: boolean;
  variants: ShopifyVariant[];
  /** Legacy image array — CDN URLs with `//` prefix, prepend `https:` */
  images: string[];
  featured_image: string;
  options: ShopifyOption[];
  url: string;
  media: ShopifyMedia[];
  requires_selling_plan: boolean;
  selling_plan_groups: unknown[];
}

// ── Utility helpers ────────────────────────────────────────────────────────

/** Convert Shopify price (satang) → formatted Thai Baht string */
export function formatThaiPrice(satang: number): string {
  const baht = satang / 100;
  return `฿${baht.toLocaleString("th-TH")}`;
}

/** Normalize Shopify CDN URL — adds `https:` if missing */
export function normalizeShopifySrc(src: string): string {
  if (src.startsWith("//")) return `https:${src}`;
  return src;
}
