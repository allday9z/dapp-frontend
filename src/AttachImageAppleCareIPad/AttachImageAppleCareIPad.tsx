import "./AttachImageAppleCareIPad.css";

export interface IAttachImageAppleCareIPadProps {
  className?: string;
}

export const AttachImageAppleCareIPad = ({
  className,
  ...props
}: IAttachImageAppleCareIPadProps): JSX.Element => {
  return (
    <div
      className={"attach-module-image-property-1-apple-care-i-pad " + className}
    >
      <img className="image-59" src="/image-590.png"  alt="" />
    </div>
  );
};
