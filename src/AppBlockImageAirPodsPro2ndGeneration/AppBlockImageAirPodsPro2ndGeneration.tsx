import "./AppBlockImageAirPodsPro2ndGeneration.css";

export interface IAppBlockImageAirPodsPro2ndGenerationProps {
  className?: string;
}

export const AppBlockImageAirPodsPro2ndGeneration = ({
  className,
  ...props
}: IAppBlockImageAirPodsPro2ndGenerationProps): JSX.Element => {
  return (
    <div className={"app-block-image-air-pods-pro-2nd-generation " + className}>
      <img className="image-62" src="image-620.png"  alt="" />
    </div>
  );
};
