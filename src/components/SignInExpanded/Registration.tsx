import './Registration.scss';
import * as yup from 'yup';
import { CodeEnter, phoneCode } from './SignInUsingMail';
import { Control, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { ReactComponent as Exit } from '../assets/Exit.svg';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

const codeValue: phoneCode = {
  code: '1111',
};

const schema = yup
  .object({
    email: yup.string().required('введите email').max(100, 'email не должен быть длиннее 100 символов'),
    firstName: yup.string().required('введите имя').min(2, 'имя должно быть длиннее 1 символa').max(30, 'имя не должно быть длиннее 30 символов'),
    lastName: yup
      .string()
      .required('введите фамилию')
      .min(2, 'фамилия должна быть длиннее 1 символa')
      .max(30, 'фамилия не должна быть длиннее 30 символов'),
    phoneNumber: yup
      .string()
      .required('введите номер телефона')
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
type FormData = yup.InferType<typeof schema>;

export const sleep = (ms: number): Promise<void> => {
  return new Promise((r) => setTimeout(r, ms));
};

export const SignInUsingMail: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [emailv, seteMail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const isPhoneComplete = phoneNumber.length === 18;
  const onSubmit: SubmitHandler<FormData> = (data) => {
    fetch('', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => response.json());
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    const formattedText = formatPhoneNumber(inputText);
    setPhoneNumber(formattedText);
  };
  const handleChangeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    seteMail(inputText);
  };

  const formatPhoneNumber = (input: string): string => {
    const cleanedInput = input.replace(/\D/g, '');
    let formattedNumber = '+7';
    if (cleanedInput.length >= 2) {
      formattedNumber += ` (${cleanedInput.substring(1, 4)}`;
    }

    if (cleanedInput.length >= 5) {
      formattedNumber += `) ${cleanedInput.substring(4, 7)}`;
    }

    if (cleanedInput.length >= 8) {
      formattedNumber += `-${cleanedInput.substring(7, 9)}`;
    }

    if (cleanedInput.length >= 10) {
      formattedNumber += `-${cleanedInput.substring(9, 11)}`;
    }
    return formattedNumber;
  };

  async function handleMoreClick() {
    await sleep(300);
    setShowMore(!showMore);
  }

  function handleExitClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isOpen ? (
        <div className="modal">
          <div className="modal-wrapper">
            {showMore ? (
              <CodeEnter code={codeValue.code} email={emailv} />
            ) : (
              <>
                <div className="content authentication">
                  <h1>Регистрация аккаунта</h1>
                  <span className="info">Сможете быстро оформлять заказы, использовать бонусы</span>
                  <form className="required-name" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-content">
                      <label>
                        Имя
                        <input type="text" {...register('firstName')} />
                      </label>
                      {errors.firstName && <span>{errors.firstName.message}</span>}
                    </div>
                    <div className="input-content">
                      <label>
                        Фамилия
                        <input type="text" {...register('lastName')} />
                      </label>
                      {errors.lastName && <span>{errors.lastName.message}</span>}
                    </div>
                    <div className="input-content">
                      <label>
                        Номер телефона
                        <input
                          type="tel"
                          placeholder="+7 (___) ___-__-__"
                          inputMode="numeric"
                          autoComplete="cc-number"
                          name="telNo"
                          id="telNo"
                          onChange={handleChange}
                          ref={inputRef}
                          value={phoneNumber}
                        />
                        {isPhoneComplete ? <span></span> : <span id="passive">введите номер телефона полностью</span>}
                      </label>
                    </div>
                    <div className="input-content">
                      <label>
                        mail
                        <input type="text" {...register('email')} onChange={handleChangeMail} />
                      </label>
                      {errors.email && <span>{errors.email.message}</span>}
                    </div>
                    <div className="input-content">
                      <label>
                        Пароль
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
                    <button>test</button>
                    <button disabled={!isPhoneComplete} onClick={handleMoreClick}>
                      Продолжить
                    </button>
                  </form>
                  <button disabled={!isPhoneComplete} onClick={handleMoreClick}>
                    Продолжить
                  </button>
                </div>
                <div className="status">
                  <span className="agreement">
                    Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением
                  </span>
                </div>
              </>
            )}
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
