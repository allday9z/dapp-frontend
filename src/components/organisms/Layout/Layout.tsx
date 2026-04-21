import type { ReactNode } from 'react';
import './Layout.css';
import { AnnouncementBar } from '../../molecules/AnnouncementBar/AnnouncementBar';
import { GlobalNav } from '../GlobalNav/GlobalNav';
import { GlobalFooter } from '../GlobalFooter/GlobalFooter';

interface LayoutProps {
  children: ReactNode;
  announcementItems?: string[];
}

/**
 * Layout
 *
 * DOM order:
 *   1. AnnouncementBar   — normal flow, scrolls away with the page
 *   2. GlobalNav         — position:sticky top:0, sticks independently
 *   3. main              — page content
 *   4. GlobalFooter
 *
 * Key: AnnouncementBar is a SIBLING of GlobalNav, NOT wrapped inside the
 * same container. This lets the nav's sticky contain the full viewport
 * scroll range without being cut off by a short parent height.
 */
export const Layout = ({
  children,
  announcementItems = ['สมัคร U•Joy', 'ผ่อนไม่ใช้บัตร', 'โปรโมชันประจำเดือน'],
}: LayoutProps) => (
  <div className="layout">
    {/* Scrolls away — NOT inside sticky wrapper */}
    <AnnouncementBar items={announcementItems} />

    {/* Sticks on its own — no parent container limiting its sticky range */}
    <GlobalNav />

    <main className="layout__main">{children}</main>

    <GlobalFooter />
  </div>
);
