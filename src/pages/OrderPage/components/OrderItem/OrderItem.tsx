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
        <div className="order-item-wrapper desktop-only">
          <div className="content">
            <img src={pepperoni} alt="" />
            <div className="text">
              <p className="title">Пепперони по-деревенски</p>
              <span>Традиционное тесто, 23 см</span>
            </div>
          </div>
          <div className="result">
            <QuantitySelector />
            <p className="price">1399 ₽</p>
          </div>
        </div>
        <div className="order-item-wrapper mobile-only">
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
