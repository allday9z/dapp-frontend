import { AttachModuleSectionDeviceDesktop } from '../../AttachModuleSectionDeviceDesktop/AttachModuleSectionDeviceDesktop';
import { AttachModuleSetProperty1TradeIn1DeviceDesktop } from '../../AttachModuleSetProperty1TradeIn1DeviceDesktop/AttachModuleSetProperty1TradeIn1DeviceDesktop';

export const TradeInSection = () => (
  <section aria-labelledby="trade-in-heading">
    <h2 id="trade-in-heading" className="sr-only">Trade-In</h2>
    <AttachModuleSectionDeviceDesktop
      component={<AttachModuleSetProperty1TradeIn1DeviceDesktop className="attach-module-set-instance" />}
      text="Trade-in your current device."
      text2="Shop models"
      text3="Shop models"
      text4="Shop models"
      className="attach-module-section-instance"
    />
  </section>
);
