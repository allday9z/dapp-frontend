import "./PLPPage.css";
import { PLPProductRow } from "../../PLPProductRow/PLPProductRow";
import { FamilyStripe } from "../../FamilyStripe/FamilyStripe";
import { macCollectionFamilyItems } from "../../FamilyStripe/familyStripeData";
import macbookAirData from "../../data/products/macbook-air.json";
import type { PLPProduct } from "../../PLPProductRow/PLPProductRow";

// TODO: replace with API fetch — /api/products?collection=macbook-air
const products = macbookAirData as PLPProduct[];

export const PLPPage = () => (
  <div className="plp-page">
    {/* FamilyStripe: FULL WIDTH — outside inner padding */}
    <FamilyStripe
      items={macCollectionFamilyItems}
      seeAllLabel="ดูข้อมูล Mac ทั้งหมด"
      seeAllHref="/pages/view-all-mac"
    />

    {/* Inner 1220px content */}
    <div className="plp-page__inner">
      <div className="plp-page__heading-row">
        <h1 className="plp-page__heading">MacBook Air</h1>
      </div>

      {products.map((product) => (
        <PLPProductRow key={product.id} product={product} variant="plp" />
      ))}
    </div>
  </div>
);
