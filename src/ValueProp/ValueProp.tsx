import "./ValueProp.css";
import { IconPayment, IconTrust, IconShipping } from "./ValuePropIcon";
import type { ValuePropItem } from "./valuePropData";

const ICONS = {
  payment: IconPayment,
  trust: IconTrust,
  shipping: IconShipping,
} as const;

interface IValuePropProps {
  item: ValuePropItem;
  className?: string;
}

export const ValueProp = ({ item, className = "" }: IValuePropProps) => {
  const Icon = ICONS[item.iconType];

  return (
    <div className={`value-prop ${className}`.trim()}>
      <div className="value-prop__icon">
        <Icon />
      </div>
      <div className="value-prop__text">
        <h3 className="value-prop__title">{item.title}</h3>
        <p className="value-prop__body">{item.body}</p>
      </div>
      <a className="value-prop__cta" href={item.ctaHref}>
        {item.ctaLabel}
        <span className="value-prop__cta-chevron" aria-hidden="true"><svg width="4.5" height="9" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.75 1.5L5.25 6L0.75 10.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></span>
      </a>
    </div>
  );
};
