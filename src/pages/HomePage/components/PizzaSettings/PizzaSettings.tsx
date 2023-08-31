import './PizzaSettings.scss';
import { PizzaComponents, Topping } from './PizzaComponents/PizzaComponents';
import Bacon from './PizzaComponents/assets/Bacon.svg';
import Champignons from './PizzaComponents/assets/Champignons.svg';
import Cheddar from './PizzaComponents/assets/Cheddar.svg';
import Cucumber from './PizzaComponents/assets/Cucumber.svg';
import Jalapeno from './PizzaComponents/assets/Jalapeno.svg';
import Mozzarella from './PizzaComponents/assets/Mozzarella.svg';
import Olives from './PizzaComponents/assets/Olives.svg';
import Pepperoni from './PizzaComponents/assets/Pepperoni.svg';
import React from 'react';
import RedOnion from './PizzaComponents/assets/RedOnion.svg';
import SweetPepper from './PizzaComponents/assets/SweetPepper.svg';
import TomatoSauce from './PizzaComponents/assets/TomatoSauce.svg';

import { ReactComponent as Info } from './assets/Info.svg';
import { ReactComponent as Top } from './assets/Top.svg';

export interface PizzaProps {
  id?: number;
  name?: string;
  price?: number;
  picture?: string;
  defaultToppings: Topping[];
}

export const toppingMozzarella: Topping = {
  id: 1,
  name: 'Моцарелла',
  price: 11,
  iconURL: Mozzarella,
};

export const toppingCucumber: Topping = {
  id: 2,
  name: 'Огурцы маринованные',
  price: 22,
  iconURL: Cucumber,
};

export const toppingPepperoni: Topping = {
  id: 3,
  name: 'Пепперони',
  price: 33,
  iconURL: Pepperoni,
};

export const toppingTomatoSauce: Topping = {
  id: 4,
  name: 'Томатный соус',
  price: 44,
  iconURL: TomatoSauce,
};

export const toppingChampignons: Topping = {
  id: 5,
  name: 'Шампиньоны',
  price: 55,
  iconURL: Champignons,
};

export const toppingRedOnion: Topping = {
  id: 6,
  name: 'Красный лук',
  price: 66,
  iconURL: RedOnion,
};

export const toppingSweetPepper: Topping = {
  id: 7,
  name: 'Сладкий перец',
  price: 77,
  iconURL: SweetPepper,
};

export const toppingBacon: Topping = {
  id: 8,
  name: 'Bacon',
  price: 88,
  iconURL: Bacon,
};

export const toppingCheddar: Topping = {
  id: 9,
  name: 'Cheddar',
  price: 99,
  iconURL: Cheddar,
};

export const toppingJalapeno: Topping = {
  id: 10,
  name: 'Jalapeno',
  price: 100,
  iconURL: Jalapeno,
};

export const toppingOlives: Topping = {
  id: 11,
  name: 'Olives',
  price: 110,
  iconURL: Olives,
};

const additionalToppings: Topping[] = [toppingChampignons, toppingBacon, toppingRedOnion, toppingSweetPepper];

export const PizzaSettings = (props: PizzaProps) => {
  return (
    <article className="PizzaSettings">
      <div className="left-side">
        <div className="state-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="82" height="40" viewBox="0 0 82 40" fill="none">
            <path d="M0 0H76C79.3137 0 82 2.68629 82 6V34C82 37.3137 79.3137 40 76 40H0V0Z" fill="#E23535" />
          </svg>
          <p>NEW</p>
        </div>
        <div className="content">
          <img src={props.picture} alt="" className="pizza-img" />
        </div>
      </div>
      <div className="right-side">
        <div className="title">
          <div className="content">
            <Top />
            <h4>{props.name}</h4>
          </div>
          <details className="button-info">
            <summary>
              <Info />
            </summary>
            <p>
              В конструкторе пиццы вы можете исключить ингридиенты, которые идут в базовой конфигурации и добавить за дополнительную плату топпинги
            </p>
          </details>
        </div>
        <div className="components-section">
          {props.defaultToppings.map((item) => (
            <PizzaComponents key={`id-${item.id}`} iconURL={item.iconURL} name={item.name} />
          ))}
        </div>
        <div className="base-section">
          <div className="dough-wrapper">
            <div className="dough"></div>
          </div>
          <div className="size-wrapper">
            <div className="size"></div>
          </div>
        </div>
        <div className="content">
          <h4>Добавьте в пиццу</h4>
        </div>
        <div className="components-section">
          {additionalToppings.map((item) => (
            <PizzaComponents key={`id-${item.id}`} iconURL={item.iconURL} name={item.name} />
          ))}
        </div>
        <div className="results">
          <span>
            Итого: {props.price}
            <p>{props.price}</p>
          </span>
          <button className="add-to-cart">Выбрать</button>
        </div>
      </div>
    </article>
  );
};
