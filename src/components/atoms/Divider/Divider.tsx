import './Divider.css';

interface DividerProps {
  className?: string;
}

export const Divider = ({ className = '' }: DividerProps) => (
  <hr className={`divider ${className}`.trim()} />
);
