/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './UserAccountModal.scss';
import { HeaderAccountIconSvg } from '../Header/assets/HeaderAccountIconSvg';
import { Link } from 'react-router-dom';
import { Path } from '../Path';
import { batch, useDispatch, useSelector } from 'react-redux';
import { closeUserAccountModal, userAccountModalInfo } from './userAccountModalSlice';
import { logOut, selectCurrentUser } from '../../store/currentUserSlice';
import React from 'react';

export const UserAccountModal = () => {
  const dispatch = useDispatch();
  const userAccountModalActive = useSelector(userAccountModalInfo);
  const userData = useSelector(selectCurrentUser);
  const onSubmitopenSignOutUser = () => {
    batch(() => {
      dispatch(closeUserAccountModal());
      dispatch(logOut());
    });
  };
  return (
    <>
      {userAccountModalActive && (
        <div className="user-account-modal" onMouseLeave={() => dispatch(closeUserAccountModal())}>
          <div className="content bonuses-in-title">
            <span className="content bonuses">{userData?.firstName}</span>
            <span className="content bonuses">{userData?.email}</span>
          </div>
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
          <button onClick={() => onSubmitopenSignOutUser()}>
            <span className="content log-Out">Выход из аккаунта</span>
          </button>
        </div>
      )}
    </>
  );
};
