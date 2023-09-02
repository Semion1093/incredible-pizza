import './OrderPaymentType.scss';
import React, { useState } from 'react';

export const OrderPaymentType = () => {
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
