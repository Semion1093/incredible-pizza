import './OrderItem.scss';
import { Delimiter } from '../../../../components/Delimiter/Delimiter';
import { QuantitySelector } from '../../../../components/QuantitySelector/QuantitySelector';
import React from 'react';
import pepperoni from './assets/pepperoni-rustic.png';

export const OrderItem = () => {
  return (
    <>
      <div className="order">
        <h2>Ваш заказ</h2>
        <div className="order-item-wrapper">
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
        <Delimiter />
      </div>
    </>
  );
};
