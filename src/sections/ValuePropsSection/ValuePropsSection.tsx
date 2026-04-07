import { ValuePropGrid } from '../../ValuePropGrid/ValuePropGrid';

export const ValuePropsSection = () => (
  <section aria-labelledby="value-props-heading">
    <h2 id="value-props-heading" className="sr-only">สิทธิประโยชน์</h2>
    <ValuePropGrid className="organism-value-prop-section-instance" />
  </section>
);
