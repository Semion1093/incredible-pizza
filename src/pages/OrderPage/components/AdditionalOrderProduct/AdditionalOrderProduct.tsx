import './AdditionalOrderProduct.scss';
import { Product } from '../../../../models/Product';
import { addToCart } from '../../../HomePage/components/Cart/cartSlice';
import { useDispatch } from 'react-redux';
import React from 'react';

export interface AdditionalOrderProductProps {
  product: Product;
}

export const AdditionalOrderProduct = (props: AdditionalOrderProductProps) => {
  const dispatch = useDispatch();

  return (
    <div className="additional-container">
      <div className="additional-order-item">
        <img src={props.product.img} alt="" />
        <span className="name">{props.product.title}</span>
        <button onClick={() => dispatch(addToCart(props.product))}>
          <span>{props.product.price} ₽</span>
        </button>
      </div>
    </div>
  );
};
