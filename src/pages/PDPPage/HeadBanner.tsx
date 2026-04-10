import "./LOBPage.css";

export const HeadBanner = () => (
    <section className="lob-page__banner which-mac-is-right-for-you" aria-label="MacBook hero banner" style={{ display: "flex", justifyContent: "center",height: "400px", alignItems: "center", backgroundColor: "#FAFAFA", borderBottom: "1px solid #E0E0E0",}}>
        <img
            className="lob-page__banner-image"
            src="/assets/lob_page/head-banner-dynamic.webp"
            alt="Mac View All"
            about="การเลือก Mac ที่ใช่สำหรับคุณ"
            style={{ height: "350px", width: "auto", objectFit: "cover", cursor: "pointer" }}
            onClick={(e)=> window.location.href = "/collections/macbook"}
        />
    </section>
);
