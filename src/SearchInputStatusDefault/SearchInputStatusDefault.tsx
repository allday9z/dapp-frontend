import "./SearchInputStatusDefault.css";
import { IconSearch } from "../IconSearch/IconSearch";

export interface ISearchInputStatusDefaultProps {
  status?: "default" | "keyword" | "zipcode";
  className?: string;
}

export const SearchInputStatusDefault = ({
  status = "default",
  className,
  ...props
}: ISearchInputStatusDefaultProps): JSX.Element => {
  const variantsClassName = "status-" + status;

  return (
    <div
      className={
        "search-input-status-default " + className + " " + variantsClassName
      }
    >
      <div className="search-input">
        <IconSearch className="icon-search-instance"></IconSearch>
        <div className="search">ค้นหา</div>
      </div>
    </div>
  );
};
