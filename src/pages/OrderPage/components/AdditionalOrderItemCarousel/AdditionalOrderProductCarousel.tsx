import './AdditionalOrderProductCarousel.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { AdditionalOrderProduct } from '../AdditionalOrderProduct/AdditionalOrderProduct';
import { Carousel } from '../Carousel/Carousel';
import { Product } from '../../../../models/Product';
import React from 'react';

interface AdditionalOrderProductCarouselProps {
  products: Product[];
  header: string;
  swiperButtonName: string;
}

export const AdditionalOrderProductCarousel = (props: AdditionalOrderProductCarouselProps) => {
  return (
    <div className="products-carousel">
      <h3>{props.header}</h3>
      <div className="section">
        <Carousel swiperButtonName={props.swiperButtonName}>
          {props.products.map((item, index) => (
            <AdditionalOrderProduct key={index} product={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
