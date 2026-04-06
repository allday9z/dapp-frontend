import "./LOBPage.css";
import { PLPProductRow } from "../../PLPProductRow/PLPProductRow";
import { FamilyStripe } from "../../FamilyStripe/FamilyStripe";
import { macbookProFamilyItems } from "../../FamilyStripe/familyStripeData";
import macbookProData from "../../data/products/macbook-pro.json";
import type { PLPProduct } from "../../PLPProductRow/PLPProductRow";

// TODO: replace with API fetch — /api/products?collection=macbook-pro
const products = macbookProData as PLPProduct[];

export const LOBPage = () => (
  <div className="lob-page">
    {/* FamilyStripe: FULL WIDTH — outside inner padding */}
    <FamilyStripe
      items={macbookProFamilyItems}
      seeAllLabel="ดูข้อมูล Mac ทั้งหมด"
      seeAllHref="/pages/view-all-mac"
    />

    {/* Inner 1220px content */}
    <div className="lob-page__inner">
      <div className="lob-page__heading-row">
        <h1 className="lob-page__heading">MacBook Pro</h1>
      </div>

      {products.map((product) => (
        <PLPProductRow key={product.id} product={product} variant="lob" />
      ))}
    </div>
  </div>
);
