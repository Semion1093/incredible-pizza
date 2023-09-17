import './CustomTextInput.scss';
import React from 'react';

export interface CustomTextInputProps {
  placeholder: string;
}

export const CustomTextInput = (props: CustomTextInputProps) => {
  return (
    <form>
      <input type="text" placeholder={props.placeholder} />
    </form>
  );
};
