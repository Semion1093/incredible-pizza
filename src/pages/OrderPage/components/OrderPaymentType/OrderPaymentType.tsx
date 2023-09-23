import './OrderPaymentType.scss';
import { OrderFormData } from '../OrderDetails/OrderDetails';
import { PaymentType } from '../../../../shared/PaymentType';
import { UseFormRegister } from 'react-hook-form';
import React, { useState } from 'react';

export interface OrderPaymentTypeProps {
  register: UseFormRegister<OrderFormData>;
}

export const OrderPaymentType = (props: OrderPaymentTypeProps) => {
  const [selectedOption, setSelectedOption] = useState(PaymentType.Card as number);

  const options = [
    { value: PaymentType.Cash, label: 'Наличными' },
    { value: PaymentType.Card, label: 'Картой' },
    { value: PaymentType.ApplePay, label: 'Apple Pay' },
  ];

  return (
    <div className="radio-group">
      {options.map((option) => (
        <label className="radio-container" key={option.value}>
          <input
            {...props.register('paymentType')}
            type="radio"
            value={option.value}
            checked={selectedOption === (option.value as number)}
            onChange={(e) => {
              setSelectedOption(parseInt(e.target.value));
            }}
          />
          <span className="dot"></span>
          {option.label}
        </label>
      ))}
    </div>
  );
};
