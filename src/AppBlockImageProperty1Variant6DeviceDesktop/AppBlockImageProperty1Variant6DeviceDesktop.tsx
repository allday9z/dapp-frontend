import "./AppBlockImageProperty1Variant6DeviceDesktop.css";

export interface IAppBlockImageProperty1Variant6DeviceDesktopProps {
  className?: string;
}

export const AppBlockImageProperty1Variant6DeviceDesktop = ({
  className,
  ...props
}: IAppBlockImageProperty1Variant6DeviceDesktopProps): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-6-device-desktop " + className
      }
    >
      <img className="image-117" src="image-1170.png" />
    </div>
  );
};
