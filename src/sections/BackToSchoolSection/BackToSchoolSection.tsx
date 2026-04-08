import { AttachModuleSlider } from "../../AttachModuleSlider";
import { AppBlockImageMacBookPro } from "../../AppBlockImageMacBookPro/AppBlockImageMacBookPro";
import { AppBlockImageAppleWatchUltraOrangeAlpineLoop } from "../../AppBlockImageAppleWatchUltraOrangeAlpineLoop/AppBlockImageAppleWatchUltraOrangeAlpineLoop";
import type { AttachModuleSliderItem } from "../../AttachModuleSlider";

const items: AttachModuleSliderItem[] = [
  {
    id: "macbook-pro-bts",
    image: <AppBlockImageMacBookPro />,
    badge: "ใหม่",
    badgeColor: "#bf4800",
    name: "MacBook Neo",
    price: "เริ่มต้น ฿19,900",
    installment: "฿1,990/ด. นาน 10 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/macbook-pro",
  },
  {
    id: "apple-watch-ultra-bts",
    image: <AppBlockImageAppleWatchUltraOrangeAlpineLoop />,
    badge: "ใหม่",
    badgeColor: "#bf4800",
    name: "iPad Air M4",
    price: "เริ่มต้น ฿21,900",
    installment: "฿2,190/ด. นาน 10 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/apple-watch",
  },
  {
    id: "ipad-bts",
    image: <AppBlockImageAppleWatchUltraOrangeAlpineLoop />,
    badge: "ราคาพิเศษ",
    badgeColor: "#1a7a3c",
    name: "Apple Pencil Pro",
    price: "เพียง ฿4,390",
    installment: "",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/ipad",
  },
];

export const BackToSchoolSection = () => (
  <AttachModuleSlider
    title="เตรียมพร้อมสำหรับการเรียน"
    items={items}
    className="back-to-school-section"
  />
);
