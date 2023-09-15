import './Payment.scss';
import { Change } from '../Change/Change';
import { Delimiter } from '../../../../components/Delimiter/Delimiter';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { OrderFormData } from '../OrderDetails/OrderDetails';
import { OrderPaymentType } from '../OrderPaymentType/OrderPaymentType';
import React from 'react';

export interface PaymentProps {
  register: UseFormRegister<OrderFormData>;
  errors: FieldErrors;
}

export const Payment = (props: PaymentProps) => {
  return (
    <>
      <div className="payment">
        <h3>Оплата</h3>
        <OrderPaymentType register={props.register} />
        <Delimiter />
        <h3>Сдача</h3>
        <Change errors={props.errors} register={props.register} />
      </div>
      <Delimiter />
    </>
  );
};
