import "./AttachModuleTileDeviceDesktop.css";
import { CtaButtonPrimaryStateDefault } from "../CtaButtonPrimaryStateDefault/CtaButtonPrimaryStateDefault";

export interface IAttachModuleTileDeviceDesktopProps {
  device?: "desktop" | "mobile";
  /** Badge label (e.g. "NEW", "ใหม่") — empty string hides text but preserves height */
  text?: string;
  /** Badge color — defaults to #0071bc */
  badgeColor?: string;
  /** Product name — renders on 2 lines if needed */
  text2?: string;
  /** Price */
  text3?: string;
  /** CTA label */
  text4?: string;
  component?: JSX.Element;
  className?: string;
}

export const AttachModuleTileDeviceDesktop = ({
  device = "desktop",
  text = "",
  badgeColor = "#0071bc",
  text2 = "",
  text3 = "",
  text4 = "ซื้อเลย",
  component,
  className,
  ...props
}: IAttachModuleTileDeviceDesktopProps): JSX.Element => {
  const variantsClassName = "device-" + device;

  return (
    <div
      className={
        "attach-module-tile-device-desktop " +
        (className ?? "") +
        " " +
        variantsClassName
      }
    >
      <div className="conversion-trade-in">
        <div className="frame-354">
          {component}
        </div>
        <div className="frame-358">
          <div className="frame-1258">
            <div className="frame-1839">
              <div className="trade-in" style={{ color: badgeColor }}>{text}</div>
              <div className="mac-book-air">{text2}</div>
            </div>
            <div className="_1-299-00-usd">{text3}</div>
          </div>
          <CtaButtonPrimaryStateDefault
            label={text4}
            className="cta-instance"
          ></CtaButtonPrimaryStateDefault>
        </div>
      </div>
    </div>
  );
};
