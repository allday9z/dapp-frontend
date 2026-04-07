import "./AttachImageMacBookAir.css";

export interface IAttachImageMacBookAirProps {
  className?: string;
}

export const AttachImageMacBookAir = ({
  className,
  ...props
}: IAttachImageMacBookAirProps): JSX.Element => {
  return (
    <div className={"attach-module-image-property-1-mac-book-air " + className}>
      <img className="image-59" src="/image-590.png"  alt="" />
    </div>
  );
};
