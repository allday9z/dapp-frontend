import "./ZigzagStoreNearYou.css";
import { MapPinScenarioDefault } from "../MapPinScenarioDefault/MapPinScenarioDefault";
import { CtaButtonSecondaryStateDefault } from "../CtaButtonSecondaryStateDefault/CtaButtonSecondaryStateDefault";

export interface IZigzagStoreNearYouProps {
  className?: string;
}

export const ZigzagStoreNearYou = ({
  className,
  ...props
}: IZigzagStoreNearYouProps): JSX.Element => {
  return (
    <>
    <div
      className={
        "app-zigzag-property-1-store-near-you-device-desktop " + className
      }
    >
      <div className="text-box">
        <div className="copy">
          <div className="frame-1775">
            <div className="stores-near-you">สาขาใกล้คุณ</div>
            <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-donec-facilisis-lorem-ipsum-dolor-sit-amet">
              ค้นหาสาขาที่ใกล้คุณที่สุด{" "}
            </div>
          </div>
          <CtaButtonSecondaryStateDefault
            instance={
              <MapPinScenarioDefault className="scenario-default-instance" />
            }
            button="secondary"
            text="ค้นหาสาขา"
            className="cta-instance"
          ></CtaButtonSecondaryStateDefault>
        </div>
      </div>
      <div className="image-area">
        <img
          className="tienda-apple-nevada-granada-2"
          src="https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/store.jpg?inline=true"
          alt="ภาพหน้าร้าน Apple Store"
        />
      </div>
    </div>

    <div
      className={
        "app-zigzag-property-1-store-near-you-device-mobile " + className
      }
    >
      <div className="text-box">
        <div className="copy">
          <div className="frame-1775">
            <div className="stores-near-you">สาขาใกล้คุณ</div>
            <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-donec-facilisis-lorem-ipsum-dolor-sit-amet">
              ค้นหาสาขาที่ใกล้คุณที่สุด{" "}
            </div>
          </div>
          <CtaButtonSecondaryStateDefault
            instance={
              <MapPinScenarioDefault className="scenario-default-instance" />
            }
            button="secondary"
            text="ค้นหาสาขา"
            className="cta-instance"
          ></CtaButtonSecondaryStateDefault>
        </div>
      </div>
      <div className="image-area">
        <img
          className="tienda-apple-nevada-granada-2"
          src="https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/store.jpg?inline=true"
          alt="ภาพหน้าร้าน Apple Store"
        />
      </div>
    </div>
    </>
  );
};
