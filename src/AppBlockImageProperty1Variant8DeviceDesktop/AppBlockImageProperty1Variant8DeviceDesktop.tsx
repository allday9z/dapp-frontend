import "./AppBlockImageProperty1Variant8DeviceDesktop.css";

export interface IAppBlockImageProperty1Variant8DeviceDesktopProps {
  className?: string;
}

export const AppBlockImageProperty1Variant8DeviceDesktop = ({
  className,
  ...props
}: IAppBlockImageProperty1Variant8DeviceDesktopProps): JSX.Element => {
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
