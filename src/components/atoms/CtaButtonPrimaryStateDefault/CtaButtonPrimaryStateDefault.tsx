import "./CtaButtonPrimaryStateDefault.css";

export interface ICtaButtonPrimaryStateDefaultProps {
  button?:
    | "primary"
    | "secondary"
    | "apple-pay"
    | "chevron"
    | "text"
    | "add-on"
    | "add-filter";
  state?: "default" | "multiline-text" | "hover" | "out-of-stock";
  label?: string;
  onClick?: () => void;
  className?: string;
}

export const CtaButtonPrimaryStateDefault = ({
  button = "primary",
  state = "default",
  label = "สั่งซื้อ",
  onClick,
  className,
  ...props
}: ICtaButtonPrimaryStateDefaultProps): JSX.Element => {
  const variantsClassName = "button-" + button + " state-" + state;

  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "cta-button-primary-state-default " +
        className +
        " " +
        variantsClassName
      }
    >
      <span className="add-to-cart">{label}</span>
    </button>
  );
};
