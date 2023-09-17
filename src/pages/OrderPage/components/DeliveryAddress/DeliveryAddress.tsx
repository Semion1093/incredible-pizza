import './DeliveryAddress.scss';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { CustomTextInput } from '../../../../components/CustomTextInput/CustomTextInput';
import React from 'react';
import classNames from 'classnames';

export interface DeliveryAddressProps {
  tab: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

export const DeliveryAddress = (props: DeliveryAddressProps) => {
  return (
    <>
      {props.tab === 'delivery' && (
        <div className="delivery-grid">
          <div className={classNames('grid-item', 'street')}>
            <CustomTextInput placeholder={'Пушкина'} name={'street'} label={'Улица*'} register={props.register} />
            {props.errors.street && <span className="error-text">{props.errors.street.message?.toString()}</span>}
          </div>
          <div className="grid-item">
            <CustomTextInput placeholder={'1а'} name={'house'} label={'Дом*'} register={props.register} />
            {props.errors.house && <span className="error-text">{props.errors.house.message?.toString()}</span>}
          </div>
          <div className={classNames('grid-item', 'mobile')}>
            <CustomTextInput placeholder={'1'} name={'porch'} label={'Подъезд'} register={props.register} />
            {props.errors.porch && <span className="error-text">{props.errors.porch.message?.toString()}</span>}
          </div>
          <div className={classNames('grid-item', 'mobile')}>
            <CustomTextInput placeholder={'2'} name={'floor'} label={'Этаж'} register={props.register} />
            {props.errors.floor && <span className="error-text">{props.errors.floor.message?.toString()}</span>}
          </div>
          <div className={classNames('grid-item', 'mobile')}>
            <CustomTextInput placeholder={'3'} name={'apartment'} label={'Квартира'} register={props.register} />
            {props.errors.apartment && <span className="error-text">{props.errors.apartment.message?.toString()}</span>}
          </div>
          <div className={classNames('grid-item', 'mobile')}>
            <CustomTextInput placeholder={'0000'} name={'porch-Code'} label={'Домофон'} register={props.register} />
            {props.errors.porchCode && <span className="error-text">{props.errors.porchCode.message?.toString()}</span>}
          </div>
        </div>
      )}
    </>
  );
};
