import './SearchInput.css';

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
}

export const SearchInput = ({
  placeholder = 'ค้นหา',
  className = '',
  value,
  defaultValue,
  onChange,
  onSubmit,
}: SearchInputProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = form.elements.namedItem('search') as HTMLInputElement | null;
    if (input) {
      onSubmit?.(input.value);
    }
  };

  return (
    <form
      className={`search-input ${className}`.trim()}
      role="search"
      aria-label="ค้นหาสินค้า"
      onSubmit={handleSubmit}
    >
      <svg
        className="search-input__icon"
        viewBox="0 0 18 18"
        width="14"
        height="14"
        aria-hidden="true"
      >
        <path
          d="M8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Zm0-1.5a8 8 0 1 0 4.94 14.3l3.38 3.39a.75.75 0 1 0 1.06-1.06l-3.39-3.38A8 8 0 0 0 8 0Z"
          fill="currentColor"
        />
      </svg>
      <input
        type="search"
        name="search"
        className="search-input__field"
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={(event) => onChange?.(event.target.value)}
        autoComplete="off"
      />
    </form>
  );
};
