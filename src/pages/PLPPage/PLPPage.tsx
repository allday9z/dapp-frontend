import "./PLPPage.css";
import { PLPProductRow } from "../../PLPProductRow/PLPProductRow";
import { FamilyStripe } from "../../FamilyStripe/FamilyStripe";
import { macCollectionFamilyItems } from "../../FamilyStripe/familyStripeData";
import macbookData from "../../data/products/macbook.json";
import type { PLPProduct } from "../../PLPProductRow/PLPProductRow";

// TODO: replace with API fetch — /api/products?collection=macbook-air
const products = (macbookData as PLPProduct[]).filter(p => p.name.toLowerCase().includes("air"));

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
// นี่คือโค้ดสำหรับหน้า PLP (Product Listing Page) ของเว็บไซต์ iStudio ที่แสดงรายการสินค้า MacBook Air โดยมีการใช้คอมโพเนนต์ FamilyStripe เพื่อแสดงข้อมูลเกี่ยวกับคอลเลกชันของ Mac และ PLPProductRow เพื่อแสดงรายละเอียดของแต่ละผลิตภัณฑ์ในรูปแบบของแถวสินค้า.