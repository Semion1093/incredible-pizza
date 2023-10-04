import { ReactComponent as Bacon } from './PizzaComponents/assets/Bacon.svg';
import { ReactComponent as Champignons } from './PizzaComponents/assets/Champignons.svg';
import { ReactComponent as Cheddar } from './PizzaComponents/assets/Cheddar.svg';
import { ReactComponent as Cucumber } from './PizzaComponents/assets/Cucumber.svg';
import { ReactComponent as Jalapeno } from './PizzaComponents/assets/Jalapeno.svg';
import { ReactComponent as Mozzarella } from './PizzaComponents/assets/Mozzarella.svg';
import { ReactComponent as Olives } from './PizzaComponents/assets/Olives.svg';
import { ReactComponent as Pepperoni } from './PizzaComponents/assets/Pepperoni.svg';
import { ReactComponent as RedOnion } from './PizzaComponents/assets/RedOnion.svg';
import { ReactComponent as SweetPepper } from './PizzaComponents/assets/SweetPepper.svg';
import { ReactComponent as TomatoSauce } from './PizzaComponents/assets/TomatoSauce.svg';
import React from 'react';

export enum Topping {
  Mozzarella = 'Моцарелла',
  Cucumber = 'Огурцы маринованные',
  Pepperoni = 'Пепперони',
  TomatoSauce = 'Томатный соус',
  Champignons = 'Шампиньоны',
  RedOnion = 'Красный лук',
  Bacon = 'Бекон',
  SweetPepper = 'Сладкий перец',
  Cheddar = 'Чеддер',
  Jalapeno = 'Халапеньо',
  Olives = 'Оливки',
}

interface ToppingIconProps {
  icon: Topping;
}

export const ToppingIcon = (props: ToppingIconProps) => (
  <>
    {props.icon === Topping.Mozzarella && <Mozzarella />}
    {props.icon === Topping.Cucumber && <Cucumber />}
    {props.icon === Topping.Pepperoni && <Pepperoni />}
    {props.icon === Topping.TomatoSauce && <TomatoSauce />}
    {props.icon === Topping.Champignons && <Champignons />}
    {props.icon === Topping.RedOnion && <RedOnion />}
    {props.icon === Topping.Bacon && <Bacon />}
    {props.icon === Topping.SweetPepper && <SweetPepper />}
    {props.icon === Topping.Cheddar && <Cheddar />}
    {props.icon === Topping.Jalapeno && <Jalapeno />}
    {props.icon === Topping.Olives && <Olives />}
  </>
);
