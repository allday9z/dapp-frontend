import "./AppBlockImageVariant15.css";

export interface IAppBlockImageVariant15Props {
  className?: string;
}

export const AppBlockImageVariant15 = ({
  className,
  ...props
}: IAppBlockImageVariant15Props): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-15-device-desktop " + className
      }
    >
      <img className="image-117" src="/image-1170.png"  alt="" />
    </div>
  );
};
