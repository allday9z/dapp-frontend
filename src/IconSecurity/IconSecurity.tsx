import "./IconSecurity.css";

export interface IIconSecurityProps {
  className?: string;
}

export const IconSecurity = ({
  className,
  ...props
}: IIconSecurityProps): JSX.Element => {
  return (
    <img className={"icon-security " + className} src="icon-security.svg"  alt="" />
  );
};
