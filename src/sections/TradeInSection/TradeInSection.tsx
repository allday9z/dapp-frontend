import { AttachModuleSlider } from "../../AttachModuleSlider";
import type { AttachModuleSliderItem } from "../../AttachModuleSlider";

const items: AttachModuleSliderItem[] = [
  {
    id: "macbook-pro-tradein",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/iPhone_Air_Sky_Blue_PDP_Image_Position_1_Sky_Blue_Color__TH-TH-square_medium.jpg?inline=true",
    badge: "เก่าแลกใหม่",
    badgeColor: "#0071bc",
    name: "iPhone Air",
    price: "฿39,900",
    new_price: "฿29,900",
    discount: "-฿10,000",
    installment: "฿2,990/ด. นาน 10 เดือน",
    ctaLabel: "สั่งซื้อ",
    ctaHref: "/collections/macbook-pro",
  },
  {
    id: "imac-tradein",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/iPhone_16_Ultramarine_PDP_Image_Position_1a_Ultramarine_Color__TH-TH.jpg?inline=true",
    badge: "เก่าแลกใหม่",
    badgeColor: "#0071bc",
    name: "iPhone 16",
    price: "฿29,900",
    new_price: "฿26,900",
    discount: "-฿3,000",
    installment: "฿2,690/ด. นาน 10 เดือน",
    ctaLabel: "สั่งซื้อ",
    ctaHref: "/collections/imac",
  },
  {
    id: "iphone-tradein",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/iPhone_13_PDP_Position-1A_Color_Midnight__TH.jpg?inline=true",
    badge: "ราคาพิเศษ",
    badgeColor: "#1a7a3c",
    name: "iPhone 13",
    price: "฿29,900",
    new_price: "฿15,200",
    discount: "-฿14,700",
    installment: "฿1,520/ด. นาน 10 เดือน",
    ctaLabel: "สั่งซื้อ",
    ctaHref: "/collections/iphone",
  },
  {
    id: "ipad-pro-tradein",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/MacBook_Air_13-inch_M4_Non-AI_Mar25_Sky_Blue_PDP_Image_Position_1__TH-TH.jpg?inline=true",
    badge: "ราคาพิเศษ",
    badgeColor: "#1a7a3c",
    name: "MacBook Air (รุ่น 13 นิ้ว) ชิป M4",
    price: "฿34,900",
    new_price: "฿30,900",
    discount: "-฿4,000",
    installment: "฿3,090/ด. นาน 10 เดือน",
    ctaLabel: "สั่งซื้อ",
    ctaHref: "/collections/ipad-pro",
  },
  {
    id: "ipad-air-tradein",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/TH_MacBook_Air_15_in_M3_Midnight_PDP_Image_Position_1.jpg?inline=true",
    badge: "ราคาพิเศษ",
    badgeColor: "#1a7a3c",
    name: "MacBook Air (รุ่น 15 นิ้ว) ชิป M3",
    price: "฿47,900",
    new_price: "฿36,500",
    discount: "-฿11,400",
    installment: "฿3,650/ด. นาน 10 เดือน",
    ctaLabel: "สั่งซื้อ",
    ctaHref: "/collections/ipad-air",
  },
  {
    id: "apple-watch-tradein",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/TH_Macbook_Pro_M3_Space_Gray_PDP_Image_Position-1.jpg?inline=true",
    badge: "ราคาพิเศษ",
    badgeColor: "#1a7a3c",
    name: "MacBook Pro (รุ่น 14 นิ้ว) ชิป M3",
    price: "฿59,900",
    new_price: "฿48,900",
    discount: "-฿11,000",
    installment: "฿4,890/ด. นาน 10 เดือน",
    ctaLabel: "สั่งซื้อ",
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
