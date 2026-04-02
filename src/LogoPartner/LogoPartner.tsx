import "./LogoPartner.css";

export interface ILogoPartnerProps {
  className?: string;
}

export const LogoPartner = ({
  className,
  ...props
}: ILogoPartnerProps): JSX.Element => {
  return (
    <div className={"logo-partner " + className}>
      <img
        className="microsoft-teams-image-25-1"
        src="microsoft-teams-image-25-10.png"
      />
    </div>
  );
};
