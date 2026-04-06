import { AttachModuleSlider } from "../../AttachModuleSlider";
import { AppBlockImageIPadAir } from "../../AppBlockImageIPadAir/AppBlockImageIPadAir";
import { AppBlockImageIPadPro } from "../../AppBlockImageIPadPro/AppBlockImageIPadPro";
import { AppBlockImageMagicKeyboardFolioForIPad109Inch } from "../../AppBlockImageMagicKeyboardFolioForIPad109Inch/AppBlockImageMagicKeyboardFolioForIPad109Inch";
import type { AttachModuleSliderItem } from "../../AttachModuleSlider";

const items: AttachModuleSliderItem[] = [
  {
    id: "ipad-air",
    image: <AppBlockImageIPadAir />,
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
    image: <AppBlockImageIPadPro />,
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
    image: <AppBlockImageMagicKeyboardFolioForIPad109Inch />,
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
