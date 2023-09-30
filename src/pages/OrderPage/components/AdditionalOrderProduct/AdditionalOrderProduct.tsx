import './AdditionalOrderProduct.scss';
import React from 'react';

export interface AdditionalOrderProductProps {
  img: string;
  title: string;
  description: string;
  price: number;
  showInfo: boolean;
}

export const AdditionalOrderProduct = (props: AdditionalOrderProductProps) => {
  return (
    <div className="additional-container">
      <div className="additional-order-item">
        <img src={props.img} alt="" />
        <span className="name">{props.title}</span>
        {props.showInfo && <span className="info">{props.description}</span>}
        <button>
          <span>{props.price} ₽</span>
        </button>
      </div>
    </div>
  );
};
