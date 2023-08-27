import './SalesSection.scss';
import React from 'react';
import cashback from './assets/cashback-pickup.png';
import promotion from './assets/three-pizzas-promotion.png';

export const SalesSection = () => {
  return (
    <>
      <div className="SalesSection">
        <figure className="component-wrapper">
          <img src={promotion} alt="" />
          <figcaption className="caption">
            3 средние пиццы
            <br />
            от 999 рублей
          </figcaption>
        </figure>
        <figure className="component-wrapper">
          <img src={cashback} alt="" />
          <figcaption className="caption">
            Кэшбек 10% на
            <br />
            самовывоз (доставка)
          </figcaption>
        </figure>
        <figure className="component-wrapper">
          <img src={promotion} alt="" />
          <figcaption className="caption">
            3 средние пиццы
            <br />
            от 999 рублей
          </figcaption>
        </figure>
        <figure className="component-wrapper">
          <img src={cashback} alt="" />
          <figcaption className="caption">
            Кэшбек 10% на
            <br />
            самовывоз (доставка)
          </figcaption>
        </figure>
      </div>
    </>
  );
};
