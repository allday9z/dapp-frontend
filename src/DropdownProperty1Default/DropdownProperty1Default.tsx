import "./DropdownProperty1Default.css";
import { IconChevronDirectionDown } from "../IconChevronDirectionDown/IconChevronDirectionDown";

export interface IDropdownProperty1DefaultProps {
  property1?: "default" | "expanded";
  text?: string;
  className?: string;
}

export const DropdownProperty1Default = ({
  property1 = "default",
  text = "undefined",
  className,
  ...props
}: IDropdownProperty1DefaultProps): JSX.Element => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "dropdown-property-1-default " + className + " " + variantsClassName
      }
    >
      <div className="all-stores">All stores </div>
      <IconChevronDirectionDown
        direction="down"
        className="icon-chevron-instance"
      ></IconChevronDirectionDown>
    </div>
  );
};
