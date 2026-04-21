import "./PLPPage.css";
import { PLPProductRow } from "@/components/molecules/PLPProductRow/PLPProductRow";
import type { PLPProduct } from "@/components/molecules/PLPProductRow/PLPProductRow";
import collectionsData from "@/data/collections.json";
import macbookData from "@/data/products/macbook.json";

// เพิ่ม dataFile ใหม่ตรงนี้เมื่อมี category เพิ่ม
const DATA_FILES: Record<string, PLPProduct[]> = {
  "macbook.json": macbookData as PLPProduct[],
};

interface PLPPageProps {
  collection?: string;
}

export const PLPPage = ({ collection = "macbook-air" }: PLPPageProps) => {
  const config = collectionsData.collections.find((c) => c.slug === collection);
  const products = (DATA_FILES[config?.dataFile ?? "macbook.json"] ?? []).filter(
    (p) => (p as PLPProduct & { collection?: string }).collection === collection
  );

  return (
    <div className="plp-page">
      <div className="plp-page__inner">
        <div className="plp-page__heading-row">
          <h1 className="plp-page__heading">{config?.name ?? collection}</h1>
        </div>
        {products.length > 0 ? (
          products.map((p) => <PLPProductRow key={p.id} product={p} variant="plp" />)
        ) : (
          <p className="plp-page__empty">ยังไม่มีสินค้าในหมวดหมู่นี้</p>
        )}
      </div>
    </div>
  );
};
