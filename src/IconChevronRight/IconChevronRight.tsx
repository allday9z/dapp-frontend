import "./IconChevronRight.css";

export interface IIconChevronRightProps {
  className?: string;
}

export const IconChevronRight = ({
  className,
  ...props
}: IIconChevronRightProps): JSX.Element => {
  return (
    <img
      className={"icon-chevron-right " + className}
      src="icon-chevron-right.svg"
    />
  );
};
