import "./IconStore.css";

export interface IIconStoreProps {
  className?: string;
}

export const IconStore = ({
  className,
  ...props
}: IIconStoreProps): JSX.Element => {
  return <img className={"icon-store " + className} src="/icon-store.svg"  alt="" />;
};
