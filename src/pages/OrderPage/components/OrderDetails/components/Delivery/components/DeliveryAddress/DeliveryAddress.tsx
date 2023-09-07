import './DeliveryAddress.scss';
import { InputTextForm } from '../../../../../../../../components/InputTextForm/InputTextForm';
import React from 'react';

export const DeliveryAddress = () => {
  return (
    <div className="delivery-grid">
      <div className="street-grid-item">
        <span>Улица*</span>
      </div>
      <div className="street-grid-item">
        <InputTextForm placeholder={'Пушкина'} />
      </div>
      <div className="grid-item">
        <span>Дом</span>
      </div>
      <div className="grid-item">
        <span>Подъезд</span>
      </div>
      <div className="grid-item">
        <span>Этаж</span>
      </div>
      <div className="grid-item">
        <span>Квартира</span>
      </div>
      <div className="grid-item">
        <span>Домофон</span>
      </div>
      <div className="grid-item">
        <InputTextForm placeholder={'1а'} />
      </div>
      <div className="grid-item">
        <InputTextForm placeholder={'1'} />
      </div>
      <div className="grid-item">
        <InputTextForm placeholder={'2'} />
      </div>
      <div className="grid-item">
        <InputTextForm placeholder={'3'} />
      </div>
      <div className="grid-item">
        <InputTextForm placeholder={'0000'} />
      </div>
    </div>
  );
};
