import './StoreLocator.css';

interface StoreLocatorProps {
  text?: string;
  className?: string;
}

export const StoreLocator = ({ text = 'เลือกสาขา', className = '' }: StoreLocatorProps) => {
  return (
    <div className={`store-locator ${className}`.trim()}>
      <button className="store-locator__btn">
        <span className="store-locator__text">{text}</span>
      </button>
    </div>
  );
};
