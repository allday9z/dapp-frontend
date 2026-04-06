export interface ValuePropItem {
  id: string;
  iconType: "payment" | "trust" | "shipping";
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

export const valuePropItems: ValuePropItem[] = [
  {
    id: "payment",
    iconType: "payment",
    title: "การผ่อนชำระ",
    body: "ผ่อนสินค้า Apple ได้ง่าย ๆ พร้อมตัวเลือก 0% กับธนาคารที่ร่วมรายการ",
    ctaLabel: "ดูเพิ่มเติม",
    ctaHref: "/pages/financing",
  },
  {
    id: "trust",
    iconType: "trust",
    title: "มั่นใจทุกการสั่งซื้อ",
    body: "ช้อปอย่างมั่นใจ ปลอดภัยทุกขั้นตอน เราให้ความสำคัญกับการเก็บรักษาข้อมูลส่วนตัว เพื่อให้คุณใช้บริการได้อย่างหายห่วง",
    ctaLabel: "นโยบายความเป็นส่วนตัว",
    ctaHref: "/pages/privacy-policy",
  },
  {
    id: "shipping",
    iconType: "shipping",
    title: "จัดส่งรวดเร็วทั่วประเทศ",
    body: "รองรับทั้งจัดส่งถึงบ้าน และรับที่สาขา",
    ctaLabel: "ดูเพิ่มเติม",
    ctaHref: "/pages/delivery",
  },
];
