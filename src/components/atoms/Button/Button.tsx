import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'chevron' | 'ghost';

interface ButtonProps {
  label: string;
  href?: string;
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  label,
  href,
  variant = 'primary',
  onClick,
  className = '',
  disabled = false,
}: ButtonProps) => {
  const cls = `btn btn--${variant} ${className}`.trim();
  if (href) {
    return (
      <a href={href} className={cls}>
        {label}
      </a>
    );
  }
  return (
    <button
      type="button"
      className={cls}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
