import { AppTileGrid } from '../../AppTileGrid/AppTileGrid';
import type { IAppTileProps } from '../../AppTile/AppTile';

const whatsNewItems: IAppTileProps[] = [
  {
    image: "/product/airpods/AirPods_Max_2_Blue_PDP_Image_Position_1__TH-TH.png",
    imageAlt: "AirPods Max 2",
    badge: "ใหม่",
    title: "AirPods Max 2",
    cta: "ประสบการณ์เสียงในเวอร์ชั่นรีมาสเตอร์",
    description: "เริ่มต้น ฿18,900",
  },
  {
    image: "/image-1170.png",
    imageAlt: "MacBook Neo",
    badge: "ใหม่",
    title: "MacBook Neo",
    cta: "สุดปัง ในราคาสุดว้าว",
    description: "เริ่มต้น ฿19,900",
  },
  {
    image: "/image-1170.png",
    imageAlt: "MacBook Air M5",
    badge: "ใหม่",
    title: "MacBook Air M5",
    cta: "พลังเร็วติดปีก",
    description: "เริ่มต้น ฿36,900",
  },
  {
    image: "/screenshot-2023-02-07-at-2-34-10.png",
    imageAlt: "iPad Air M4",
    badge: "ใหม่",
    title: "iPad Air M4",
    cta: "ฟิ้วววว",
    description: "เริ่มต้น ฿21,900",
  },
  {
    image: "/image-1170.png",
    imageAlt: "MacBook Pro M5",
    badge: "ใหม่",
    title: "MacBook Pro M5",
    cta: "เร็วและอัจฉริยะเหลือร้าย",
    description: "เริ่มต้น ฿56,900",
  },
];

export const WhatsNewSection = () => (
  <section aria-labelledby="whats-new-heading">
    <h2 id="whats-new-heading" className="sr-only">สินค้าใหม่ล่าสุด</h2>
    <AppTileGrid
      heading="ผลิตภัณฑ์ล่าสุดของ Apple"
      items={whatsNewItems}
      className="organism-instance"
    />
  </section>
);
