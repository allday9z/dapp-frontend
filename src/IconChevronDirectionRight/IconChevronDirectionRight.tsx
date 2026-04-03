import "./IconChevronDirectionRight.css";

export interface IIconChevronDirectionRightProps {
  direction?: "left" | "right" | "down" | "up";
  className?: string;
}

export const IconChevronDirectionRight = ({
  direction = "left",
  className,
  ...props
}: IIconChevronDirectionRightProps): JSX.Element => {
  const variantsClassName = "direction-" + direction;

  return (
    <div
      className={
        "icon-chevron-direction-right " + className + " " + variantsClassName
      }
    >
      <img className="icon-chevron-left" src="icon-chevron-left0.svg"  alt="" />
    </div>
  );
};
