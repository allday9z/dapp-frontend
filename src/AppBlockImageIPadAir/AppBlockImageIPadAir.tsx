import "./AppBlockImageIPadAir.css";

export interface IAppBlockImageIPadAirProps {
  className?: string;
}

export const AppBlockImageIPadAir = ({
  className,
  ...props
}: IAppBlockImageIPadAirProps): JSX.Element => {
  return (
    <div className={"app-block-image-i-pad-air " + className}>
      <img className="image-70" src="image-700.png" />
    </div>
  );
};
