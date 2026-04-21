import { AttachModuleSlider } from "../../components/organisms/AttachModuleSlider";
import type { AttachModuleSliderItem } from "../../components/organisms/AttachModuleSlider";

const items: AttachModuleSliderItem[] = [
  {
    id: "macbook-pro-bts",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/MB_NEO%20(1).webp?inline=true",
    badge: "ใหม่",
    badgeColor: "#bf4800",
    name: "MacBook Neo",
    price: "เริ่มต้น ฿19,900",
    installment: "฿1,990/ด. นาน 10 เดือน",
    ctaLabel: "สั่งซื้อ",
    ctaHref: "/collections/macbook-pro",
  },
  {
    id: "apple-watch-ultra-bts",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/iPad_Air_11-in_M4_WiFi_Blue_PDP_Image_Position_1__TH-TH-square_medium.jpg",
    badge: "ใหม่",
    badgeColor: "#bf4800",
    name: "iPad Air M4",
    price: "เริ่มต้น ฿21,900",
    installment: "฿2,190/ด. นาน 10 เดือน",
    ctaLabel: "สั่งซื้อ",
    ctaHref: "/collections/apple-watch",
  },
  {
    id: "ipad-bts",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/Apple%20Pencil%20Pro%20(1).jpg",
    badge: "ราคาพิเศษ",
    badgeColor: "#1a7a3c",
    name: "Apple Pencil Pro",
    price: "เพียง ฿4,990",
    installment: "",
    ctaLabel: "สั่งซื้อ",
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
