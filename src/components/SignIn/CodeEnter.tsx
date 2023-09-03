import './CodeEnter.scss';
import { sleep } from './SignIn';
import React, { ChangeEvent, useEffect, useState } from 'react';

const onChange = (e: ChangeEvent<HTMLInputElement>) => {
  const newValue = e.target.value;
};

export interface phoneCode {
  phone: string;
  code: number;
}

export const CodeEnter = (props: phoneCode) => {
  const [counting, setCount] = useState(60);
  const [isCounting, setIsCounting] = useState<boolean>(true);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isCounting && counting > 0) {
      timer = setInterval(() => {
        setCount((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (counting === 0) {
      setIsCounting(false);
    }

    return () => {
      clearInterval(timer);
    };
  }, [counting, isCounting]);

  const handleRestart = () => {
    setCount(60);
    setIsCounting(true);
  };

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
        <span>Отправить код ещё раз</span>
        {isCounting ? (
          <>
            &nbsp;
            <span> через:</span>
            <span className="agreement interactive">{counting} секунд</span>
          </>
        ) : (
          <>
            <span>?</span>
            <button className="agreement no-background-border" onClick={handleRestart}>
              Отправить
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default CodeEnter;
