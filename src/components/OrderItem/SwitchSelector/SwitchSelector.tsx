import './SwitchSelector.scss';
import React, { useState } from 'react';

export interface Options {
  value: string;
  label: string;
}

export const SwitchSelector = (props: Options[]) => {
  const [selectedOption, setSelectedOption] = useState(props[0].value);

  return (
    <div className="switch-button">
      {Object.values(props).map((item) => (
        <label className="tab" key={item.value}>
          <input
            type="radio"
            value={item.value}
            checked={selectedOption === item.value}
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
          />
          <span className="name">{item.label}</span>
        </label>
      ))}
    </div>
  );
};
