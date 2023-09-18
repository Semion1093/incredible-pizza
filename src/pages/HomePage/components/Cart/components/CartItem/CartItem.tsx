import './CartItem.scss';
import { QuantitySelector } from '../../../../../../components/QuantitySelector/QuantitySelector';
import React from 'react';
import pepperoni from './assets/pepperoni-rustic.png';

export const CartItem = () => {
  return (
    <>
      <div className="cart-item">
        <img src={pepperoni} alt="" />
        <div className="content">
          <div className="text">
            <span className="title">Пепперони по-деревенски</span>
            <span>Традиционное тесто, 23 см</span>
          </div>
          <div className="result">
            <QuantitySelector />
            <span className="price">1399 ₽</span>
          </div>
        </div>
      </div>
    </>
  );
};
