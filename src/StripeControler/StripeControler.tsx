import "./StripeControler.css";
import { IconChevronRight } from "../IconChevronRight/IconChevronRight";

export interface IStripeControlerProps {
  className?: string;
  targetSelector?: string;
}

export const StripeControler = ({
  className,
  targetSelector = ".frame-1549",
  ...props
}: IStripeControlerProps): JSX.Element => {
  const handleClick = () => {
    const el = document.querySelector(targetSelector) as HTMLElement | null;
    if (el) el.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={"stripe-controler " + className}
      onClick={handleClick}
      aria-label="เลื่อนดูสินค้าเพิ่มเติม"
    >
      <IconChevronRight className="icon-chevron-right-instance"></IconChevronRight>
    </button>
  );
};
