/* eslint-disable jsx-a11y/click-events-have-key-events */
import './QuantitySelector.scss';
import { Minus } from './components/Minus';
import { Plus } from './components/Plus';
import React, { useState } from 'react';

export const QuantitySelector = () => {
  const [index, setIndex] = useState(1);
  const decrease = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const increase = () => {
    setIndex(index + 1);
  };

  return (
    <div className="counter">
      <button className="decrease" onClick={decrease}>
        <Minus />
      </button>
      <input type="text" value={index} />
      <button className="increase" onClick={increase}>
        <Plus />
      </button>
    </div>
  );
};
