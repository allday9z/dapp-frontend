import "./AppBlockImageProperty1Variant2DeviceDesktop.css";

export interface IAppBlockImageProperty1Variant2DeviceDesktopProps {
  className?: string;
}

export const AppBlockImageProperty1Variant2DeviceDesktop = ({
  className,
  ...props
}: IAppBlockImageProperty1Variant2DeviceDesktopProps): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-2-device-desktop " + className
      }
    >
      <img className="image-117" src="image-1170.png" />
    </div>
  );
};
