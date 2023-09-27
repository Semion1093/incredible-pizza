import './UserAccountModal.scss';
import { Link } from 'react-router-dom';
import { Path } from '../Path';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

export const UserAccountModal = () => {
  return (
    <>
      <div className="user-account-modal">
        <span className="content bonuses">100 бонусов</span>
        <div className="line"></div>
        <div className="content registration">
          <Link to={Path.AccountPage}>История заказов</Link>
        </div>
        <div className="content registration">
          <Link to={Path.AccountPage}>Настройки</Link>
        </div>
        <div className="line"></div>
        <span className="content log-Out">Выход из аккаунта</span>
      </div>
    </>
  );
};
