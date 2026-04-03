import "./AppBlockImageIMac.css";

export interface IAppBlockImageIMacProps {
  className?: string;
}

export const AppBlockImageIMac = ({
  className,
  ...props
}: IAppBlockImageIMacProps): JSX.Element => {
  return (
    <div className={"app-block-image-i-mac " + className}>
      <img className="image-60" src="image-600.png"  alt="" />
    </div>
  );
};
