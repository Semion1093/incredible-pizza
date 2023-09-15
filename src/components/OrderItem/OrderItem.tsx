import './OrderItem.scss';
import { QuantitySelector } from './components/QuantitySelector';
import React from 'react';
import pepperoni from './assets/pepperoni-rustic.png';

export const OrderItem = () => {
  return (
    <div className="order-item-wrapper">
      <div className="content">
        <img src={pepperoni} alt="" />
        <div className="text">
          <p className="title">Пепперони по-деревенски</p>
          <span>Традиционное тесто, 23 см</span>
        </div>
      </div>
      <QuantitySelector />
      <p className="prace">1399 ₽</p>
    </div>
  );
};
