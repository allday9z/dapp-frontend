import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";

/* ── Types ── */
export interface AppleProduct {
  name: string;
  image: string;
  price?: string;
  href?: string;
}

export interface AppleProductSliderProps {
  products: AppleProduct[];
  title: string;
  subtitle?: string;
}

/* ── Styled Components ── */
const SectionContainer = styled.section`
  width: 100%;
  overflow: hidden;
`;

const Heading = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0 0 28px;
  padding-left: calc(50% - 610px);

  span {
    color: #86868b;
  }

  @media (max-width: 1220px) {
    padding-left: 20px;
    font-size: 24px;
  }
`;

const SliderWrapper = styled.div`
  padding-left: calc(50% - 610px);

  @media (max-width: 1220px) {
    padding-left: 20px;
  }

  /* หัวใจสำคัญ: ทำให้เห็นสไลด์ถัดไปล้นออกมาทางขวา */
  .swiper {
    overflow: visible;
  }
`;

const ProductCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 60px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    user-select: none;
    -webkit-user-drag: none;
    pointer-events: none;
  }
`;

const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

const ProductTitle = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0;
`;

const ProductPrice = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
  font-size: 0.875rem;
  line-height: 1rem;
  font-weight: 400;
  color: #1d1d1f;
  margin: 0;
`;

/* ── Component ── */
export const AppleProductSlider = ({
  products,
  title,
  subtitle,
}: AppleProductSliderProps): JSX.Element => {
  return (
    <SectionContainer>
      <Heading>
        {title}
        {subtitle && <> <span>{subtitle}</span></>}
      </Heading>

      <SliderWrapper>
        <Swiper
          modules={[FreeMode, Mousewheel]}
          freeMode={true}
          mousewheel={{ forceToAxis: true }}
          grabCursor={true}
          spaceBetween={20}
          slidesPerView={2.5}
          breakpoints={{
            768: { slidesPerView: 4.5 },
            1024: { slidesPerView: 6.5 },
          }}
        >
          {products.map((item, i) => (
            <SwiperSlide key={i}>
              <ProductCard href={item.href ?? "#"} draggable={false}>
                <ImageWrapper>
                  <img src={item.image} alt={item.name} />
                </ImageWrapper>
                <ProductDescription>
                  <ProductTitle>{item.name}</ProductTitle>
                  {item.price && <ProductPrice>{item.price}</ProductPrice>}
                </ProductDescription>
              </ProductCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderWrapper>
    </SectionContainer>
  );
};

export default AppleProductSlider;
