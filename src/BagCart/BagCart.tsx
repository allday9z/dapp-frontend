import "./BagCart.css";

export interface IBagCartProps {
  property1?: "bag" | "bag-added";
  className?: string;
}

export const BagCart = ({
  property1 = "bag",
  className,
  ...props
}: IBagCartProps): JSX.Element => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "bag-cart-property-1-bag " + className + " " + variantsClassName
      }
    >
      <img className="group-1412" src="/group-14120.svg"  alt="" />
    </div>
  );
};
