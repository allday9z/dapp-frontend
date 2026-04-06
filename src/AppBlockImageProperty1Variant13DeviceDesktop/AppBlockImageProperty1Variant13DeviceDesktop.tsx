import "./AppBlockImageProperty1Variant13DeviceDesktop.css";

export interface IAppBlockImageProperty1Variant13DeviceDesktopProps {
  className?: string;
}

export const AppBlockImageProperty1Variant13DeviceDesktop = ({
  className,
  ...props
}: IAppBlockImageProperty1Variant13DeviceDesktopProps): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-13-device-desktop " + className
      }
    >
      <img className="image-111" src="/image-1110.png"  alt="" />
    </div>
  );
};
