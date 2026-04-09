
import { useEffect, useRef, useState } from 'react';
import type { CarouselInstance } from '@fancyapps/ui/dist/carousel/carousel.js';
import { Carousel } from '@fancyapps/ui/dist/carousel/carousel.js';
import { Autoplay } from '@fancyapps/ui/dist/carousel/carousel.autoplay.js';
import '@fancyapps/ui/dist/carousel/carousel.css';
import '@fancyapps/ui/dist/carousel/carousel.autoplay.css';
import './BannerCarousel.css';
import type { BannerSlide } from '../../../types';

interface BannerCarouselProps {
  slides: BannerSlide[];
  className?: string;
}

export const BannerCarousel = ({ slides, className = '' }: BannerCarouselProps) => {
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
        transition: 'slide',
        slidesPerPage: 1,
        Autoplay: {
          timeout: 5000,
          pauseOnHover: true,
        },
      },
      { Autoplay }
    );

    instance.on('change', (_api: unknown, newPageIndex: number) => {
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
    <div className={`banner-carousel ${className}`.trim()}>
      <div ref={containerRef} className="f-carousel banner-carousel__stage">
        {slides.map((slide, i) => (
          <div key={i} className="f-carousel__slide">
            {slide.href ? (
              <a href={slide.href} className="banner-carousel__link" draggable={false}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  draggable={false}
                />
              </a>
            ) : (
              <img
                src={slide.src}
                alt={slide.alt}
                draggable={false}
              />
            )}
          </div>
        ))}
      </div>

      <div className="banner-carousel__dots-wrap">
        <div className="banner-carousel__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`banner-carousel__dot${i === activeIdx ? ' is-active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`สไลด์ ${i + 1}`}
              aria-current={i === activeIdx ? 'true' : undefined}
            />
          ))}
        </div>
      </div>

      <div className="banner-carousel__divider" />
    </div>
  );
};
