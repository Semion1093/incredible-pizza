import './Authorize.scss';
import { HeaderAccountIconSvg } from '../Header/assets/HeaderAccountIconSvg';
import { open } from '../../store/reducers/signInOrSignUpSlice';
import { useDispatch } from 'react-redux';
import React from 'react';

export const Authorize = () => {
  const dispatch = useDispatch();

  return (
    <div className="authorize">
      <HeaderAccountIconSvg />
      <button onClick={() => dispatch(open())}>
        <span>Войти в аккаунт</span>
      </button>
    </div>
  );
};
