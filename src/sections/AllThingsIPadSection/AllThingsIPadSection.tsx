import { AttachModuleSlider } from "../../components/organisms/AttachModuleSlider";
import type { AttachModuleSliderItem } from "../../components/organisms/AttachModuleSlider";

const items: AttachModuleSliderItem[] = [
  {
    id: "ipad-air",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/iPad_A16_WiFi_Blue_PDP_Image_Position_1__TH-TH.jpg",
    badge: "แบ่งชำระ 0% สบาย ๆ",
    badgeColor: "#0071bc",
    name: "iPad A16",
    price: "เริ่มต้น ฿12,900",
    installment: "฿1,290/ด. นาน 10 เดือน",
    ctaLabel: "สั่งซื้อ",
    ctaHref: "/collections/ipad-air",
  },
  {
    id: "ipad-pro",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/iPad_Air_11-in_M4_WiFi_Blue_PDP_Image_Position_1__TH-TH-square_medium.jpg?inline=true",
    badge: "แบ่งชำระ 0% สบาย ๆ",
    badgeColor: "#0071bc",
    name: "iPad Air M4",
    price: "เริ่มต้น ฿21,900",
    installment: "฿2,190/ด. นาน 10 เดือน",
    ctaLabel: "สั่งซื้อ",
    ctaHref: "/collections/ipad-pro",
  },
  {
    id: "magic-keyboard-folio",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/iPad_Pro_11-in_M5_WiFi_Space_Black_PDP_Image_Position_1__TH-TH.jpg?inline=true",
    badge: "แบ่งชำระ 0% สบาย ๆ",
    badgeColor: "#0071bc",
    name: "iPad Pro M5",
    price: "เริ่มต้น ฿35,900",
    installment: "฿3,590/ด. นาน 10 เดือน",
    ctaLabel: "สั่งซื้อ",
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
