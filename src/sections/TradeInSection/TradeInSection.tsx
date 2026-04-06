import { AttachModuleSlider } from "../../AttachModuleSlider";
import { AppBlockImageProperty1MacBookPro } from "../../AppBlockImageProperty1MacBookPro/AppBlockImageProperty1MacBookPro";
import { AppBlockImageIMac } from "../../AppBlockImageIMac/AppBlockImageIMac";
import type { AttachModuleSliderItem } from "../../AttachModuleSlider";

const items: AttachModuleSliderItem[] = [
  {
    id: "macbook-pro-tradein",
    image: <AppBlockImageProperty1MacBookPro />,
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
    name: "iPhone",
    price: "฿29,900",
    new_price: "฿21,600",
    discount: "-฿8,300",
    installment: "฿1,800/ด. นาน 12 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/iphone",
  },
];

export const TradeInSection = () => (
  <AttachModuleSlider
    title="แลกเครื่องเก่า รับส่วนลดพิเศษ"
    items={items}
    className="trade-in-section"
  />
);
