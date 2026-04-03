import "./AppZigzagProperty1NeedHelpDeviceDesktop.css";
import { MapPinScenarioDefault } from "../MapPinScenarioDefault/MapPinScenarioDefault";
import { CtaButtonSecondaryStateDefault } from "../CtaButtonSecondaryStateDefault/CtaButtonSecondaryStateDefault";

export interface IAppZigzagProperty1NeedHelpDeviceDesktopProps {
  className?: string;
}

export const AppZigzagProperty1NeedHelpDeviceDesktop = ({
  className,
  ...props
}: IAppZigzagProperty1NeedHelpDeviceDesktopProps): JSX.Element => {
  return (
    <div
      className={"app-zigzag-property-1-need-help-device-desktop " + className}
    >
      <div className="image-area">
        <img className="download-2-2" src="download-2-20.png"  alt="" />
      </div>
      <div className="text">
        <div className="frame-438">
          <div className="frame-1776">
            <div className="need-help">Need help? </div>
            <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-donec-facilisis-lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.{" "}
            </div>
          </div>
          <CtaButtonSecondaryStateDefault
            instance={
              <MapPinScenarioDefault className="scenario-default-instance" />
            }
            button="secondary"
            text="See a Specialist"
            className="cta-instance"
          ></CtaButtonSecondaryStateDefault>
        </div>
      </div>
    </div>
  );
};
