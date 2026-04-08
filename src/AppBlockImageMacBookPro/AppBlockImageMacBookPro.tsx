import "./AppBlockImageMacBookPro.css";

export interface IAppBlockImageMacBookProProps {
  className?: string;
}

export const AppBlockImageMacBookPro = ({
  className,
  ...props
}: IAppBlockImageMacBookProProps): JSX.Element => {
  return (
    <div className={"app-block-image-property-1-mac-book-pro " + className}>
      <img className="image-58" src="/image-580.png"  alt="" />
    </div>
  );
};

