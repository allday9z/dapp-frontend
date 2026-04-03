import "./IconEducation2.css";

export interface IIconEducation2Props {
  visibleComponent?: boolean;
  className?: string;
}

export const IconEducation2 = ({
  visibleComponent = undefined,
  className,
  ...props
}: IIconEducation2Props): JSX.Element => {
  return (
    <div className={"icon-education-2 " + className}>
      <div className="icon-menu"></div>
      <img className="group-7" src="group-70.svg"  alt="" />
    </div>
  );
};
