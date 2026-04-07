import "./AppBlockImageVariant3.css";

export interface IAppBlockImageVariant3Props {
  className?: string;
}

export const AppBlockImageVariant3 = ({
  className,
  ...props
}: IAppBlockImageVariant3Props): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-3-device-desktop " + className
      }
    >
      <div className="image-116"></div>
      <img className="image-117" src="/image-1170.png"  alt="" />
    </div>
  );
};
