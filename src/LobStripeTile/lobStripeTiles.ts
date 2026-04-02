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
  imageWidth: string;
  imageHeight: string;
  framePadding?: string;
  frameAlign?: "stretch" | "center" | "start";
  imageJustify?: "center" | "start";
  contentJustify?: "center" | "start";
  labelWidth?: string;
  priceWidth?: string;
}

export const lobStripeTiles: LobStripeTileItem[] = [
  {
    id: "mac",
    name: "Mac",
    price: "เริ่มต้น ฿34,900",
    imageSrc: "mac0.png",
    imageAlt: "Mac",
    imageWidth: "6.1875rem",
    imageHeight: "2.25rem",
  },
  {
    id: "i-pad",
    name: "iPad",
    price: "เริ่มต้น ฿12,900",
    imageSrc: "i-pad0.png",
    imageAlt: "iPad",
    imageWidth: "4.78125rem",
    imageHeight: "3.7525rem",
    framePadding: "0.625rem",
  },
  {
    id: "i-phone",
    name: "iPhone",
    price: "เริ่มต้น ฿14,500",
    imageSrc: "i-phone0.png",
    imageAlt: "iPhone",
    imageWidth: "3.758125rem",
    imageHeight: "3.758125rem",
    contentJustify: "center",
  },
  {
    id: "watch",
    name: "WATCH",
    price: "เริ่มต้น ฿7,900",
    imageSrc: "apple-watch0.png",
    imageAlt: "Apple Watch",
    imageWidth: "5.125rem",
    imageHeight: "3.74rem",
    framePadding: "0.625rem",
    labelWidth: "4.625rem",
    priceWidth: "4.5625rem",
  },
  {
    id: "music",
    name: "Music",
    price: "เริ่มต้น ฿4,990",
    imageSrc: "mac0.png",
    imageAlt: "Music",
    imageWidth: "4.828125rem",
    imageHeight: "3.72rem",
    framePadding: "0.625rem",
  },
  {
    id: "tv-home",
    name: "TV และบ้าน",
    price: "เริ่มต้น ฿2,390",
    imageSrc: "asdf-10.png",
    imageAlt: "Apple TV และบ้าน",
    imageWidth: "3.9375rem",
    imageHeight: "3.76375rem",
    framePadding: "0.625rem",
  },
  {
    id: "accessories",
    name: "อุปกรณ์เสริม",
    price: "เริ่มต้น ฿790",
    imageSrc: "accessories0.png",
    imageAlt: "อุปกรณ์เสริม",
    imageWidth: "3.75rem",
    imageHeight: "3.75rem",
    framePadding: "0.625rem",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    price: "เริ่มต้น ฿990",
    imageSrc: "accessories0.png",
    imageAlt: "Entertainment",
    imageWidth: "100%",
    imageHeight: "4.125rem",
    frameAlign: "stretch",
    imageJustify: "start",
    contentJustify: "center",
  },
  {
    id: "airtag",
    name: "AirTag",
    price: "เริ่มต้น ฿1,190",
    imageSrc: "air-tag0.png",
    imageAlt: "AirTag",
    imageWidth: "5rem",
    imageHeight: "2.75rem",
    framePadding: "0.625rem",
    imageJustify: "start",
  },
];
