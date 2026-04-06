import { AttachModuleSectionDeviceDesktop } from '../../AttachModuleSectionDeviceDesktop/AttachModuleSectionDeviceDesktop';
import { AttachModuleSetProperty1AllThingsIPad1DeviceDesktop } from '../../AttachModuleSetProperty1AllThingsIPad1DeviceDesktop/AttachModuleSetProperty1AllThingsIPad1DeviceDesktop';

export const AllThingsIPadSection = () => (
  <section aria-labelledby="all-things-ipad-heading">
    <h2 id="all-things-ipad-heading" className="sr-only">All Things iPad</h2>
    <AttachModuleSectionDeviceDesktop
      component={<AttachModuleSetProperty1AllThingsIPad1DeviceDesktop className="attach-module-set-instance2" property1="all-things-i-pad-1" />}
      text="All things iPad."
      text2="Shop models"
      text3="Shop models"
      className="attach-module-section-instance"
    />
  </section>
);
