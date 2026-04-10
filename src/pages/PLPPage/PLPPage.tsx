import "./PLPPage.css";
import { PLPProductRow } from "../../PLPProductRow/PLPProductRow";
import { FamilyStripe } from "../../FamilyStripe/FamilyStripe";
import { macCollectionFamilyItems } from "../../FamilyStripe/familyStripeData";
import macbookData from "../../data/products/macbook.json";
import type { PLPProduct } from "../../PLPProductRow/PLPProductRow";

interface PLPPageProps {
  collection?: string; // "macbook-air" | "macbook-pro" | "macbook-neo" | "mac-studio" | "imac" | "mac-mini" | "studio-display" | "mac-accessories"
}

export const PLPPage = ({ collection = "macbook-air" }: PLPPageProps) => {
  // Map collection to product data and filtering keywords
  const getCollectionConfig = (col: string) => {
    const configs: Record<string, { label: string; keywords: string[] }> = {
      "macbook-pro": {
        label: "MacBook Pro",
        keywords: ["pro"], // Will exclude "air" in filter
      },
      "macbook-air": {
        label: "MacBook Air",
        keywords: ["air"],
      },
      "macbook-neo": {
        label: "MacBook Neo",
        keywords: ["neo"],
      },
      "mac-studio": {
        label: "Mac Studio",
        keywords: ["studio"],
      },
      "imac": {
        label: "iMac",
        keywords: ["imac"],
      },
      "mac-mini": {
        label: "Mac mini",
        keywords: ["mini"],
      },
      "studio-display": {
        label: "Studio Display",
        keywords: ["display"],
      },
      "mac-accessories": {
        label: "Mac Accessories",
        keywords: ["accessory", "accessory"],
      },
    };
    return configs[col] || { label: "Mac Products", keywords: [] };
  };

  const config = getCollectionConfig(collection);

  // Filter products based on collection
  const products = (macbookData as PLPProduct[]).filter(p => {
    const name = p.name.toLowerCase();
    
    // Special handling for "pro" to exclude "air"
    if (collection.includes("pro")) {
      return name.includes("pro") && !name.includes("air");
    }
    
    // For other collections, match any configured keyword
    if (config.keywords.length === 0) return false;
    return config.keywords.some(keyword => name.includes(keyword));
  });

  return (
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
          <h1 className="plp-page__heading">{config.label}</h1>
        </div>

        {products.length > 0 ? (
          products.map((product) => (
            <PLPProductRow key={product.id} product={product} variant="plp" />
          ))
        ) : (
          <div style={{ padding: "2rem", textAlign: "center", color: "#555" }}>
            <p>No products available in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};