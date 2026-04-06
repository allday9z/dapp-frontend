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
          src="/screen-shot-2022-02-22-at-2-10-20.png"
          alt="ภาพกิจกรรมเข้าร่วมคลาสในร้าน"
        />
      </div>
      <div className="text-area">
        <div className="frame-439">
          <div className="frame-1777">
            <div className="join-a-class">Group Demo</div>
            <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-donec-facilisis-lorem-ipsum-dolor-sit-amet">
              ปิดประสบการณ์ใช้งาน Apple แบบกลุ่ม พร้อมเทคนิคและคำแนะนำที่ช่วยให้คุณใช้งานได้อย่างเต็มประสิทธิภาพ{" "}
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
  );
};
