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
  imageUrl?: string;
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
    fullAddress: "iStudio by UFicon ศูนย์การค้าเดอะมอลล์ ไลฟ์สโตร์ งามวงศ์วาน ชั้น 3 หมู่ 2 ถนนงามวงศ์วาน อำเภอเมืองนนทบุรี จังหวัดนนทบุรี 11000",
    phoneUrl: "tel://+66845280555",
    phoneText: "084 528 0555",
    hours: "เปิดให้บริการทุกวัน 10:00 น. - 21:00 น.",
    imageUrl: "https://www.uficon.com/app/uploads/2025/10/iS-TM.jpg",
    services: [
      { label: "Apple Premium Partner", url: "/" },
      { label: "Drop Off Servicing", url: "/" },
      { label: "Click & Collect Available", url: "/" },
      { label: "Trade-in Service Available", url: "/" },
      { label: "Gruop Demo", url: "/" }
    ]
  },
  {
    id: "IS-FI",
    name: "iStudio แฟชั่นไอส์แลนด์",
    lat: 13.8267475,
    lng: 100.6794699,
    shortAddress: "คันนายาว, กรุงเทพมหานคร",
    mapUrl: "",
    fullAddress: "iStudio by UFicon ศูนย์การค้าแฟชั่นไอส์แลนด์ ห้องเลขที่ 2079 ชั้น 2 ถนนรามอินทรา แขวงคันนายาว เขตคันนายาว กรุงเทพฯ 10230",
    phoneUrl: "tel://+66845280222",
    phoneText: "084 528 0222",
    hours: "Every day 10:00 - 21:00",
    imageUrl: "https://www.uficon.com/app/uploads/2025/11/S__61022231.jpg",
    services: [
      { label: "Apple Official Technical Support", url: "/" },
      { label: "See all sessions at this store", url: "/" },
      { label: "Reserve a shopping session", url: "/" },
      { label: "See what your device is worth", url: "/" },
      { label: "Get help here", url: "/" },
      { label: "Gruop Demo", url: "/" }
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
    imageUrl: "https://www.uficon.com/app/uploads/2025/10/iS-PN.jpg",
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
    name: "iStudio โรบินสัน ไลฟ์สไตล์ ตรัง",
    lat: 7.564249985325683, 
    lng: 99.62746092019248,
    shortAddress: "เมืองตรัง, ตรัง",
    mapUrl: "",
    fullAddress: "ร้าน iStudio by UFicon ศูนย์การค้าโรบินสันไลฟ์สไตล์ ตรัง ห้องเลขที่ 204 ชั้น 2 เลขที่ 138 ถนนพัทลุง ตำบลทับเที่ยง อำเภอเมืองตรัง จังหวัดตรัง 92000",
    phoneUrl: "tel://+6689 071 9900",
    phoneText: "089 071 9900",
    hours: "Every day 10:00 - 21:00",
    imageUrl: "https://www.uficon.com/app/uploads/2025/10/iS-TR.jpg",
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
    name: "iStudio เทอร์มินอล 21 อโศก",
    lat: 13.7379635, 
    lng: 100.5578309,
    shortAddress: "สุขุมวิท, กรุงเทพมหานคร",
    mapUrl: "",
    fullAddress: "iStudio by UFicon ศูนย์การค้า เทอร์มินอล 21 อโศก ชั้น 1 ห้อง 1044 เลขที่ 88 ซอยสุขุมวิท 19 (วัฒนา) ถนนสุขุมวิท แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพมหานคร 10110",
    phoneUrl: "tel://+66615899967",
    phoneText: "061 589 9967",
    hours: "Every day 10:00 - 21:00",
    imageUrl: "https://www.uficon.com/app/uploads/2025/11/S__47112304.jpg",
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
    imageUrl: "https://www.uficon.com/app/uploads/2025/10/iS-TK.jpg",
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
    imageUrl: "https://www.uficon.com/app/uploads/2025/10/1V2A0799-3.jpg",
    services: [
      { label: "Apple Official Technical Support", url: "/" },
      { label: "See all sessions at this store", url: "/" },
      { label: "Reserve a shopping session", url: "/" },
      { label: "See what your device is worth", url: "/" },
      { label: "Get help here", url: "/" }
    ]
  },
  {
    id: "US-SWU",
    name: "U•Store มหาวิทยาลัยศรีนครินทรวิโรฒ ประสานมิตร",
    lat: 13.7446599, 
    lng: 100.5609688,
    shortAddress: "วัฒนา, กรุงเทพมหานคร",
    mapUrl: "",
    fullAddress: "U•Store by UFicon มหาวิทยาลัยศรีนครินทรวิโรฒ ประสานมิตร อาคารบริการศาสตราจารย์ ม.ล. ปิ่น มาลากุล เลขที่ 114 ซอยสุขุมวิท 23 ถนนสุขุมวิท แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพมหานคร 10110",
    phoneUrl: "tel://+66807815577",
    phoneText: "080 781 5577",
    hours: "วันจันทร์-วันเสาร์ 09:00 - 18:00 น. (หยุดวันอาทิตย์และวันนักขัตฤกษ์)",
    imageUrl: "https://education.uficon.com/app/uploads/2025/10/US-SWU.jpg",
    services: [
      { label: "Apple Official Technical Support", url: "/" },
      { label: "See all sessions at this store", url: "/" },
      { label: "Gruop Demo", url: "/" },
      { label: "Reserve a shopping session", url: "/" },
      { label: "See what your device is worth", url: "/" },
      { label: "Get help here", url: "/" }
    ]
  },
  {
    id: "US-SR",
    name: "U•Store ศิริราช ปิยมหาราชการุณย์",
    lat: 13.760024682507293, 
    lng: 100.48623364233126,
    shortAddress: "บางกอกน้อย, กรุงเทพมหานคร",
    mapUrl: "",
    fullAddress: "U•Store by UFicon โรงพยาบาลศิริราช ปิยมหาราชการุณย์ (SiPH) ชั้น 1 มหาวิทยาลัยมหิดล เลขที่ 2 ถนนพรานนก แขวงศิริราช เขตบางกอกน้อย กรุงเทพฯ 10700",
    phoneUrl: "tel://+66849339760",
    phoneText: "084 933 9760",
    hours: "วันจันทร์-วันเสาร์ 09:00 - 18:00 น. (หยุดวันอาทิตย์และวันนักขัตฤกษ์)",
    imageUrl: "https://education.uficon.com/app/uploads/2025/01/Untitled-2.jpg",
    services: [
      { label: "Apple Official Technical Support", url: "/" },
      { label: "See all sessions at this store", url: "/" },
      { label: "Reserve a shopping session", url: "/" },
      { label: "See what your device is worth", url: "/" },
      { label: "Get help here", url: "/" }
    ]
  },
   {
    id: "US-PSU",
    name: "U•Store โรงพยาบาลสงขลานครินทร์",
    lat: 7.006882915914251, 
    lng: 100.49359889861147,
    shortAddress: "หาดใหญ่, สงขลา",
    mapUrl: "",
    fullAddress: "U•Store by UFicon โรงพยาบาลสงขลานครินทร์ อาคารรัตนชีวรักษ์ ชั้น 1 มหาวิทยาลัยสงขลานครินทร์ เลขที่ 15 ถนนกาญจนวณิชย์ ต.หาดใหญ่ อ.หาดใหญ่ จ.สงขลา 90110",
    phoneUrl: "tel://+66614166533",
    phoneText: "061 416 6533",
    hours: "วันจันทร์-วันเสาร์ 09:00 - 18:00 น. (หยุดวันอาทิตย์และวันนักขัตฤกษ์)",
    imageUrl: "https://education.uficon.com/app/uploads/2025/10/US-PSU.jpg",
    services: [
      { label: "Apple Official Technical Support", url: "/" },
      { label: "See all sessions at this store", url: "/" },
      { label: "Reserve a shopping session", url: "/" },
      { label: "See what your device is worth", url: "/" },
      { label: "Get help here", url: "/" }
    ]
  },
  {
    id: "US-UBRU",
    name: "U•Store มหาวิทยาลัยราชภัฏอุบลราชธานี",
    lat: 15.24641060739794, 
    lng: 104.8490139539419,
    shortAddress: "เมือง, อุบลราชธานี",
    mapUrl: "",
    fullAddress: "U•Store by UFicon มหาวิทยาลัยราชภัฏอุบลราชธานี ตึกร้านสวัสดิการ เลขที่ 2 ถนนราชธานี ตำบลในเมือง อำเภอเมือง จังหวัดอุบลราชธานี 34000",
    phoneUrl: "tel://+66655087018",
    phoneText: "065 508 7018",
    hours: "วันจันทร์-วันเสาร์ 09:00 - 18:00 น. (หยุดวันอาทิตย์และวันนักขัตฤกษ์)",
    imageUrl: "https://education.uficon.com/app/uploads/2025/10/US-UBRU.jpg",
    services: [
      { label: "Apple Official Technical Support", url: "/" },
      { label: "See all sessions at this store", url: "/" },
      { label: "Reserve a shopping session", url: "/" },
      { label: "See what your device is worth", url: "/" },
      { label: "Get help here", url: "/" }
    ]
  },
    {
    id: "US-WU",
    name: "U•Store มหาวิทยาลัยวลัยลักษณ์",
    lat: 8.649994435198767, 
    lng: 99.89448842397581,
    shortAddress: "ท่าศาลา, จังหวัดนครศรีธรรมราช",
    mapUrl: "",
    fullAddress: "U•Store by UFicon ศูนย์อาหารช่อประดู่ มหาวิทยาลัยวลัยลักษณ์ ห้องเลขที่ A4 เลขที่ 222 หมู่ที่ 10 ตำบลไทยบุรี อำเภอท่าศาลา จังหวัดนครศรีธรรมราช 80160",
    phoneUrl: "tel://+66982763891",
    phoneText: "098 276 3891",
    hours: "วันจันทร์-วันเสาร์ 09:00 - 18:00 น. (หยุดวันอาทิตย์และวันนักขัตฤกษ์)",
    imageUrl: "https://education.uficon.com/app/uploads/2025/10/US-WU.jpg",
    services: [
      { label: "Apple Official Technical Support", url: "/" },
      { label: "See all sessions at this store", url: "/" },
      { label: "Reserve a shopping session", url: "/" },
      { label: "See what your device is worth", url: "/" },
      { label: "Get help here", url: "/" }
    ]
  },
   {
    id: "US-WU",
    name: "U•Store มหาวิทยาลัยศรีนครินทรวิโรฒ องครักษ์",
    lat: 14.10959700070463, 
    lng: 100.98717971479839,
    shortAddress: "องครักษ์, นครนายก",
    mapUrl: "",
    fullAddress: "U•Store by UFicon มหาวิทยาลัยศรีนครินทรวิโรฒ องครักษ์ เลขที่ 63 หมู่ 7 ถ.รังสิต-นครนายก ต.องครักษ์ อ.องครักษ์ จ.นครนายก 26120",
    phoneUrl: "tel://+66649304522",
    phoneText: "064 930 4522",
    hours: "วันจันทร์-วันเสาร์ 09:00 - 18:00 น. (หยุดวันอาทิตย์และวันนักขัตฤกษ์)",
    imageUrl: "https://education.uficon.com/app/uploads/2024/01/IMG_3187.jpg",
    services: [
      { label: "Apple Official Technical Support", url: "/" },
      { label: "See all sessions at this store", url: "/" },
      { label: "Gruop Demo", url: "/" },
      { label: "Reserve a shopping session", url: "/" },
      { label: "See what your device is worth", url: "/" },
      { label: "Get help here", url: "/" }
    ]
  },
   {
    id: "US-SRU",
    name: "U•Store มหาวิทยาลัยราชภัฏสุราษฎร์ธานี",
    lat: 9.084248988260702, 
    lng: 99.36268561479835,
    shortAddress: "เมืองสุราษฎร์ธานี, สุราษฎร์ธานี",
    mapUrl: "",
    fullAddress: "U•Store by UFicon มหาวิทยาลัยราชภัฏสุราษฎร์ธานี เลขที่ 272 หมู่ที่ 9 ตำบลขุนทะเล อำเภอเมืองสุราษฎร์ธานี จังหวัดสุราษฎร์ธานี 84100",
    phoneUrl: "tel://+66811163633",
    phoneText: "081 116 3633",
    hours: "วันจันทร์-วันเสาร์ 09:00 - 18:00 น. (หยุดวันอาทิตย์และวันนักขัตฤกษ์)",
    imageUrl: "https://education.uficon.com/app/uploads/2025/10/US-SRU.jpg",
    services: [
      { label: "Apple Official Technical Support", url: "/" },
      { label: "See all sessions at this store", url: "/" },
      { label: "Gruop Demo", url: "/" },
      { label: "Reserve a shopping session", url: "/" },
      { label: "See what your device is worth", url: "/" },
      { label: "Get help here", url: "/" }
    ]
  },
   {
    id: "US-WUH",
    name: "U•Store โรงพยาบาลศูนย์การแพทย์ มหาวิทยาลัยวลัยลักษณ์",
    lat: 8.641561244349102, 
    lng: 99.91442798966226,
    shortAddress: "ท่าศาลา, นครศรีธรรมราช",
    mapUrl: "",
    fullAddress: "U•Store by UFicon โรงพยาบาลศูนย์การแพทย์ มหาวิทยาลัยวลัยลักษณ์ อาคาร A ชั้น G ศูนย์การแพทย์มหาวิทยาลัยวลัยลักษณ์ เลขที่ 222 ตำบล ไทยบุรี อำเภอท่าศาลา นครศรีธรรมราช 80160",
    phoneUrl: "tel://+66924372564",
    phoneText: "092 437 2564",
    hours: "วันจันทร์-วันเสาร์ 09:00 - 18:00 น. (หยุดวันอาทิตย์และวันนักขัตฤกษ์)",
    imageUrl: "https://education.uficon.com/app/uploads/2025/10/US-WUH.jpg",
    services: [
      { label: "Apple Official Technical Support", url: "/" },
      { label: "See all sessions at this store", url: "/" },
      { label: "Gruop Demo", url: "/" },
      { label: "Reserve a shopping session", url: "/" },
      { label: "See what your device is worth", url: "/" },
      { label: "Get help here", url: "/" }
    ]
  },
];