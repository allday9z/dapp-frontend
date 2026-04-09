import "./AttachImageApplePencil2.css";

export interface IAttachImageApplePencil2Props {
  className?: string;
}

export const AttachImageApplePencil2 = ({
  className,
  ...props
}: IAttachImageApplePencil2Props): JSX.Element => {
  return (
    <div
      className={
        "attach-module-image-property-1-apple-pencil-2nd-generation " +
        className
      }
    >
      <img className="image-63" src="/image-630.png"  alt="" />
    </div>
  );
};
