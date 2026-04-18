export interface StoreService {
  label: string;
  url: string;
}

export interface StoreData {
  id: string;
  name: string;
  lat: number;
  lng: number;
  shortAddress: string;
  mapUrl: string;
  fullAddress: string;
  phoneUrl?: string;
  phoneText?: string;
  lineUrl?: string;
  hours: string;
  contactUrl?: string;
  contactText?: string;
  services?: StoreService[];
}

export const STORES_DATA: StoreData[] = [
  {
    id: "1",
    name: "iStudio เดอะมอลล์ ไลฟ์สโตร์ งามวงศ์วาน",
    lat: 13.74424,
    lng: 100.546207,
    shortAddress: "เมืองนนทบุรี, นนทบุรี",
    mapUrl: "",
    fullAddress: "ร้าน iStudio by UFicon ศูนย์การค้าเดอะมอลล์ไลฟ์สโตร์ งามวงศ์วาน เลขที่ 30/39-50 (หรือ 430) ถนนงามวงศ์วาน ตำบลบางเขน อำเภอเมืองนนทบุรี จังหวัดนนทบุรี 11000",
    phoneUrl: "",
    phoneText: "",
    lineUrl: "",
    hours: "Every day 10:00 - 22:00",
    contactUrl: "",
    contactText: "ติดต่อสาขา",
    services: [
      { label: "Apple Premium Partner", url: "/" },
      { label: "Drop Off Servicing", url: "/" },
      { label: "Click & Collect Available", url: "/" },
      { label: "Trade-in Service Available", url: "/" }
    ]
  },
  {
    id: "2",
    name: "iStudio แฟชั่นไอส์แลนด์",
    lat: 13.8123983,
    lng: 100.0726558,
    shortAddress: "คันนายาว, กรุงเทพมหานคร",
    mapUrl: "",
    fullAddress: "ร้าน iStudio by UFicon ศูนย์การค้าแฟชั่นไอส์แลนด์ เลขที่ 587, 589, 589/7-9 ถนนรามอินทรา แขวงคันนายาว เขตคันนายาว กรุงเทพมหานคร 10230",
    phoneUrl: "",
    phoneText: "",
    hours: "Every day 10:00 - 21:00",
    services: [
      { label: "Apple Official Technical Support", url: "/" },
      { label: "See all sessions at this store", url: "/" },
      { label: "Reserve a shopping session", url: "/" },
      { label: "See what your device is worth", url: "/" },
      { label: "Get help here", url: "/" }
    ]
  }
];