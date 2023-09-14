import './OrderDeliveryTime.scss';
import { CustomDatePicker } from './components/CustomDatePicker/CustomDatePicker';
import { CustomTimePicker } from './components/CustomTimePicker/CustomTimePicker';
import { Delimiter } from '../../../../../../../../components/Delimiter/Delimiter';
import React, { useState } from 'react';

export const OrderDeliveryTime = () => {
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
            <CustomDatePicker />
            <CustomTimePicker />
          </div>
        )}
      </div>
      <Delimiter />
    </>
  );
};
