import "./AppBlockImageProperty1Variant4DeviceDesktop.css";

export interface IAppBlockImageProperty1Variant4DeviceDesktopProps {
  className?: string;
}

export const AppBlockImageProperty1Variant4DeviceDesktop = ({
  className,
  ...props
}: IAppBlockImageProperty1Variant4DeviceDesktopProps): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-4-device-desktop " + className
      }
    >
      <img
        className="screenshot-2023-02-07-at-2-34-1"
        src="screenshot-2023-02-07-at-2-34-10.png"
      />
    </div>
  );
};
