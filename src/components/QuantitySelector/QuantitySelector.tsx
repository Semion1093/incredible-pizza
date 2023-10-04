/* eslint-disable jsx-a11y/click-events-have-key-events */
import './QuantitySelector.scss';
import { Minus } from './components/Minus';
import { Plus } from './components/Plus';
import { changeCountOfProductInCart } from '../../pages/HomePage/components/Cart/cartSlice';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

export const QuantitySelector = ({ id, count }: { id: string; count: number }) => {
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <button
        className="decrease"
        onClick={() => {
          dispatch(changeCountOfProductInCart({ id: id, addOrDelete: false }));
        }}
      >
        <Minus />
      </button>
      <input type="text" value={count} />
      <button
        className="increase"
        onClick={() => {
          dispatch(changeCountOfProductInCart({ id: id, addOrDelete: true }));
        }}
      >
        <Plus />
      </button>
    </div>
  );
};
