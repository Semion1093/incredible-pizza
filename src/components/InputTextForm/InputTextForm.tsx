import './InputTextForm.scss';
import { OrderFormData } from '../../pages/OrderPage/components/OrderDetails/OrderDetails';
import { UseFormRegister } from 'react-hook-form';
import React, { InputHTMLAttributes } from 'react';

export interface InputTextFormProps extends InputHTMLAttributes<HTMLInputElement> {
  name: any;
  label: string;
  register: UseFormRegister<OrderFormData>;
}

export const InputTextForm = (props: InputTextFormProps) => {
  return (
    <label>
      {props.label}
      <input type="text" {...props} {...props.register(props.name)} />
    </label>
  );
};
