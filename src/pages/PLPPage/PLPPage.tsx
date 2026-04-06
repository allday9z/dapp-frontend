import { useState, useEffect } from 'react';
import './PLPPage.css';
import { ProductCard } from '../../components/molecules/ProductCard/ProductCard';
import { fetchProducts } from '../../api/products';
import type { Product } from '../../types';

// ─── Filter types ────────────────────────────────────────────────────────────
type SortKey = 'featured' | 'price-asc' | 'price-desc';

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'featured', label: 'แนะนำ' },
  { value: 'price-asc', label: 'ราคา: ต่ำ → สูง' },
  { value: 'price-desc', label: 'ราคา: สูง → ต่ำ' },
];

function sortProducts(products: Product[], sort: SortKey): Product[] {
  switch (sort) {
    case 'price-asc':
      return [...products].sort((a, b) => a.price.base - b.price.base);
    case 'price-desc':
      return [...products].sort((a, b) => b.price.base - a.price.base);
    default:
      return products;
  }
}

// ─── Component ───────────────────────────────────────────────────────────────
export const PLPPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sort, setSort] = useState<SortKey>('featured');

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchProducts('macbook-air')
      .then((data) => {
        if (!cancelled) setProducts(data);
      })
      .catch(() => {
        if (!cancelled) setError('ไม่สามารถโหลดสินค้าได้ กรุณาลองใหม่อีกครั้ง');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, []);

  const sorted = sortProducts(products, sort);

  return (
    <div className="plp-page">
      {/* ── Breadcrumb ── */}
      <nav className="plp-page__breadcrumb" aria-label="เส้นทางนำทาง">
        <ol>
          <li><a href="/">หน้าแรก</a></li>
          <li><a href="/mac">Mac</a></li>
          <li aria-current="page">MacBook Air</li>
        </ol>
      </nav>

      {/* ── Hero Header ── */}
      <header className="plp-page__hero">
        <h1 className="plp-page__hero-title">MacBook Air</h1>
        <p className="plp-page__hero-subtitle">
          บางเบาเกินจริง ทรงพลังด้วยชิป M5 — เลือกรุ่นที่ใช่สำหรับคุณ
        </p>
      </header>

      {/* ── Toolbar: count + sort ── */}
      <div className="plp-page__toolbar">
        <p className="plp-page__count">
          {loading ? 'กำลังโหลด…' : `${sorted.length} รายการ`}
        </p>
        <label className="plp-page__sort-label" htmlFor="plp-sort">
          เรียงโดย:
          <select
            id="plp-sort"
            className="plp-page__sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* ── Grid ── */}
      {error && (
        <div className="plp-page__error" role="alert">
          {error}
        </div>
      )}

      {loading ? (
        <div className="plp-page__skeleton-grid">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="plp-page__skeleton-card" aria-hidden="true" />
          ))}
        </div>
      ) : (
        <ul className="plp-page__grid" aria-label="รายการ MacBook Air">
          {sorted.map((product) => (
            <li key={product.id} className="plp-page__grid-item">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      )}

      {/* ── Compare CTA ── */}
      {!loading && sorted.length > 1 && (
        <div className="plp-page__compare-bar">
          <a href="/mac/compare" className="plp-page__compare-link">
            เปรียบเทียบ MacBook Air ทุกรุ่น →
          </a>
        </div>
      )}
    </div>
  );
};
