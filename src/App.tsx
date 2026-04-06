import './styles.css';
import { Layout } from './Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { PLPPage } from './pages/PLPPage/PLPPage';
import { LOBPage } from './pages/LOBPage/LOBPage';

/**
 * Minimal pathname-based router (no extra dependencies).
 * /                    → HomePage       (Figma-accurate, full layout)
 * /mac/macbook-air     → PLPPage        (MacBook Air — category listing)
 * /mac/macbook-pro     → LOBPage        (MacBook Pro — sub-model LOB)
 *
 * Swap this for react-router <Routes> whenever ready.
 */
function currentPage() {
  const path = window.location.pathname;
  if (path === '/mac/macbook-air') return <PLPPage />;
  if (path === '/mac/macbook-pro') return <LOBPage />;
  return <HomePage />;
}

export default function App() {
  return <Layout>{currentPage()}</Layout>;
}
