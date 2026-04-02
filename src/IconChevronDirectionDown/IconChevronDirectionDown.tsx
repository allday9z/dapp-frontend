import "./IconChevronDirectionDown.css";

export interface IIconChevronDirectionDownProps {
  direction?: "left" | "right" | "down" | "up";
  className?: string;
}

export const IconChevronDirectionDown = ({
  direction = "left",
  className,
  ...props
}: IIconChevronDirectionDownProps): JSX.Element => {
  const variantsClassName = "direction-" + direction;

  return (
    <div
      className={
        "icon-chevron-direction-down " + className + " " + variantsClassName
      }
    >
      <img className="icon-chevron-left" src="icon-chevron-left0.svg" />
    </div>
  );
};
