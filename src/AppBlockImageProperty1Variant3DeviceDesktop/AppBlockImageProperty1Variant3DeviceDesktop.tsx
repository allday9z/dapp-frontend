import "./AppBlockImageProperty1Variant3DeviceDesktop.css";

export interface IAppBlockImageProperty1Variant3DeviceDesktopProps {
  className?: string;
}

export const AppBlockImageProperty1Variant3DeviceDesktop = ({
  className,
  ...props
}: IAppBlockImageProperty1Variant3DeviceDesktopProps): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-3-device-desktop " + className
      }
    >
      <div className="image-116"></div>
      <img className="image-117" src="/image-1170.png"  alt="" />
    </div>
  );
};
