import './CodeEnter.scss';
import React from 'react';

export interface phoneCode {
  phone: string;
  code: number;
}

export const CodeEnter = (props: phoneCode) => {
  return (
    <div className="content">
      <h1>Код из смс</h1>
      <span className="info">На номер: {props.phone}</span>
      <div className="phone">
        <label htmlFor="telNo">Номер телефона</label>
        <input id="telNo" name="telNo" type="tel" placeholder="+7" />
      </div>
      <button>Войти</button>
      <span>Отправить код ещё раз через:</span>
      <span className="agreement">Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением</span>
    </div>
  );
};
