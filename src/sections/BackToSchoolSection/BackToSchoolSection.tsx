import { AttachModuleSectionDeviceDesktop } from '../../AttachModuleSectionDeviceDesktop/AttachModuleSectionDeviceDesktop';
import { AttachModuleSetProperty1BackToSchool3DeviceDesktop } from '../../AttachModuleSetProperty1BackToSchool3DeviceDesktop/AttachModuleSetProperty1BackToSchool3DeviceDesktop';

export const BackToSchoolSection = () => (
  <section aria-labelledby="back-to-school-heading">
    <h2 id="back-to-school-heading" className="sr-only">Back to School</h2>
    <AttachModuleSectionDeviceDesktop
      component={<AttachModuleSetProperty1BackToSchool3DeviceDesktop className="attach-module-set-instance2" property1="back-to-school-3" />}
      text="Shop models"
      text2="Shop models"
      text3="Shop models"
      className="attach-module-section-instance"
    />
  </section>
);
