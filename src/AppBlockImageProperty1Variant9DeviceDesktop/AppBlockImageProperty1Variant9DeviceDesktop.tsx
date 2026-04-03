import "./AppBlockImageProperty1Variant9DeviceDesktop.css";

export interface IAppBlockImageProperty1Variant9DeviceDesktopProps {
  className?: string;
}

export const AppBlockImageProperty1Variant9DeviceDesktop = ({
  className,
  ...props
}: IAppBlockImageProperty1Variant9DeviceDesktopProps): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-9-device-desktop " + className
      }
    >
      <img className="image-118" src="image-1180.png"  alt="" />
    </div>
  );
};
