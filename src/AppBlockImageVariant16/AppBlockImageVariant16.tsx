import "./AppBlockImageVariant16.css";

export interface IAppBlockImageVariant16Props {
  className?: string;
}

export const AppBlockImageVariant16 = ({
  className,
  ...props
}: IAppBlockImageVariant16Props): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-16-device-desktop " + className
      }
    >
      <img className="image-117" src="/image-1170.png"  alt="" />
    </div>
  );
};
