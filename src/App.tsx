import './styles.css';
import { Layout } from './Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { PLPPage } from './pages/PLPPage/PLPPage';
import { LOBPage } from './pages/LOBPage/LOBPage';

/**
 * Minimal pathname-based router (no extra dependencies).
 * /                        → HomePage  (Figma-accurate, full layout)
 * /pages/view-all-mac      → LOBPage   (MacBook family view — hero + lineup)
 * /pages/view-all-mac-air  → PLPPage   (MacBook Air — PLP category listing)
 * /collections/macbook-air → LOBPage   (MacBook Air LOB — sub-model rows)
 * /collections/macbook-pro → LOBPage   (MacBook Pro LOB — sub-model rows)
 *
 * Swap this for react-router <Routes> whenever ready.
 */
function currentPage() {
  const path = window.location.pathname;
  if (path === '/pages/view-all-mac') return <LOBPage collection="macbook" />;
  if (path === '/pages/view-all-mac-air') return <PLPPage />;
  if (path === '/collections/macbook-air') return <LOBPage collection="macbook-air" />;
  if (path === '/collections/macbook-pro') return <LOBPage collection="macbook-pro" />;
  return <HomePage />;
}

export default function App() {
  return <Layout>{currentPage()}</Layout>;
}
