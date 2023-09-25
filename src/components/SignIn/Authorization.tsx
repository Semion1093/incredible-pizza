import './Sign.scss';
import { ReactComponent as Exit } from '../assets/Exit.svg';
import { useState } from 'react';

export interface AuthorizationProps {
  isAuthorizationActive: boolean;
  setIsAuthorizationActive: (isAuthorizationActive: boolean) => void;
  setIsSignInActive: (isSignInActive: boolean) => void;
  setIsSignUpActive: (isSignUpActive: boolean) => void;
}

export const Authorization = (props: AuthorizationProps) => {
  function handleExitClick() {
    props.setIsAuthorizationActive(false);
  }

  function goToSignUpActive() {
    props.setIsAuthorizationActive(false);
    props.setIsSignUpActive(true);
  }

  function goToSignInActive() {
    props.setIsAuthorizationActive(false);
    props.setIsSignInActive(true);
  }

  return (
    <>
      {props.isAuthorizationActive && (
        <div className="modal">
          <div className="modal-wrapper">
            <div className="content authentication">
              <button onClick={goToSignUpActive}>Зарегистрироваться</button>
              <button onClick={goToSignInActive}>Войти</button>
            </div>
            <button className="no-background-border icon" onClick={handleExitClick}>
              <Exit />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
