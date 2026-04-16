import "./LOBPage.css";

export const HeadBanner = () => (
    <>
        <section className="lob-page__banner which-mac-is-right-for-you is-desktop" aria-label="MacBook hero banner" style={{ display: "flex", justifyContent: "center",height: "400px", alignItems: "center", backgroundColor: "#FAFAFA", borderBottom: "1px solid #E0E0E0",}}>
            <img
                className="lob-page__banner-image"
                src="https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/Banner%20Dynamic%20%5BMac%5D-01.webp"
                alt="Mac View All"
                about="การเลือก Mac ที่ใช่สำหรับคุณ"
                style={{ height: "350px", width: "auto", objectFit: "cover", cursor: "pointer" }}
                onClick={(e)=> window.location.href = "/collections/macbook"}
            />
        </section>
    </>
);