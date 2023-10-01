import './Carousel.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import React, { ReactNode } from 'react';
import leftArrow from './assets/swiper-button-left.png';
import rightArrow from './assets/swiper-button-right.png';

interface ReactSwiperProps {
  swiperButtonName: string;
  desktopNavigationOnly?: boolean;
  children: ReactNode | ReactNode[];
}

export const Carousel = ({ swiperButtonName, children }: ReactSwiperProps) => {
  const isDesktop = useMediaQuery({ minWidth: 850 });
  return (
    <div className="swiper-container">
      <div className="nav-content-container">
        {isDesktop && (
          <div className={'image-swiper-button-prev ' + swiperButtonName}>
            <img src={leftArrow} alt="leftArrow" className="img-arrow" />
          </div>
        )}
        <Swiper
          slidesPerView={isDesktop ? 3 : 1}
          spaceBetween={30}
          modules={[Navigation, Mousewheel, Keyboard]}
          loop={true}
          navigation={{
            prevEl: '.image-swiper-button-prev ' + swiperButtonName,
            nextEl: '.image-swiper-button-next ' + swiperButtonName,
          }}
          mousewheel={true}
          keyboard={true}
        >
          {React.Children.map(children, (child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))}
        </Swiper>
        {isDesktop && (
          <div className={'image-swiper-button-next ' + swiperButtonName}>
            <img src={rightArrow} alt="rightArrow" className="img-arrow" />
          </div>
        )}
      </div>
    </div>
  );
};
