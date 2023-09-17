import './DeliverySwitchSelector.scss';
import React, { useState } from 'react';

export interface DeliverySwitchSelectorProps {
  clickHandler: (tab: string) => void;
}

export const DeliverySwitchSelector = (props: DeliverySwitchSelectorProps) => {
  const [selectedOption, setSelectedOption] = useState('delivery');

  const options = [
    { value: 'delivery', label: 'Доставка' },
    { value: 'pickup', label: 'Самовывоз' },
  ];

  return (
    <div className="switch-button">
      {options.map((option) => (
        <label className="tab" key={option.value}>
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onClick={() => props.clickHandler(option.value)}
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
          />
          <span className="name">{option.label}</span>
        </label>
      ))}
    </div>
  );
};
