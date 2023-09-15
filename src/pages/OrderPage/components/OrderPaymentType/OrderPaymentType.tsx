import './OrderPaymentType.scss';
import { OrderFormData } from '../OrderDetails/OrderDetails';
import { UseFormRegister } from 'react-hook-form';
import React, { useState } from 'react';

export interface OrderPaymentTypeProps {
  register: UseFormRegister<OrderFormData>;
}

export const OrderPaymentType = (props: OrderPaymentTypeProps) => {
  const [selectedOption, setSelectedOption] = useState('card');

  const options = [
    { value: 'cash', label: 'Наличными' },
    { value: 'card', label: 'Картой' },
    { value: 'apple-pay', label: 'Apple Pay' },
  ];

  return (
    <div className="radio-group">
      {options.map((option) => (
        <label className="radio-container" key={option.value}>
          <input
            {...props.register('paymentRadio')}
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
          />
          <span className="dot"></span>
          {option.label}
        </label>
      ))}
    </div>
  );
};
