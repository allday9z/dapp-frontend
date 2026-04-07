import "./AppBlockImageVariant11.css";

export interface IAppBlockImageVariant11Props {
  className?: string;
}

export const AppBlockImageVariant11 = ({
  className,
  ...props
}: IAppBlockImageVariant11Props): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-11-device-desktop " + className
      }
    >
      <img
        className="screen-shot-2022-11-01-at-9-27-1"
        src="/screen-shot-2022-11-01-at-9-27-10.png"
        alt="ภาพสินค้า Apple จากแกลเลอรี"
      />
    </div>
  );
};
