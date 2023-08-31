import './HomePage.scss';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { Header } from '../../components/Header/Header';
import { NavigationLinks } from '../../components/NavigationLinks/NavigationLinks';
import {
  PizzaProps,
  PizzaSettings,
  toppingBacon,
  toppingChampignons,
  toppingCucumber,
  toppingMozzarella,
  toppingPepperoni,
  toppingTomatoSauce,
} from './components/PizzaSettings/PizzaSettings';
import PictureEasyPeasychicken from './components/PizzaSettings/assets/EasyPeasychicken.png';
import PictureSweetChiliChicken from './components/PizzaSettings/assets/SweetChiliChicken.png';
import React from 'react';

const SweetChiliChicken: PizzaProps = {
  id: 1,
  name: 'SweetChiliChicken',
  price: 400,
  picture: PictureSweetChiliChicken,
  defaultToppings: [toppingMozzarella, toppingCucumber, toppingPepperoni, toppingTomatoSauce],
};

const EasyPeasychicken: PizzaProps = {
  id: 2,
  name: 'EasyPeasychicken',
  price: 500,
  picture: PictureEasyPeasychicken,
  defaultToppings: [toppingBacon, toppingCucumber, toppingChampignons, toppingTomatoSauce],
};

export const HomePage = () => {
  return (
    <>
      <Header />
      <Delimiter />
      <NavigationLinks show={false} />
      <PizzaSettings {...EasyPeasychicken} />
    </>
  );
};
