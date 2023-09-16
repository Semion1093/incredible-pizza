import './ProductCard.scss';
import { ProductLabel } from '../ProductLabel/ProductLabel';
import React from 'react';

interface ProductCardProps {
  labelText?: string;
  imageLink?: string;
  name?: string;
  description?: string;
  minPrice?: number;
}

export const ProductCard = (props: ProductCardProps) => {
  const imgSrc = props.imageLink
    ? props.imageLink
    : 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg';
  return (
    <div className="product-card">
      <ProductLabel labelText={props.labelText} />
      <img src={imgSrc} alt={props.name} />
      <div className="product-card-content">
        <p>{props.name}Чикен Сладкий Чили</p>
        <span>{props.description}Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соус...</span>
        <div className="product-card-action">
          <button className="add-to-cart">Выбрать</button>
          <div className="price">{props.minPrice}от 399 ₽</div>
        </div>
      </div>
    </div>
  );
};
