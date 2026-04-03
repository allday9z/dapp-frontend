import "./AppZigzagProperty1StoreNearYouDeviceDesktop.css";
import { MapPinScenarioDefault } from "../MapPinScenarioDefault/MapPinScenarioDefault";
import { CtaButtonSecondaryStateDefault } from "../CtaButtonSecondaryStateDefault/CtaButtonSecondaryStateDefault";

export interface IAppZigzagProperty1StoreNearYouDeviceDesktopProps {
  className?: string;
}

export const AppZigzagProperty1StoreNearYouDeviceDesktop = ({
  className,
  ...props
}: IAppZigzagProperty1StoreNearYouDeviceDesktopProps): JSX.Element => {
  return (
    <div
      className={
        "app-zigzag-property-1-store-near-you-device-desktop " + className
      }
    >
      <div className="text-box">
        <div className="copy">
          <div className="frame-1775">
            <div className="stores-near-you">Stores near you </div>
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
            text="Find a store"
            className="cta-instance"
          ></CtaButtonSecondaryStateDefault>
        </div>
      </div>
      <div className="image-area">
        <img
          className="tienda-apple-nevada-granada-2"
          src="tienda-apple-nevada-granada-20.png"
          alt="ภาพหน้าร้าน Apple Store"
        />
      </div>
    </div>
  );
};
