import "./AppBlockImageVariant7.css";

export interface IAppBlockImageVariant7Props {
  className?: string;
}

export const AppBlockImageVariant7 = ({
  className,
  ...props
}: IAppBlockImageVariant7Props): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-7-device-desktop " + className
      }
    >
      <img className="image-110" src="/image-1100.png"  alt="" />
    </div>
  );
};
