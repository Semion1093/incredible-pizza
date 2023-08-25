import './AccountOrderItem.scss';
import React from 'react';
import pizza from './assets/Pizza.svg';

export const AccountOrderItem = () => {
  return (
    <div className="box">
      <img src={pizza} alt="IMG" />
      <div className="name">Пепперони по-деревенски</div>
      <div className="description">Традиционное тесто, 23 см</div>
      <div className="quantity">1 товар</div>
      <div className="cost">399 ₽</div>
    </div>
  );
};
