import "./LOBPage.css";
import { HeadBanner } from "./HeadBanner";
import { PLPProductRow } from "../../PLPProductRow/PLPProductRow";
import { FamilyStripe } from "../../FamilyStripe/FamilyStripe";
import {
  macCollectionFamilyItems,
  macbookAirFamilyItems,
  macbookProFamilyItems,
} from "../../FamilyStripe/familyStripeData";
import macbookData from "../../data/products/macbook.json";
import type { PLPProduct } from "../../PLPProductRow/PLPProductRow";

type LOBCollection = "macbook" | "macbook-air" | "macbook-pro";

const macbookHero: PLPProduct = {
  id: "macbook-neo-hero",
  badge: "ใหม่",
  badgeColor: "#bf4800",
  name: "MacBook Neo",
  description: "สุดปัง ในราคาสุดว้าว\nเริ่มต้น ฿19,900",
  imageSrc: "/product/macbook/banner-macbook-neo.png",
  imageAlt: "MacBook Neo",
  detailHref: "#",
  buyHref: "#",
};

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
    products: macbookData as PLPProduct[],
    showHero: true,
  },
  "macbook-air": {
    heading: "MacBook Air",
    familyItems: macbookAirFamilyItems,
    products: (macbookData as PLPProduct[]).filter(p => p.name.toLowerCase().includes("air")),
  },
  "macbook-pro": {
    heading: "MacBook Pro",
    familyItems: macbookProFamilyItems,
    products: (macbookData as PLPProduct[]).filter(p => p.name.toLowerCase().includes("pro") && !p.name.toLowerCase().includes("air")),
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
      
      <HeadBanner />
      
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
