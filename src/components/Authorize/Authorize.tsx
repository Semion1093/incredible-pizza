import './Authorize.scss';
import { HeaderAccountIconSvg } from '../Header/assets/HeaderAccountIconSvg';
import { UserAccountModal } from '../UserAccountModal/UserAccountModal';
import { openAuthModal } from '../../store/reducers/authModalSlice';
import { openUserAccountModal } from '../../store/reducers/userAccountModalSlice';
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
      <button onClick={() => dispatch(openUserAccountModal())}>
        <HeaderAccountIconSvg />
      </button>
      <UserAccountModal />
    </div>
  );
};
