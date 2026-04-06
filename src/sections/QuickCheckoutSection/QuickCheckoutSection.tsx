import { AttachModuleSectionDeviceDesktop } from '../../AttachModuleSectionDeviceDesktop/AttachModuleSectionDeviceDesktop';
import { AttachModuleSetProperty1QuickCheckout1DeviceDesktop } from '../../AttachModuleSetProperty1QuickCheckout1DeviceDesktop/AttachModuleSetProperty1QuickCheckout1DeviceDesktop';

export const QuickCheckoutSection = () => (
  <section aria-labelledby="quick-checkout-heading">
    <h2 id="quick-checkout-heading" className="sr-only">Quick Checkout</h2>
    <AttachModuleSectionDeviceDesktop
      component={<AttachModuleSetProperty1QuickCheckout1DeviceDesktop className="attach-module-set-instance2" property1="quick-checkout-1" />}
      text="Quick checkout."
      text2="Add to cart"
      text3="Add to cart    "
      text4="Add to cart"
      className="attach-module-section-instance"
    />
  </section>
);
