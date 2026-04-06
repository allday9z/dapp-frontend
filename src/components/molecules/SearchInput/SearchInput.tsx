import './SearchInput.css';
import { IconSearch } from '../../../IconSearch/IconSearch';

interface SearchInputProps {
  placeholder?: string;
  className?: string;
}

export const SearchInput = ({
  placeholder = 'ค้นหา',
  className = '',
}: SearchInputProps) => {
  return (
    <div className={`search-input ${className}`.trim()}>
      <IconSearch className="search-input__icon" />
      <div className="search-input__field">{placeholder}</div>
    </div>
  );
};
