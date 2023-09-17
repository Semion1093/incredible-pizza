import './SignIn.scss';
import { CodeEnter, phoneCode } from './CodeEnter';
import { ReactComponent as Exit } from '../assets/Exit.svg';
import React, { useEffect, useRef, useState } from 'react';

const codeValue: phoneCode = {
  code: '1111',
};

export const sleep = (ms: number): Promise<void> => {
  return new Promise((r) => setTimeout(r, ms));
};

export const SignIn: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const isPhoneComplete = phoneNumber.length === 18;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    const formattedText = formatPhoneNumber(inputText);
    setPhoneNumber(formattedText);
  };

  const formatPhoneNumber = (input: string): string => {
    const cleanedInput = input.replace(/\D/g, '');
    let formattedNumber = '+7';
    if (cleanedInput.length >= 2) {
      formattedNumber += ` (${cleanedInput.substring(1, 4)}`;
    }

    if (cleanedInput.length >= 5) {
      formattedNumber += `) ${cleanedInput.substring(4, 7)}`;
    }

    if (cleanedInput.length >= 8) {
      formattedNumber += `-${cleanedInput.substring(7, 9)}`;
    }

    if (cleanedInput.length >= 10) {
      formattedNumber += `-${cleanedInput.substring(9, 11)}`;
    }
    return formattedNumber;
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  async function handleMoreClick() {
    await sleep(300);
    setShowMore(!showMore);
  }

  function handleExitClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isOpen ? (
        <div className="modal">
          <div className="modal-wrapper">
            {showMore ? (
              <CodeEnter code={codeValue.code} phone={phoneNumber} />
            ) : (
              <>
                <div className="content authentication">
                  <h1>Вход в аккаунт</h1>
                  <span className="info">Сможете быстро оформлять заказы, использовать бонусы</span>
                  <div className="phone">
                    <label htmlFor="telNo">Номер телефона</label>
                    <input
                      id="telNo"
                      name="telNo"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={phoneNumber}
                      onChange={handleChange}
                      ref={inputRef}
                    />
                  </div>
                  <button disabled={!isPhoneComplete} onClick={handleMoreClick}>
                    Войти
                  </button>
                </div>
                <div className="status">
                  <span className="agreement">
                    Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением
                  </span>
                </div>
              </>
            )}
            <button className="no-background-border icon" onClick={handleExitClick}>
              <Exit />
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      ;
    </>
  );
};
