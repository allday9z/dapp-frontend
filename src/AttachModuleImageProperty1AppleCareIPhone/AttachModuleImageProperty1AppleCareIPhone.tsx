import "./AttachModuleImageProperty1AppleCareIPhone.css";

export interface IAttachModuleImageProperty1AppleCareIPhoneProps {
  className?: string;
}

export const AttachModuleImageProperty1AppleCareIPhone = ({
  className,
  ...props
}: IAttachModuleImageProperty1AppleCareIPhoneProps): JSX.Element => {
  return (
    <div
      className={
        "attach-module-image-property-1-apple-care-i-phone " + className
      }
    >
      <img className="image-60" src="image-600.png" />
    </div>
  );
};
