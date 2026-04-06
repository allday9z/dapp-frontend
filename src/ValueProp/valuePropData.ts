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
    body: "จ่ายแบบไหนก็สะดวก หรือเลือกผ่อนชำระนาน สูงสุด 10 เดือน กับบัตรเครดิตที่ร่วมรายการ",
    ctaLabel: "ดูเพิ่มเติม",
    ctaHref: "/pages/financing",
  },
  {
    id: "trust",
    iconType: "trust",
    title: "ซื้อสินค้าด้วยความมั่นใจ",
    body: "เราให้ความสำคัญกับการเก็บรักษาข้อมูลส่วนตัว เพื่อให้คุณใช้บริการได้อย่างหายห่วง",
    ctaLabel: "นโยบายความเป็นส่วนตัว",
    ctaHref: "/pages/privacy-policy",
  },
  {
    id: "shipping",
    iconType: "shipping",
    title: "ส่งเร็วทันใจ รอของได้ในวันเดียวกัน",
    body: "เพียงแค่เลือกการจัดส่งแบบด่วน ก็เตรียมรับของได้ภายในวันเดียวกัน",
    ctaLabel: "ดูเพิ่มเติม",
    ctaHref: "/pages/delivery",
  },
];
