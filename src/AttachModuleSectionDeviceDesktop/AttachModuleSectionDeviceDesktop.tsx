import "./AttachModuleSectionDeviceDesktop.css";
import { AttachModuleSetProperty1BackToSchool1DeviceDesktop } from "../AttachModuleSetProperty1BackToSchool1DeviceDesktop/AttachModuleSetProperty1BackToSchool1DeviceDesktop";

export interface IAttachModuleSectionDeviceDesktopProps {
  device?: "desktop" | "mobile";
  component?: JSX.Element;
  text?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  className?: string;
}

export const AttachModuleSectionDeviceDesktop = ({
  device = "desktop",
  component = (
    <AttachModuleSetProperty1BackToSchool1DeviceDesktop
      property1="back-to-school-1"
      device="desktop"
    />
  ),
  text = "undefined",
  text2 = "undefined",
  text3 = "undefined",
  text4 = "undefined",
  className,
  ...props
}: IAttachModuleSectionDeviceDesktopProps): JSX.Element => {
  const variantsClassName = "device-" + device;

  return (
    <div
      className={
        "attach-module-section-device-desktop " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="frame-1255">
        <div className="shop-back-to-school-products">
          ช้อปสินค้า Apple ราคาพิเศษที่ UFicon{" "}
        </div>
        {component}
      </div>
      <div className="line-23"></div>
    </div>
  );
};
