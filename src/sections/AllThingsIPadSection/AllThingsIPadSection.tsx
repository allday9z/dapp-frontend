import { AttachModuleSlider } from "../../AttachModuleSlider";
import type { AttachModuleSliderItem } from "../../AttachModuleSlider";

const items: AttachModuleSliderItem[] = [
  {
    id: "ipad-air",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/TH_MacBook_Air_15_in_M3_Midnight_PDP_Image_Position_1.jpg?inline=true",
    badge: "ใหม่",
    badgeColor: "#0071bc",
    name: "iPad Air",
    price: "เริ่มต้น ฿20,900",
    installment: "฿1,742/ด. นาน 12 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/ipad-air",
  },
  {
    id: "ipad-pro",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/MacBook_Air_13-inch_M4_Non-AI_Mar25_Sky_Blue_PDP_Image_Position_1__TH-TH.jpg?inline=true",
    badge: "ใหม่",
    badgeColor: "#0071bc",
    name: "iPad Pro",
    price: "เริ่มต้น ฿35,900",
    installment: "฿2,992/ด. นาน 12 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/ipad-pro",
  },
  {
    id: "magic-keyboard-folio",
    imageSrc: "/image-720.png",
    badge: "ใหม่",
    badgeColor: "#0071bc",
    name: "Magic Keyboard Folio สำหรับ iPad 10.9 นิ้ว",
    price: "฿5,900",
    ctaLabel: "เพิ่มใส่กระเป๋า",
    ctaHref: "/products/magic-keyboard-folio",
  },
];

export const AllThingsIPadSection = () => (
  <AttachModuleSlider
    title="ทุกสิ่งสำหรับ iPad"
    items={items}
    className="all-things-ipad-section"
  />
);
