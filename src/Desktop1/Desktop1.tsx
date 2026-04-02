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
        text="สมัคร U•Joy        |       ผ่อนไม่ใช้บัตร       |       โปรโมชันประจำเดือน"
        text2="ผลิตภัณฑ์ของ Apple ทั้งหมด"
        text3="ผลิตภัณฑ์ล่าสุดของ Apple"
        className="homepage-instance"
      ></HomepageDeviceDesktop>
    </div>
  );
};
