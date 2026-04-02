import "./IconEducation.css";
import { IconEducation2 } from "../IconEducation2/IconEducation2";

export interface IIconEducationProps {
  className?: string;
}

export const IconEducation = ({
  className,
  ...props
}: IIconEducationProps): JSX.Element => {
  return (
    <div className={"icon-education " + className}>
      <IconEducation2
        visibleComponent={true}
        className="icon-education-instance"
      ></IconEducation2>
    </div>
  );
};
