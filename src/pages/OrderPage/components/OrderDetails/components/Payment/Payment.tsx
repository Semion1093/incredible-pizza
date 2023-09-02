import './Payment.scss';
import { Change } from '../Change/Change';
import { Delimiter } from '../../../../../../components/Delimiter/Delimiter';
import { OrderPaymentType } from '../OrderPaymentType/OrderPaymentType';
import React from 'react';

export const Payment = () => {
  return (
    <>
      <div className="payment">
        <h2>Оплата</h2>
        <OrderPaymentType />
        <Delimiter />
        <h2>Сдача</h2>
        <Change />
      </div>
      <Delimiter />
    </>
  );
};
