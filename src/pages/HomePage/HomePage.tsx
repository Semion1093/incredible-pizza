import './HomePage.scss';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { Description } from './components/Description/Description';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { NavigationLinks } from '../../components/NavigationLinks/NavigationLinks';
import { SalesSection } from '../HomePage/components/SalesSection/SalesSection';
import {
  PizzaProps,
  PizzaSettings,
  toppingBacon,
  toppingChampignons,
  toppingCucumber,
  toppingMozzarella,
  toppingPepperoni,
  toppingRedOnion,
  toppingSweetPepper,
} from './components/PizzaSettings/PizzaSettings';
import { ProductSection } from './components/ProductSection/ProductSection';
import PictureEasyPeasychicken from './components/PizzaSettings/assets/EasyPeasychicken.png';
import PictureSweetChiliChicken from './components/PizzaSettings/assets/SweetChiliChicken.png';
import React from 'react';

const SweetChiliChicken: PizzaProps = {
  id: 1,
  name: 'SweetChiliChicken',
  price: 400,
  picture: PictureSweetChiliChicken,
  defaultToppings: [toppingMozzarella, toppingPepperoni, toppingChampignons, toppingRedOnion],
};

const EasyPeasychicken: PizzaProps = {
  id: 2,
  name: 'EasyPeasychicken',
  price: 500,
  picture: PictureEasyPeasychicken,
  defaultToppings: [toppingBacon, toppingCucumber, toppingPepperoni, toppingSweetPepper],
};

export const HomePage = () => {
  return (
    <>
      <Delimiter />
      <NavigationLinks showSections={true} showMobileButtonBack={false} />
      <NavigationBar />
      <SalesSection />
      <ProductSection nameId="pizza" name="Пицца" />
      <ProductSection nameId="sushi" name="Суши" />
      <ProductSection nameId="combo" name="Комбо" />
      <ProductSection nameId="snack" name="Закуски" />
      <ProductSection nameId="drink" name="Напитки" />
      <ProductSection nameId="dessert" name="Десерты" />
      <ProductSection nameId="sauce" name="Соусы" />
      <Description />
      <PizzaSettings {...EasyPeasychicken} />
      <script src="./pages/HomePage/components/NavigationBar/assets/NavigationSwitch.js"></script>
    </>
  );
};
