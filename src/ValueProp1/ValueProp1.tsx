import "./ValueProp1.css";
import { IconEducation } from "../IconEducation/IconEducation";
import { MapPinScenarioDefault } from "../MapPinScenarioDefault/MapPinScenarioDefault";
import { CtaButtonChevronStateDefault } from "../CtaButtonChevronStateDefault/CtaButtonChevronStateDefault";

export interface IValueProp1Props {
  property1?: "value-prop-1" | "value-prop-2" | "value-prop-3";
  className?: string;
}

export const ValueProp1 = ({
  property1 = "value-prop-1",
  className,
  ...props
}: IValueProp1Props): JSX.Element => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "value-prop-property-1-value-prop-1 " +
        className +
        " " +
        variantsClassName
      }
    >
      <IconEducation className="icon-education-instance"></IconEducation>
      <div className="frame-1781">
        <div className="title">
          Financing and <br />
          Credit Plans{" "}
        </div>
        <div className="body-copy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          facilisis. Lorem ipsum dolor sit amet, cr adipiscing elit. Donec.{" "}
        </div>
      </div>
      <CtaButtonChevronStateDefault
        instance={
          <MapPinScenarioDefault className="scenario-default-instance" />
        }
        button="chevron"
        className="cta-instance"
      ></CtaButtonChevronStateDefault>
    </div>
  );
};
