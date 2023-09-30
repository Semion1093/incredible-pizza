import './Carousel.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import ButtonLeft from './assets/swiper-button-left.png';
import ButtonRight from './assets/swiper-button-right.png';
import React, { ReactNode } from 'react';

interface CarouselProps {
  slidesCount: number;
  spaceBetweenCard: number;
  children?: ReactNode | ReactNode[];
}

const SwiperButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-buttons">
      <button onClick={() => swiper.slidePrev()}>
        <img src={ButtonLeft} alt="" />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <img src={ButtonRight} alt="" />
      </button>
    </div>
  );
};

export const Carousel = ({ children, slidesCount, spaceBetweenCard }: CarouselProps) => {
  return (
    <Swiper slidesPerView={slidesCount} spaceBetween={spaceBetweenCard} modules={[Navigation]} className="additional-order-item-swiper">
      {React.Children.map(children, (item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
      <SwiperButtons />
    </Swiper>
  );
};
