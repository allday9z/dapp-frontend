import "./ValueProp2.css";
import { IconSecurity } from "../IconSecurity/IconSecurity";
import { MapPinScenarioDefault } from "../MapPinScenarioDefault/MapPinScenarioDefault";
import { CtaButtonChevronStateDefault } from "../CtaButtonChevronStateDefault/CtaButtonChevronStateDefault";

export interface IValueProp2Props {
  property1?: "value-prop-1" | "value-prop-2" | "value-prop-3";
  className?: string;
}

export const ValueProp2 = ({
  property1 = "value-prop-1",
  className,
  ...props
}: IValueProp2Props): JSX.Element => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "value-prop-property-1-value-prop-2 " +
        className +
        " " +
        variantsClassName
      }
    >
      <IconSecurity className="icon-security-instance"></IconSecurity>
      <div className="frame-1782">
        <div className="title">The safest way to buy online </div>
        <div className="heading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          facilisis. Lorem ipsum dolor sit amet, cr adipiscing elit. Donec.{" "}
        </div>
      </div>
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
  );
};
