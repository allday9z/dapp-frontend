import "./IconTwitter.css";

export interface IIconTwitterProps {
  className?: string;
}

export const IconTwitter = ({
  className,
  ...props
}: IIconTwitterProps): JSX.Element => {
  return <img className={"icon-twitter " + className} src="icon-twitter.svg" />;
};
