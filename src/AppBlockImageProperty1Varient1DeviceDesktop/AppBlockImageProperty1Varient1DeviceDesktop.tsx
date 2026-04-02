import "./AppBlockImageProperty1Varient1DeviceDesktop.css";

export interface IAppBlockImageProperty1Varient1DeviceDesktopProps {
  className?: string;
}

export const AppBlockImageProperty1Varient1DeviceDesktop = ({
  className,
  ...props
}: IAppBlockImageProperty1Varient1DeviceDesktopProps): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-varient-1-device-desktop " + className
      }
    >
      <img className="image-116" src="image-1160.png" />
    </div>
  );
};
