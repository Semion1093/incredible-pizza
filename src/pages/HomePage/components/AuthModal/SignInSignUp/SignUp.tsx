import '../Sign.scss';
import * as yup from 'yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ReactComponent as Exit } from '../../../../../assets/Exit.svg';
import { closeSignUp, signUpModalInfo } from '../../../../../store/reducers/signUpSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import InputMask from 'react-input-mask';

function removeMaskChars(value: string): string {
  return value.replace(/[-()_\s]/g, '');
}

const userSchema = yup
  .object({
    email: yup
      .string()
      .required('введите email')
      .matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'возможно в формате email допущена ошибка')
      .max(100, 'email не должен быть длиннее 100 символов')
      .email('возможно в формате email допущена ошибка'),
    firstName: yup
      .string()
      .required('введите имя')
      .matches(/^([А-Я][а-я]+)$/, 'введите ваше настоящее имя с заглавной буквы, кириллицей')
      .min(2, 'имя должно быть длиннее 1 символa')
      .max(30, 'имя не должно быть длиннее 30 символов'),
    lastName: yup
      .string()
      .required('введите фамилию')
      .matches(/^([А-Я][а-я]+)$/, 'введите вашу настоящую фамилию с заглавной буквы, кириллицей')
      .min(2, 'фамилия должна быть длиннее 1 символa')
      .max(30, 'фамилия не должна быть длиннее 30 символов'),
    mobileNumber: yup
      .string()
      .required('введите номер телефона')
      .transform((t) => removeMaskChars(t))
      .min(12, 'введите номер телефона полностью'),
    password: yup
      .string()
      .required('введите пароль')
      .matches(/^[^\s]+$/, 'в пароле не должно быть пробела')
      .matches(/.*[#@$%^&*()_+!].*/, 'в пароле должен быть хотя бы один спец. символ')
      .matches(/.*[A-ZА-Я].*/, 'в пароле должен быть хотя бы одинa заглавная буква')
      .min(5, 'пароль должен быть длиннее 4 символов')
      .max(50, 'пароль не должен быть длиннее 50 символов'),
    repeatPassword: yup
      .string()
      .required('повторите пароль')
      .oneOf([yup.ref('password'), ''], 'пароли должны совпадать'),
  })
  .required();
type UserFormData = yup.InferType<typeof userSchema>;

export const SignUp = () => {
  const [formResult, setFormResult] = useState('');
  const onSubmit: SubmitHandler<UserFormData> = (data) => {
    data.mobileNumber = removeMaskChars(data.mobileNumber);
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
    control,
    formState: { errors },
  } = useForm<UserFormData>({
    mode: 'onBlur',
    defaultValues: {},
    resolver: yupResolver(userSchema),
  });
  const dispatch = useDispatch();
  const signInModalActive = useSelector(signUpModalInfo);

  return (
    <>
      {signInModalActive && (
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
                    <Controller
                      name="mobileNumber"
                      control={control}
                      render={({ field }) => <InputMask mask="+7 (999) 999-99-99" maskChar="_" {...field} />}
                    />
                    {errors.mobileNumber && <span>{errors.mobileNumber.message}</span>}
                  </label>
                </div>
                <div className="input-content">
                  <label>
                    Email:
                    <input type="email" {...register('email')} />
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
              </form>
            </div>
            <div className="status">
              <span className="agreement">Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением</span>
            </div>
            <button className="no-background-border icon" onClick={() => dispatch(closeSignUp())}>
              <Exit />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
