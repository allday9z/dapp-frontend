import "./Desktop1.css";
import { HomepageDeviceDesktop } from "../HomepageDeviceDesktop/HomepageDeviceDesktop";

export interface IDesktop1Props {
  className?: string;
}

export const Desktop1 = ({
  className,
  ...props
}: IDesktop1Props): JSX.Element => {
  return (
    <div className={"desktop-1 " + className}>
      <HomepageDeviceDesktop
        className="homepage-instance"
      ></HomepageDeviceDesktop>
    </div>
  );
};
