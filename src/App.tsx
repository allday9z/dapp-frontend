import "./styles.css";
import { Desktop1 } from "./Desktop1/Desktop1";

/**
 * ─────────────────────────────────────────────────────
 * Routing pattern for future pages:
 *
 *   import { Layout } from "./Layout/Layout";
 *   import { SomePage } from "./pages/SomePage/SomePage";
 *
 *   // Inside App or a router:
 *   <Layout announcement="สมัคร U•Joy | ผ่อนไม่ใช้บัตร">
 *     <SomePage />
 *   </Layout>
 *
 * Layout renders: AnnouncementBar → GlobalNav → {children} → Footer
 * ─────────────────────────────────────────────────────
 */

export default function App() {
  // Current page: Homepage (self-contained, includes its own nav/footer)
  return <Desktop1 />;
}
