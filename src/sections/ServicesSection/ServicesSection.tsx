import { AppTileGrid } from '../../AppTileGrid/AppTileGrid';
import type { IAppTileProps } from '../../AppTile/AppTile';

const servicesItems: IAppTileProps[] = [
  {
    image: "image-1170.png",
    imageAlt: "Join a class",
    badge: "IN-STORE",
    title: "Join a class",
    cta: "Free sessions",
    description: "Free sessions that inspire hands-on creativity in photography, art, music, and more.",
  },
  {
    image: "image-1100.png",
    imageAlt: "Appointment",
    badge: "IN-STORE",
    title: "Appointment",
    cta: "Apple Support has you covered",
    description: "From setting up your device to recovering your Apple ID to replacing the screen, Apple Support has you covered.",
  },
  {
    image: "image-1180.png",
    imageAlt: "Delivery and Pickup",
    badge: "IN-STORE",
    title: "Delivery and Pickup",
    cta: "Get free delivery or in-store pick-up",
    description: "Pick up your online order at the Apple Store.",
  },
  {
    image: "image-1180.png",
    imageAlt: "Find a Store",
    badge: "IN-STORE",
    title: "Find a Store",
    cta: "Shop the latest Apple products",
    description: "More ways to shop: Find an Apple Store or other retailer near you.",
  },
  {
    image: "screen-shot-2022-11-01-at-9-27-10.png",
    imageAlt: "Apple Repair",
    badge: "IN-STORE",
    title: "Apple Repair",
    cta: "Schedule a visit",
    description: "Online or over the phone, we'll arrange shipment for your product to an Apple Repair Center.",
  },
];

export const ServicesSection = () => (
  <section aria-labelledby="services-heading">
    <h2 id="services-heading" className="sr-only">บริการในร้าน</h2>
    <AppTileGrid
      heading="View in-store classes and support."
      items={servicesItems}
      className="organism-instance"
    />
  </section>
);
