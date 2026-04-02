import "./IconTiktok.css";

export interface IIconTiktokProps {
  className?: string;
}

export const IconTiktok = ({
  className,
  ...props
}: IIconTiktokProps): JSX.Element => {
  return <img className={"icon-tiktok " + className} src="icon-tiktok.svg" />;
};
