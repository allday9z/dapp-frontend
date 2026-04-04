import { useEffect, useRef, useState } from "react";
import type { CarouselInstance } from "@fancyapps/ui/dist/carousel/carousel.js";
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.js";
import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "@fancyapps/ui/dist/carousel/carousel.autoplay.css";
import "./BannerCarouselProperty1OrganismProperty2HomepageBannerSection.css";

interface Slide {
  src: string;
  href?: string;
  alt?: string;
}

const SLIDES: Slide[] = [
  { src: "Herobanner-CTA-desktop.png", href: "#", alt: "iStudio Hero Banner" },
  { src: "Preorder_MacBookProM5_iStudio_Banner_2000x700_Preorder_1.png", href: "#", alt: "Pre-order MacBook Pro M5" },
  { src: "Preorder_MacNEO_iStudio-Banner-2000x700_Preorder.png", href: "#", alt: "Pre-order Mac NEO" },
];

export interface IBannerCarouselProperty1OrganismProperty2HomepageBannerSectionProps {
  slides?: Slide[];
  className?: string;
}

export const BannerCarouselProperty1OrganismProperty2HomepageBannerSection = ({
  slides = SLIDES,
  className = "",
}: IBannerCarouselProperty1OrganismProperty2HomepageBannerSectionProps): JSX.Element => {
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
      <div ref={containerRef} className="f-carousel banner-carousel-stage">
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
      <div className="banner-carousel-divider" />
    </div>
  );
};
