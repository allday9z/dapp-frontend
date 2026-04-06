import "./AppBlockImageProperty1MacBookPro.css";

export interface IAppBlockImageProperty1MacBookProProps {
  className?: string;
}

export const AppBlockImageProperty1MacBookPro = ({
  className,
  ...props
}: IAppBlockImageProperty1MacBookProProps): JSX.Element => {
  return (
    <div className={"app-block-image-property-1-mac-book-pro " + className}>
      <img className="image-58" src="/image-580.png"  alt="" />
    </div>
  );
};
