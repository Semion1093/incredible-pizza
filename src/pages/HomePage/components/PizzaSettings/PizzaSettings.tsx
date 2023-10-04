/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './PizzaSettings.scss';
import { ReactComponent as Info } from './assets/Info.svg';
import { Options, SwitchSelector } from '../../../../components/SwitchSelector/SwitchSelector';
import { PizzaComponents, ToppingProps } from './PizzaComponents/PizzaComponents';
import { ReactComponent as Top } from './assets/Top.svg';
import { Topping } from './ToppingIcon';
import { CustomPizza, closePizzaSettings, pizzaCustomSettings, pizzaSettingsModalInfo } from './pizzaSettingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';

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

const additionalToppings: ToppingProps[] = [toppingTomatoSauce, toppingCheddar, toppingJalapeno, toppingOlives];

const dough: Options[] = [
  { value: 'traditional', label: 'Традиционное', rate: 1.05 },
  { value: 'thin', label: 'Тонкое', rate: 1 },
];

const size: Options[] = [
  { value: '22', label: '22 см', rate: 1 },
  { value: '28', label: '28 см', rate: 1.6 },
  { value: '34', label: '34 см', rate: 2.1 },
];

export const PizzaSettings = () => {
  const customPizza = useSelector(pizzaCustomSettings);
  const dispatch = useDispatch();
  const pizzaSettingsModalActive = useSelector(pizzaSettingsModalInfo);

  return (
    <>
      {pizzaSettingsModalActive && (
        <div className="modal" onClick={() => dispatch(closePizzaSettings())}>
          <article className="modal-wrapper separated" onClick={(e) => e.stopPropagation()}>
            <div className="left-side">
              <div className="state-icon">
                <p>NEW</p>
              </div>
              <img src={customPizza.img} alt="" className="pizza-img" />
            </div>
            <div className="right-side">
              <div className="title">
                <div className="content pizza-settings">
                  <Top />
                  <p>{customPizza.title}</p>
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
                {additionalToppings.map((item) => (
                  <>
                    <PizzaComponents key={`id-${item.id}`} name={item.name} price={item.price} />
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
                    <PizzaComponents key={`id-${item.id}`} name={item.name} price={item.price} />
                  </>
                ))}
              </div>
              <div className="results-wrapper">
                <div className="result">
                  <span className="price">Итого: {customPizza.price * customPizza.size[0].rate} ₽</span>
                  <span className="masse">720 г</span>
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
