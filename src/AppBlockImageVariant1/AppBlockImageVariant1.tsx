import "./AppBlockImageVariant1.css";

export interface IAppBlockImageVariant1Props {
  className?: string;
}

export const AppBlockImageVariant1 = ({
  className,
  ...props
}: IAppBlockImageVariant1Props): JSX.Element => {
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
