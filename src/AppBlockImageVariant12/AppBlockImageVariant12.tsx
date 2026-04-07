import "./AppBlockImageVariant12.css";

export interface IAppBlockImageVariant12Props {
  className?: string;
}

export const AppBlockImageVariant12 = ({
  className,
  ...props
}: IAppBlockImageVariant12Props): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-12-device-desktop " + className
      }
    >
      <img className="image-117" src="/image-1170.png"  alt="" />
    </div>
  );
};
