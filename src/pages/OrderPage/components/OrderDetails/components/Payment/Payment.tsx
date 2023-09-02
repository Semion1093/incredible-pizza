import './Payment.scss';
import { Change } from '../Change/Change';
import { Delimiter } from '../../../../../../components/Delimiter/Delimiter';
import { OrderPaymentType } from '../OrderPaymentType/OrderPaymentType';
import React from 'react';

export const Payment = () => {
  return (
    <>
      <div className="payment">
        <h3>Оплата</h3>
        <OrderPaymentType />
        <Delimiter />
        <h3>Сдача</h3>
        <Change />
      </div>
      <Delimiter />
    </>
  );
};
