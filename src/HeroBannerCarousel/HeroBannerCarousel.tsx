import { useEffect, useRef, useState } from "react";
import type { CarouselInstance } from "@fancyapps/ui/dist/carousel/carousel.js";
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.js";
import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "@fancyapps/ui/dist/carousel/carousel.autoplay.css";
import "./HeroBannerCarousel.css";

interface Slide {
  src: string;
  href?: string;
  alt?: string;
  bgColor?: string;
}

// ใช้ /img-proxy/ ใน dev (Vite proxy → filebrowser) — ไม่มีปัญหา CORS
// ใน production ให้ตั้ง CORS headers บน filebrowser แล้วเปลี่ยนกลับเป็น absolute URL
const FB = "/img-proxy/api/public/dl/FH-wjIaJ/DAPP";
const SLIDES: Slide[] = [
  { src: `${FB}/%5BAvail%5D%20iPad_Air_M4_Mar26_Web_Banner_1400x700__TH-TH.jpg?inline=true`, href: "#", alt: "iStudio Hero Banner" },
  { src: `${FB}/%5BAvail%5D%20MacBook_Neo_13-inch_Mar26_Web_Banner_1400x700__TH-TH.jpg?inline=true`, href: "#", alt: "Pre-order MacBook Pro M5" },
  { src: `${FB}/%5BAvail%5D%20iPhone_17e_Mar26_Web_Banner_Avail_1400x700__TH-TH.jpg?inline=true`, href: "#", alt: "Pre-order Mac NEO" },
];

export interface IHeroBannerCarouselProps {
  slides?: Slide[];
  className?: string;
}

export const HeroBannerCarousel = ({
  slides = SLIDES,
  className = "",
}: IHeroBannerCarouselProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<CarouselInstance | null>(null);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [bgColor, setBgColor] = useState<string>(
    slides[0]?.bgColor && slides[0].bgColor !== "" ? slides[0].bgColor : "#f5f5f7"
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const instance = Carousel(
      container,
      {
        infinite: true,
        transition: "slide",
        slidesPerPage: 1,
        Autoplay: {
          timeout: 5000,
          pauseOnHover: true,
        },
      },
      { Autoplay }
    );

    instance.on("change", (_api: unknown, newPageIndex: number) => {
      setActiveIdx(newPageIndex);
    });

    instance.init();

    instanceRef.current = instance;
    return () => {
      instance.destroy();
      instanceRef.current = null;
    };
  }, []);

  const onImageLoad = (img: HTMLImageElement) => {
    if (!img.complete || img.naturalWidth === 0) return;
    try {
      const leftColor = extractEdgeColor(img, "left");
      const rightColor = extractEdgeColor(img, "right");
      if (leftColor && rightColor) {
        setBgColor(`linear-gradient(to right, ${leftColor}, ${rightColor})`);
      }
    } catch (e) {
      console.warn("Failed to extract colors:", e);
    }
  };

  const extractEdgeColor = (img: HTMLImageElement, edge: "left" | "right"): string | null => {
    try {
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const canvas = document.createElement("canvas");
      canvas.width = 100;
      canvas.height = 100;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      if (edge === "left") {
        // Sample left edge (1px strip from left side)
        ctx.drawImage(img, 0, 0, 1, ih, 0, 0, 100, 100);
      } else {
        // Sample right edge (1px strip from right side)
        ctx.drawImage(img, iw - 1, 0, 1, ih, 0, 0, 100, 100);
      }

      const data = ctx.getImageData(0, 0, 100, 100).data;
      let r = 0, g = 0, b = 0, count = 0;
      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
        count++;
      }
      return `rgb(${Math.round(r / count)}, ${Math.round(g / count)}, ${Math.round(b / count)})`;
    } catch {
      return null;
    }
  };

  useEffect(() => {
    const slide = slides[activeIdx];
    // Use bgColor from slide, or default fallback
    if (slide?.bgColor && slide.bgColor !== "") {
      setBgColor(slide.bgColor);
    } else {
      setBgColor("#f5f5f7"); // Default light gray
    }
  }, [activeIdx, slides]);

  const goTo = (i: number) => {
    instanceRef.current?.goTo(i);
  };

  return (
    <div
      className={
        "banner-carousel-property-1-organism-property-2-homepage-banner-section " +
        className
      }
    >
      <div
        ref={containerRef}
        className="f-carousel banner-carousel-stage"
        style={{ backgroundColor: bgColor, transition: "background-color 0.6s ease" }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="f-carousel__slide">
            {slide.href ? (
              <a href={slide.href} className="banner-carousel-link" draggable={false}>
                <img
                  ref={(el) => { imgRefs.current[i] = el; }}
                  src={slide.src}
                  alt={slide.alt ?? `slide ${i + 1}`}
                  crossOrigin="anonymous"
                  draggable={false}
                  onLoad={(e) => onImageLoad(e.currentTarget)}
                />
              </a>
            ) : (
              <img
                ref={(el) => { imgRefs.current[i] = el; }}
                src={slide.src}
                alt={slide.alt ?? `slide ${i + 1}`}
                crossOrigin="anonymous"
                draggable={false}
                onLoad={(e) => onImageLoad(e.currentTarget)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Dots — white pill strip below the banner image */}
      <div className="banner-carousel-dots-wrap">
        <div className="banner-carousel-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={"banner-carousel-dot" + (i === activeIdx ? " active" : "")}
              onClick={() => goTo(i)}
              aria-label={`สไลด์ ${i + 1}`}
              aria-current={i === activeIdx ? "true" : undefined}
            />
          ))}
        </div>
      </div>

      {/* Divider below dots strip */}
      {/* <div className="banner-carousel-divider" /> */}
    </div>
  );
};
