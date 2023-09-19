import './AdditionalOrderItem.scss';
import React from 'react';

export interface AdditionalOrderItemProps {
  img: string;
  name: string;
  info: string;
  cost: string;
  showInfo: boolean;
}

export const AdditionalOrderItem = (props: AdditionalOrderItemProps) => {
  return (
    <div className="additional-container">
      <div className="additional-order-item">
        <img src={props.img} alt="" />
        <span className="name">{props.name}</span>
        {props.showInfo && <span className="info">{props.info}</span>}
        <button>
          <span>{props.cost} ₽</span>
        </button>
      </div>
    </div>
  );
};
