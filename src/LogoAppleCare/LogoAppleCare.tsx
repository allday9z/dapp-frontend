import "./LogoAppleCare.css";

export interface ILogoAppleCareProps {
  className?: string;
}

export const LogoAppleCare = ({
  className,
  ...props
}: ILogoAppleCareProps): JSX.Element => {
  return (
    <div className={"logo-apple-care " + className}>
      <img className="logos-apple-care" src="logos-apple-care0.svg" />
    </div>
  );
};
