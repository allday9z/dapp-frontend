export interface AppStripeTextTileItem {
  id: string;
  href: string;
  imageSrc: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description: string;
}

export const appStripeTextTiles: AppStripeTextTileItem[] = [
  {
    id: "store-locator",
    href: "/pages/store-locator",
    imageSrc: "https://www.istudiobyspvi.com/cdn/shop/files/find_store.webp?v=1717487676&width=512",
    badge: "สาขาของเรา",
    badgeColor: "#707070",
    title: "ค้นหาสาขา",
    subtitle: "ช้อปสินค้าใหม่ล่าสุดจาก Apple",
    description: "ช้อปสินค้าใหม่ของ Apple ได้ก่อนใคร ที่สาขาใกล้บ้านคุณ"
  },
  {
    id: "trade-in-program",
    href: "https://trade-in.uficon.com/",
    imageSrc: "https://www.istudiobyspvi.com/cdn/shop/files/Tradein-Jan2026_instore.png?v=1768460023&width=512",
    badge: "เก่าแลกใหม่",
    badgeColor: "#0071bc",
    title: "อัปเกรดเครื่องใหม่",
    subtitle: "เปลี่ยนเครื่องเดิม ให้เป็นเครื่องใหม่",
    description: "แลกเก่า คุ้มกว่า ได้เครื่องใหม่ง่ายขึ้น พร้อมส่วนลดสูงสุด ฿30,000"
  },
  {
    id: "spaylater",
    href: "/pages/shopeepay",
    imageSrc: "https://www.istudiobyspvi.com/cdn/shop/files/LDP_Spay_instore.jpg?v=1775037118&width=512",
    badge: "ข้อเสนอพิเศษ",
    badgeColor: "#5856D6",
    title: "ราคาเพื่อการศึกษา",
    subtitle: "สิทธิพิเศษสำหรับนักเรียนและบุคลากรทางการศึกษา",
    description: "ราคาพิเศษสำหรับสายการศึกษา พร้อมข้อเสนอและสิทธิประโยชน์ที่คุ้มค่ากว่า"
  },
  {
    id: "pay-next-extra",
    href: "/pages/pay-next-extra",
    imageSrc: "https://www.istudiobyspvi.com/cdn/shop/files/instorebanner-Paynext.png?v=1775034198&width=512",
    badge: "กิจกรรมที่สาขา",
    badgeColor: "#707070",
    title: "ร่วมอบรมกับเรา",
    subtitle: "ฟรี ไม่มีค่าใช้จ่าย",
    description: "เรามีผู้เชี่ยวชาญที่พร้อมสาธิตและให้คำแนะนำเกี่ยวกับสินค้า Apple ให้คุณได้ร่วมทดลองใช้งานจริงไปด้วยกัน"
  },
  {
    id: "icenter",
    href: "/pages/icenter-service-provider",
    imageSrc: "https://www.istudiobyspvi.com/cdn/shop/files/DSC05993.webp?v=1717487756&width=512",
    badge: "ศูนย์บริการ",
    badgeColor: "#707070",
    title: "iMedic",
    subtitle: "บริการหลังการขาย",
    description: "ซ่อมและบริการภายใต้มาตรฐาน Apple Authorised Service Provider"
  },
  {
    id: "workshop",
    href: "/pages/demo-workshop",
    imageSrc: "https://www.istudiobyspvi.com/cdn/shop/files/JOK00371-3.jpg?v=1718341326&width=512",
    badge: "กิจกรรมที่สาขา",
    badgeColor: "#BF4800",
    title: "ร่วมอบรมกับเรา",
    subtitle: "ฟรี ไม่มีค่าใช้จ่าย",
    description: "เรามีผู้เชี่ยวชาญที่พร้อมสาธิตและให้คำแนะนำเกี่ยวกับสินค้า Apple ให้คุณได้ร่วมทดลองใช้งานจริงไปด้วยกัน"
  }
];
