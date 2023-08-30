import './OrderDeliveryTime.scss';
import { DeliveryDatePicker } from './components/DeliveryDatePicker/DeliveryDatePicker';
import { DeliveryTimePicker } from './components/DeliveryTimePicker/DeliveryTimePicker';
import React, { useState } from 'react';

export const OrderDeliveryTime = () => {
  const [selectedOption, setSelectedOption] = useState('sooner');

  const options = [
    { value: 'sooner', label: 'Как можно скорее' },
    { value: 'by-time', label: 'По времени' },
  ];

  return (
    <div className="order-delivery-time">
      <div className="radio-group">
        {options.map((option) => (
          <label className="radio-container" key={option.value}>
            <input
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
          <DeliveryDatePicker />
          <DeliveryTimePicker />
        </div>
      )}
    </div>
  );
};
