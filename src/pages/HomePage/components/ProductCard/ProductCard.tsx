import './ProductCard.scss';
import { Product } from '../../../../models/Product';
import { ProductInCart, addToCart } from '../Cart/cartSlice';
import { ProductLabel } from '../ProductLabel/ProductLabel';
import { useDispatch } from 'react-redux';
import React from 'react';

interface ProductCardProps {
  product: ProductInCart;
}

export const ProductCard = (props: ProductCardProps) => {
  const dispatch = useDispatch();
  const imgSrc = props.product.img
    ? props.product.img
    : 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg';
  return (
    <div className="product-card">
      <ProductLabel labelText={props.product.labelText} />
      <img src={imgSrc} alt={props.product.title} />
      <div className="product-card-content">
        <p>{props.product.title}</p>
        <span>{props.product.description}</span>
      </div>
      <div className="product-card-action">
        <div className="price">{props.product.price.toLocaleString('fr-FR')} ₽</div>
        <button className="add-to-cart" onClick={() => dispatch(addToCart(props.product))}>
          Выбрать
        </button>
      </div>
    </div>
  );
};
