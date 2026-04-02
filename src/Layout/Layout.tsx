/**
 * Layout — shared shell for all pages
 *
 * Usage:
 *   <Layout>
 *     <YourPageContent />
 *   </Layout>
 *
 * Renders:
 *   AnnouncementBar → GlobalNav → {children} → Footer
 */
import { type ReactNode } from "react";
import "./Layout.css";
import { AnnouncementBarSize1440PxRows1RowColorBlue } from "../AnnouncementBarSize1440PxRows1RowColorBlue/AnnouncementBarSize1440PxRows1RowColorBlue";
import { GlobalNavDeviceDesktop } from "../GlobalNavDeviceDesktop/GlobalNavDeviceDesktop";
import { FooterDeviceDesktopStatusDefault } from "../FooterDeviceDesktopStatusDefault/FooterDeviceDesktopStatusDefault";

interface LayoutProps {
  children: ReactNode;
  /** Announcement bar message (optional — hides bar if not provided) */
  announcement?: string;
}

export const Layout = ({ children, announcement }: LayoutProps) => {
  return (
    <div className="layout">
      {/* ── Header ── */}
      <header className="layout__header">
        {announcement && (
          <AnnouncementBarSize1440PxRows1RowColorBlue
            size="1440-px"
            rows="1-row"
            color="blue"
            text={announcement}
            className="layout__announcement"
          />
        )}
        <GlobalNavDeviceDesktop className="layout__nav" />
      </header>

      {/* ── Page content ── */}
      <main className="layout__main">
        {children}
      </main>

      {/* ── Footer ── */}
      <FooterDeviceDesktopStatusDefault className="layout__footer" />
    </div>
  );
};
