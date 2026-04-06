// ── Badge ──────────────────────────────────────────────────────
export type BadgeType =
  | 'NEW'
  | 'SALE'
  | 'TRADE-IN'
  | 'PRE-ORDER'
  | 'IN-STORE'
  | 'CYBER MONDAY'
  | string;

// ── Product ────────────────────────────────────────────────────
export interface ProductPrice {
  base: number;
  monthly?: number;
  monthlyTerm?: number;
  currency: 'THB';
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle?: string;
  description?: string;
  badge?: BadgeType;
  price: ProductPrice;
  imageSrc: string;
  imageAlt: string;
  tradeInEligible?: boolean;
  notifyMe?: boolean;
  preOrder?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  detailHref?: string;
  category: string;
}

// ── Banner ─────────────────────────────────────────────────────
export interface BannerSlide {
  id: string;
  src: string;
  href?: string;
  alt: string;
}

// ── LOB Category ───────────────────────────────────────────────
export interface LOBCategory {
  id: string;
  name: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

// ── Navigation ─────────────────────────────────────────────────
export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  items?: NavSubItem[];
}

export interface NavMenu {
  primary: NavItem[];
  secondary: NavItem[];
}

// ── Value Prop ─────────────────────────────────────────────────
export interface ValueProp {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// ── Service Tile ───────────────────────────────────────────────
export interface ServiceTile {
  id: string;
  image: string;
  imageAlt?: string;
  badge?: BadgeType;
  title: string;
  cta: string;
  description: string;
  href?: string;
}

// ── Partner Tile ───────────────────────────────────────────────
export interface PartnerTile {
  id: string;
  logo: string;
  logoAlt: string;
  name: string;
  description: string;
  href?: string;
}

// ── Attach Item ────────────────────────────────────────────────
export interface AttachItem {
  id: string;
  image: string;
  imageAlt?: string;
  name: string;
  price: ProductPrice;
  badge?: BadgeType;
  ctaLabel: string;
  ctaHref?: string;
}

// ── Bento Tile ─────────────────────────────────────────────────
export interface BentoTile {
  id: string;
  imageSrc: string;
  imageAlt: string;
  badge?: BadgeType;
  headline: string;
  subline?: string;
  ctaLabel: string;
  ctaHref: string;
  size: 'large' | 'small';
  theme?: 'light' | 'dark';
}

// ── Partner Tile (text stripe) ─────────────────────────────────
export interface PartnerTextTile {
  id: string;
  badge: string;
  accentColor: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref?: string;
}

// ── Value Prop ─────────────────────────────────────────────────
export interface ValuePropItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}

// ── Service Tile (in-store) ────────────────────────────────────
export interface ServiceTileItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  badge?: BadgeType;
  title: string;
  cta: string;
  description: string;
  href?: string;
}
