import "./ChevronRoundButtonProperty1ChevronRoundButtonProperty2Left.css";

export interface IChevronRoundButtonProperty1ChevronRoundButtonProperty2LeftProps {
  property1?: "chevron-round-button";
  property2?: "left" | "right";
  onClick?: () => void;
  className?: string;
}

export const ChevronRoundButtonProperty1ChevronRoundButtonProperty2Left = ({
  property1 = "chevron-round-button",
  property2 = "left",
  onClick,
  className,
  ...props
}: IChevronRoundButtonProperty1ChevronRoundButtonProperty2LeftProps): JSX.Element => {
  const variantsClassName =
    "property-1-" + property1 + " property-2-" + property2;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Previous"
      className={
        "chevron-round-button-property-1-chevron-round-button-property-2-left " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="ellipse-8"></div>
      <img className="frame-1489" src="frame-14890.svg" />
    </button>
  );
};
