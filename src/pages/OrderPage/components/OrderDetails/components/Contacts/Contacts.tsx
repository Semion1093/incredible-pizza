import './Contacts.scss';
import { Delimiter } from '../../../../../../components/Delimiter/Delimiter';
import { InputTextForm } from '../../../../../../components/InputTextForm/InputTextForm';
import React from 'react';

export const Contacts = () => {
  return (
    <>
      <h3>Личные данные</h3>
      <div className="order-contacts">
        <div className="contact-item">
          <span>Имя*</span>
          <InputTextForm placeholder={'Алексей'} />
        </div>
        <div className="contact-item">
          <span>Номер телефона*</span>
          <InputTextForm placeholder={'+7'} />
        </div>
        <div className="contact-item">
          <span>Почта</span>
          <InputTextForm placeholder={'mail@gmail.com'} />
        </div>
      </div>
      <Delimiter />
    </>
  );
};
