import "./BagCartProperty1Bag.css";

export interface IBagCartProperty1BagProps {
  property1?: "bag" | "bag-added";
  className?: string;
}

export const BagCartProperty1Bag = ({
  property1 = "bag",
  className,
  ...props
}: IBagCartProperty1BagProps): JSX.Element => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "bag-cart-property-1-bag " + className + " " + variantsClassName
      }
    >
      <img className="group-1412" src="group-14120.svg" />
    </div>
  );
};
