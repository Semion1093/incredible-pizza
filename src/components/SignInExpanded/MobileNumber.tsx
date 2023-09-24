import './Sign.scss';
import { Controller, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import React from 'react';

type FormData = {
  phoneNumber: string;
};

const validatePhoneNumber = (value: string) => {
  const phoneNumberRegex = /^\+\d{1,3} \(\d{3}\)\d{3}-\d{2}-\d{2}$/;
  if (phoneNumberRegex.test(value)) {
    return true;
  } else {
    return 'Номер телефона должен иметь формат +7 (909)999-99-99.';
  }
};

export function MobileNumber() {
  const {
    control,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <div>
      <Controller
        name="phoneNumber"
        control={control}
        rules={{ validate: validatePhoneNumber }}
        render={({ field }) => <InputMask {...field} mask="+9 (999) 999-99-99" maskChar="_" />}
      />
      {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
    </div>
  );
}
