export type LobStripeTileId =
  | "mac"
  | "i-pad"
  | "i-phone"
  | "watch"
  | "music"
  | "tv-home"
  | "accessories"
  | "entertainment"
  | "airtag";

export interface LobStripeTileItem {
  id: LobStripeTileId;
  name: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
}

export const lobStripeTiles: LobStripeTileItem[] = [
  {
    id: "mac",
    name: "Mac",
    price: "เริ่มต้น ฿34,900",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/lob-stripe-_macbook-101525%20(1).avif?inline=true",
    imageAlt: "Mac",
  },
  {
    id: "i-phone",
    name: "iPhone",
    price: "เริ่มต้น ฿14,500",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/store-card-13-iphone-nav-202509.avif?inline=true",
    imageAlt: "iPhone",
  },
  {
    id: "i-pad",
    name: "iPad",
    price: "เริ่มต้น ฿12,900",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/lob-stripe-Ipad-050724-2%20(1).avif?inline=true",
    imageAlt: "iPad",
  },
  {
    id: "watch",
    name: "Watch",
    price: "เริ่มต้น ฿7,900",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/store-card-13-watch-nav-202509%20(1).avif?inline=true",
    imageAlt: "Apple Watch",
  },
  {
    id: "music",
    name: "Music",
    price: "เริ่มต้น ฿4,990",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/store-card-13-airpods-nav-202509%20(1).webp?inline=true",
    imageAlt: "Music",
  },
  {
    id: "tv-home",
    name: "TV และบ้าน",
    price: "เริ่มต้น ฿2,390",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/LOB_TV.webp?inline=true",
    imageAlt: "Apple TV และบ้าน",
  },
  {
    id: "accessories",
    name: "อุปกรณ์เสริม",
    price: "เริ่มต้น ฿790",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/store-card-13-accessories-nav-202603_1.avif?inline=true",
    imageAlt: "อุปกรณ์เสริม",
  },
  {
    id: "airtag",
    name: "AirTag",
    price: "เริ่มต้น ฿1,190",
    imageSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/9.LOB-AirTag_e7f10ef7-d849-439d-a224-d316f3bd161e.webp?inline=true",
    imageAlt: "AirTag",
  },
];
