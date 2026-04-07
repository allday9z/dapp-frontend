import "./AppBlockImageVariant9.css";

export interface IAppBlockImageVariant9Props {
  className?: string;
}

export const AppBlockImageVariant9 = ({
  className,
  ...props
}: IAppBlockImageVariant9Props): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-9-device-desktop " + className
      }
    >
      <img className="image-118" src="/image-1180.png"  alt="" />
    </div>
  );
};
