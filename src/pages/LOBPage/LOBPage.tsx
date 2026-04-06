import "./LOBPage.css";
import { PLPProductRow } from "../../PLPProductRow/PLPProductRow";
import { FamilyStripe } from "../../FamilyStripe/FamilyStripe";
import { macbookProFamilyStripe } from "../../FamilyStripe/familyStripeData";
import macbookProData from "../../data/products/macbook-pro.json";
import type { PLPProduct } from "../../PLPProductRow/PLPProductRow";

const products = macbookProData as PLPProduct[];

export const LOBPage = () => (
  <div className="lob-page">
    <div className="lob-page__inner">
      {/* ── Category heading ── */}
      <div className="lob-page__heading-row">
        <h1 className="lob-page__heading">MacBook Pro</h1>
      </div>

      {/* ── FamilyStripe — sub-product quick-nav ── */}
      <FamilyStripe config={macbookProFamilyStripe} />

      {/* ── LOB product rows ── */}
      {products.map((product) => (
        <PLPProductRow key={product.id} product={product} variant="lob" />
      ))}
    </div>
  </div>
);
