import "./TextFieldStatusDefault.css";

export interface ITextFieldStatusDefaultProps {
  status?: "default" | "locked" | "filled";
  visibleComponent?: boolean;
  className?: string;
}

export const TextFieldStatusDefault = ({
  status = "default",
  visibleComponent = undefined,
  className,
  ...props
}: ITextFieldStatusDefaultProps): JSX.Element => {
  const variantsClassName = "status-" + status;

  return (
    <div
      className={
        "text-field-status-default " + className + " " + variantsClassName
      }
    >
      <div className="full-name">Full name </div>
    </div>
  );
};
