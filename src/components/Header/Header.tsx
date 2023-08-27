import './Header.scss';
import { HeaderAccountIconSvg } from './assets/HeaderAccountIconSvg';
import { HeaderLocationIconSvg } from './assets/HeaderLocationIconSvg';
import React from 'react';

export const Header = () => {
  return (
    <>
      <header>
        <div className="left-part">
          <div className="location">
            <HeaderLocationIconSvg />
            <button>
              <span>Москва</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <g clip-path="url(#clip0_17360_1208)">
                  <path
                    d="M12 3.26272C12 3.40658 11.9467 3.55058 11.8402 3.66041L6.38565 9.28535C6.17252 9.50514 5.82738 9.50514 5.61438 9.28535L0.159852 3.66041C-0.0532842 3.44061 -0.0532842 3.08469 0.159852 2.86504C0.372987 2.64539 0.718122 2.64525 0.931122 2.86504L6.00002 8.0923L11.0689 2.86504C11.282 2.64525 11.6272 2.64525 11.8402 2.86504C11.9467 2.97487 12 3.11887 12 3.26272Z"
                    fill="#191919"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17360_1208">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
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
    </>
  );
};
