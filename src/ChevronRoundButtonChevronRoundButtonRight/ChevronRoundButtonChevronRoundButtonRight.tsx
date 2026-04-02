import "./ChevronRoundButtonChevronRoundButtonRight.css";

export interface IChevronRoundButtonChevronRoundButtonRightProps {
  chevronRoundButton?: "left" | "right";
  className?: string;
}

export const ChevronRoundButtonChevronRoundButtonRight = ({
  chevronRoundButton = "left",
  className,
  ...props
}: IChevronRoundButtonChevronRoundButtonRightProps): JSX.Element => {
  const variantsClassName = "chevron-round-button-" + chevronRoundButton;

  return (
    <img
      className={
        "chevron-round-button-chevron-round-button-right " +
        className +
        " " +
        variantsClassName
      }
      src="chevron-round-button-chevron-round-button-right.svg"
    />
  );
};
