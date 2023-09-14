import './Header.scss';
import { Authorize } from '../Authorize/Authorize';
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
          <span className="desktop-only">Проверить адрес</span>
          <span>
            Среднее время доставки*: <b>00:24:19</b>
          </span>
        </div>
        <div className="right-part desktop-only">
          <span>Время работы: с 11:00 до 23:00</span>
          <Authorize />
        </div>
      </header>
    </div>
  );
};
