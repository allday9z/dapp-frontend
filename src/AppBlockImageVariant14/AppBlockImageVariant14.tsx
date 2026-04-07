import "./AppBlockImageVariant14.css";

export interface IAppBlockImageVariant14Props {
  className?: string;
}

export const AppBlockImageVariant14 = ({
  className,
  ...props
}: IAppBlockImageVariant14Props): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-14-device-desktop " + className
      }
    >
      <img
        className="screen-shot-2022-11-01-at-9-27-2"
        src="/screen-shot-2022-11-01-at-9-27-20.png"
        alt="ภาพสินค้า Apple จากแกลเลอรี"
      />
    </div>
  );
};
