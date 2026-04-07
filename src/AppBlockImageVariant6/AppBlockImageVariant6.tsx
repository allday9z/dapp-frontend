import "./AppBlockImageVariant6.css";

export interface IAppBlockImageVariant6Props {
  className?: string;
}

export const AppBlockImageVariant6 = ({
  className,
  ...props
}: IAppBlockImageVariant6Props): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-6-device-desktop " + className
      }
    >
      <img className="image-117" src="/image-1170.png"  alt="" />
    </div>
  );
};
