import './OrderResult.scss';
import { selectCartItemsSum } from '../../../HomePage/components/Cart/cartSlice';
import { useSelector } from 'react-redux';
import React from 'react';

export const OrderResult = () => {
  const totalSum = useSelector(selectCartItemsSum);
  return (
    <div className="order-result">
      <span>Итого: {totalSum} ₽</span>
      <button type="submit">Оформить заказ</button>
    </div>
  );
};
