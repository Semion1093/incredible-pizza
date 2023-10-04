import './SalesSection.scss';
import React from 'react';
import cashback from './assets/cashback-pickup.png';
import promotion from './assets/three-pizzas-promotion.png';

export const SalesSection = () => {
  return (
    <>
      <div className="sales-section desktop-only" id="promo">
        <a href="...">
          <figure className="component-wrapper">
            <img src={promotion} alt="" />
            <figcaption className="caption">
              <b>3 средние пиццы</b> <br /> от 1 099 рублей
            </figcaption>
          </figure>
        </a>
        <a href="...">
          <figure className="component-wrapper">
            <img src={cashback} alt="" />
            <figcaption className="caption">
              <b>Кэшбек 10%</b> <br /> на самовывоз
            </figcaption>
          </figure>
        </a>
        <a href="...">
          <figure className="component-wrapper">
            <img src={promotion} alt="" />
            <figcaption className="caption">
              <b>Комбо-бокс</b> <br /> за 599 рублей
            </figcaption>
          </figure>
        </a>
        <a href="...">
          <figure className="component-wrapper">
            <img src={cashback} alt="" />
            <figcaption className="caption">
              <b>Бесплатная доставка</b> <br /> до конца октября
            </figcaption>
          </figure>
        </a>
      </div>
    </>
  );
};
