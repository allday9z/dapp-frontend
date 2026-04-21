import { AttachModuleSlider } from "../../components/organisms/AttachModuleSlider";
import type { AttachModuleSliderItem } from "../../components/organisms/AttachModuleSlider";

const items: AttachModuleSliderItem[] = [
  {
    id: "smart-folio",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/AirPods_3rd_Gen_PDP_Image_Position-1__TH.jpg?inline=true",
    name: "AirPods 4",
    price: "฿4,990",
    ctaLabel: "สั่งซื้อ",
    ctaHref: "/products/smart-folio-ipad-air",
  },
  {
    id: "apple-pencil-2",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/AirPods_Pro_3_Sep25_PDP_Image_Position_1__TH-TH.jpg?inline=true",
    name: "AirPods Pro 3 ",
    price: "฿8,490",
    ctaLabel: "สั่งซื้อ",
    ctaHref: "/products/apple-pencil-2",
  },
   {
    id: "apple-pencil-2",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/Earpods-Lightning.001%20(1).jpeg?inline=true",
    name: "EarPods with Lightning Connector",
    price: "฿790",
    ctaLabel: "สั่งซื้อ",
    ctaHref: "/products/apple-pencil-2",
  },
    {
    id: "magic-keyboard-folio-qc",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/MU822.jpeg?inline=true",
    name: "20W USB-C Power Adapter",
    price: "฿790",
    ctaLabel: "สั่งซื้อ",
    ctaHref: "/products/magic-keyboard-folio",
  },
    {
    id: "magic-keyboard-folio-qc",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/Apple-60W-USB-C-Charge-Cable-1m-1.webp?inline=true",
    name: "60W USB-C Charge Cable (1M)",
    price: "฿790",
    ctaLabel: "สั่งซื้อ",
    ctaHref: "/products/magic-keyboard-folio",
  },
    {
    id: "magic-keyboard-folio-qc",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/USB-C-To-Lightning-1M.001.jpeg?inline=true",
    name: "USB-C to Lightning Cable",
    price: "฿790",
    ctaLabel: "สั่งซื้อ",
    ctaHref: "/products/magic-keyboard-folio",
  },
];

export const QuickCheckoutSection = () => (
  <AttachModuleSlider
    title="ช้อปสินค้า Apple ราคาพิเศษที่ UFicon"
    items={items}
    className="quick-checkout-section"
  />
);
