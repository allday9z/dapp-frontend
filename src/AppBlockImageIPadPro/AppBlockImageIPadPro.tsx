import "./AppBlockImageIPadPro.css";

export interface IAppBlockImageIPadProProps {
  className?: string;
}

export const AppBlockImageIPadPro = ({
  className,
  ...props
}: IAppBlockImageIPadProProps): JSX.Element => {
  return (
    <div className={"app-block-image-i-pad-pro " + className}>
      <img className="image-71" src="image-710.png" />
    </div>
  );
};
