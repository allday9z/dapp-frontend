import "./IconFacebook.css";

export interface IIconFacebookProps {
  className?: string;
}

export const IconFacebook = ({
  className,
  ...props
}: IIconFacebookProps): JSX.Element => {
  return (
    <img className={"icon-facebook " + className} src="/icon-facebook.svg"  alt="" />
  );
};
