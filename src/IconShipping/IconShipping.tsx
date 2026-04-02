import "./IconShipping.css";

export interface IIconShippingProps {
  className?: string;
}

export const IconShipping = ({
  className,
  ...props
}: IIconShippingProps): JSX.Element => {
  return (
    <img className={"icon-shipping " + className} src="icon-shipping.svg" />
  );
};
