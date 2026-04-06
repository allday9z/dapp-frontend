import "./AttachModuleImageProperty1AppleCareIPad.css";

export interface IAttachModuleImageProperty1AppleCareIPadProps {
  className?: string;
}

export const AttachModuleImageProperty1AppleCareIPad = ({
  className,
  ...props
}: IAttachModuleImageProperty1AppleCareIPadProps): JSX.Element => {
  return (
    <div
      className={"attach-module-image-property-1-apple-care-i-pad " + className}
    >
      <img className="image-59" src="/image-590.png"  alt="" />
    </div>
  );
};
