import { useEffect, useRef, useState } from "react";
import type { CarouselInstance } from "@fancyapps/ui/dist/carousel/carousel.js";
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.js";
import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "@fancyapps/ui/dist/carousel/carousel.autoplay.css";
import "./HeroBannerCarousel.css";

interface Slide {
  desktopSrc: string;
  mobileSrc: string;
  href?: string;
  alt?: string;
  bgColor: string;
}

const SLIDES: Slide[] = [
  {
    desktopSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/%5BAvail%5D%20iPad_Air_M4_Mar26_Web_Banner_1400x700__TH-TH.jpg?inline=true",
    mobileSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/%5BAvail%20iPad_Air_M4_Mar26_Web_Banner_600x500__TH-TH.jpg?inline=true",
    href: "#",
    alt: "iPad Air M4",
    bgColor: "#C2E4F0",
  },
  {
    desktopSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/%5BAvail%5D%20MacBook_Neo_13-inch_Mar26_Web_Banner_1400x700__TH-TH.jpg?inline=true",
    mobileSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/%5BAvail%5D%20MacBook_Neo_13-inch_Mar26_Web_Banner_600x500__TH-TH.jpg?inline=true",
    href: "#",
    alt: "MacBook Neo",
    bgColor: "#f5f5f7",
  },
  {
    desktopSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/%5BAvail%5D%20iPhone_17e_Mar26_Web_Banner_Avail_1400x700__TH-TH.jpg?inline=true",
    mobileSrc: "https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/%5BAvail%5D%20iPhone_17e_Mar26_Web_Banner_Avail_600x500__TH-TH.jpg?inline=true",
    href: "#",
    alt: "iPhone 17e",
    bgColor: "#F5F5F7",
  },
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
      instanceRef.current?.destroy();
      instanceRef.current = null;
    };
  }, []);

  const goTo = (index: number) => {
    instanceRef.current?.goTo(index);
  };

  return (
    <div className={`banner-carousel-property-1-organism-property-2-homepage-banner-section ${className}`.trim()}>
      <div
        ref={containerRef}
        className="f-carousel banner-carousel-stage"
        style={{ backgroundColor: slides[activeIdx]?.bgColor, transition: "background-color 0.6s ease" }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="f-carousel__slide">
            {slide.href ? (
              <a href={slide.href} className="banner-carousel-link" draggable={false}>
                <picture className="banner-carousel-picture">
                  <source media="(max-width: 768px)" srcSet={slide.mobileSrc} />
                  <img
                    src={slide.desktopSrc}
                    alt={slide.alt ?? `slide ${index + 1}`}
                    draggable={false}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "low"}
                    decoding="async"
                    width={1400}
                    height={700}
                    sizes="100vw"
                  />
                </picture>
              </a>
            ) : (
              <picture className="banner-carousel-picture">
                <source media="(max-width: 768px)" srcSet={slide.mobileSrc} />
                <img
                  src={slide.desktopSrc}
                  alt={slide.alt ?? `slide ${index + 1}`}
                  draggable={false}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "low"}
                  decoding="async"
                  width={1400}
                  height={700}
                  sizes="100vw"
                />
              </picture>
            )}
          </div>
        ))}
      </div>

      <div className="banner-carousel-dots-wrap">
        <div className="banner-carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`banner-carousel-dot${index === activeIdx ? " active" : ""}`}
              onClick={() => goTo(index)}
              aria-label={`Slide ${index + 1}`}
              aria-current={index === activeIdx ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
};