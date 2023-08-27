import './RadioButton.scss';
import React from 'react';

interface RadioButtonProps {
  text: string;
  value: string;
  name: string;
  checked?: boolean;
}

export const RadioButton = (props: RadioButtonProps) => {
  return (
    <label className="radio-container">
      {props.text}
      <input type="radio" value={props.value} name={props.name} checked={props.checked} />
      <span className="dot"></span>
    </label>
  );
};
