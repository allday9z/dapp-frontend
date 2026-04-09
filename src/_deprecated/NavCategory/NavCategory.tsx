import "./NavCategory.css";

export interface INavCategoryProps {
  maxCount?: string;
  regularCount?: string;
  text?: string;
  className?: string;
}

export const NavCategory = ({
  maxCount = "Qorem ipsum dolor sit amet Qorsm..     ",
  regularCount = "Qorem",
  text = "undefined",
  className,
  ...props
}: INavCategoryProps): JSX.Element => {
  return (
    <div className={"text-global-nav-category " + className}>
      <div className="frame-1177">
        <div className="qorem">{text}</div>
      </div>
    </div>
  );
};
