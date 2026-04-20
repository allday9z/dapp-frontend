import './styles.css';
import { Layout } from './Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { PLPPage } from './pages/PLPPage/PLPPage';
import { LOBPage } from './pages/LOBPage/LOBPage';
import { PDPPage } from './pages/PDPPage/PDPPage';
import { StoreLocatorPage } from './pages/StoreLocatorPage/StoreLocatorPage';

/**
 * Minimal pathname-based router (no extra dependencies).
 * /                          → HomePage   (หน้าแรก)
 * /pages/view-all-mac        → LOBPage    (Mac family overview — hero + lineup)
 * /collections/macbook-air   → PLPPage    (MacBook Air — รายการสินค้า PLP)
 * /collections/macbook-pro   → PLPPage    (MacBook Pro — รายการสินค้า PLP)
 * /products/:handle          → PDPPage    (หน้าสินค้า PDP)
 *
 * Swap this for react-router <Routes> whenever ready.
 */
function currentPage() {
  const path = window.location.pathname;
  if (path === '/pages/view-all-mac') return <LOBPage />;
  if (path === '/pages/store-locator') return <StoreLocatorPage />;
  if (path === '/collections/macbook-air') return <PLPPage collection="macbook-air" />;
  if (path === '/collections/macbook-pro') return <PLPPage collection="macbook-pro" />;
  if (path === '/products/macbook-pro-14') return <PDPPage />;
  return <HomePage />;
}

export default function App() {
  return <Layout>{currentPage()}</Layout>;
}
