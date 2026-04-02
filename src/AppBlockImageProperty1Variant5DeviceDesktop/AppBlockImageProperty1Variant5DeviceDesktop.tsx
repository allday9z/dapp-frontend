import "./AppBlockImageProperty1Variant5DeviceDesktop.css";

export interface IAppBlockImageProperty1Variant5DeviceDesktopProps {
  className?: string;
}

export const AppBlockImageProperty1Variant5DeviceDesktop = ({
  className,
  ...props
}: IAppBlockImageProperty1Variant5DeviceDesktopProps): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-5-device-desktop " + className
      }
    >
      <img className="image-117" src="image-1170.png" />
    </div>
  );
};
