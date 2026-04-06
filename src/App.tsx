import './styles.css';
import { Layout } from './Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { PLPPage } from './pages/PLPPage/PLPPage';

/**
 * Minimal pathname-based router (no extra dependencies).
 * /                    → HomePage  (Figma-accurate, full layout)
 * /mac/macbook-air     → PLPPage   (MacBook Air listing)
 *
 * Swap this for react-router <Routes> whenever ready.
 */
function currentPage() {
  const path = window.location.pathname;
  if (path === '/mac/macbook-air') return <PLPPage />;
  return <HomePage />;
}

export default function App() {
  return <Layout>{currentPage()}</Layout>;
}
