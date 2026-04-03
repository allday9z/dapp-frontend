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
    imageSrc: "mac0.png",
    imageAlt: "Mac",
  },
  {
    id: "i-pad",
    name: "iPad",
    price: "เริ่มต้น ฿12,900",
    imageSrc: "i-pad0.png",
    imageAlt: "iPad",
  },
  {
    id: "i-phone",
    name: "iPhone",
    price: "เริ่มต้น ฿14,500",
    imageSrc: "i-phone0.png",
    imageAlt: "iPhone",
  },
  {
    id: "watch",
    name: "WATCH",
    price: "เริ่มต้น ฿7,900",
    imageSrc: "apple-watch0.png",
    imageAlt: "Apple Watch",
  },
  {
    id: "music",
    name: "Music",
    price: "เริ่มต้น ฿4,990",
    imageSrc: "mac0.png",
    imageAlt: "Music",
  },
  {
    id: "tv-home",
    name: "TV และบ้าน",
    price: "เริ่มต้น ฿2,390",
    imageSrc: "asdf-10.png",
    imageAlt: "Apple TV และบ้าน",
  },
  {
    id: "accessories",
    name: "อุปกรณ์เสริม",
    price: "เริ่มต้น ฿790",
    imageSrc: "accessories0.png",
    imageAlt: "อุปกรณ์เสริม",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    price: "เริ่มต้น ฿990",
    imageSrc: "accessories0.png",
    imageAlt: "Entertainment",
  },
  {
    id: "airtag",
    name: "AirTag",
    price: "เริ่มต้น ฿1,190",
    imageSrc: "air-tag0.png",
    imageAlt: "AirTag",
  },
];
