import './SignIn.scss';
import { CodeEnter } from './CodeEnter';
import { useState } from 'react';
import Exit from '../assets/Exit.svg';

export const SignIn = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [showMore, setShowMore] = useState<boolean>(false);
  const sleep = (ms: number): Promise<void> => {
    return new Promise((r) => setTimeout(r, ms));
  };

  async function handleMoreClick() {
    await sleep(300);
    setShowMore(!showMore);
  }

  return (
    <>
      <div className="modal">
        <div className="modal-wrapper">
          <div className="content">
            {showMore ? (
              <CodeEnter code={223} phone="999999999" />
            ) : (
              <>
                <h1>Вход в аккаунт</h1>
                <span className="info">Сможете быстро оформлять заказы, использовать бонусы</span>
                <div className="phone">
                  <label htmlFor="telNo">Номер телефона</label>
                  <input id="telNo" name="telNo" type="tel" placeholder="+7" />
                </div>
                <button onClick={handleMoreClick}>Войти</button>
                <span className="agreement">
                  Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением
                </span>
              </>
            )}
          </div>
        </div>
        <button className="exit" onClick={() => setIsOpen(false)}>
          <img src={Exit} alt="" />
        </button>
      </div>
      ;
    </>
  );
};
