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
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/Store-KBI.jpg?inline=true",
    badge: "สาขาของเรา",
    badgeColor: "#707070",
    title: "ค้นหาสาขา",
    subtitle: "ช้อปสินค้าใหม่ล่าสุดจาก Apple",
    description: "ช้อปสินค้าใหม่ของ Apple ได้ก่อนใคร ที่สาขาใกล้บ้านคุณ"
  },
  {
    id: "trade-in-program",
    href: "https://trade-in.uficon.com/",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/Trade%20In.jpg?inline=true",
    badge: "เก่าแลกใหม่",
    badgeColor: "#0071bc",
    title: "อัปเกรดเครื่องใหม่",
    subtitle: "เปลี่ยนเครื่องเดิม ให้เป็นเครื่องใหม่",
    description: "แลกเก่า คุ้มกว่า ได้เครื่องใหม่ง่ายขึ้น พร้อมส่วนลดสูงสุด ฿30,000"
  },
  {
    id: "spaylater",
    href: "/pages/shopeepay",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/20260407_1909_Image%20Generation_remix_01knkxhpqeexva3mh8071wtntz.png?inline=true",
    badge: "ข้อเสนอพิเศษ",
    badgeColor: "#5856D6",
    title: "ราคาเพื่อการศึกษา",
    subtitle: "สิทธิพิเศษสำหรับนักเรียนและบุคลากรทางการศึกษา",
    description: "ราคาพิเศษสำหรับสายการศึกษา พร้อมข้อเสนอและสิทธิประโยชน์ที่คุ้มค่ากว่า"
  },
  {
    id: "pay-next-extra",
    href: "https://www.uficon.com/installment-payment/",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/UEazy.jpg?inline=true",
    badge: "ผ่อนไม่ใช้บัตร",
    badgeColor: "#0071bc",
    title: "U•Eazy",
    subtitle: "ผ่อนสบาย ได้ของชัวร์",
    description: "ผ่อนสินค้าได้ง่ายขึ้น ในแบบที่คุณเลือกได้ ผ่านช่องทางที่ร่วมรายการ"
  },
  {
    id: "icenter",
    href: "/pages/icenter-service-provider",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/iMedic-FI.webp?inline=true",
    badge: "ศูนย์บริการ",
    badgeColor: "#707070",
    title: "iMedic",
    subtitle: "บริการหลังการขาย",
    description: "ซ่อมและบริการภายใต้มาตรฐาน Apple Authorised Service Provider"
  },
  {
    id: "workshop",
    href: "/pages/demo-workshop",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/workshop.jpg?inline=true",
    badge: "กิจกรรมที่สาขา",
    badgeColor: "#707070",
    title: "ร่วมอบรมกับเรา",
    subtitle: "ฟรี ไม่มีค่าใช้จ่าย",
    description: "เรามีผู้เชี่ยวชาญที่พร้อมสาธิตและให้คำแนะนำเกี่ยวกับสินค้า Apple ให้คุณได้ร่วมทดลองใช้งานจริงไปด้วยกัน"
  }
];
