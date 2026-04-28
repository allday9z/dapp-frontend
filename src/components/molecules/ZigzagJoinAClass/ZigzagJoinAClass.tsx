import "./ZigzagJoinAClass.css";
import { MapPinScenarioDefault } from "../../atoms/MapPinScenarioDefault/MapPinScenarioDefault";
import { CtaButtonSecondaryStateDefault } from "../../atoms/CtaButtonSecondaryStateDefault/CtaButtonSecondaryStateDefault";

export interface IZigzagJoinAClassProps {
  className?: string;
}

export const ZigzagJoinAClass = ({
  className,
  ...props
}: IZigzagJoinAClassProps): JSX.Element => {
  return (
    <>
    <div
      className={
        "app-zigzag-property-1-join-a-class-device-desktop " + className
      }
    >
      <div className="image-area">
        <img
          className="screen-shot-2022-02-22-at-2-10-2"
          src="https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/group%20demo.jpg?inline=true"
          alt="ภาพกิจกรรมเข้าร่วมคลาสในร้าน"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          width={608}
          height={364}
        />
      </div>
      <div className="text-area">
        <div className="frame-439">
          <div className="frame-1777">
            <div className="join-a-class">Group Demo</div>
            <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-donec-facilisis-lorem-ipsum-dolor-sit-amet">
              เปิดประสบการณ์ใช้งาน Apple แบบกลุ่ม พร้อมเทคนิคและคำแนะนำที่ช่วยให้คุณใช้งานได้อย่างเต็มประสิทธิภาพ{" "}
            </div>
          </div>
          <CtaButtonSecondaryStateDefault
            instance={
              <MapPinScenarioDefault className="scenario-default-instance" />
            }
            button="secondary"
            text="ดูรายละเอียดเพิ่มเติม"
            className="cta-instance"
          ></CtaButtonSecondaryStateDefault>
        </div>
      </div>
    </div>

    <div
      className={
        "app-zigzag-property-1-join-a-class-device-mobile " + className
      }
    >
      <div className="image-area">
        <img
          className="screen-shot-2022-02-22-at-2-10-2"
          src="https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/group%20demo.jpg?inline=true"
          alt="ภาพกิจกรรมเข้าร่วมคลาสในร้าน"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          width={608}
          height={364}
        />
      </div>
      <div className="text-area">
        <div className="frame-439">
          <div className="frame-1777">
            <div className="join-a-class">Group Demo</div>
            <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-donec-facilisis-lorem-ipsum-dolor-sit-amet">
              เปิดประสบการณ์ใช้งาน Apple แบบกลุ่ม พร้อมเทคนิคและคำแนะนำที่ช่วยให้คุณใช้งานได้อย่างเต็มประสิทธิภาพ{" "}
            </div>
          </div>
          <CtaButtonSecondaryStateDefault
            instance={
              <MapPinScenarioDefault className="scenario-default-instance" />
            }
            button="secondary"
            text="ดูรายละเอียดเพิ่มเติม"
            className="cta-instance"
          ></CtaButtonSecondaryStateDefault>
        </div>
      </div>
    </div>
    </>
  );
};
