import "./CtaButtonChevronStateDefault.css";
import { MapPinScenarioDefault } from "../MapPinScenarioDefault/MapPinScenarioDefault";
import { IconChevronDirectionRight } from "../IconChevronDirectionRight/IconChevronDirectionRight";

export interface ICtaButtonChevronStateDefaultProps {
  hasIcon?: boolean;
  instance?: JSX.Element;
  button?:
    | "primary"
    | "secondary"
    | "apple-pay"
    | "tertiary"
    | "chevron"
    | "text";
  state?: "default" | "hover" | "out-of-stock";
  label?: string;
  onClick?: () => void;
  className?: string;
}

export const CtaButtonChevronStateDefault = ({
  hasIcon = false,
  instance = <MapPinScenarioDefault className="scenario-default-instance" />,
  button = "primary",
  state = "default",
  label = "Learn more",
  onClick,
  className,
  ...props
}: ICtaButtonChevronStateDefaultProps): JSX.Element => {
  const variantsClassName = "button-" + button + " state-" + state;

  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "cta-button-chevron-state-default " +
        className +
        " " +
        variantsClassName
      }
    >
      <span className="learn-more">{label}</span>
      <IconChevronDirectionRight
        direction="right"
        className="icon-chevron-instance"
      ></IconChevronDirectionRight>
    </button>
  );
};
