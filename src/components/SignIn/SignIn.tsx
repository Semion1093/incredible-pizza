import './SignIn.scss';
import { CodeEnter, phoneCode } from './CodeEnter';
import { ReactComponent as Exit } from '../assets/Exit.svg';
import { useState } from 'react';

const codeValue: phoneCode = {
  phone: '+7 (999) 999 99 99',
  code: 2131,
};

export const sleep = (ms: number): Promise<void> => {
  return new Promise((r) => setTimeout(r, ms));
};
export const SignIn = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);

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
        <></>
      ) : (
        <div className="modal">
          <div className="modal-wrapper">
            {showMore ? (
              <CodeEnter code={codeValue.code} phone={codeValue.phone} />
            ) : (
              <>
                <div className="content">
                  <h1>Вход в аккаунт</h1>
                  <span className="info">Сможете быстро оформлять заказы, использовать бонусы</span>
                  <div className="phone">
                    <label htmlFor="telNo">Номер телефона</label>
                    <input id="telNo" name="telNo" type="tel" placeholder="+7" />
                  </div>
                  <button onClick={handleMoreClick}>Войти</button>
                </div>
                <div className="status">
                  <span className="agreement">
                    Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением
                  </span>
                </div>
              </>
            )}
          </div>
          <button className="no-background-border icon" onClick={handleExitClick}>
            <Exit />
          </button>
        </div>
      )}
      ;
    </>
  );
};
