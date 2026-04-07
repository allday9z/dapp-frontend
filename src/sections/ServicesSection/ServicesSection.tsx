import { AppTileGrid } from '../../AppTileGrid/AppTileGrid';
import { AppTile } from '../../AppTile/AppTile';

export const ServicesSection = () => (
  <section aria-labelledby="services-heading">
    <h2 id="services-heading" className="sr-only">บริการในร้าน</h2>
    <AppTileGrid
      heading="View in-store classes and support."
      component={<AppTile image="image-1170.png" badge="IN-STORE" title="Join a class" cta="Free sessions" description="Free sessions that inspire hands-on creativity in photography, art, music, and more." />}
      component2={<AppTile image="image-1100.png" badge="IN-STORE" title="Appointment" cta="Apple Support has you covered" description="From setting up your device to recovering your Apple ID to replacing the screen, Apple Support has you covered." />}
      component3={<AppTile image="image-1180.png" badge="IN-STORE" title="Delivery and Pickup" cta="Get free delivery or in-store pick-up" description="Pick up your online order at the Apple Store." />}
      component4={<AppTile image="image-1180.png" badge="IN-STORE" title="Find a Store" cta="Shop the latest Apple products" description="More ways to shop: Find an Apple Store or other retailer near you." />}
      component5={<AppTile image="screen-shot-2022-11-01-at-9-27-10.png" badge="IN-STORE" title="Apple Repair" cta="Schedule a visit" description="Online or over the phone, we'll arrange shipment for your product to an Apple Repair Center." />}
      className="organism-instance"
    />
  </section>
);
