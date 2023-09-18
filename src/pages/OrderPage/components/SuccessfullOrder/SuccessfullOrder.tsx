import './SuccessfullOrder.scss';
import { ReactComponent as Logo } from '../assets/SuccessfulMessage.svg';
import React from 'react';
import SuccessfulMessage from '../assets/successful-message.png';

type OrderState = 'is being prepared' | 'has been delivered' | 'has been transferred to the client';

export interface Order {
  id: number;
  state?: OrderState;
  paymentIsPassed?: boolean;
}

export const SuccessfullOrder = (props: Order) => {
  return (
    <div className="successful-message">
      <Logo />
      <div className="content">
        <p>Спасибо! Заказ №{props.id} успешно оплачен и передан в работу.</p>
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
