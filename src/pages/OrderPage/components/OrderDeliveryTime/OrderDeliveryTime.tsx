import './OrderDeliveryTime.scss';
import { Delimiter } from '../../../../components/Delimiter/Delimiter';
import { DeliveryDatePicker } from '../DeliveryDatePicker/DeliveryDatePicker';
import { DeliveryTimePicker } from '../DeliveryTimePicker/DeliveryTimePicker';
import { OrderFormData } from '../OrderDetails/OrderDetails';
import { UseFormRegister } from 'react-hook-form';
import React, { useState } from 'react';

export interface OrderDeliveryTimeProps {
  register: UseFormRegister<OrderFormData>;
  control: any;
}

export const OrderDeliveryTime = (props: OrderDeliveryTimeProps) => {
  const [selectedOption, setSelectedOption] = useState('sooner');

  const options = [
    { value: 'sooner', label: 'Как можно скорее' },
    { value: 'by-time', label: 'По времени' },
  ];

  return (
    <>
      <span className="question-delivery-time">Когда выполнить заказ?</span>
      <div className="delivery-time">
        <div className="radio-group">
          {options.map((option) => (
            <label className="radio-container" key={option.value}>
              <input
                {...props.register('deliveryRadio')}
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
        {selectedOption === 'by-time' && (
          <div className="date-time-pickers">
            {/* <DeliveryDatePicker control={props.control} />
            <DeliveryTimePicker control={props.control} /> */}
          </div>
        )}
      </div>
      <Delimiter />
    </>
  );
};
