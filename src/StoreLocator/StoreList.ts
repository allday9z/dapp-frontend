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
    id: "IS-TM",
    name: "iStudio เดอะมอลล์ ไลฟ์สโตร์ งามวงศ์วาน",
    lat: 13.8553219,
    lng: 100.5423525,
    shortAddress: "เมืองนนทบุรี, นนทบุรี",
    mapUrl: "",
    fullAddress: "ร้าน iStudio by UFicon ชั้น 3 ศูนย์การค้าเดอะมอลล์ไลฟ์สโตร์ งามวงศ์วาน เลขที่ 30/39-50 (หรือ 430) ถนนงามวงศ์วาน ตำบลบางเขน อำเภอเมืองนนทบุรี จังหวัดนนทบุรี 11000",
    phoneUrl: "tel://+66845280555",
    phoneText: "084 528 0555",
    hours: "เปิดให้บริการทุกวัน 10:00 น. - 21:00 น.",
    services: [
      { label: "Apple Premium Partner", url: "/" },
      { label: "Drop Off Servicing", url: "/" },
      { label: "Click & Collect Available", url: "/" },
      { label: "Trade-in Service Available", url: "/" }
    ]
  },
  {
    id: "IS-FI",
    name: "iStudio แฟชั่นไอส์แลนด์",
    lat: 13.8267475,
    lng: 100.6794699,
    shortAddress: "คันนายาว, กรุงเทพมหานคร",
    mapUrl: "",
    fullAddress: "ร้าน iStudio by UFicon ศูนย์การค้าแฟชั่นไอส์แลนด์ เลขที่ 587, 589, 589/7-9 ถนนรามอินทรา แขวงคันนายาว เขตคันนายาว กรุงเทพมหานคร 10230",
    phoneUrl: "tel://+66845280222",
    phoneText: "084 528 0222",
    hours: "Every day 10:00 - 21:00",
    services: [
      { label: "Apple Official Technical Support", url: "/" },
      { label: "See all sessions at this store", url: "/" },
      { label: "Reserve a shopping session", url: "/" },
      { label: "See what your device is worth", url: "/" },
      { label: "Get help here", url: "/" }
    ]
  },
  {
    id: "IS-PN",
    name: "iStudio เดอะพรอมานาด",
    lat: 13.82691068836558,
    lng: 100.67771883017656,
    shortAddress: "คันนายาว, กรุงเทพมหานคร",
    mapUrl: "",
    fullAddress: "ร้าน iStudio by UFicon ห้างสรรพสินค้า เดอะพรอมานาด ห้องเลขที่ 1026-1027เลขที่ 587 ถนนรามอินทรา แขวง คันนายาว เขตคันนายาว กรุงเทพมหานคร 10230",
    phoneUrl: "tel://+66854427077",
    phoneText: "085 442 7077",
    hours: "Every day 10:00 - 22:00",
    services: [
      { label: "Apple Official Technical Support", url: "/" },
      { label: "See all sessions at this store", url: "/" },
      { label: "Reserve a shopping session", url: "/" },
      { label: "See what your device is worth", url: "/" },
      { label: "Get help here", url: "/" }
    ]
  },
  {
    id: "IS-TR",
    name: "iStudio ศูนย์การค้าโรบินสันไลฟ์สไตล์ ตรัง ",
    lat: 7.564249985325683, 
    lng: 99.62746092019248,
    shortAddress: "เมืองตรัง, ตรัง",
    mapUrl: "",
    fullAddress: "ร้าน iStudio by UFicon ศูนย์การค้าโรบินสันไลฟ์สไตล์ ตรัง ห้องเลขที่ 204 ชั้น 2 เลขที่ 138 ถนนพัทลุง ตำบลทับเที่ยง อำเภอเมืองตรัง จังหวัดตรัง 92000",
    phoneUrl: "tel://+6689 071 9900",
    phoneText: "089 071 9900",
    hours: "Every day 10:00 - 21:00",
    services: [
      { label: "Apple Official Technical Support", url: "/" },
      { label: "See all sessions at this store", url: "/" },
      { label: "Reserve a shopping session", url: "/" },
      { label: "See what your device is worth", url: "/" },
      { label: "Get help here", url: "/" }
    ]
  },
  {
    id: "IS-TA",
    name: "iStudio เทอร์มินอล 21 อโศก ",
    lat: 14.249394560819866, 
    lng: 101.05868468810746,
    shortAddress: "สุขุมวิท, กรุงเทพมหานคร",
    mapUrl: "",
    fullAddress: "ร้าน iStudio by UFicon ศูนย์การค้า เทอร์มินอล 21 อโศก ชั้น 1 ห้อง 1044 เลขที่ 88 ซอยสุขุมวิท 19 (วัฒนา) ถนนสุขุมวิท แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพมหานคร 10110",
    phoneUrl: "tel://+66615899967",
    phoneText: "061 589 9967",
    hours: "Every day 10:00 - 21:00",
    services: [
      { label: "Apple Official Technical Support", url: "/" },
      { label: "See all sessions at this store", url: "/" },
      { label: "Reserve a shopping session", url: "/" },
      { label: "See what your device is worth", url: "/" },
      { label: "Get help here", url: "/" }
    ]
  },
  {
    id: "IS-TK",
    name: "iStudio เทอร์มินอล 21 โคราช ",
    lat: 14.98166889344612, 
    lng: 102.09122259155694,
    shortAddress: "อำเภอเมือง, โคราช",
    mapUrl: "",
    fullAddress: "ร้าน iStudio by UFicon ศูนย์การค้า เทอร์มินอล 21 โคราช ชั้น 1 ห้อง 1040 เลขที่ 99 ถนนมิตรภาพ-หนองคาย ตำบลในเมือง อำเภอเมือง จังหวัดนครราชสีมา 30000",
    phoneUrl: "tel://+66922590299",
    phoneText: "092 259 0299",
    hours: "Every day 10:00 - 21:00",
    services: [
      { label: "Apple Official Technical Support", url: "/" },
      { label: "See all sessions at this store", url: "/" },
      { label: "Reserve a shopping session", url: "/" },
      { label: "See what your device is worth", url: "/" },
      { label: "Get help here", url: "/" }
    ]
  },
  {
    id: "IS-KB",
    name: "iStudio เซ็นทรัล กระบี่ ",
    lat: 8.100766590691922, 
    lng: 98.89230914051262,
    shortAddress: "อำเภอเมือง,กระบี่",
    mapUrl: "",
    fullAddress: "ร้าน iStudio by UFicon ศูนย์การค้า เซ็นทรัล กระบี่ ชั้น G ถ.ศรีพังงา ตำบลกระบี่ใหญ่ อำเภอเมืองกระบี่ จังหวัดกระบี่ 81000",
    phoneUrl: "tel://+66657292887",
    phoneText: "065 729 2887",
    hours: "Every day 10:00 - 21:00",
    services: [
      { label: "Apple Official Technical Support", url: "/" },
      { label: "See all sessions at this store", url: "/" },
      { label: "Reserve a shopping session", url: "/" },
      { label: "See what your device is worth", url: "/" },
      { label: "Get help here", url: "/" }
    ]
  },
];