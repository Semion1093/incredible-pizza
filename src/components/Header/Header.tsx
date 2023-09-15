import './Header.scss';
import { HeaderAccountIconSvg } from './assets/HeaderAccountIconSvg';
import { HeaderArrowDownSvg } from './assets/HeaderArrowDownSvg';
import { HeaderLocationIconSvg } from './assets/HeaderLocationIconSvg';
import React from 'react';

export const Header = () => {
  return (
    <div id="header">
      <header>
        <div className="left-part">
          <div className="location">
            <HeaderLocationIconSvg />
            <button>
              <span>Москва</span>
              <HeaderArrowDownSvg />
            </button>
          </div>
          <span>Проверить адрес</span>
          <span>
            Среднее время доставки*: <b>00:24:19</b>
          </span>
        </div>
        <div className="right-part">
          <span>Время работы: с 11:00 до 23:00</span>
          <div className="authorize">
            <HeaderAccountIconSvg />
            <button>
              <span>Войти в аккаунт</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
