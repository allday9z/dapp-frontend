import "./AccountProfileProperty1Default.css";

export interface IAccountProfileProperty1DefaultProps {
  property1?: "default" | "notification";
  className?: string;
}

export const AccountProfileProperty1Default = ({
  property1 = "default",
  className,
  ...props
}: IAccountProfileProperty1DefaultProps): JSX.Element => {
  const variantsClassName = "property-1-" + property1;

  return (
    <img
      className={
        "account-profile-property-1-default " +
        className +
        " " +
        variantsClassName
      }
      src="account-profile-property-1-default.svg"
      alt=""
      aria-hidden="true"
    />
  );
};
