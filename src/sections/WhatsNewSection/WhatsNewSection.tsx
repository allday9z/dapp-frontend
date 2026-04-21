import { AppTileGrid } from '@/components/organisms/AppTileGrid/AppTileGrid';
import type { IAppTileProps } from '@/components/molecules/AppTile/AppTile';

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
    image: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/IMG-19296604_m_jpeg_1-homepage_highlight_1_banner_retina_medium.jpg?inline=true",
    imageAlt: "MacBook Neo",
    badge: "ใหม่",
    title: "MacBook Neo",
    cta: "สุดปัง ในราคาสุดว้าว",
    description: "เริ่มต้น ฿19,900",
  },
  {
    image: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/IMG-12357237_555acff4-bf78-4326-aaf4-46862a02bebc_-homepage_small_banner_retina_medium%20(1).jpg?inline=true",
    imageAlt: "MacBook Air M5",
    badge: "ใหม่",
    title: "MacBook Air M5",
    cta: "พลังเร็วติดปีก",
    description: "เริ่มต้น ฿36,900",
  },
  {
    image: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/IMG-19240159_m_jpeg_1_90df57f2-3345-4264-bd88-3828561be1a2-homepage_small_banner_retina_medium.jpg?inline=true",
    imageAlt: "iPad Air M4",
    badge: "ใหม่",
    title: "iPad Air M4",
    cta: "ฟิ้วววว",
    description: "เริ่มต้น ฿21,900",
  },
  {
    image: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/IMG-19249573_m_jpeg_1_43a6bb68-190f-42fc-8865-d6e77417c399-homepage_small_banner_retina_medium.jpg?inline=true",
    imageAlt: "MacBook Pro M5",
    badge: "ใหม่",
    title: "MacBook Pro M5",
    cta: "เร็วและอัจฉริยะเหลือร้าย",
    description: "เริ่มต้น ฿56,900",
  },
  {
    image: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/IMG-19249573_m_jpeg_1_43a6bb68-190f-42fc-8865-d6e77417c399-homepage_small_banner_retina_medium.jpg?inline=true",
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
