/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './PizzaSettings.scss';
import { ReactComponent as Info } from './assets/Info.svg';
import { Options, SwitchSelector } from '../../../../components/SwitchSelector/SwitchSelector';
import { PizzaComponents, ToppingProps } from './PizzaComponents/PizzaComponents';
import { ReactComponent as Top } from './assets/Top.svg';
import { Topping } from './ToppingIcon';
import React, { useState } from 'react';
export interface PizzaProps {
  id?: number;
  name?: string;
  price?: number;
  picture?: string;
  defaultToppings: ToppingProps[];
}
export interface modalProps {
  state: boolean;
}

export const toppingMozzarella: ToppingProps = {
  id: 1,
  name: 'Моцарелла',
  price: 11,
  iconType: Topping.Mozzarella,
};

export const toppingCucumber: ToppingProps = {
  id: 2,
  name: 'Огурцы маринованные',
  price: 22,
  iconType: Topping.Cucumber,
};

export const toppingPepperoni: ToppingProps = {
  id: 3,
  name: 'Пепперони',
  price: 33,
  iconType: Topping.Pepperoni,
};

export const toppingChampignons: ToppingProps = {
  id: 5,
  name: 'Шампиньоны',
  price: 55,
  iconType: Topping.Champignons,
};

export const toppingRedOnion: ToppingProps = {
  id: 6,
  name: 'Красный лук',
  price: 66,
  iconType: Topping.RedOnion,
};

export const toppingSweetPepper: ToppingProps = {
  id: 7,
  name: 'Сладкий перец',
  price: 77,
  iconType: Topping.SweetPepper,
};

export const toppingBacon: ToppingProps = {
  id: 8,
  name: 'Бекон',
  price: 88,
  iconType: Topping.Bacon,
};

const toppingCheddar: ToppingProps = {
  id: 9,
  name: 'Чеддер',
  price: 99,
  iconType: Topping.Cheddar,
};

const toppingTomatoSauce: ToppingProps = {
  id: 4,
  name: 'Томатный соус',
  price: 44,

  iconType: Topping.TomatoSauce,
};

const toppingJalapeno: ToppingProps = {
  id: 10,
  name: 'Халапеньо',
  price: 100,
  iconType: Topping.Jalapeno,
};

const toppingOlives: ToppingProps = {
  id: 11,
  name: 'Оливки',
  price: 110,
  iconType: Topping.Olives,
};

const additionalToppings: ToppingProps[] = [toppingTomatoSauce, toppingCheddar, toppingJalapeno, toppingOlives];

const dough: Options[] = [
  { value: 'traditional', label: 'Традиционное' },
  { value: 'thin', label: 'Тонкое' },
];

const size: Options[] = [
  { value: '20', label: '20 см' },
  { value: '28', label: '28 см' },
  { value: '33', label: '33 см' },
];

export const PizzaSettings = (props: PizzaProps) => {
  const [isActive, setIsActive] = useState<boolean>(true);
  return (
    <>
      {isActive && (
        <div className="modal" onClick={() => setIsActive(false)}>
          <article className="modal-wrapper separated" onClick={(e) => e.stopPropagation()}>
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
                    В конструкторе пиццы вы можете исключить ингридиенты, которые идут в базовой конфигурации и добавить за дополнительную плату
                    топпинги
                  </span>
                </details>
              </div>
              <div className="components-section in-base">
                {props.defaultToppings.map((item) => (
                  <>
                    <PizzaComponents key={`id-${item.id}`} name={item.name} iconType={item.iconType} />
                  </>
                ))}
              </div>
              <div className="base-section">
                <div className="dough-wrapper">
                  <SwitchSelector {...dough} />
                </div>
                <div className="size-wrapper">
                  <SwitchSelector {...size} />
                </div>
              </div>
              <div className="content pizza-settings in-additional">
                <p>Добавьте в пиццу</p>
              </div>
              <div className="components-section in-additional">
                {additionalToppings.map((item) => (
                  <>
                    <PizzaComponents key={`id-${item.id}`} name={item.name} price={item.price} iconType={item.iconType} />
                  </>
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
      )}
    </>
  );
};
