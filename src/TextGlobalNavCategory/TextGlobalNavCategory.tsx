import "./TextGlobalNavCategory.css";

export interface ITextGlobalNavCategoryProps {
  maxCount?: string;
  regularCount?: string;
  text?: string;
  className?: string;
}

export const TextGlobalNavCategory = ({
  maxCount = "Qorem ipsum dolor sit amet Qorsm..     ",
  regularCount = "Qorem",
  text = "undefined",
  className,
  ...props
}: ITextGlobalNavCategoryProps): JSX.Element => {
  return (
    <div className={"text-global-nav-category " + className}>
      <div className="frame-1177">
        <div className="qorem">{text}</div>
      </div>
    </div>
  );
};
