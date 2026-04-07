import { AttachModuleSlider } from "../../AttachModuleSlider";
import { AppBlockImageMacBookPro } from "../../AppBlockImageMacBookPro/AppBlockImageMacBookPro";
import { AppBlockImageAppleWatchUltraOrangeAlpineLoop } from "../../AppBlockImageAppleWatchUltraOrangeAlpineLoop/AppBlockImageAppleWatchUltraOrangeAlpineLoop";
import type { AttachModuleSliderItem } from "../../AttachModuleSlider";

const items: AttachModuleSliderItem[] = [
  {
    id: "macbook-pro-bts",
    image: <AppBlockImageMacBookPro />,
    badge: "สิทธิพิเศษ",
    badgeColor: "#5856d6",
    name: "MacBook Pro",
    price: "เริ่มต้น ฿59,900",
    installment: "฿4,992/ด. นาน 12 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/macbook-pro",
  },
  {
    id: "apple-watch-ultra-bts",
    image: <AppBlockImageAppleWatchUltraOrangeAlpineLoop />,
    badge: "ข้อเสนอพิเศษ",
    badgeColor: "#bf4800",
    name: "Apple Watch Ultra Orange Alpine Loop",
    price: "฿31,900",
    installment: "฿2,659/ด. นาน 12 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/apple-watch",
  },
  {
    id: "ipad-bts",
    name: "iPad",
    price: "เริ่มต้น ฿12,900",
    installment: "฿1,075/ด. นาน 12 เดือน",
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
