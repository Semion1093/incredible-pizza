import './SignIn.scss';
import React from 'react';

export const SignIn = () => {
  return (
    <>
      <div className="modal">
        <div className="modal-wrapper">
          <div className="content">
            <h1>Вход в аккаунт</h1>
            <span className="info">Сможете быстро оформлять заказы, использовать бонусы</span>
            <div className="phone">
              <label htmlFor="telNo">Номер телефона</label>
              <input id="telNo" name="telNo" type="tel" placeholder="+7" />
            </div>
            <button>
              <span>Войти</span>
            </button>
            <span className="agreement">Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением</span>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
