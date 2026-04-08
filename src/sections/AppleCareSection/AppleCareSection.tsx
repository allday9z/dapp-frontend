import { ProductStripe } from '../../ProductStripe/ProductStripe';
import { AppStripeTextTile } from '../../AppStripeTextTile';
import type { AppStripeTextTileItem } from '../../AppStripeTextTile/appStripeTextTiles';

const appleCareItems: AppStripeTextTileItem[] = [
  {
    id: "applecare-mac",
    href: "/collections/applecare-mac",
    badge: "",
    badgeColor: "#6e6e73",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/AppleCare_Mac_PDP_Image_Position-1_Update23__en-US.webp?inline=true",
    title: "Mac",
    subtitle: "AppleCare+ สำหรับ 3 ปี",
    description: "เพิ่ม AppleCare+ ในขั้นตอนการซื้อ Mac ในตะกร้าสินค้า",
  },
  {
    id: "applecare-ipad",
    href: "/collections/applecare-ipad",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/AppleCare_iPad_Pro_13-inch_M4_Chip-homepage_small_banner_retina_medium.jpg?inline=true",
    badge: "",
    badgeColor: "#6e6e73",
    title: "iPad",
    subtitle: "AppleCare+ สำหรับ 2 ปี",
    description: "เพิ่ม AppleCare+ ในขั้นตอนการซื้อ iPad ในตะกร้าสินค้า",
  },
  {
    id: "applecare-iphone",
    href: "/collections/applecare-iphone",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/iPhone16Plus_iPhone16_AppleCarePlus_Combo.webp?inline=true",
    badge: "",
    badgeColor: "#6e6e73",
    title: "iPhone",
    subtitle: "AppleCare+ สำหรับ 2 ปี",
    description: "เพิ่ม AppleCare+ ในขั้นตอนการซื้อ iPhone ในตะกร้าสินค้า",
  },
  {
    id: "applecare-watch",
    href: "/collections/applecare-watch",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/Apple_Watch_Series_10_AppleCarePlus.webp?inline=true",
    badge: "",
    badgeColor: "#6e6e73",
    title: "Apple Watch",
    subtitle: "AppleCare+ สำหรับ 2 ปี",
    description: "เพิ่ม AppleCare+ ในขั้นตอนการซื้อ​ Apple Watch ในตะกร้าสินค้า",
  },
  {
    id: "applecare-headphone",
    href: "/collections/applecare-headphone",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/AirPods_4_Beats_Studio_Buds_Plus_AppleCarePlus_Combo.webp?inline=true",
    badge: "",
    badgeColor: "#6e6e73",
    title: "AirPods 4",
    subtitle: "AppleCare+ สำหรับ 2 ปี",
    description: "เพิ่ม AppleCare+ ในขั้นตอนการซื้อหูฟัง ในตะกร้าสินค้า",
  },
];

export const AppleCareSection = () => (
  <section className="hp-partners" aria-labelledby="applecare-heading">
    <div className="hp-heading-row">
      <h2 id="applecare-heading" className="hp-heading">
        เพิ่มความอุ่นใจด้วย AppleCare+
      </h2>
    </div>
    <ProductStripe className="hp-partner-stripe" ariaLabel="เพิ่มความอุ่นใจด้วย AppleCare+" arrowType="partner" gap={16}>
      {appleCareItems.map(item => (
        <AppStripeTextTile key={item.id} item={item} className="app-text-tile-instance" />
      ))}
    </ProductStripe>
    <div className="hp-divider" />
  </section>
);
