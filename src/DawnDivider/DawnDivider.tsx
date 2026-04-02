import "./DawnDivider.css";

export interface IDawnDividerProps {
  className?: string;
}

export const DawnDivider = ({
  className,
  ...props
}: IDawnDividerProps): JSX.Element => {
  return (
    <div className={"dawn-divider " + className}>
      <div className="rectangle-6"></div>
    </div>
  );
};
