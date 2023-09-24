import './Sign.scss';
import * as yup from 'yup';
import { ReactComponent as Exit } from '../assets/Exit.svg';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

const userSchema = yup
  .object({
    email: yup.string().required('введите email'),
    password: yup.string().required('введите пароль'),
  })
  .required();
type UserFormData = yup.InferType<typeof userSchema>;

export const SignIn = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const onSubmit: SubmitHandler<UserFormData> = (data) => {
    debugger;
    fetch('http://localhost:4001/api/v1/public/user/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((dataFromBack) => console.log(dataFromBack.data.accessToken));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    defaultValues: {},
    resolver: yupResolver(userSchema),
  });

  function handleExitClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isOpen ? (
        <div className="modal">
          <div className="modal-wrapper">
            <div className="content authentication">
              <h1>Регистрация аккаунта</h1>
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
