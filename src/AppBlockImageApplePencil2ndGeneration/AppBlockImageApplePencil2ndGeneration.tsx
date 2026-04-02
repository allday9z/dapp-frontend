import "./AppBlockImageApplePencil2ndGeneration.css";

export interface IAppBlockImageApplePencil2ndGenerationProps {
  className?: string;
}

export const AppBlockImageApplePencil2ndGeneration = ({
  className,
  ...props
}: IAppBlockImageApplePencil2ndGenerationProps): JSX.Element => {
  return (
    <div className={"app-block-image-apple-pencil-2nd-generation " + className}>
      <img className="image-63" src="image-630.png" />
    </div>
  );
};
