import "./AppBlockImageProperty1Variant12DeviceDesktop.css";

export interface IAppBlockImageProperty1Variant12DeviceDesktopProps {
  className?: string;
}

export const AppBlockImageProperty1Variant12DeviceDesktop = ({
  className,
  ...props
}: IAppBlockImageProperty1Variant12DeviceDesktopProps): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-12-device-desktop " + className
      }
    >
      <img className="image-117" src="image-1170.png" />
    </div>
  );
};
