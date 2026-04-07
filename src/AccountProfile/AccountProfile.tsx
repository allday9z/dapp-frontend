import "./AccountProfile.css";

export interface IAccountProfileProps {
  property1?: "default" | "notification";
  className?: string;
}

export const AccountProfile = ({
  property1 = "default",
  className,
  ...props
}: IAccountProfileProps): JSX.Element => {
  const variantsClassName = "property-1-" + property1;

  return (
    <img
      className={
        "account-profile-property-1-default " +
        className +
        " " +
        variantsClassName
      }
      src="/account-profile-property-1-default.svg"
      alt=""
      aria-hidden="true"
    />
  );
};
