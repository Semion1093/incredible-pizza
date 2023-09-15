import './Contacts.scss';
import { Delimiter } from '../../../../components/Delimiter/Delimiter';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { InputTextForm } from '../../../../components/InputTextForm/InputTextForm';
import { OrderFormData } from '../OrderDetails/OrderDetails';
import React from 'react';

export interface ContactsProps {
  register: UseFormRegister<OrderFormData>;
  errors: FieldErrors;
}

export const Contacts = (props: ContactsProps) => {
  return (
    <>
      <h3>Личные данные</h3>
      <div className="order-contacts">
        <div className="contact-item">
          <InputTextForm name="name" placeholder="Алексей" label="Имя*" register={props.register} />
          {props.errors.name && <span className="error-text">{props.errors.name.message?.toString()}</span>}
        </div>
        <div className="contact-item">
          <InputTextForm name="phone" placeholder="+7" label="Номер телефона*" register={props.register} />
          {props.errors.phone && <span className="error-text">{props.errors.phone.message?.toString()}</span>}
        </div>
        <div className="contact-item">
          <InputTextForm name="e-mail" placeholder="mail@gmail.com" label="Почта" register={props.register} />
          {props.errors.email && <span className="error-text">{props.errors.email.message?.toString()}</span>}
        </div>
      </div>
      <Delimiter />
    </>
  );
};
