import './OrderItem.scss';
import { Delimiter } from '../../../../components/Delimiter/Delimiter';
import { OrderItem } from '../OrderItem/OrderItem';
import { selectCartItems } from '../../../HomePage/components/Cart/cartSlice';
import { useSelector } from 'react-redux';
import React from 'react';

export const OrderItems = () => {
  const products = useSelector(selectCartItems);
  return (
    <>
      <div className="order">
        <h2>Ваш заказ</h2>
        <div className="order-products">
          {products.map((item) => (
            <OrderItem img={item.img} title={item.title} description={item.description} price={item.price} />
          ))}
          ;
        </div>
        <Delimiter />
      </div>
    </>
  );
};
