import "./ChevronRoundButtonChevronRoundButtonLeft.css";

export interface IChevronRoundButtonChevronRoundButtonLeftProps {
  chevronRoundButton?: "left" | "right";
  className?: string;
}

export const ChevronRoundButtonChevronRoundButtonLeft = ({
  chevronRoundButton = "left",
  className,
  ...props
}: IChevronRoundButtonChevronRoundButtonLeftProps): JSX.Element => {
  const variantsClassName = "chevron-round-button-" + chevronRoundButton;

  return (
    <img
      className={
        "chevron-round-button-chevron-round-button-left " +
        className +
        " " +
        variantsClassName
      }
      src="chevron-round-button-chevron-round-button-left.svg"
    />
  );
};
