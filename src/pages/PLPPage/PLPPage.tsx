import "./PLPPage.css";
import { PLPProductRow } from "../../PLPProductRow/PLPProductRow";
import macbookData from "../../data/products/macbook.json";
import type { PLPProduct } from "../../PLPProductRow/PLPProductRow";

type PLPCollection =
  | "macbook-air"
  | "macbook-pro"
  | "macbook-neo"
  | "mac-studio"
  | "imac"
  | "mac-mini"
  | "studio-display"
  | "mac-accessories";

const collectionLabels: Record<PLPCollection, string> = {
  "macbook-air": "MacBook Air",
  "macbook-pro": "MacBook Pro",
  "macbook-neo": "MacBook Neo",
  "mac-studio": "Mac Studio",
  "imac": "iMac",
  "mac-mini": "Mac mini",
  "studio-display": "Studio Display",
  "mac-accessories": "Mac Accessories",
};

interface PLPPageProps {
  collection?: PLPCollection;
}

export const PLPPage = ({ collection = "macbook-air" }: PLPPageProps) => {
  const heading = collectionLabels[collection] ?? "Mac";
  const products = (macbookData as PLPProduct[]).filter(
    (p) => (p as PLPProduct & { collection?: string }).collection === collection
  );

  return (
    <div className="plp-page">
      <div className="plp-page__inner">
        <div className="plp-page__heading-row">
          <h1 className="plp-page__heading">{heading}</h1>
        </div>

        {products.length > 0 ? (
          products.map((product) => (
            <PLPProductRow key={product.id} product={product} variant="plp" />
          ))
        ) : (
          <p className="plp-page__empty">ยังไม่มีสินค้าในหมวดหมู่นี้</p>
        )}
      </div>
    </div>
  );
};
