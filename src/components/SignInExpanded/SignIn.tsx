import './SignIn.scss';
import * as yup from 'yup';
import { ReactComponent as Exit } from '../assets/Exit.svg';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

const userSchema = yup
  .object({
    email: yup.string().required('введите email').max(100, 'email не должен быть длиннее 100 символов'),
    firstName: yup.string().required('введите имя').min(2, 'имя должно быть длиннее 1 символa').max(30, 'имя не должно быть длиннее 30 символов'),
    lastName: yup
      .string()
      .required('введите фамилию')
      .min(2, 'фамилия должна быть длиннее 1 символa')
      .max(30, 'фамилия не должна быть длиннее 30 символов'),
    mobileNumber: yup
      .string()
      .required('введите номер телефона')
      .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, 'введите корректный номер телефона')
      .min(10, 'номер телефона должен быть длиннее 9 символов')
      .max(14, 'номер телефона не должен быть длиннее 14 символов'),
    password: yup
      .string()
      .required('введите пароль')
      .min(5, 'пароль должен быть длиннее 4 символов')
      .max(50, 'пароль не должен быть длиннее 50 символов'),
    repeatPassword: yup
      .string()
      .required('повторите пароль')
      .oneOf([yup.ref('password'), ''], 'пароли должны совпадать'),
  })
  .required();
type UserFormData = yup.InferType<typeof userSchema>;

export const SignIn = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [formResult, setFormResult] = useState('');
  const onSubmit: SubmitHandler<UserFormData> = (data) => {
    debugger;
    fetch('http://localhost:4001/api/v1/public/user/sign-up', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((dataFromBack) => setFormResult(dataFromBack));
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
              <span className="info">Сможете быстро оформлять заказы, использовать бонусы</span>
              <form className="required-name" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-content">
                  <label>
                    Имя:
                    <input type="text" {...register('firstName')} />
                  </label>
                  {errors.firstName && <span>{errors.firstName.message}</span>}
                </div>
                <div className="input-content">
                  <label>
                    Фамилия:
                    <input type="text" {...register('lastName')} />
                  </label>
                  {errors.lastName && <span>{errors.lastName.message}</span>}
                </div>
                <div className="input-content">
                  <label>
                    Номер телефона:
                    <input type="tel" placeholder="+7 (___) ___-__-__" {...register('mobileNumber')} />
                    {errors.mobileNumber && <span>{errors.mobileNumber.message}</span>}
                  </label>
                </div>
                <div className="input-content">
                  <label>
                    Mail:
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
                <div className="input-content">
                  <label>
                    Повторите пароль:
                    <input type="password" {...register('repeatPassword')} />
                  </label>
                  {errors.repeatPassword && <span>{errors.repeatPassword.message}</span>}
                </div>
                <button type="submit">Продолжить</button>
                {formResult && <div>данные получены! спасибули ^__^</div>}
              </form>
            </div>
            <div className="status">
              <span className="agreement">Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением</span>
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
