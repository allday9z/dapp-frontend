import "./IconChevronLeft.css";

export interface IIconChevronLeftProps {
  className?: string;
}

export const IconChevronLeft = ({
  className,
  ...props
}: IIconChevronLeftProps): JSX.Element => {
  return (
    <img
      className={"icon-chevron-left " + className}
      src="icon-chevron-left.svg"
      alt=""
      aria-hidden="true"
    />
  );
};
