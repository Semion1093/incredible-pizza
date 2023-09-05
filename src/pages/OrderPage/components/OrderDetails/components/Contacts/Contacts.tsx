import './Contacts.scss';
import { Delimiter } from '../../../../../../components/Delimiter/Delimiter';
import { InputTextForm } from '../../../../../../components/InputTextForm/InputTextForm';
import React from 'react';

export const Contacts = () => {
  return (
    <>
      <h3>Личные данные</h3>
      <div className="grid-contacts">
        <div className="grid-item">
          <span>Имя*</span>
        </div>
        <div className="grid-item">
          <span>Номер телефона*</span>
        </div>
        <div className="grid-item">
          <span>Почта</span>
        </div>
        <div className="grid-item">
          <InputTextForm placeholder={'Алексей'} />
        </div>
        <div className="grid-item">
          <InputTextForm placeholder={'+7'} />
        </div>
        <div className="grid-item">
          <InputTextForm placeholder={'mail@gmail.com'} />
        </div>
      </div>
      <Delimiter />
    </>
  );
};
