import "./AppBlockImageVariant8.css";

export interface IAppBlockImageVariant8Props {
  className?: string;
}

export const AppBlockImageVariant8 = ({
  className,
  ...props
}: IAppBlockImageVariant8Props): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-8-device-desktop " + className
      }
    >
      <img className="image-118" src="/image-1180.png"  alt="" />
    </div>
  );
};
