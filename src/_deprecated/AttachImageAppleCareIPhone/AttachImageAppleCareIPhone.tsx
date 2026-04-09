import "./AttachImageAppleCareIPhone.css";

export interface IAttachImageAppleCareIPhoneProps {
  className?: string;
}

export const AttachImageAppleCareIPhone = ({
  className,
  ...props
}: IAttachImageAppleCareIPhoneProps): JSX.Element => {
  return (
    <div
      className={
        "attach-module-image-property-1-apple-care-i-phone " + className
      }
    >
      <img className="image-60" src="/image-600.png"  alt="" />
    </div>
  );
};
