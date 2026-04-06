import "./PLPPage.css";
import { PLPProductRow } from "../../PLPProductRow/PLPProductRow";
import { FamilyStripe } from "../../FamilyStripe/FamilyStripe";
import { macbookAirFamilyItems } from "../../FamilyStripe/familyStripeData";
import macbookAirData from "../../data/products/macbook-air.json";
import type { PLPProduct } from "../../PLPProductRow/PLPProductRow";

// TODO: replace with API fetch — /api/products?category=mac
const products = macbookAirData as PLPProduct[];

export const PLPPage = () => (
  <div className="plp-page">
    <div className="plp-page__inner">
      {/* ── Category heading ── */}
      <div className="plp-page__heading-row">
        <h1 className="plp-page__heading">MacBook Air</h1>
      </div>

      {/* ── FamilyStripe — quick-nav to sub-products ── */}
      <FamilyStripe
        items={macbookAirFamilyItems}
        seeAllLabel="ดู MacBook ทั้งหมด"
        seeAllHref="/pages/view-all-mac"
      />

      {/* ── Product rows ── */}
      {products.map((product) => (
        <PLPProductRow key={product.id} product={product} variant="plp" />
      ))}
    </div>
  </div>
);
