import './DeliveryAddress.scss';
import { InputTextForm } from '../../../../../../../../components/InputTextForm/InputTextForm';
import React from 'react';

export interface DeliveryAddressProps {
  tab: string;
}

export const DeliveryAddress = (props: DeliveryAddressProps) => {
  return (
    <>
      {props.tab === 'delivery' && (
        <div className="delivery-grid">
          <div className="grid-item street">
            <span>Улица*</span>
            <InputTextForm placeholder={'Пушкина'} />
          </div>
          <div className="grid-item">
            <span>Дом</span>
            <InputTextForm placeholder={'1а'} />
          </div>
          <div className="grid-item mobile">
            <span>Подъезд</span>
            <InputTextForm placeholder={'1'} />
          </div>
          <div className="grid-item mobile">
            <span>Этаж</span>
            <InputTextForm placeholder={'2'} />
          </div>
          <div className="grid-item mobile">
            <span>Квартира</span>
            <InputTextForm placeholder={'3'} />
          </div>
          <div className="grid-item mobile">
            <span>Домофон</span>
            <InputTextForm placeholder={'0000'} />
          </div>
        </div>
      )}
    </>
  );
};
