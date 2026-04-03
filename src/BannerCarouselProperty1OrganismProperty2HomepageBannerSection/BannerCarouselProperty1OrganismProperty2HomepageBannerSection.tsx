import { useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
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
  const [activeIdx, setActiveIdx] = useState(0);
  const splideRef = useRef<Splide>(null);

  return (
    <div
      className={
        "banner-carousel-property-1-organism-property-2-homepage-banner-section " +
        className
      }
    >
      <Splide
        ref={splideRef}
        className="banner-carousel-splide"
        options={{
          type: "loop",
          autoplay: true,
          interval: 5000,
          pauseOnHover: true,
          pauseOnFocus: false,
          speed: 450,
          easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
          arrows: false,
          pagination: false,
          height: "25.625rem",
          cover: true,
          snap: true,
        }}
        onMoved={(splide) => setActiveIdx(splide.index)}
      >
        {slides.map((slide, i) => (
          <SplideSlide key={i}>
            {slide.href ? (
              <a href={slide.href} className="banner-carousel-link" draggable={false}>
                <img src={slide.src} alt={slide.alt ?? `slide ${i + 1}`} draggable={false} />
              </a>
            ) : (
              <img src={slide.src} alt={slide.alt ?? `slide ${i + 1}`} draggable={false} />
            )}
          </SplideSlide>
        ))}
      </Splide>

      {/* Dots — white pill strip below the banner image */}
      <div className="banner-carousel-dots-wrap">
        <div className="banner-carousel-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={"banner-carousel-dot" + (i === activeIdx ? " active" : "")}
              onClick={() => splideRef.current?.splide?.go(i)}
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
