import './CustomTextInput.scss';
import { OrderFormData } from '../../pages/OrderPage/components/OrderDetails/OrderDetails';
import { UseFormRegister } from 'react-hook-form';
import React, { InputHTMLAttributes } from 'react';

export interface CustomTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: any;
  label: string;
  register: UseFormRegister<OrderFormData>;
}

export const CustomTextInput = (props: CustomTextInputProps) => {
  return (
    <label className="input-name">
      {props.label}
      <input type="text" {...props} {...props.register(props.name)} />
    </label>
  );
};
