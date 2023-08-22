import './Header.scss';
import React from 'react';

export const Header = () => {
  return (
    <>
      <header>
        <div className="left-part">
          <div className="location">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
              <path
                d="M7.02008 3.90632C5.5438 3.89562 4.33479 5.11238 4.32362 6.62015C4.3125 8.12785 5.50412 9.36364 6.97993 9.375C6.98678 9.37504 6.99358 9.37508 7.00043 9.37508C8.46684 9.37508 9.6653 8.16195 9.67639 6.66117C9.68751 5.15355 8.49593 3.91769 7.02008 3.90632ZM7.00035 8.59387C6.99553 8.59387 6.99048 8.59383 6.98567 8.59379C5.9315 8.58567 5.08032 7.70293 5.08828 6.62601C5.09619 5.55394 5.95219 4.68745 6.99966 4.68745C7.00448 4.68745 7.00953 4.68749 7.01434 4.68753C8.06851 4.69566 8.91969 5.57839 8.91173 6.65531C8.90378 7.72738 8.04782 8.59387 7.00035 8.59387Z"
                fill="#FF7010"
              />
              <path
                d="M9.34597 14.7048C11.8891 11.3605 13.4784 9.6165 13.4998 6.69056C13.5267 3.00919 10.6025 0 6.99941 0C3.43839 0 0.527289 2.94641 0.500219 6.59095C0.478349 9.59623 2.09716 11.3378 4.65781 14.7042C2.11043 15.0932 0.500219 16.0704 0.500219 17.2657C0.500219 18.0663 1.22461 18.7848 2.53999 19.2887C3.73723 19.7474 5.32118 20 7.00002 20C8.67886 20 10.2628 19.7474 11.46 19.2887C12.7754 18.7848 13.4998 18.0663 13.4998 17.2656C13.4998 16.071 11.8911 15.094 9.34597 14.7048ZM1.26487 6.59685C1.28873 3.38087 3.85714 0.781252 6.99948 0.781252C10.179 0.781252 12.7589 3.43704 12.7352 6.68474C12.7148 9.46342 11.0294 11.1758 8.33853 14.7595C7.85857 15.3984 7.41781 16.0025 7.00059 16.5934C6.5846 16.0021 6.15262 15.4089 5.66548 14.7593C2.86342 11.0255 1.24415 9.44256 1.26487 6.59685ZM7.00002 19.2188C3.71754 19.2188 1.26487 18.1877 1.26487 17.2657C1.26487 16.5819 2.73109 15.7182 5.19638 15.4191C5.74134 16.1496 6.21911 16.8132 6.68772 17.4911C6.75929 17.5946 6.8756 17.6562 6.99967 17.6563C6.99979 17.6563 6.9999 17.6563 7.00002 17.6563C7.12397 17.6563 7.24024 17.5949 7.31193 17.4916C7.7761 16.8226 8.26696 16.1425 8.80725 15.4195C11.2702 15.7189 12.7352 16.5824 12.7352 17.2657C12.7351 18.1877 10.2825 19.2188 7.00002 19.2188Z"
                fill="#FF7010"
              />
            </svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.00001 0C6.35804 0 4.20825 2.14979 4.20825 4.79176C4.20825 7.43372 6.35803 9.58333 9.00001 9.58333C11.642 9.58333 13.7918 7.43372 13.7918 4.79176C13.7918 2.14979 11.642 0 9.00001 0ZM5.2755 4.79176C5.2755 2.73768 6.94613 1.06724 9.00001 1.06724C11.0539 1.06724 12.7245 2.73768 12.7245 4.79176C12.7245 6.84566 11.0539 8.51609 9.00001 8.51609C6.94614 8.51609 5.2755 6.84566 5.2755 4.79176Z"
                fill="#FF7010"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.96381 11.6665C2.59468 11.6665 0.666626 13.6453 0.666626 16.0768V19.4881C0.666626 19.7705 0.890047 19.9998 1.1652 19.9998H16.8347C17.1099 19.9998 17.3333 19.7705 17.3333 19.4881V16.0768C17.3333 13.6453 15.4052 11.6665 13.0361 11.6665H4.96381ZM1.66378 16.0768C1.66378 14.2092 3.14412 12.6899 4.96381 12.6899H13.0361C14.8558 12.6899 16.3361 14.2092 16.3361 16.0768V18.9764H1.66378V16.0768Z"
                fill="#FF7010"
              />
            </svg>
            <button>
              <span>Войти в аккаунт</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
