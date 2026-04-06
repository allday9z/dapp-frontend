import { OrganismDeviceDesktop } from '../../OrganismDeviceDesktop/OrganismDeviceDesktop';
import { AppTile } from '../../AppTile/AppTile';

export const AccessoriesSection = () => (
  <section aria-labelledby="accessories-heading">
    <h2 id="accessories-heading" className="sr-only">Featured Apple Accessories</h2>
    <OrganismDeviceDesktop
      heading="อุปกรณ์เสริม Apple"
      component={<AppTile image="image-1170.png" badge="ใหม่" title="อุปกรณ์เสริม Mac" cta="เพิ่มประสิทธิภาพการทำงานบน Mac ให้สะดวกและครบยิ่งขึ้น" description="เริ่มต้น ฿790" />}
      component2={<AppTile image="image-1110.png" badge="ใหม่" title="อุปกรณ์เสริม iPad " cta="เติมเต็มการใช้งาน iPad ให้หลากหลาย ทั้งทำงานและความบันเทิง" description="เริ่มต้น ฿390" />}
      component3={<AppTile image="screen-shot-2022-11-01-at-9-27-20.png" badge="๒" title="อุปกรณ์เสริม Apple TV" cta="เติมเต็มความบันเทิงบน Apple TV ให้สมบูรณ์ยิ่งขึ้น" description="เริ่มต้น ฿2,390" />}
      component4={<AppTile image="image-1170.png" badge="ใหม่" title="อุปกรณ์เสริม Apple Watch" cta="เสริมการใช้งาน Apple Watch ให้ลงตัวในทุกไลฟ์สไตล์" description="เริ่มต้น ฿1,290" />}
      component5={<AppTile image="image-1170.png" badge="ใหม่" title="อุปกรณ์เสริม iPhone" cta="พิ่มความสะดวกและปกป้อง iPhone ของคุณ ด้วยอุปกรณ์เสริมคุณภาพ" description="เริ่มต้น ฿790" />}
      className="organism-instance"
    />
  </section>
);
