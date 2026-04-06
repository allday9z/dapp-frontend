import { OrganismDeviceDesktop } from '../../OrganismDeviceDesktop/OrganismDeviceDesktop';

export const WhatsNewSection = () => (
  <section aria-labelledby="whats-new-heading">
    <h2 id="whats-new-heading" className="sr-only">สินค้าใหม่ล่าสุด</h2>
    <OrganismDeviceDesktop
      text="Available starting 1.24 from $1999 or $333/mo. for 6 mo.* before trade-in"
      text2="Available starting 1.24 from $738 or $123/mo. for 6 mo.* before trade-in"
      className="organism-instance"
    />
  </section>
);
