import './Change.scss';
import { ChangeType } from '../../../../shared/ChangeType';
import { CustomTextInput } from '../../../../components/CustomTextInput/CustomTextInput';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { OrderFormData } from '../OrderDetails/OrderDetails';
import React, { useState } from 'react';

export interface ChangeProps {
  register: UseFormRegister<OrderFormData>;
  errors: FieldErrors;
}

export const Change = (props: ChangeProps) => {
  const [selectedOption, setSelectedOption] = useState(ChangeType.WithoutCash as number);

  const options = [
    { value: ChangeType.WithoutCash, label: 'Без сдачи' },
    { value: ChangeType.WithCash, label: 'Сдача с' },
  ];

  return (
    <div className="change">
      <div className="radio-group">
        {options.map((option) => (
          <label className="radio-container" key={option.value}>
            <input
              {...props.register('changeType')}
              type="radio"
              value={option.value}
              checked={selectedOption === (option.value as number)}
              onChange={(e) => {
                setSelectedOption(parseInt(e.target.value));
              }}
            />
            <span className="dot"></span>
            {option.label}
          </label>
        ))}
      </div>
      {selectedOption === ChangeType.WithCash && (
        <div className="cash-input">
          <CustomTextInput name={'change'} placeholder={'0                         ₽'} label={''} register={props.register} />
          {props.errors.change && <span className="error-text">{props.errors.change.message?.toString()}</span>}
        </div>
      )}
    </div>
  );
};
