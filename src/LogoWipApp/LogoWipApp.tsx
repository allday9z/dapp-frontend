import "./LogoWipApp.css";

export interface ILogoWipAppProps {
  className?: string;
}

export const LogoWipApp = ({
  className,
  ...props
}: ILogoWipAppProps): JSX.Element => {
  return (
    <div className={"logo-wip-app " + className}>
      <div className="lock-up">
        <a href="/" target="_self">
          <img className="group" src="/group0.svg" alt="" />
        </a>
      </div>
    </div>
  );
};
