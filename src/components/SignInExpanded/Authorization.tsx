import './Sign.scss';
import { ReactComponent as Exit } from '../assets/Exit.svg';
import { useState } from 'react';

export const Authorization = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  function handleExitClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isOpen ? (
        <div className="modal">
          <div className="modal-wrapper">
            <div className="content authentication">
              <button type="submit">Зарегистрироваться</button>
              <button type="submit">Войти</button>
            </div>
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
