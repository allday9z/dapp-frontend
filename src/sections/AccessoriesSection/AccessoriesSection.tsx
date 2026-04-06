import { OrganismDeviceDesktop } from '../../OrganismDeviceDesktop/OrganismDeviceDesktop';
import { AppTile } from '../../AppTile/AppTile';

export const AccessoriesSection = () => (
  <section aria-labelledby="accessories-heading">
    <h2 id="accessories-heading" className="sr-only">Featured Apple Accessories</h2>
    <OrganismDeviceDesktop
      heading="Featured Apple Accessories."
      component={<AppTile image="image-1170.png" badge="IN-STORE" title="Mac Accessories" cta="Shop Mac accessories here" description="Available from $342 or $57/mo. for 6 mo.* before trade-in" />}
      component2={<AppTile image="image-1110.png" badge="NEW" title="iPad Accessories" cta="Shop iPad accessories here" description="Available from $42 or $7/mo. for 6 mo.* before trade-in" />}
      component3={<AppTile image="screen-shot-2022-11-01-at-9-27-20.png" badge="SALE" title="Apple TV Accessories" cta="Shop Apple TV accessories here" description="Available from $102 or $17/mo. for 6 mo.* before trade-in" />}
      component4={<AppTile image="image-1170.png" badge="CYBER MONDAY" title="Watch Accessories" cta="Shop Watch accessories here" description="Available from $138 or $23/mo. for 6 mo.* before trade-in" />}
      component5={<AppTile image="image-1170.png" badge="IN-STORE" title="iPhone Accessories" cta="Shop iPhone accessories here" description="Available from $54 or $9/mo. for 6 mo.* before trade-in" />}
      className="organism-instance"
    />
  </section>
);
