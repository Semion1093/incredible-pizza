import './DeliveryAddress.scss';
import { CustomTextInput } from '../../../../../../../../components/CustomTextInput/CustomTextInput';
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
            <CustomTextInput placeholder={'Пушкина'} />
          </div>
          <div className="grid-item">
            <span>Дом</span>
            <CustomTextInput placeholder={'1а'} />
          </div>
          <div className="grid-item mobile">
            <span>Подъезд</span>
            <CustomTextInput placeholder={'1'} />
          </div>
          <div className="grid-item mobile">
            <span>Этаж</span>
            <CustomTextInput placeholder={'2'} />
          </div>
          <div className="grid-item mobile">
            <span>Квартира</span>
            <CustomTextInput placeholder={'3'} />
          </div>
          <div className="grid-item mobile">
            <span>Домофон</span>
            <CustomTextInput placeholder={'0000'} />
          </div>
        </div>
      )}
    </>
  );
};
