import './DeliverySwitchSelector.scss';
import React, { useState } from 'react';

export interface DeliverySwitchSelectorProps {
  clickHandler: (tab: string) => void;
}

export const DeliverySwitchSelector = (props: DeliverySwitchSelectorProps) => {
  const [selectedOption, setSelectedOption] = useState('delivery');

  const tabs = [
    { value: 'delivery', label: 'Доставка' },
    { value: 'pickup', label: 'Самовывоз' },
  ];

  return (
    <div className="delivery">
      <h3>Доставка</h3>
      <div className="switch-button">
        {tabs.map((tab) => (
          <label className="tab" key={tab.value}>
            <input
              type="radio"
              value={tab.value}
              checked={selectedOption === tab.value}
              onClick={() => props.clickHandler(tab.value)}
              onChange={(e) => {
                setSelectedOption(e.target.value);
              }}
            />
            <span className="name">{tab.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
