export type AppStripeTextTileId =
  | "new"
  | "financing"
  | "cyber-monday"
  | "in-store"
  | "sale"
  | "trade-in";

export interface AppStripeTextTileSegment {
  text: string;
  tone?: "default" | "muted" | "accent";
}

export interface AppStripeTextTileItem {
  id: AppStripeTextTileId;
  badge: string;
  accentColor: string;
  body: AppStripeTextTileSegment[];
}

export const appStripeTextTiles: AppStripeTextTileItem[] = [
  {
    id: "new",
    badge: "NEW",
    accentColor: "var(--badging-new, #bf4800)",
    body: [
      { text: "Partner Delivery and Pickup. " },
      { text: "Pick up your online order at a <Partner> Store", tone: "accent" },
    ],
  },
  {
    id: "financing",
    badge: "FINANCING",
    accentColor: "var(--badging-affordability, #0071bc)",
    body: [
      { text: "Get special financing. " },
      { text: "Pay over time, interest-free with Apple Card", tone: "accent" },
    ],
  },
  {
    id: "cyber-monday",
    badge: "CYBER MONDAY",
    accentColor: "var(--badging-special-offer, #5856d6)",
    body: [
      { text: "Exclusive deals online only. Four days " },
      { text: "August 1–4", tone: "accent" },
    ],
  },
  {
    id: "in-store",
    badge: "IN-STORE",
    accentColor: "var(--color-black, #000000)",
    body: [
      { text: "Learn, create, and be inspired in " },
      { text: "hands-on sessions at your <Partner> Store", tone: "muted" },
    ],
  },
  {
    id: "sale",
    badge: "SALE",
    accentColor: "var(--badging-sale, #008900)",
    body: [
      { text: "Find low everyday prices and buy online ", tone: "accent" },
      { text: "for delivery or in-store pick-up" },
    ],
  },
  {
    id: "trade-in",
    badge: "TRADE-IN",
    accentColor: "var(--badging-affordability, #0071bc)",
    body: [
      { text: "Trade in your device for " },
      { text: "credit toward a new one", tone: "accent" },
    ],
  },
];
