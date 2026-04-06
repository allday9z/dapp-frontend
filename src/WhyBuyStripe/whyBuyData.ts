export interface WhyBuySegment {
  text: string;
  tone?: "default" | "muted" | "accent";
}

export interface WhyBuyItem {
  id: string;
  badge: string;
  accentColor: string;
  body: WhyBuySegment[];
}

// Source: /Users/uficon_dev/Downloads/autohtml-project-html/HomepageDesktop.html
export const whyBuyItems: WhyBuyItem[] = [
  {
    id: "delivery",
    badge: "ส่งด่วนส่งไว",
    accentColor: "#595959",
    body: [
      { text: "เลือกส่งฟรีหรือส่งด่วน\n" },
      { text: "ช้อป Apple สบายใจทุกออเดอร์", tone: "muted" },
    ],
  },
  {
    id: "financing",
    badge: "ผ่อนสบาย",
    accentColor: "var(--badging-affordability, #0071bc)",
    body: [
      { text: "เลือกผ่อนกับบัตรที่ร่วมรายการ " },
      { text: "0% สูงสุด 10 เดือน", tone: "accent" },
    ],
  },
  {
    id: "deals",
    badge: "ดีล Apple วันนี้",
    accentColor: "var(--badging-special-offer, #5856d6)",
    body: [
      { text: "SUMMER DEALS ดีล Apple ลดคุ้มสูงสุด 75% " },
      { text: "วันนี้ - 31 มี.ค. 69", tone: "accent" },
    ],
  },
  {
    id: "upgrade",
    badge: "อัปเกรดเครื่องใหม่",
    accentColor: "#0071bc",
    body: [
      { text: "เอาเครื่องเก่ามาแลก ลดเพิ่มได้ทันที " },
      { text: "รับเครดิตแลกซื้อสูงสุด 26,300.-*", tone: "accent" },
    ],
  },
  {
    id: "everyday-price",
    badge: "ราคาดีลพิเศษทุกวัน",
    accentColor: "var(--badging-sale, #008900)",
    body: [
      { text: "ช้อปออนไลน์กับ UFicon คุ้มกว่า " },
      { text: "โปรแรง ครบทุกสินค้า Apple", tone: "accent" },
    ],
  },
];

export const whyBuySectionHeading = "หลายเหตุผล ที่ทำให้คุณเลือกซื้อกับ UFicon";
