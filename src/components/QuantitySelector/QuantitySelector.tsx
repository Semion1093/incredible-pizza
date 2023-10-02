/* eslint-disable jsx-a11y/click-events-have-key-events */
import './QuantitySelector.scss';
import { Minus } from './components/Minus';
import { Plus } from './components/Plus';
import { changeCountProductInCart } from '../../pages/HomePage/components/Cart/cartSlice';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

export const QuantitySelector = ({ id }: { id: string }) => {
  const [index, setIndex] = useState(1);
  const decrease = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const increase = () => {
    setIndex(index + 1);
  };

  const dispatch = useDispatch();

  return (
    <div className="counter">
      <button
        className="decrease"
        onClick={() => {
          decrease();
          dispatch(changeCountProductInCart({ id: id, addOrDelete: false }));
        }}
      >
        <Minus />
      </button>
      <input type="text" value={index} />
      <button
        className="increase"
        onClick={() => {
          increase();
          dispatch(changeCountProductInCart({ id: id, addOrDelete: true }));
        }}
      >
        <Plus />
      </button>
    </div>
  );
};
