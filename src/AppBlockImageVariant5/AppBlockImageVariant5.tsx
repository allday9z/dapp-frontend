import "./AppBlockImageVariant5.css";

export interface IAppBlockImageVariant5Props {
  className?: string;
}

export const AppBlockImageVariant5 = ({
  className,
  ...props
}: IAppBlockImageVariant5Props): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-5-device-desktop " + className
      }
    >
      <img className="image-117" src="/image-1170.png"  alt="" />
    </div>
  );
};
