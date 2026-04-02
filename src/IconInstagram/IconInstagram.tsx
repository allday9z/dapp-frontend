import "./IconInstagram.css";

export interface IIconInstagramProps {
  className?: string;
}

export const IconInstagram = ({
  className,
  ...props
}: IIconInstagramProps): JSX.Element => {
  return (
    <img className={"icon-instagram " + className} src="icon-instagram.svg" />
  );
};
