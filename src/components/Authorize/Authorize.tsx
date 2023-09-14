import './Authorize.scss';
import { HeaderAccountIconSvg } from '../Header/assets/HeaderAccountIconSvg';
import React from 'react';

export const Authorize = () => {
  return (
    <div className="authorize">
      <HeaderAccountIconSvg />
      <button>
        <span>Войти в аккаунт</span>
      </button>
    </div>
  );
};
