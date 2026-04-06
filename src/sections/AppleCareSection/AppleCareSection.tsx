import { AttachModuleSlider } from "../../AttachModuleSlider";
import { AttachModuleImageProperty1AppleCareIPhone } from "../../AttachModuleImageProperty1AppleCareIPhone/AttachModuleImageProperty1AppleCareIPhone";
import { AttachModuleImageProperty1AppleCareIPad } from "../../AttachModuleImageProperty1AppleCareIPad/AttachModuleImageProperty1AppleCareIPad";
import { AttachModuleImageProperty1AppleCareMacbook } from "../../AttachModuleImageProperty1AppleCareMacbook/AttachModuleImageProperty1AppleCareMacbook";
import type { AttachModuleSliderItem } from "../../AttachModuleSlider";

const appleCareItems: AttachModuleSliderItem[] = [
  {
    id: "applecare-iphone",
    image: <AttachModuleImageProperty1AppleCareIPhone />,
    badge: "ใหม่",
    badgeColor: "#ff6900",
    name: "iPhone 14 Pro",
    price: "฿36,900",
    installment: "฿3,075/ด. นาน 12 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/iphone",
  },
  {
    id: "applecare-ipad",
    image: <AttachModuleImageProperty1AppleCareIPad />,
    badge: "ใหม่",
    badgeColor: "#ff6900",
    name: "iPad Pro",
    price: "฿19,900",
    installment: "฿1,659/ด. นาน 12 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/ipad",
  },
  {
    id: "applecare-macbook",
    image: <AttachModuleImageProperty1AppleCareMacbook />,
    badge: "ใหม่",
    badgeColor: "#ff6900",
    name: "MacBook Air",
    price: "฿39,900",
    installment: "฿3,325/ด. นาน 12 เดือน",
    ctaLabel: "เลือกรุ่น",
    ctaHref: "/collections/macbook-air",
  },
];

export const AppleCareSection = () => (
  <AttachModuleSlider
    title="ความอุ่นใจกับ AppleCare+"
    items={appleCareItems}
    className="applecare-section"
  />
);
