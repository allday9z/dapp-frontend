import "./AppBlockImageIPhone14ProMaxClearCaseWithMagSafe.css";

export interface IAppBlockImageIPhone14ProMaxClearCaseWithMagSafeProps {
  className?: string;
}

export const AppBlockImageIPhone14ProMaxClearCaseWithMagSafe = ({
  className,
  ...props
}: IAppBlockImageIPhone14ProMaxClearCaseWithMagSafeProps): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-i-phone-14-pro-max-clear-case-with-mag-safe " +
        className
      }
    >
      <img className="image-64" src="image-640.png" />
    </div>
  );
};
