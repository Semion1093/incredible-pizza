import './SignInSignUp/Sign.scss';
import { ReactComponent as Exit } from '../../../../assets/Exit.svg';
import { closeAuthModal, authModalInfo } from './authModalSlice';
import { openSignIn } from './SignInSignUp/signInSlice';
import { openSignUp } from './SignInSignUp/signUpSlice';
import { batch, useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export const SignInOrSignUpModal = () => {
  const dispatch = useDispatch();
  const signInOrSignUpModalActive = useSelector(authModalInfo);
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
      {signInOrSignUpModalActive && (
        <div className="modal">
          <div className="modal-wrapper">
            <div className="content authentication">
              <button onClick={() => onSubmitOpenSignUp()}>Зарегистрироваться</button>
              <button onClick={() => onSubmitopenSignIn()}>Войти</button>
            </div>
            <button className="no-background-border icon" onClick={() => dispatch(closeAuthModal())}>
              <Exit />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
