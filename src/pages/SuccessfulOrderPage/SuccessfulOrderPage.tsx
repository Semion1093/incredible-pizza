import './SuccessfulOrderPage.scss';
import { SuccessLogoSvg } from './assets/SuccessLogoSvg';
import React from 'react';

export const SuccessfulOrderPage = () => {
  const orderNumber = localStorage.getItem('orderNumber');
  return (
    <div className="successful-message">
      <SuccessLogoSvg />
      <div className="content">
        <p>Спасибо! Заказ № {orderNumber ?? ''} успешно оплачен и передан в работу.</p>
        <span>
          Готовим.
          <br />
          Статус можно отследить, нажав на кнопку ниже.
        </span>
      </div>
      <a href="..." className="super-puper-button">
        Отследить заказ
      </a>
    </div>
  );
};
