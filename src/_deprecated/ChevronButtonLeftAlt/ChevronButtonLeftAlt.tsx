import "./ChevronButtonLeftAlt.css";

export interface IChevronButtonLeftAltProps {
  chevronRoundButton?: "left" | "right";
  className?: string;
}

export const ChevronButtonLeftAlt = ({
  chevronRoundButton = "left",
  className,
  ...props
}: IChevronButtonLeftAltProps): JSX.Element => {
  const variantsClassName = "chevron-round-button-" + chevronRoundButton;

  return (
    <img
      className={
        "chevron-round-button-chevron-round-button-left " +
        className +
        " " +
        variantsClassName
      }
      src="/chevron-round-button-chevron-round-button-left.svg"
      alt=""
      aria-hidden="true"
    />
  );
};
