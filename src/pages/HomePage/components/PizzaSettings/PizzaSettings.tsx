/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './PizzaSettings.scss';
import { CustomPizza, closePizzaSettings, pizzaCustomSettings, pizzaSettingsModalInfo } from './pizzaSettingsSlice';
import { ReactComponent as Info } from './assets/Info.svg';
import { Options, SwitchSelector } from '../../../../components/SwitchSelector/SwitchSelector';
import { PizzaComponents, ToppingProps } from './PizzaComponents/PizzaComponents';
import { ReactComponent as Top } from './assets/Top.svg';
import { Topping } from './ToppingIcon';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { ProductInCart, addToCart } from '../Cart/cartSlice';

export interface modalProps {
  state: boolean;
}

export const toppingMozzarella: ToppingProps = {
  id: 1,
  name: 'Моцарелла',
  price: 11,
};

export const toppingCucumber: ToppingProps = {
  id: 2,
  name: 'Огурцы маринованные',
  price: 22,
};

export const toppingPepperoni: ToppingProps = {
  id: 3,
  name: 'Пепперони',
  price: 33,
};

export const toppingChampignons: ToppingProps = {
  id: 5,
  name: 'Шампиньоны',
  price: 55,
};

export const toppingRedOnion: ToppingProps = {
  id: 6,
  name: 'Красный лук',
  price: 66,
};

export const toppingSweetPepper: ToppingProps = {
  id: 7,
  name: 'Сладкий перец',
  price: 77,
};

export const toppingBacon: ToppingProps = {
  id: 8,
  name: 'Бекон',
  price: 88,
};

const toppingCheddar: ToppingProps = {
  id: 9,
  name: 'Чеддер',
  price: 99,
};

const toppingTomatoSauce: ToppingProps = {
  id: 4,
  name: 'Томатный соус',
  price: 44,
};

const toppingJalapeno: ToppingProps = {
  id: 10,
  name: 'Халапеньо',
  price: 100,
};

const toppingOlives: ToppingProps = {
  id: 11,
  name: 'Оливки',
  price: 110,
};

const additionalToppings: ToppingProps[] = [toppingRedOnion, toppingCheddar, toppingJalapeno, toppingOlives];

const dough: Options[] = [
  { value: 'traditional', label: 'Традиционное', rate: 1 },
  { value: 'thin', label: 'Тонкое', rate: 1 },
];

const size: Options[] = [
  { value: '22', label: '22 см', rate: 1 },
  { value: '28', label: '28 см', rate: 1.6 },
  { value: '34', label: '34 см', rate: 2.1 },
];

export const PizzaSettings = () => {
  const pizzaSettings = useSelector(pizzaCustomSettings);
  const dispatch = useDispatch();

  return (
    <>
      {pizzaSettings.isActive && pizzaSettings.customPizza && (
        <div className="modal" onClick={() => dispatch(closePizzaSettings())}>
          <article className="modal-wrapper separated" onClick={(e) => e.stopPropagation()}>
            <div className="left-side">
              <div className="state-icon">
                <p>{pizzaSettings.customPizza.labelText}</p>
              </div>
              <img src={pizzaSettings.customPizza.img} alt="" className="pizza-img" />
            </div>
            <div className="right-side">
              <div className="title">
                <div className="content pizza-settings">
                  <Top />
                  <p>{pizzaSettings.customPizza.title}</p>
                </div>
                <details className="button-info">
                  <summary>
                    <Info />
                  </summary>
                  <span>Вы можете выбрать любимые ингридиенты и добавить их за дополнительную плату</span>
                </details>
              </div>
              <div className="content pizza-settings in-additional">
                <p>{pizzaSettings.customPizza.description}</p>
              </div>
              <div className="base-section">
                <p>Выберите тесто:</p>
                <div className="dough-wrapper">
                  <SwitchSelector {...dough} />
                </div>
                <p>Выберите размер:</p>
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
                    <PizzaComponents key={`id-${item.id}`} name={item.name} price={item.price} />
                  </>
                ))}
              </div>
              <div className="results-wrapper">
                <div className="result">
                  <span className="price">
                    Итого:{' '}
                    {pizzaSettings.customPizza.size
                      ? pizzaSettings.customPizza.price * pizzaSettings.customPizza.size.rate
                      : pizzaSettings.customPizza.price}{' '}
                    ₽
                  </span>
                  <span className="masse">720 г</span>
                </div>
                <button className="finish" onClick={() => dispatch(addToCart(pizzaSettings.customPizza as ProductInCart))}>
                  Добавить
                </button>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
};
