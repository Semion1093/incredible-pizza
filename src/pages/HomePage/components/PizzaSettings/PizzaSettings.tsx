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
// import { ReactComponent as Bacon } from './PizzaComponents/assets/Bacon.svg';
// import { ReactComponent as Champignons } from './PizzaComponents/assets/Champignons.svg';
// import { ReactComponent as Cheddar } from './PizzaComponents/assets/Cheddar.svg';
// import { ReactComponent as Cucumber } from './PizzaComponents/assets/Cucumber.svg';
// import { ReactComponent as Jalapeno } from './PizzaComponents/assets/Jalapeno.svg';
// import { ReactComponent as Mozzarella } from './PizzaComponents/assets/Mozzarella.svg';
// import { ReactComponent as Olives } from './PizzaComponents/assets/Olives.svg';
// import { ReactComponent as Pepperoni } from './PizzaComponents/assets/Pepperoni.svg';
// import { ReactComponent as RedOnion } from './PizzaComponents/assets/RedOnion.svg';
// import { ReactComponent as SweetPepper } from './PizzaComponents/assets/SweetPepper.svg';
// import { ReactComponent as TomatoSauce } from './PizzaComponents/assets/TomatoSauce.svg';

import { ReactComponent as Info } from './assets/Info.svg';
import { ReactComponent as Top } from './assets/Top.svg';

export interface PizzaProps {
  id?: number;
  name?: string;
  price?: number;
  picture?: string;
  defaultToppings: Topping[];
}
export interface modalProps {
  state: boolean;
}

export const toppingMozzarella: Topping = {
  id: 1,
  name: 'Моцарелла',
  price: 11,
  // iconURL: Mozzarella,
  children: Mozzarella,
};

export const toppingCucumber: Topping = {
  id: 2,
  name: 'Огурцы маринованные',
  price: 22,
  // iconURL: Cucumber,
  children: Cucumber,
};

export const toppingPepperoni: Topping = {
  id: 3,
  name: 'Пепперони',
  price: 33,
  // iconURL: Pepperoni,
  children: Pepperoni,
};

export const toppingTomatoSauce: Topping = {
  id: 4,
  name: 'Томатный соус',
  price: 44,
  children: TomatoSauce,
};

export const toppingChampignons: Topping = {
  id: 5,
  name: 'Шампиньоны',
  price: 55,
  children: Champignons,
};

export const toppingRedOnion: Topping = {
  id: 6,
  name: 'Красный лук',
  price: 66,
  children: RedOnion,
};

export const toppingSweetPepper: Topping = {
  id: 7,
  name: 'Сладкий перец',
  price: 77,
  children: SweetPepper,
};

export const toppingBacon: Topping = {
  id: 8,
  name: 'Bacon',
  price: 88,
  children: Bacon,
};

export const toppingCheddar: Topping = {
  id: 9,
  name: 'Cheddar',
  price: 99,
  children: Cheddar,
};

export const toppingJalapeno: Topping = {
  id: 10,
  name: 'Jalapeno',
  price: 100,
  children: Jalapeno,
};

export const toppingOlives: Topping = {
  id: 11,
  name: 'Olives',
  price: 110,
  children: Olives,
};

const additionalToppings: Topping[] = [toppingChampignons, toppingBacon, toppingRedOnion, toppingSweetPepper];

export const PizzaSettings = (props: PizzaProps, statePrpps: modalProps) => {
  return (
    <div className="modal">
      <article className="modal-wrapper separated">
        <div className="left-side">
          <div className="state-icon">
            <p>NEW</p>
          </div>
          <img src={props.picture} alt="" className="pizza-img" />
        </div>
        <div className="right-side">
          <div className="title">
            <div className="content pizza-settings">
              <Top />
              <p>{props.name}</p>
            </div>
            <details className="button-info">
              <summary>
                <Info />
              </summary>
              <span>
                В конструкторе пиццы вы можете исключить ингридиенты, которые идут в базовой конфигурации и добавить за дополнительную плату топпинги
              </span>
            </details>
          </div>
          <div className="components-section in-base">
            {props.defaultToppings.map((item) => (
              <>
                <PizzaComponents key={`id-${item.id}`} children={item.children} name={item.name} />
                {/* <PizzaComponents key={`id-${item.id}`} name={item.name}> */}
                {/* {item.children} */}
                {/* <TomatoSauce /> */}
                {/* </PizzaComponents> */}
              </>
            ))}
          </div>
          <div className="base-section">
            <div className="dough-wrapper">
              <div className="switch-button pizza-dough">
                <label className="tab">
                  <input type="radio" />
                  <span className="name">Традиционное</span>
                </label>
                <label className="tab">
                  <input type="radio" />
                  <span className="name">Тонкое</span>
                </label>
              </div>
            </div>
            <div className="size-wrapper">
              <div className="switch-button pizza-size">
                <label className="tab">
                  <input type="radio" />
                  <span className="name">20 см</span>
                </label>
                <label className="tab">
                  <input type="radio" />
                  <span className="name">28 см</span>
                </label>
                <label className="tab">
                  <input type="radio" />
                  <span className="name">33 см</span>
                </label>
              </div>
            </div>
          </div>
          <div className="content pizza-settings in-additional">
            <p>Добавьте в пиццу</p>
          </div>
          <div className="components-section in-additional">
            {additionalToppings.map((item) => (
              <PizzaComponents key={`id-${item.id}`} children={item.children} name={item.name} price={item.price} />
            ))}
          </div>
          <div className="results-wrapper">
            <div className="result">
              <span className="price">Итого: {props.price} ₽</span>
              <span className="masse">{props.price} г</span>
            </div>
            <button className="finish">Добавить</button>
          </div>
        </div>
      </article>
    </div>
  );
};
