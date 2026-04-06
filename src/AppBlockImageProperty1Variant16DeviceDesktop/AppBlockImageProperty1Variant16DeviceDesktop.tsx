import "./AppBlockImageProperty1Variant16DeviceDesktop.css";

export interface IAppBlockImageProperty1Variant16DeviceDesktopProps {
  className?: string;
}

export const AppBlockImageProperty1Variant16DeviceDesktop = ({
  className,
  ...props
}: IAppBlockImageProperty1Variant16DeviceDesktopProps): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-16-device-desktop " + className
      }
    >
      <img className="image-117" src="/image-1170.png"  alt="" />
    </div>
  );
};
