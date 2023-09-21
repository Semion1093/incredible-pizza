import './SignInUsingMail.scss';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
export interface phoneCode {
  email?: string;
  code: string;
}

export const CodeEnter = (props: phoneCode) => {
  const [counting, setCount] = useState(60);
  const [isCounting, setIsCounting] = useState<boolean>(true);
  const [pin, setPin] = useState<string>('');
  const [pinMask, setPinMask] = useState<string>('');
  const [isVerified, setisVerified] = useState<boolean>(false);
  const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];
  const tupleLength: number = inputRefs.length;
  const isFilled = pin.length === inputRefs.length;

  const handleRestart = () => {
    setCount(60);
    setIsCounting(true);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = event.target.value;
    if (/^[0-9]$/.test(value)) {
      setPin((prevPin) => {
        const newPin = prevPin.split('');
        newPin[index] = value;
        return newPin.join('');
      });

      const maskedValue = value.replace(/./g, 'X');
      setPinMask((prevMaskedPin) => {
        const newMaskedPin = prevMaskedPin.split('');
        newMaskedPin[index] = maskedValue;

        return newMaskedPin.join('');
      });

      if (index < inputRefs.length - 1 && value !== '') {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  const verificationPin = () => {
    props.code === pin ? setisVerified(true) : setisVerified(false);
  };

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  useEffect(() => {
    if (isFilled) {
      setPin('');
      setPinMask('');
      inputRefs[0].current?.focus();
    }
  }, [isVerified]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isCounting && counting > 0) {
      timer = setInterval(() => {
        setCount((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (counting === 0) {
      setIsCounting(false);
    }

    return () => {
      clearInterval(timer);
    };
  }, [counting, isCounting]);

  return (
    <>
      <div className="content authentication" id="pin">
        <h1>Код из письма</h1>
        <span className="info">На email: {props.email}</span>
        <div className="pin-code">
          {Array.from({ length: tupleLength }, (_, index) => (
            <input
              type="text"
              maxLength={1}
              autoComplete="off"
              pattern="[0-9]*"
              inputMode="numeric"
              className="pin-digit"
              key={index}
              ref={inputRefs[index]}
              value={pinMask[index] || ''}
              onChange={(event) => handleChange(event, index)}
            />
          ))}
        </div>
        <button disabled={!isFilled} onClick={verificationPin}>
          Войти
        </button>
      </div>
      <div className="status">
        <span>Отправить код ещё раз</span>
        {isCounting ? (
          <>
            &nbsp;
            <span> через:</span>
            <span className="agreement interactive">{counting} секунд</span>
          </>
        ) : (
          <>
            <span>?</span>
            <button className="agreement no-background-border" onClick={handleRestart}>
              Отправить
            </button>
          </>
        )}
        {isVerified ? <></> : <div className="replay">Код введен неверно, попробуйте снова</div>}
      </div>
    </>
  );
};
