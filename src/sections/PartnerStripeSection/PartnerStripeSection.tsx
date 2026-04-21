import { ProductStripe } from '@/components/organisms/ProductStripe/ProductStripe';
import { appStripeTextTiles, AppStripeTextTile } from '@/components/molecules/AppStripeTextTile';

export const PartnerStripeSection = () => (
  <section className="hp-partners" aria-labelledby="partner-services-heading">
    <div className="hp-heading-row">
      <h2 id="partner-services-heading" className="hp-heading">
        ครบ จบ ทุกบริการ ที่ UFicon
      </h2>
    </div>
    <ProductStripe className="hp-partner-stripe" ariaLabel="ครบ จบ ทุกการบริการ และช่วยเหลือ" arrowType="partner" gap={16}>
      {appStripeTextTiles.map(item => (
        <AppStripeTextTile key={item.id} item={item} className="app-text-tile-instance" />
      ))}
    </ProductStripe>
    <div className="hp-divider" />
  </section>
);
