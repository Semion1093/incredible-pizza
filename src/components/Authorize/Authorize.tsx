import './Authorize.scss';
import { HeaderAccountIconSvg } from '../Header/assets/HeaderAccountIconSvg';
import { UserAccountModal } from '../UserAccountModal/UserAccountModal';
import { openAuthModal } from '../../pages/HomePage/components/AuthModal/authModalSlice';
import { openUserAccountModal } from '../UserAccountModal/userAccountModalSlice';
import { useDispatch } from 'react-redux';
import React from 'react';

export const Authorize = () => {
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem('token');
  return (
    <div className="authorize">
      <HeaderAccountIconSvg />
      {!isAuth ? (
        <button onClick={() => dispatch(openAuthModal())}>
          <span>Войти в аккаунт</span>
        </button>
      ) : (
        <button onMouseEnter={() => dispatch(openUserAccountModal())}>
          <span>Мой любимый аккаунт</span>
        </button>
      )}
      <UserAccountModal />
    </div>
  );
};
