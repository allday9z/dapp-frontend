import { AttachModuleSectionDeviceDesktop } from '../../AttachModuleSectionDeviceDesktop/AttachModuleSectionDeviceDesktop';
import { AttachModuleSetProperty1AppleCare1DeviceDesktop } from '../../AttachModuleSetProperty1AppleCare1DeviceDesktop/AttachModuleSetProperty1AppleCare1DeviceDesktop';

export const AppleCareSection = () => (
  <section aria-labelledby="applecare-heading">
    <h2 id="applecare-heading" className="sr-only">AppleCare+</h2>
    <AttachModuleSectionDeviceDesktop
      component={<AttachModuleSetProperty1AppleCare1DeviceDesktop className="attach-module-set-instance2" property1="apple-care-1" />}
      text="Peace of mind with AppleCare+."
      text2="Shop models"
      text3="Shop models"
      text4="Shop models"
      className="attach-module-section-instance"
    />
  </section>
);
