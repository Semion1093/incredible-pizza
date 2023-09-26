import '../../../../components/SignIn/Sign.scss';
import { ReactComponent as Exit } from '../../../../components/assets/Exit.svg';
import { close, signInOrSignUpModalInfo } from '../../../../store/reducers/signInOrSignUpSlice';
import { openSignIn } from '../../../../store/reducers/signInSlice';
import { openSignUp } from '../../../../store/reducers/signUpSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export const SignInOrSignUpModal = () => {
  const dispatch = useDispatch();
  const signInOrSignUpModalActive = useSelector(signInOrSignUpModalInfo);
  const onSubmitOpenSignUp = () => {
    dispatch(openSignUp());
    dispatch(close());
  };
  const onSubmitopenSignIn = () => {
    dispatch(openSignIn());
    dispatch(close());
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
            <button className="no-background-border icon" onClick={() => dispatch(close())}>
              <Exit />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
