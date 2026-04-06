import { ProductStripe } from '../../ProductStripe/ProductStripe';
import { lobStripeTiles, LobStripeTile } from '../../LobStripeTile';

export const LOBStripeSection = () => (
  <section className="hp-products" aria-labelledby="all-apple-products-heading">
    <div className="hp-heading-row">
      <h2 id="all-apple-products-heading" className="hp-heading">
        ผลิตภัณฑ์ของ Apple ทั้งหมด
      </h2>
    </div>
    <ProductStripe className="hp-product-stripe" ariaLabel="ผลิตภัณฑ์ของ Apple ทั้งหมด">
      {lobStripeTiles.map((item) => (
        <LobStripeTile key={item.id} item={item} className="lob-stripe-tile-instance" />
      ))}
    </ProductStripe>
    <div className="hp-divider" />
  </section>
);
