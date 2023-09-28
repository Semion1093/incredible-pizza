import './SuccessfulOrderPage.scss';
import { SuccessLogoSvg } from './assets/SuccessLogoSvg';
import React from 'react';

export const SuccessfulOrderPage = () => {
  const orderNumber = localStorage.getItem('orderNumber');
  return (
    <div className="successful-message">
      <SuccessLogoSvg />
      <div className="content">
        <p>Заказ № {orderNumber ?? ''} принят</p>
      </div>
    </div>
  );
};
