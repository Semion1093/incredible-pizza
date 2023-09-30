/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './UserAccountModal.scss';
import { Link } from 'react-router-dom';
import { Path } from '../Path';
import { closeUserAccountModal, openUserAccountModal, userAccountModalInfo } from './userAccountModalSlice';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

export const UserAccountModal = () => {
  const dispatch = useDispatch();
  const userAccountModalActive = useSelector(userAccountModalInfo);
  return (
    <>
      {userAccountModalActive && (
        <div className="user-account-modal" onMouseLeave={() => dispatch(closeUserAccountModal())}>
          <span className="content bonuses">100 бонусов</span>
          <div className="line"></div>
          <div className="content link">
            <Link to={Path.AccountPage} onClick={() => dispatch(closeUserAccountModal())}>
              История заказов
            </Link>
          </div>
          <div className="content link">
            <Link to={Path.AccountPage} onClick={() => dispatch(closeUserAccountModal())}>
              Настройки
            </Link>
          </div>
          <div className="line"></div>
          <span className="content log-Out">Выход из аккаунта</span>
        </div>
      )}
    </>
  );
};
