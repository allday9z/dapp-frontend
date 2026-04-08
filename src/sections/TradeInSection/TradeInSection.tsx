import { AttachModuleSlider } from "../../AttachModuleSlider";
import { AppBlockImageMacBookPro } from "../../AppBlockImageMacBookPro/AppBlockImageMacBookPro";
import { AppBlockImageIMac } from "../../AppBlockImageIMac/AppBlockImageIMac";
import { AppBlockImageIPadPro } from "../../AppBlockImageIPadPro/AppBlockImageIPadPro";
import { AppBlockImageIPadAir } from "../../AppBlockImageIPadAir/AppBlockImageIPadAir";
import { AppBlockImageAppleWatchUltraOrangeAlpineLoop } from "../../AppBlockImageAppleWatchUltraOrangeAlpineLoop/AppBlockImageAppleWatchUltraOrangeAlpineLoop";
import { AppBlockImageAirPodsPro2ndGeneration } from "../../AppBlockImageAirPodsPro2ndGeneration/AppBlockImageAirPodsPro2ndGeneration";
import { AppBlockImageIPhone14ProMaxClearCaseWithMagSafe } from "../../AppBlockImageIPhone14ProMaxClearCaseWithMagSafe/AppBlockImageIPhone14ProMaxClearCaseWithMagSafe";
import type { AttachModuleSliderItem } from "../../AttachModuleSlider";

const items: AttachModuleSliderItem[] = [
  {
    id: "macbook-pro-tradein",
    image: <AppBlockImageMacBookPro />,
    badge: "เก่าแลกใหม่",
    badgeColor: "#0071bc",
    name: "iPhone Air",
    price: "฿39,900",
    new_price: "฿29,900",
    discount: "-฿10,000",
    installment: "฿2,990/ด. นาน 10 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/macbook-pro",
  },
  {
    id: "imac-tradein",
    image: <AppBlockImageIMac />,
    badge: "เก่าแลกใหม่",
    badgeColor: "#0071bc",
    name: "iPhone 16",
    price: "฿29,900",
    new_price: "฿26,900",
    discount: "-฿3,000",
    installment: "฿2,690/ด. นาน 10 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/imac",
  },
  {
    id: "iphone-tradein",
    image: <AppBlockImageIPhone14ProMaxClearCaseWithMagSafe />,
    badge: "ราคาพิเศษ",
    badgeColor: "#1a7a3c",
    name: "iPhone 13",
    price: "฿29,900",
    new_price: "฿15,200",
    discount: "-฿14,700",
    installment: "฿1,520/ด. นาน 10 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/iphone",
  },
  {
    id: "ipad-pro-tradein",
    image: <AppBlockImageIPadPro />,
    badge: "ราคาพิเศษ",
    badgeColor: "#1a7a3c",
    name: "MacBook Air (รุ่น 13 นิ้ว) ชิป M4",
    price: "฿34,900",
    new_price: "฿30,900",
    discount: "-฿4,000",
    installment: "฿3,090/ด. นาน 10 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/ipad-pro",
  },
  {
    id: "ipad-air-tradein",
    image: <AppBlockImageIPadAir />,
    badge: "ราคาพิเศษ",
    badgeColor: "#1a7a3c",
    name: "MacBook Air (รุ่น 15 นิ้ว) ชิป M3",
    price: "฿47,900",
    new_price: "฿36,500",
    discount: "-฿11,400",
    installment: "฿3,650/ด. นาน 10 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/ipad-air",
  },
  {
    id: "apple-watch-tradein",
    image: <AppBlockImageAppleWatchUltraOrangeAlpineLoop />,
    badge: "ราคาพิเศษ",
    badgeColor: "#1a7a3c",
    name: "MacBook Pro (รุ่น 14 นิ้ว) ชิป M3",
    price: "฿59,900",
    new_price: "฿48,900",
    discount: "-฿11,000",
    installment: "฿4,890/ด. นาน 10 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/apple-watch",
  },
  
];

export const TradeInSection = () => (
  <AttachModuleSlider
    title="ช้อปสินค้า Apple ออนไลน์ราคาพิเศษ ที่นี่"
    items={items}
    className="trade-in-section"
  />
);
