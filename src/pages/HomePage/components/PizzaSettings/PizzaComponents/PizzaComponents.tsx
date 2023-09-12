import './PizzaComponents.scss';
import { ReactComponent as TomatoSauce } from './assets/TomatoSauce.svg';
import React, { FunctionComponent, ReactElement, ReactNode, SVGProps } from 'react';
export interface Topping {
  id?: number;
  name: string;
  price?: number;
  children?: string;
  // children?: ReactNode;
  // children?: React.FC;
}

export const PizzaComponents = (props: Topping) => {
  return (
    <>
      <label className="component-checkbox-wrapper">
        <input type="checkbox" className="component-checkbox-input" />
        <span className="component-checkbox-tile">
          <img className="component-checkbox-icon" src={props.children} alt="" />
        </span>
        <span className="component-checkbox-label">
          {props.name}
          {props.price === undefined ? <></> : <span className="component-checkbox-price">{props.price + ' ₽'}</span>}
        </span>
      </label>
    </>
  );
};
