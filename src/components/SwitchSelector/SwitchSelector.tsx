import './SwitchSelector.scss';
import React, { useState } from 'react';

export interface SwitchSelectorProps {
  clickHandler: (tab: string) => void;
  leftOptionText: string;
  rightOptionText: string;
}

export const SwitchSelector = (props: SwitchSelectorProps) => {
  const [selectedOption, setSelectedOption] = useState('leftOption');

  const options = [
    { value: 'leftOption', label: props.leftOptionText },
    { value: 'rightOption', label: props.rightOptionText },
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
