import "./PLPPage.css";
import { PLPProductRow } from "../../PLPProductRow/PLPProductRow";
import macbookAirData from "../../data/products/macbook-air.json";
import type { PLPProduct } from "../../PLPProductRow/PLPProductRow";

const products = macbookAirData as PLPProduct[];

export const PLPPage = () => (
  <div className="plp-page">
    <div className="plp-page__inner">
      {/* ── Category heading ── */}
      <div className="plp-page__heading-row">
        <h1 className="plp-page__heading">MacBook Air</h1>
      </div>

      {/* ── Product rows ── */}
      {products.map((product) => (
        <PLPProductRow key={product.id} product={product} variant="plp" />
      ))}
    </div>
  </div>
);
