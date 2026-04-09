import { AppTileGrid } from '../../AppTileGrid/AppTileGrid';
import type { IAppTileProps } from '../../AppTile/AppTile';

const accessoriesItems: IAppTileProps[] = [
  {
    image: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/Magic_Keyboard_with_Touch_ID_US-homepage_small_banner_retina_medium.jpg?inline=true",
    imageAlt: "อุปกรณ์เสริม Mac",
    badge: "ใหม่",
    title: "อุปกรณ์เสริม Mac",
    cta: "เพิ่มประสิทธิภาพการทำงานบน Mac ให้สะดวกและครบยิ่งขึ้น",
    description: "เริ่มต้น ฿790",
  },
  {
    image: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/magic_keyboard_e0530b6e-311d-4ade-a51c-9d0a5b31f1df.webp?inline=true",
    imageAlt: "อุปกรณ์เสริม iPad",
    badge: "ใหม่",
    title: "อุปกรณ์เสริม iPad",
    cta: "เติมเต็มการใช้งาน iPad ให้หลากหลาย ทั้งทำงานและความบันเทิง",
    description: "เริ่มต้น ฿390",
  },
  {
    image: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/Apple_TV_Remote_PDP_Image_Position-1_LAEN_R1_v1.webp?inline=true",
    imageAlt: "อุปกรณ์เสริม Apple TV",
    badge: "ใหม่",
    title: "อุปกรณ์เสริม Apple TV",
    cta: "เติมเต็มความบันเทิงบน Apple TV ให้สมบูรณ์ยิ่งขึ้น",
    description: "เริ่มต้น ฿2,390",
  },
  {
    image: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/WN_Watch_Accessories.webp?inline=true",
    imageAlt: "อุปกรณ์เสริม Apple Watch",
    badge: "ใหม่",
    title: "อุปกรณ์เสริม Watch",
    cta: "เสริมการใช้งาน Apple Watch ให้ลงตัวในทุกไลฟ์สไตล์",
    description: "เริ่มต้น ฿1,290",
  },
  {
    image: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/IMG-17899365_m_jpeg_1_e428aa39-7da4-499d-b4c0-ff9a51722db3.webp?inline=true",
    imageAlt: "อุปกรณ์เสริม iPhone",
    badge: "ใหม่",
    title: "อุปกรณ์เสริม iPhone",
    cta: "เพิ่มความสะดวกและปกป้อง iPhone ของคุณ ด้วยอุปกรณ์เสริมคุณภาพ",
    description: "เริ่มต้น ฿790",
  },
];

export const AccessoriesSection = () => (
  <section aria-labelledby="accessories-heading" className="accessories-section">
    <h2 id="accessories-heading" className="sr-only">Featured Apple Accessories</h2>
    <AppTileGrid
      heading="อุปกรณ์เสริม Apple"
      items={accessoriesItems}
      className="organism-instance accessories-grid"
    />
  </section>
);