import './Header.scss';
import { Authorize } from '../Authorize/Authorize';
import { HeaderArrowDownSvg } from './assets/HeaderArrowDownSvg';
import { HeaderLocationIconSvg } from './assets/HeaderLocationIconSvg';
import React from 'react';

export const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="left-part">
          <div className="location">
            <HeaderLocationIconSvg />
            <button>
              <span>Москва</span>
              <HeaderArrowDownSvg />
            </button>
          </div>
          <span className="desktop-only">Проверить адрес</span>
          <span className="desktop-only">
            Среднее время доставки*: <b>00:24:19</b>
          </span>
        </div>
        <div className="right-part">
          <span className="desktop-only">Время работы: с 11:00 до 23:00</span>
          <Authorize />
        </div>
      </div>
    </header>
  );
};
