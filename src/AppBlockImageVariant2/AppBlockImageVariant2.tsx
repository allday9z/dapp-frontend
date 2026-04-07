import "./AppBlockImageVariant2.css";

export interface IAppBlockImageVariant2Props {
  className?: string;
}

export const AppBlockImageVariant2 = ({
  className,
  ...props
}: IAppBlockImageVariant2Props): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-2-device-desktop " + className
      }
    >
      <img className="image-117" src="/image-1170.png"  alt="" />
    </div>
  );
};
