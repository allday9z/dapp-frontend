import "./LOBPage.css";
import { HeadBanner } from "./HeadBanner";
import { PLPProductRow } from "@/components/molecules/PLPProductRow/PLPProductRow";
import { FamilyStripe } from "@/components/organisms/FamilyStripe/FamilyStripe";
import { macCollectionFamilyItems } from "@/components/organisms/FamilyStripe/familyStripeData";
import type { PLPProduct } from "@/components/molecules/PLPProductRow/PLPProductRow";
import hero from "@/data/mac-lob-hero.json";
import macFamilies from "@/data/mac-families.json";

const families = macFamilies as PLPProduct[];

export const LOBPage = () => (
  <div className="lob-page">
    <FamilyStripe
      items={macCollectionFamilyItems}
      seeAllLabel="ดูข้อมูล Mac ทั้งหมด"
      seeAllHref="/pages/view-all-mac"
    />

    <HeadBanner />

    <section className="lob-page__hero" aria-labelledby="lob-hero-heading">
      <div className="lob-page__hero-copy">
        <span className="lob-page__hero-badge">{hero.badge}</span>
        <h1 id="lob-hero-heading" className="lob-page__hero-title">{hero.name}</h1>
        <p className="lob-page__hero-description">
          {hero.description.split("\n").map((line, i) => (
            <span key={i}>{i > 0 && <br />}{line}</span>
          ))}
        </p>
        <div className="lob-page__hero-actions">
          <a href={hero.detailHref} className="lob-page__hero-detail">
            ดูรายละเอียดสินค้า <span aria-hidden="true">›</span>
          </a>
          <a href={hero.buyHref} className="lob-page__hero-buy">สั่งซื้อ</a>
        </div>
      </div>
      <div className="lob-page__hero-image-wrap">
        <img src={hero.imageSrc} alt={hero.imageAlt} className="lob-page__hero-image" />
      </div>
    </section>

    <div className="lob-page__inner">
      {families.map((f) => (
        <PLPProductRow key={f.id} product={f} variant="lob" />
      ))}
    </div>
  </div>
);
