import { AttachModuleSlider } from "../../AttachModuleSlider";
import type { AttachModuleSliderItem } from "../../AttachModuleSlider";

const items: AttachModuleSliderItem[] = [
  {
    id: "macbook-pro-bts",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/iPhone_Air_Sky_Blue_PDP_Image_Position_1_Sky_Blue_Color__TH-TH-square_medium.jpg?inline=true",
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
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/TH_Macbook_Pro_M3_Space_Gray_PDP_Image_Position-1.jpg?inline=true",
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
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/Apple%20Pencil%20Pro(1).webp?inline=true",
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
