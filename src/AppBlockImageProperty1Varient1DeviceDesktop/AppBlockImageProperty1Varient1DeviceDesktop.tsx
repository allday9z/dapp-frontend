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
      <img className="image-116" src="/product/airpods/AirPods_Max_2_Blue_PDP_Image_Position_1__TH-TH.png"  alt="" />
    </div>
  );
};
