import './AuthModal.scss';
import { ReactComponent as Exit } from '../../../../assets/Exit.svg';
import { authModalInfo, closeAuthModal } from './authModalSlice';
import { batch, useDispatch, useSelector } from 'react-redux';
import { openSignIn } from './SignInSignUp/signInSlice';
import { openSignUp } from './SignInSignUp/signUpSlice';
import { useState } from 'react';

export const SignInOrSignUpModal = () => {
  const dispatch = useDispatch();
  const authModalActive = useSelector(authModalInfo);
  const onSubmitOpenSignUp = () => {
    batch(() => {
      dispatch(openSignUp());
      dispatch(closeAuthModal());
    });
  };
  const onSubmitopenSignIn = () => {
    batch(() => {
      dispatch(openSignIn());
      dispatch(closeAuthModal());
    });
  };

  return (
    <>
      {authModalActive && (
        <div className="modal">
          <div className="modal-wrapper">
            <div className="content authentication">
              <h1>Для продолжения, пожалуйста зарегистрируйтесь или войдите в аккаунт</h1>
              <button className="no-background-border icon mobile-only" onClick={() => dispatch(closeAuthModal())}>
                <Exit />
              </button>
              <div className="content authentication-modal">
                <button onClick={() => onSubmitOpenSignUp()}>Зарегистрироваться</button>
                <button onClick={() => onSubmitopenSignIn()}>Войти</button>
              </div>
            </div>
            <button className="no-background-border icon desktop-only" onClick={() => dispatch(closeAuthModal())}>
              <Exit />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
