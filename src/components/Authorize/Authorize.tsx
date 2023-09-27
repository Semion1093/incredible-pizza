import './Authorize.scss';
import { HeaderAccountIconSvg } from '../Header/assets/HeaderAccountIconSvg';
import { openAuthModal } from '../../store/reducers/signInOrSignUpSlice';
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
    </div>
  );
};
