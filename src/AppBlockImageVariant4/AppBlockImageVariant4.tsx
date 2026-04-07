import "./AppBlockImageVariant4.css";

export interface IAppBlockImageVariant4Props {
  className?: string;
}

export const AppBlockImageVariant4 = ({
  className,
  ...props
}: IAppBlockImageVariant4Props): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-property-1-variant-4-device-desktop " + className
      }
    >
      <img
        className="screenshot-2023-02-07-at-2-34-1"
        src="/screenshot-2023-02-07-at-2-34-10.png"
        alt="ภาพสินค้า Apple จากแกลเลอรี"
      />
    </div>
  );
};
