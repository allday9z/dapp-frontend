import "./ValuePropGrid.css";
import { ValueProp } from "../ValueProp/ValueProp";
import { valuePropItems } from "../ValueProp/valuePropData";

export interface IValuePropGridProps {
  device?: "desktop" | "mobile";
  className?: string;
}

export const ValuePropGrid = ({
  device = "desktop",
  className,
}: IValuePropGridProps): JSX.Element => {
  return (
    <div
      className={`organism-value-prop-section-device-desktop device-${device} ${className ?? ""}`.trim()}
    >
      <div className="value-props-row">
        {valuePropItems.map((item) => (
          <ValueProp key={item.id} item={item} />
        ))}
      </div>
      <div className="hp-divider" />
    </div>
  );
};
