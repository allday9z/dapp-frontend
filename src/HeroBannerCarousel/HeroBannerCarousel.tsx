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

const SLIDES: Slide[] = [
  { src: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/%5BAvail%5D%20iPad_Air_M4_Mar26_Web_Banner_1400x700__TH-TH.jpg?inline=true", href: "#", alt: "iStudio Hero Banner", bgColor: "#f0f4f8" },
  { src: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/%5BAvail%5D%20MacBook_Neo_13-inch_Mar26_Web_Banner_1400x700__TH-TH.jpg?inline=true", href: "#", alt: "Pre-order MacBook Pro M5", bgColor: "#f5f5f7" },
  { src: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/%5BAvail%5D%20iPhone_17e_Mar26_Web_Banner_Avail_1400x700__TH-TH.jpg?inline=true", href: "#", alt: "Pre-order Mac NEO", bgColor: "#fef0f2" },
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
  const [bgColor, setBgColor] = useState<string>(slides[0]?.bgColor ?? "transparent");

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

  // Sample average color from 4 corners of the image (edge background color)
  // Requires crossOrigin="anonymous" + CORS headers on the image server to work.
  const extractEdgeColor = (img: HTMLImageElement): string | null => {
    try {
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const s = 30; // corner sample size in px
      const canvas = document.createElement("canvas");
      canvas.width = s * 2;
      canvas.height = s * 2;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      // Draw all 4 corners into one small canvas
      ctx.drawImage(img, 0,      0,      s, s, 0, 0, s, s); // top-left
      ctx.drawImage(img, iw - s, 0,      s, s, s, 0, s, s); // top-right
      ctx.drawImage(img, 0,      ih - s, s, s, 0, s, s, s); // bottom-left
      ctx.drawImage(img, iw - s, ih - s, s, s, s, s, s, s); // bottom-right

      const data = ctx.getImageData(0, 0, s * 2, s * 2).data;
      let r = 0, g = 0, b = 0;
      const total = (s * 2) * (s * 2);
      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }
      return `rgb(${Math.round(r / total)}, ${Math.round(g / total)}, ${Math.round(b / total)})`;
    } catch {
      // canvas tainted (CORS not yet configured) — skip
      return null;
    }
  };

  const extractColor = (img: HTMLImageElement) => {
    if (!img.complete || img.naturalWidth === 0) return;
    const color = extractEdgeColor(img);
    if (color) setBgColor(color);
  };

  useEffect(() => {
    const slide = slides[activeIdx];
    if (slide?.bgColor) {
      setBgColor(slide.bgColor);
      return;
    }
    const img = imgRefs.current[activeIdx];
    if (img) extractColor(img);
  }, [activeIdx]);

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
                  // crossOrigin="anonymous"  ← เปิดเมื่อ filebrowser มี CORS headers แล้ว
                  draggable={false}
                  onLoad={(e) => extractColor(e.currentTarget)}
                />
              </a>
            ) : (
              <img
                ref={(el) => { imgRefs.current[i] = el; }}
                src={slide.src}
                alt={slide.alt ?? `slide ${i + 1}`}
                // crossOrigin="anonymous"  ← เปิดเมื่อ filebrowser มี CORS headers แล้ว
                draggable={false}
                onLoad={(e) => extractColor(e.currentTarget)}
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
