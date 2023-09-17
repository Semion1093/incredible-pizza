import './Contacts.scss';
import { Delimiter } from '../../../../../../components/Delimiter/Delimiter';
import { CustomTextInput } from '../../../../../../components/CustomTextInput/CustomTextInput';
import React from 'react';

export const Contacts = () => {
  return (
    <>
      <h3>Личные данные</h3>
      <div className="order-contacts">
        <div className="contact-item">
          <span>Имя*</span>
          <CustomTextInput placeholder={'Алексей'} />
        </div>
        <div className="contact-item">
          <span>Номер телефона*</span>
          <CustomTextInput placeholder={'+7'} />
        </div>
        <div className="contact-item">
          <span>Почта</span>
          <CustomTextInput placeholder={'mail@gmail.com'} />
        </div>
      </div>
      <Delimiter />
    </>
  );
};
