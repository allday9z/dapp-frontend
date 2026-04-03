import "./AppBlockImageProperty1Variant11DeviceDesktop.css";

export interface IAppBlockImageProperty1Variant11DeviceDesktopProps {
  className?: string;
}

export const AppBlockImageProperty1Variant11DeviceDesktop = ({
  className,
  ...props
}: IAppBlockImageProperty1Variant11DeviceDesktopProps): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-11-device-desktop " + className
      }
    >
      <img
        className="screen-shot-2022-11-01-at-9-27-1"
        src="screen-shot-2022-11-01-at-9-27-10.png"
        alt="ภาพสินค้า Apple จากแกลเลอรี"
      />
    </div>
  );
};
