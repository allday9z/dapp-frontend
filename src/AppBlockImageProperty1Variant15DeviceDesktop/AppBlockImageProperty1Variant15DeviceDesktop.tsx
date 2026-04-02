import "./AppBlockImageProperty1Variant15DeviceDesktop.css";

export interface IAppBlockImageProperty1Variant15DeviceDesktopProps {
  className?: string;
}

export const AppBlockImageProperty1Variant15DeviceDesktop = ({
  className,
  ...props
}: IAppBlockImageProperty1Variant15DeviceDesktopProps): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-15-device-desktop " + className
      }
    >
      <img className="image-117" src="image-1170.png" />
    </div>
  );
};
