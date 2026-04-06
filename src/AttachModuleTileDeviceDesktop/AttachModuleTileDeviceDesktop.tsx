import "./AttachModuleTileDeviceDesktop.css";
import { AttachModuleImageProperty1MacBookAir } from "../AttachModuleImageProperty1MacBookAir/AttachModuleImageProperty1MacBookAir";
import { CtaButtonPrimaryStateDefault } from "../CtaButtonPrimaryStateDefault/CtaButtonPrimaryStateDefault";

export interface IAttachModuleTileDeviceDesktopProps {
  device?: "desktop" | "mobile";
  text?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  component?: JSX.Element;
  className?: string;
}

export const AttachModuleTileDeviceDesktop = ({
  device = "desktop",
  text = "undefined",
  text2 = "undefined",
  className,
  ...props
}: IAttachModuleTileDeviceDesktopProps): JSX.Element => {
  const variantsClassName = "device-" + device;

  return (
    <div
      className={
        "attach-module-tile-device-desktop " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="conversion-trade-in">
        <div className="frame-354">
          <AttachModuleImageProperty1MacBookAir className="attach-module-image-instance"></AttachModuleImageProperty1MacBookAir>
        </div>
        <div className="frame-358">
          <div className="frame-1258">
            <div className="frame-1839">
              <div className="trade-in">แบ่งชำระ 0% สบาย ๆ</div>
              <div className="mac-book-air">
                iPhone Air
                <br />{" "}
              </div>
            </div>
            <div className="_1-299-00-usd">฿29,900 </div>
            <div className="_126-mo-for-6-mo">฿2,990/ด. นาน 10 เดือน</div>
          </div>
          <CtaButtonPrimaryStateDefault
            label="Buy now"
            className="cta-instance"
          ></CtaButtonPrimaryStateDefault>
        </div>
      </div>
    </div>
  );
};
