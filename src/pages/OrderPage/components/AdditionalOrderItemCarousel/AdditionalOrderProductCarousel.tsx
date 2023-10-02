import './AdditionalOrderProductCarousel.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { AdditionalOrderProduct } from '../AdditionalOrderProduct/AdditionalOrderProduct';
import { Carousel } from '../Carousel/Carousel';
import { Product } from '../../../../models/Product';
import React, { useEffect, useState } from 'react';

export const AdditionalOrderProductCarousel = () => {
  const [snacks, setSnacks] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:4001/api/v1/product/list/snack')
      .then((response) => response.json())
      .then((result) => setSnacks(result.data));
  }, []);
  return (
    <div className="products-carousel">
      <h3>Добавить к заказу?</h3>
      <div className="section">
        <Carousel>
          {snacks.map((item, index) => (
            <AdditionalOrderProduct key={index} product={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
