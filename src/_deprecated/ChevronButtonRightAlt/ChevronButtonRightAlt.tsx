import "./ChevronButtonRightAlt.css";

export interface IChevronButtonRightAltProps {
  chevronRoundButton?: "left" | "right";
  className?: string;
}

export const ChevronButtonRightAlt = ({
  chevronRoundButton = "left",
  className,
  ...props
}: IChevronButtonRightAltProps): JSX.Element => {
  const variantsClassName = "chevron-round-button-" + chevronRoundButton;

  return (
    <img
      className={
        "chevron-round-button-chevron-round-button-right " +
        className +
        " " +
        variantsClassName
      }
      src="/chevron-round-button-chevron-round-button-right.svg"
      alt=""
      aria-hidden="true"
    />
  );
};
