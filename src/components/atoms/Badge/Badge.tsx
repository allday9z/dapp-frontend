import './Badge.css';
import type { BadgeType } from '../../../types';

const BADGE_COLORS: Record<string, string> = {
  NEW: 'var(--color-badge-new, #bf4800)',
  SALE: 'var(--color-badge-sale, #cc0000)',
  'TRADE-IN': 'var(--color-badge-trade-in, #0071e3)',
  'PRE-ORDER': 'var(--color-badge-pre-order, #1d1d1f)',
  'CYBER MONDAY': 'var(--color-badge-cyber-monday, #6e2b8a)',
  'IN-STORE': 'var(--color-badge-in-store, #707070)',
};

interface BadgeProps {
  label: BadgeType;
  className?: string;
}

export const Badge = ({ label, className = '' }: BadgeProps) => {
  const color = BADGE_COLORS[label] ?? 'var(--color-badge-in-store, #707070)';
  return (
    <span className={`badge ${className}`} style={{ color }}>
      {label}
    </span>
  );
};
