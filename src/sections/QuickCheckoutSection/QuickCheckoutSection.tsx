import { AttachModuleSlider } from "../../AttachModuleSlider";
import type { AttachModuleSliderItem } from "../../AttachModuleSlider";

const items: AttachModuleSliderItem[] = [
  {
    id: "smart-folio",
    imageSrc: "/_2-bd-8-b-5983-2-c-5-c-455-b-a-86-a-e-4-d-6-d-8906-f-54-2200-x-10.png",
    badge: "ใหม่",
    badgeColor: "#ff6900",
    name: "Smart Folio สำหรับ iPad Air รุ่นที่ 5",
    price: "฿2,990",
    ctaLabel: "เพิ่มใส่กระเป๋า",
    ctaHref: "/products/smart-folio-ipad-air",
  },
  {
    id: "apple-pencil-2",
    imageSrc: "/image-630.png",
    badge: "ข้อเสนอพิเศษ",
    badgeColor: "#5856d6",
    name: "Apple Pencil รุ่นที่ 2",
    price: "฿3,900",
    ctaLabel: "เพิ่มใส่กระเป๋า",
    ctaHref: "/products/apple-pencil-2",
  },
  {
    id: "magic-keyboard-folio-qc",
    imageSrc: "/image-720.png",
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
