import "./AttachModuleImageProperty1MacBookAir.css";

export interface IAttachModuleImageProperty1MacBookAirProps {
  className?: string;
}

export const AttachModuleImageProperty1MacBookAir = ({
  className,
  ...props
}: IAttachModuleImageProperty1MacBookAirProps): JSX.Element => {
  return (
    <div className={"attach-module-image-property-1-mac-book-air " + className}>
      <img className="image-59" src="image-590.png" />
    </div>
  );
};
