import { ProductStripe } from '../../ProductStripe/ProductStripe';
import { WhyBuyTile } from '../../WhyBuyStripe/WhyBuyTile';
import { whyBuyItems, whyBuySectionHeading } from '../../WhyBuyStripe/whyBuyData';

export const WhyBuySection = () => (
  <section className="hp-partners" aria-labelledby="why-buy-heading">
    <div className="hp-heading-row">
      <h2 id="why-buy-heading" className="hp-heading">
        {whyBuySectionHeading}
      </h2>
    </div>
    <ProductStripe className="hp-partner-stripe" ariaLabel="อีกหลายเหตุผลในการเลือกซื้อกับเรา" gap={16}>
      {whyBuyItems.map(item => (
        <WhyBuyTile key={item.id} item={item} />
      ))}
    </ProductStripe>
    <div className="hp-divider" />
  </section>
);
