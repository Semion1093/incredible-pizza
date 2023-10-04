import './Sign.scss';
import * as yup from 'yup';
import { ReactComponent as Exit } from '../../../../../assets/Exit.svg';
import { PathFetch } from '../../../../../components/PathFetch';
import { SubmitHandler, useForm } from 'react-hook-form';
import { User } from '../../../../../models/User';
import { closeSignIn, signInModalInfo } from './signInSlice';
import { loadUser, selectCurrentUser } from '../../../../../../src/store/currentUserSlice';
import { batch, useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import jwt_decode from 'jwt-decode';

const userSignInSchema = yup
  .object({
    email: yup.string().required('введите email'),
    password: yup.string().required('введите пароль'),
  })
  .required();
export type UserSignInFormData = yup.InferType<typeof userSignInSchema>;

interface DecodedTokenUser {
  firstName: string;
  lastName: string;
  email: string;
}
interface DecodedTokenData {
  data: DecodedTokenUser;
}

export const SignIn = () => {
  const onSubmit: SubmitHandler<UserSignInFormData> = (data) => {
    fetch(PathFetch.SignIn, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        if (!response.ok) {
          return 'Данные введены неверно, попробуйте снова';
        }
        return response.json();
      })
      .then((dataFromBack) => {
        localStorage.setItem('token', dataFromBack.data.accessToken);
        const jwt = localStorage.getItem('token') ? localStorage.getItem('token') : '';
        if (jwt) {
          const decoded: DecodedTokenData = jwt_decode(jwt);
          const userDataFromBack: User = {
            firstName: decoded.data.firstName,
            lastName: decoded.data.lastName,
            email: decoded.data.email,
            accessToken: jwt,
          };
          batch(() => {
            dispatch(loadUser(userDataFromBack));
            dispatch(closeSignIn());
          });
        }
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSignInFormData>({
    defaultValues: {},
    resolver: yupResolver(userSignInSchema),
  });

  const dispatch = useDispatch();
  const signInModalActive = useSelector(signInModalInfo);
  return (
    <>
      {signInModalActive && (
        <div className="modal">
          <div className="modal-wrapper fixed-width">
            <div className="content authentication">
              <h1>Вход в аккаунт</h1>
              <button className="no-background-border icon mobile-only" onClick={() => dispatch(closeSignIn())}>
                <Exit />
              </button>
              <form className="required-name" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-content">
                  <label>
                    Email:
                    <input
                      type="email"
                      pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                      required
                      {...register('email')}
                    />
                  </label>
                  {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div className="input-content">
                  <label>
                    Пароль:
                    <input type="password" {...register('password')} />
                  </label>
                  {errors.password && <span>{errors.password.message}</span>}
                </div>
                <button type="submit">Войти</button>
              </form>
            </div>
            <div className="status">
              <span className="agreement">Убедитесь что ввели правильные данные</span>
            </div>
            <button className="no-background-border icon desktop-only" onClick={() => dispatch(closeSignIn())}>
              <Exit />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
