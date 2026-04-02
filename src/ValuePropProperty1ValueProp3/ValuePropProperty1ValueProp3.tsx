import "./ValuePropProperty1ValueProp3.css";
import { IconShipping } from "../IconShipping/IconShipping";
import { MapPinScenarioDefault } from "../MapPinScenarioDefault/MapPinScenarioDefault";
import { CtaButtonChevronStateDefault } from "../CtaButtonChevronStateDefault/CtaButtonChevronStateDefault";

export interface IValuePropProperty1ValueProp3Props {
  property1?: "value-prop-1" | "value-prop-2" | "value-prop-3";
  className?: string;
}

export const ValuePropProperty1ValueProp3 = ({
  property1 = "value-prop-1",
  className,
  ...props
}: IValuePropProperty1ValueProp3Props): JSX.Element => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "value-prop-property-1-value-prop-3 " +
        className +
        " " +
        variantsClassName
      }
    >
      <IconShipping className="icon-shipping-instance"></IconShipping>
      <div className="frame-1783">
        <div className="title">Shipping is free on all orders </div>
        <div className="body-copy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          facilisis. Lorem ipsum dolor sit amet, cr adipiscing elit. Donec.{" "}
        </div>
      </div>
      <div className="cta">
        <div className="cta">
          <CtaButtonChevronStateDefault
            instance={
              <MapPinScenarioDefault className="scenario-default-instance" />
            }
            button="chevron"
            className="cta-instance"
          ></CtaButtonChevronStateDefault>
        </div>
      </div>
    </div>
  );
};
