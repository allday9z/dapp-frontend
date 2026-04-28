import "./ZigzagNeedHelp.css";
import { MapPinScenarioDefault } from "../../atoms/MapPinScenarioDefault/MapPinScenarioDefault";
import { CtaButtonSecondaryStateDefault } from "../../atoms/CtaButtonSecondaryStateDefault/CtaButtonSecondaryStateDefault";

export interface IZigzagNeedHelpProps {
  className?: string;
}

export const ZigzagNeedHelp = ({
  className,
  ...props
}: IZigzagNeedHelpProps): JSX.Element => {
  return (
    <>
      <div
        className={"app-zigzag-property-1-need-help-device-desktop " + className}
      >
        <div className="image-area">
          <img className="download-2-2" src="https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/service.jpg?inline=true" alt="" loading="lazy" decoding="async" fetchPriority="low" width={608} height={364} />
        </div>
        <div className="text">
          <div className="frame-438">
            <div className="frame-1776">
              <div className="need-help">บริการช่วยเหลือ</div>
              <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-donec-facilisis-lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit">
                พร้อมให้ความช่วยเหลือในทุกขั้นตอน ตั้งแต่การเลือกสินค้าไปจนถึงบริการหลังการขาย เพื่อให้คุณใช้งานได้อย่างมั่นใจ{" "}
              </div>
            </div>
            <CtaButtonSecondaryStateDefault
              instance={
                <MapPinScenarioDefault className="scenario-default-instance" />
              }
              button="secondary"
              text="ติดต่อเรา"
              className="cta-instance"
            ></CtaButtonSecondaryStateDefault>
          </div>
        </div>
      </div>

      <div
        className={"app-zigzag-property-1-need-help-device-mobile " + className}
      >
        <div className="image-area">
          <img className="download-2-2" src="https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/service.jpg?inline=true" alt="" loading="lazy" decoding="async" fetchPriority="low" width={608} height={364} />
        </div>
        <div className="text">
          <div className="frame-438">
            <div className="frame-1776">
              <div className="need-help">บริการช่วยเหลือ</div>
              <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-donec-facilisis-lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit">
                พร้อมให้ความช่วยเหลือในทุกขั้นตอน ตั้งแต่การเลือกสินค้าไปจนถึงบริการหลังการขาย เพื่อให้คุณใช้งานได้อย่างมั่นใจ{" "}
              </div>
            </div>
            <CtaButtonSecondaryStateDefault
              instance={
                <MapPinScenarioDefault className="scenario-default-instance" />
              }
              button="secondary"
              text="ติดต่อเรา"
              className="cta-instance"
            ></CtaButtonSecondaryStateDefault>
          </div>
        </div>
      </div>
    </>
  );
};