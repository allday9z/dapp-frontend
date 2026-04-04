import "./styles.css";
import { Layout } from "./Layout/Layout";
import { HomepageDeviceDesktop } from "./HomepageDeviceDesktop/HomepageDeviceDesktop";

export default function App() {
  return (
    <Layout announcement="สมัคร U•Joy  |  ผ่อนไม่ใช้บัตร  |  โปรโมชันประจำเดือน">
      <HomepageDeviceDesktop />
    </Layout>
  );
}
