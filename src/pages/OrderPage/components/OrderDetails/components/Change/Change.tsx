import './Change.scss';
import { InputTextForm } from '../../../../../../components/InputTextForm/InputTextForm';
import React, { useState } from 'react';

export const Change = () => {
  const [selectedOption, setSelectedOption] = useState('without-cash');

  const options = [
    { value: 'without-cash', label: 'Без сдачи' },
    { value: 'with-cash', label: 'Сдача с' },
  ];

  return (
    <div className="change">
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
      {selectedOption === 'with-cash' && (
        <div className="cash-input">
          <InputTextForm placeholder={'0                         ₽'} />
        </div>
      )}
    </div>
  );
};
