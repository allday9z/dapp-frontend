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
  bgColor: string;
}

const FB = "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP";
const SLIDES: Slide[] = [
  { src: `${FB}/%5BAvail%5D%20iPad_Air_M4_Mar26_Web_Banner_1400x700__TH-TH.jpg?inline=true`,      href: "#", alt: "iPad Air M4",   bgColor: "#e8f0f8" },
  { src: `${FB}/%5BAvail%5D%20MacBook_Neo_13-inch_Mar26_Web_Banner_1400x700__TH-TH.jpg?inline=true`, href: "#", alt: "MacBook Neo",   bgColor: "#f5f5f7" },
  { src: `${FB}/%5BAvail%5D%20iPhone_17e_Mar26_Web_Banner_Avail_1400x700__TH-TH.jpg?inline=true`,  href: "#", alt: "iPhone 17e",    bgColor: "#fdf0f2" },
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
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const instance = Carousel(
      container,
      {
        infinite: true,
        transition: "slide",
        slidesPerPage: 1,
        Autoplay: { timeout: 5000, pauseOnHover: true },
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

  const goTo = (i: number) => instanceRef.current?.goTo(i);

  return (
    <div className={"banner-carousel-property-1-organism-property-2-homepage-banner-section " + className}>
      <div
        ref={containerRef}
        className="f-carousel banner-carousel-stage"
        style={{ backgroundColor: slides[activeIdx]?.bgColor, transition: "background-color 0.6s ease" }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="f-carousel__slide">
            {slide.href ? (
              <a href={slide.href} className="banner-carousel-link" draggable={false}>
                <img src={slide.src} alt={slide.alt ?? `slide ${i + 1}`} draggable={false} />
              </a>
            ) : (
              <img src={slide.src} alt={slide.alt ?? `slide ${i + 1}`} draggable={false} />
            )}
          </div>
        ))}
      </div>

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
    </div>
  );
};
