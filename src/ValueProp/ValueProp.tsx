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
        <span className="value-prop__cta-chevron" aria-hidden="true"> ›</span>
      </a>
    </div>
  );
};
