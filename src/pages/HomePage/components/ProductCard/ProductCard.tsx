import './ProductCard.scss';
import { Product } from '../../../../models/Product';
import { ProductLabel } from '../ProductLabel/ProductLabel';
import { addToCart } from './productCartSlice';
import { batch, useDispatch } from 'react-redux';
import { openPizzaSettings } from '../PizzaSettings/pizzaSettingsSlice';
import React from 'react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = (props: ProductCardProps) => {
  const dispatch = useDispatch();
  const onSubmitopenPizzaSettings = () => {
    batch(() => {
      dispatch(openPizzaSettings());
      dispatch(addToCart(props.product));
    });
  };
  const imgSrc = props.product.img
    ? props.product.img
    : 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg';
  return (
    <>
      <div className="product-card">
        <ProductLabel labelText={props.product.labelText} />
        <img src={imgSrc} alt={props.product.title} />
        <div className="product-card-content">
          <p>{props.product.title}</p>
          <span>{props.product.description}</span>
          <div className="product-card-action">
            <button className="add-to-cart" onClick={() => onSubmitopenPizzaSettings()}>
              Выбрать
            </button>
            <div className="price">{props.product.price} ₽</div>
          </div>
        </div>
      </div>
    </>
  );
};
