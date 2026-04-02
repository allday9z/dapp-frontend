import "./AppZigzagProperty1JoinAClassDeviceDesktop.css";
import { MapPinScenarioDefault } from "../MapPinScenarioDefault/MapPinScenarioDefault";
import { CtaButtonSecondaryStateDefault } from "../CtaButtonSecondaryStateDefault/CtaButtonSecondaryStateDefault";

export interface IAppZigzagProperty1JoinAClassDeviceDesktopProps {
  className?: string;
}

export const AppZigzagProperty1JoinAClassDeviceDesktop = ({
  className,
  ...props
}: IAppZigzagProperty1JoinAClassDeviceDesktopProps): JSX.Element => {
  return (
    <div
      className={
        "app-zigzag-property-1-join-a-class-device-desktop " + className
      }
    >
      <div className="image-area">
        <img
          className="screen-shot-2022-02-22-at-2-10-2"
          src="screen-shot-2022-02-22-at-2-10-20.png"
        />
      </div>
      <div className="text-area">
        <div className="frame-439">
          <div className="frame-1777">
            <div className="join-a-class">Join a class </div>
            <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-donec-facilisis-lorem-ipsum-dolor-sit-amet">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              facilisis. Lorem ipsum dolor sit amet.{" "}
            </div>
          </div>
          <CtaButtonSecondaryStateDefault
            instance={
              <MapPinScenarioDefault className="scenario-default-instance" />
            }
            button="secondary"
            text="RSVP"
            className="cta-instance"
          ></CtaButtonSecondaryStateDefault>
        </div>
      </div>
    </div>
  );
};
