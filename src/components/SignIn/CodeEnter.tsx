import './CodeEnter.scss';
import { ChangeEvent } from 'react';
// import React from 'react';

const onChange = (e: ChangeEvent<HTMLInputElement>) => {
  const newValue = e.target.value;
};

export interface phoneCode {
  phone: string;
  code: number;
}

export const CodeEnter = (props: phoneCode) => {
  return (
    <>
      <div className="content" id="pin">
        <h1>Код из смс</h1>
        <span className="info">На номер: {props.phone}</span>
        <div className="pin-code">
          <input type="password" maxLength={1} autoComplete="off" pattern="[0-9]*" inputMode="numeric" className="pin-digit" />
          <input type="password" maxLength={1} autoComplete="off" pattern="[0-9]*" inputMode="numeric" className="pin-digit" />
          <input type="password" maxLength={1} autoComplete="off" pattern="[0-9]*" inputMode="numeric" className="pin-digit" />
          <input type="password" maxLength={1} autoComplete="off" pattern="[0-9]*" inputMode="numeric" className="pin-digit" />
        </div>
        <button>Войти</button>
      </div>
      <div className="status">
        <span>Отправить код ещё раз через:</span>
        <span className="agreement interactive">59 секунд</span>
      </div>
    </>
  );
};
