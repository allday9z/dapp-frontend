import "./AppBlockImageProperty1Variant7DeviceDesktop.css";

export interface IAppBlockImageProperty1Variant7DeviceDesktopProps {
  className?: string;
}

export const AppBlockImageProperty1Variant7DeviceDesktop = ({
  className,
  ...props
}: IAppBlockImageProperty1Variant7DeviceDesktopProps): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-7-device-desktop " + className
      }
    >
      <img className="image-110" src="/image-1100.png"  alt="" />
    </div>
  );
};
