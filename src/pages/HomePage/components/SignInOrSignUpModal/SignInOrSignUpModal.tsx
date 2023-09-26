import '../../../../components/SignIn/Sign.scss';
import { ReactComponent as Exit } from '../../../../components/assets/Exit.svg';
import { close, signInOrSignUpModalInfo } from '../../../../store/reducers/signInOrSignUpSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export const SignInOrSignUpModal = () => {
  const dispatch = useDispatch();
  const signInOrSignUpModalActive = useSelector(signInOrSignUpModalInfo);
  return (
    <>
      {signInOrSignUpModalActive && (
        <div className="modal">
          <div className="modal-wrapper">
            <div className="content authentication">
              <button>Зарегистрироваться</button>
              <button>Войти</button>
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
