import './Registration.scss';
import { CodeEnter, phoneCode } from './SignInUsingMail';
import { ReactComponent as Exit } from '../assets/Exit.svg';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import React, { useEffect, useRef, useState } from 'react';

const codeValue: phoneCode = {
  code: '1111',
};

interface MyForm {
  firstName: string;
  lastName: string;
  mail: string;
  Password: string;
  phoneNumber: number;
}

export const sleep = (ms: number): Promise<void> => {
  return new Promise((r) => setTimeout(r, ms));
};

export const SignInUsingMail: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [showMore, setShowMore] = useState<boolean>(false);

  // const [firstName, setfirstName] = useState<string>('');
  // const [lastName, setlastName] = useState<string>('');
  // const [mail, setMail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  // const [password, setPassword] = useState<string>('');

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    watch,
    formState: { errors },
  } = useForm<MyForm>({
    defaultValues: {},
  });

  const submit: SubmitHandler<MyForm> = (data) => {
    console.log(data);
  };
  const error: SubmitErrorHandler<MyForm> = (data) => {
    console.log(data);
  };

  const isName = (_: any) => {
    return true;
  };

  // const isFirstNameComplete = firstName.length >= 3;
  // const isLastNameComplete = lastName.length >= 3;
  // const isMailComplete = mail.length >= 8;
  // const isPasswordComplete = password.length >= 9;
  const isPhoneComplete = phoneNumber.length === 18;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    const formattedText = formatPhoneNumber(inputText);
    setPhoneNumber(formattedText);
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

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

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
              <CodeEnter code={codeValue.code} phone={phoneNumber} />
            ) : (
              <>
                <div className="content authentication">
                  <h1>Регистрация аккаунта</h1>
                  <span className="info">Сможете быстро оформлять заказы, использовать бонусы</span>
                  <form className="required-name" onSubmit={handleSubmit(submit, error)}>
                    {/* <div className="firstName"> */}
                    <label htmlFor="telNo">
                      Имя
                      <input type="text" {...register('firstName', { required: true })} aria-invalid={errors.firstName ? true : false} />
                    </label>
                    {/* </div> */}
                    {/* <div className="lastName"> */}
                    <label htmlFor="telNo">
                      Фамилия
                      <input type="text" {...register('lastName', { required: true })} aria-invalid={errors.lastName ? true : false} />
                    </label>
                    {/* </div> */}
                    {/* <div className="phone"> */}
                    <label htmlFor="telNo">
                      Номер телефона
                      <input
                        id="telNo"
                        name="telNo"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={phoneNumber}
                        onChange={handleChange}
                        ref={inputRef}
                      />
                    </label>
                    {/* </div> */}
                    {/* <div className="mail"> */}
                    <label htmlFor="telNo">
                      mail
                      <input type="text" {...register('mail', { required: true })} />
                    </label>
                    {/* </div> */}
                    {/* <div className="password"> */}
                    <label htmlFor="telNo">
                      Пароль
                      <input type="text" {...register('Password', { required: true })} />
                    </label>
                    {/* </div> */}
                    {/* <div className="password"> */}
                    <label htmlFor="telNo">
                      Подтверждение пароля
                      <input type="text" {...register('Password', { required: true })} />
                    </label>
                    {/* </div> */}
                    <button>test</button>
                    <button type="button" onClick={() => clearErrors()}>
                      clearErrors
                    </button>
                    <button type="button" onClick={() => reset()}>
                      reset
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
