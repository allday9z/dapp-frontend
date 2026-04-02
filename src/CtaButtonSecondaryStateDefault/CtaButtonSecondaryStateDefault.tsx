import "./CtaButtonSecondaryStateDefault.css";
import { MapPinScenarioDefault } from "../MapPinScenarioDefault/MapPinScenarioDefault";

export interface ICtaButtonSecondaryStateDefaultProps {
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
  text?: string;
  onClick?: () => void;
  className?: string;
}

export const CtaButtonSecondaryStateDefault = ({
  hasIcon = false,
  instance = <MapPinScenarioDefault className="scenario-default-instance" />,
  button = "primary",
  state = "default",
  text = "Buy now",
  onClick,
  className,
  ...props
}: ICtaButtonSecondaryStateDefaultProps): JSX.Element => {
  const variantsClassName = "button-" + button + " state-" + state;

  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "cta-button-secondary-state-default " +
        className +
        " " +
        variantsClassName
      }
    >
      <span className="buy-now">{text}</span>
    </button>
  );
};
