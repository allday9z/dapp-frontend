import "./LOBPage.css";
import { PLPProductRow } from "../../PLPProductRow/PLPProductRow";
import { FamilyStripe } from "../../FamilyStripe/FamilyStripe";
import {
  macCollectionFamilyItems,
  macbookAirFamilyItems,
  macbookProFamilyItems,
} from "../../FamilyStripe/familyStripeData";
import macbookAirData from "../../data/products/macbook-air.json";
import macbookProData from "../../data/products/macbook-pro.json";
import type { PLPProduct } from "../../PLPProductRow/PLPProductRow";

type LOBCollection = "macbook" | "macbook-air" | "macbook-pro";

const macbookHero: PLPProduct = {
  id: "macbook-neo-hero",
  badge: "ใหม่",
  badgeColor: "#bf4800",
  name: "MacBook Neo",
  description: "สุดปัง ในราคาสุดว้าว\nเริ่มต้น ฿19,900",
  imageSrc: "/image-1090.png",
  imageAlt: "MacBook Neo",
  detailHref: "#",
  buyHref: "#",
};

const macCollectionRows: PLPProduct[] = [
  {
    id: "macbook-pro-family",
    name: "MacBook Pro",
    description: "แรงล้ำระดับโปร\nเริ่มต้น ฿69,900",
    imageSrc: "/product/family-stripe/macbook-pro-14-m1.png",
    imageAlt: "MacBook Pro",
    detailHref: "/collections/macbook-pro",
    buyHref: "#",
  },
  {
    id: "macbook-neo-family",
    badge: "ใหม่",
    badgeColor: "#bf4800",
    name: "MacBook Neo",
    description: "สุดปัง ในราคาสุดว้าว\nเริ่มต้น ฿19,900",
    imageSrc: "/image-1090.png",
    imageAlt: "MacBook Neo",
    detailHref: "/collections/macbook",
    buyHref: "#",
  },
  {
    id: "macbook-air-family",
    name: "MacBook Air",
    description: "ชิป M5 เบาบางทรงพลัง\nเริ่มต้น ฿22,500",
    imageSrc: "/product/family-stripe/macbook-air-13-m2.png",
    imageAlt: "MacBook Air",
    detailHref: "/collections/macbook-air",
    buyHref: "#",
  },
  {
    id: "mac-studio-family",
    name: "Mac Studio",
    description: "เดสก์ท็อประดับโปร\nเริ่มต้น ฿69,900",
    imageSrc: "/image-1100.png",
    imageAlt: "Mac Studio",
    detailHref: "#",
    buyHref: "#",
  },
  {
    id: "imac-family",
    name: "iMac",
    description: "บาง เบา ทรงพลัง\nเริ่มต้น ฿49,900",
    imageSrc: "/product/macbook/macbook-pro-hero.png",
    imageAlt: "iMac",
    detailHref: "#",
    buyHref: "#",
  },
  {
    id: "mac-mini-family",
    name: "Mac mini",
    description: "เล็กแรงเกินตัว\nเริ่มต้น ฿22,900",
    imageSrc: "/image-1100.png",
    imageAlt: "Mac mini",
    detailHref: "#",
    buyHref: "#",
  },
  {
    id: "studio-display-family",
    name: "Studio Display",
    description: "จอภาพเพื่อสายโปร\nเริ่มต้น ฿54,900",
    imageSrc: "/image-1110.png",
    imageAlt: "Studio Display",
    detailHref: "#",
    buyHref: "#",
  },
  {
    id: "mac-accessories-family",
    name: "อุปกรณ์เสริม Mac",
    description: "คีย์บอร์ด เมาส์ และอีกมากมาย\nเลือกซื้อได้เลย",
    imageSrc: "/product/family-stripe/mac-accessories.png",
    imageAlt: "Mac Accessories",
    detailHref: "#",
    buyHref: "#",
  },
];

const pageConfig: Record<
  LOBCollection,
  {
    heading: string;
    familyItems: typeof macbookProFamilyItems;
    products: PLPProduct[];
    showHero?: boolean;
  }
> = {
  macbook: {
    heading: "MacBook",
    familyItems: macCollectionFamilyItems,
    products: macCollectionRows,
    showHero: true,
  },
  "macbook-air": {
    heading: "MacBook Air",
    familyItems: macbookAirFamilyItems,
    products: macbookAirData as PLPProduct[],
  },
  "macbook-pro": {
    heading: "MacBook Pro",
    familyItems: macbookProFamilyItems,
    products: macbookProData as PLPProduct[],
  },
};

interface LOBPageProps {
  collection?: LOBCollection;
}

export const LOBPage = ({ collection = "macbook-pro" }: LOBPageProps) => {
  const config = pageConfig[collection];

  return (
    <div className="lob-page">
      <FamilyStripe
        items={config.familyItems}
        seeAllLabel="ดูข้อมูล Mac ทั้งหมด"
        seeAllHref="/pages/view-all-mac"
      />

      {config.showHero && (
        <section className="lob-page__hero" aria-labelledby="lob-hero-heading">
          <div className="lob-page__hero-copy">
            <span className="lob-page__hero-badge">{macbookHero.badge}</span>
            <h1 id="lob-hero-heading" className="lob-page__hero-title">
              {macbookHero.name}
            </h1>
            <p className="lob-page__hero-description">
              {macbookHero.description.split("\n").map((line, index) => (
                <span key={index}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
            <div className="lob-page__hero-actions">
              <a href={macbookHero.detailHref} className="lob-page__hero-detail">
                ดูรายละเอียดสินค้า
                <span aria-hidden="true">›</span>
              </a>
              <a href={macbookHero.buyHref} className="lob-page__hero-buy">
                สั่งซื้อ
              </a>
            </div>
          </div>
          <div className="lob-page__hero-image-wrap">
            <img
              src={macbookHero.imageSrc}
              alt={macbookHero.imageAlt}
              className="lob-page__hero-image"
            />
          </div>
        </section>
      )}

      <div className="lob-page__inner">
        {!config.showHero && (
          <div className="lob-page__heading-row">
            <h1 className="lob-page__heading">{config.heading}</h1>
          </div>
        )}

        {config.products.map((product) => (
          <PLPProductRow key={product.id} product={product} variant="lob" />
        ))}
      </div>
    </div>
  );
};
