import './InputTextForm.scss';
import React from 'react';

export interface InputTextFormProps {
  placeholder: string;
}

export const InputTextForm = (props: InputTextFormProps) => {
  return (
    <form>
      <input type="text" placeholder={props.placeholder} />
    </form>
  );
};
