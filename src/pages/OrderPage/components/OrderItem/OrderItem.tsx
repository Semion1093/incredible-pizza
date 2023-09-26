import { QuantitySelector } from '../../../../components/QuantitySelector/QuantitySelector';
import React from 'react';

export interface OrderItemProps {
  img: string;
  title: string;
  description: string;
  price: number;
}

export const OrderItem = (props: OrderItemProps) => {
  return (
    <div className="order-item-wrapper">
      <img src={props.img} alt="" />
      <div className="content">
        <div className="text">
          <span className="title">{props.title}</span>
          <span>{props.description}</span>
        </div>
        <div className="result">
          <QuantitySelector />
          <span className="price">{props.price}</span>
        </div>
      </div>
    </div>
  );
};
