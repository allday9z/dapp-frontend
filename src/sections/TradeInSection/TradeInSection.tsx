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
    name: "MacBook Pro",
    price: "฿59,900",
    new_price: "฿49,900",
    discount: "-฿10,000",
    installment: "฿4,159/ด. นาน 12 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/macbook-pro",
  },
  {
    id: "imac-tradein",
    image: <AppBlockImageIMac />,
    badge: "เก่าแลกใหม่",
    badgeColor: "#0071bc",
    name: "iMac",
    price: "฿52,900",
    new_price: "฿44,900",
    discount: "-฿8,000",
    installment: "฿3,742/ด. นาน 12 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/imac",
  },
  {
    id: "iphone-tradein",
    image: <AppBlockImageIPhone14ProMaxClearCaseWithMagSafe />,
    badge: "ราคาพิเศษ",
    badgeColor: "#1a7a3c",
    name: "iPhone",
    price: "฿29,900",
    new_price: "฿21,600",
    discount: "-฿8,300",
    installment: "฿1,800/ด. นาน 12 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/iphone",
  },
  {
    id: "ipad-pro-tradein",
    image: <AppBlockImageIPadPro />,
    badge: "เก่าแลกใหม่",
    badgeColor: "#0071bc",
    name: "iPad Pro",
    price: "฿37,900",
    new_price: "฿31,900",
    discount: "-฿6,000",
    installment: "฿2,659/ด. นาน 12 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/ipad-pro",
  },
  {
    id: "ipad-air-tradein",
    image: <AppBlockImageIPadAir />,
    badge: "เก่าแลกใหม่",
    badgeColor: "#0071bc",
    name: "iPad Air",
    price: "฿24,900",
    new_price: "฿19,900",
    discount: "-฿5,000",
    installment: "฿1,659/ด. นาน 12 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/ipad-air",
  },
  {
    id: "apple-watch-tradein",
    image: <AppBlockImageAppleWatchUltraOrangeAlpineLoop />,
    badge: "เก่าแลกใหม่",
    badgeColor: "#0071bc",
    name: "Apple Watch",
    price: "฿15,900",
    new_price: "฿11,900",
    discount: "-฿4,000",
    installment: "฿992/ด. นาน 12 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/apple-watch",
  },
  {
    id: "airpods-pro-tradein",
    image: <AppBlockImageAirPodsPro2ndGeneration />,
    badge: "ราคาพิเศษ",
    badgeColor: "#1a7a3c",
    name: "AirPods Pro",
    price: "฿9,990",
    new_price: "฿7,490",
    discount: "-฿2,500",
    installment: "฿625/ด. นาน 12 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/airpods-pro",
  },
  {
    id: "macbook-pro-m5-tradein",
    image: <AppBlockImageMacBookPro />,
    badge: "เก่าแลกใหม่",
    badgeColor: "#0071bc",
    name: "MacBook Pro M5",
    price: "฿69,900",
    new_price: "฿56,900",
    discount: "-฿13,000",
    installment: "฿4,742/ด. นาน 12 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/macbook-pro-m5",
  },
];

export const TradeInSection = () => (
  <AttachModuleSlider
    title="แลกเครื่องเก่า รับส่วนลดพิเศษ"
    items={items}
    className="trade-in-section"
  />
);
