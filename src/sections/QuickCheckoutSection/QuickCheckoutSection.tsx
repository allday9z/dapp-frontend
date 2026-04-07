import { AttachModuleSlider } from "../../AttachModuleSlider";
import { AttachImageSmartFolioIPadAir } from "../../AttachImageSmartFolioIPadAir/AttachImageSmartFolioIPadAir";
import { AttachImageApplePencil2 } from "../../AttachImageApplePencil2/AttachImageApplePencil2";
import { AppBlockImageMagicKeyboardFolioForIPad109Inch } from "../../AppBlockImageMagicKeyboardFolioForIPad109Inch/AppBlockImageMagicKeyboardFolioForIPad109Inch";
import type { AttachModuleSliderItem } from "../../AttachModuleSlider";

const items: AttachModuleSliderItem[] = [
  {
    id: "smart-folio",
    image: <AttachImageSmartFolioIPadAir />,
    badge: "ใหม่",
    badgeColor: "#ff6900",
    name: "Smart Folio สำหรับ iPad Air รุ่นที่ 5",
    price: "฿2,990",
    ctaLabel: "เพิ่มใส่กระเป๋า",
    ctaHref: "/products/smart-folio-ipad-air",
  },
  {
    id: "apple-pencil-2",
    image: <AttachImageApplePencil2 />,
    badge: "ข้อเสนอพิเศษ",
    badgeColor: "#5856d6",
    name: "Apple Pencil รุ่นที่ 2",
    price: "฿3,900",
    ctaLabel: "เพิ่มใส่กระเป๋า",
    ctaHref: "/products/apple-pencil-2",
  },
  {
    id: "magic-keyboard-folio-qc",
    image: <AppBlockImageMagicKeyboardFolioForIPad109Inch />,
    badge: "ใหม่",
    badgeColor: "#ff6900",
    name: "Magic Keyboard Folio สำหรับ iPad 10.9 นิ้ว",
    price: "฿5,900",
    ctaLabel: "เพิ่มใส่กระเป๋า",
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
