/* Global styles are loaded in index.tsx (fonts, global, vars) */
import { lazy, Suspense } from 'react';
import { Layout } from '@/components/organisms/Layout/Layout';

// Lazy-load each page → separate JS chunk per route
const HomePage       = lazy(() => import('@/pages/HomePage/HomePage').then(m => ({ default: m.HomePage })));
const PLPPage        = lazy(() => import('@/pages/PLPPage/PLPPage').then(m => ({ default: m.PLPPage })));
const LOBPage        = lazy(() => import('@/pages/LOBPage/LOBPage').then(m => ({ default: m.LOBPage })));
const PDPPage        = lazy(() => import('@/pages/PDPPage/PDPPage').then(m => ({ default: m.PDPPage })));
const SearchPage     = lazy(() => import('@/pages/SearchPage/SearchPage').then(m => ({ default: m.SearchPage })));
const StoreLocatorPage = lazy(() => import('@/pages/StoreLocatorPage/StoreLocatorPage').then(m => ({ default: m.StoreLocatorPage })));

/**
 * Minimal pathname-based router (no extra dependencies).
 * /                          → HomePage
 * /pages/view-all-mac        → LOBPage
 * /collections/macbook-air   → PLPPage
 * /collections/macbook-pro   → PLPPage
 * /products/:handle          → PDPPage
 */
function currentPage() {
  const path = window.location.pathname;
  if (path === '/pages/view-all-mac') return <LOBPage />;
  if (path === '/pages/store-locator') return <StoreLocatorPage />;
  if (path === '/search') return <SearchPage />;
  if (path === '/collections/macbook-air') return <PLPPage collection="macbook-air" />;
  if (path === '/collections/macbook-pro') return <PLPPage collection="macbook-pro" />;
  if (path === '/products/macbook-pro-14') return <PDPPage />;
  return <HomePage />;
}

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        {currentPage()}
      </Suspense>
    </Layout>
  );
}
