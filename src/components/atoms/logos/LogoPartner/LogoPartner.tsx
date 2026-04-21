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
      <a href="/" target="_self">
        <img
          className="microsoft-teams-image-25-1"
          src="/brand_logo/logo-istudio-uficon.png"
          alt="โลโก้พาร์ทเนอร์"
        />
      </a>
    </div>
  );
};
