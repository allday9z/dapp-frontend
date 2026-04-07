import "./AppBlockImageVariant13.css";

export interface IAppBlockImageVariant13Props {
  className?: string;
}

export const AppBlockImageVariant13 = ({
  className,
  ...props
}: IAppBlockImageVariant13Props): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-13-device-desktop " + className
      }
    >
      <img className="image-111" src="/image-1110.png"  alt="" />
    </div>
  );
};
