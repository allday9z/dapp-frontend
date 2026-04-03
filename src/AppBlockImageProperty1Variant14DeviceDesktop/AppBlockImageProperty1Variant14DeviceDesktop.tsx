import "./AppBlockImageProperty1Variant14DeviceDesktop.css";

export interface IAppBlockImageProperty1Variant14DeviceDesktopProps {
  className?: string;
}

export const AppBlockImageProperty1Variant14DeviceDesktop = ({
  className,
  ...props
}: IAppBlockImageProperty1Variant14DeviceDesktopProps): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-14-device-desktop " + className
      }
    >
      <img
        className="screen-shot-2022-11-01-at-9-27-2"
        src="screen-shot-2022-11-01-at-9-27-20.png"
        alt="ภาพสินค้า Apple จากแกลเลอรี"
      />
    </div>
  );
};
