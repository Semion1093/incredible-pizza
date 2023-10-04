import './CodeEnter.scss';
import { ReactComponent as ArrowSm } from '../../../../../assets/ArrowSm.svg';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { ReactComponent as Exit } from '../../../../../assets/Exit.svg';
import { batch, useDispatch, useSelector } from 'react-redux';
import { closeCodeEnter, codeEnterlInfo } from './codeEnterSlice';
import { openSignUp } from './signUpSlice';
import { selectTryOfUser } from '../../../../../store/tryUserSlice';

export const CodeEnter = () => {
  const [counting, setCount] = useState(6);
  const [isCounting, setIsCounting] = useState<boolean>(true);
  const [pin, setPin] = useState<string>('');
  const [pinMask, setPinMask] = useState<string>('');
  const [needToRepeat, setisNeedToRepeat] = useState<boolean>(false);
  const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];
  const tupleLength: number = inputRefs.length;
  const isFilled = pin.length === inputRefs.length;

  const handleRestart = () => {
    setCount(6);
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
  const dispatch = useDispatch();
  const codeEnterActive = useSelector(codeEnterlInfo);
  const isTry = useSelector(selectTryOfUser);

  const verificationPin = () => {
    if (isTry?.code === pin) {
      dispatch(closeCodeEnter());
    } else {
      setPin('');
      setPinMask('');
      setisNeedToRepeat(true);
    }
  };

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  useEffect(() => {
    if (isFilled) {
      setisNeedToRepeat(false);
      inputRefs[0].current?.focus();
    }
  }, [needToRepeat]);

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

  const onSubmitComeback = () => {
    batch(() => {
      dispatch(closeCodeEnter());
      dispatch(openSignUp());
    });
  };
  return (
    <>
      {codeEnterActive && (
        <div className="modal">
          <div className="modal-wrapper fixed-width">
            <div className="content authentication" id="pin">
              <h1>Код из письма</h1>
              <button className="no-background-border icon mobile-only" onClick={() => dispatch(closeCodeEnter())}>
                <Exit />
              </button>
              <button className="no-background-border icon comeback mobile-only" onClick={() => onSubmitComeback()}>
                <ArrowSm />
              </button>
              <span className="info">На email: {isTry?.email}</span>
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
              {!needToRepeat ? <></> : <div className="replay">Код введен неверно, попробуйте снова</div>}
            </div>
            <button className="no-background-border icon desktop-only" onClick={() => dispatch(closeCodeEnter())}>
              <Exit />
            </button>
            <button className="no-background-border icon comeback desktop-only" onClick={() => onSubmitComeback()}>
              <ArrowSm />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
