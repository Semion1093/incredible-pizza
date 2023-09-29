import './Authorize.scss';
import { HeaderAccountIconSvg } from '../Header/assets/HeaderAccountIconSvg';
import { UserAccountModal } from '../UserAccountModal/UserAccountModal';
import { openUserAccountModal } from '../../store/reducers/userAccountModalSlice';
import { openAuthModal } from '../../store/reducers/authModalSlice';
import { openAuthModal } from '../../pages/HomePage/components/AuthModal/authModalSlice';
import { useDispatch } from 'react-redux';
import React from 'react';

export const Authorize = () => {
  const dispatch = useDispatch();
  return (
    <div className="authorize">
      <HeaderAccountIconSvg />
      <button onClick={() => dispatch(openAuthModal())}>
        <span>Войти в аккаунт</span>
      </button>
      <button onMouseEnter={() => dispatch(openUserAccountModal())}>
        <HeaderAccountIconSvg />
      </button>
      <UserAccountModal />
    </div>
  );
};
