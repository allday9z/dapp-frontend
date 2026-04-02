import "./IconSearch.css";

export interface IIconSearchProps {
  className?: string;
}

export const IconSearch = ({
  className,
  ...props
}: IIconSearchProps): JSX.Element => {
  return <img className={"icon-search " + className} src="icon-search.svg" />;
};
