import './HomePage.scss';
import { Cart } from './components/Cart/Cart';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { Description } from './components/Description/Description';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { NavigationLinks } from '../../components/NavigationLinks/NavigationLinks';
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
import { SalesSection } from '../HomePage/components/SalesSection/SalesSection';
import PictureEasyPeasyChicken from './components/PizzaSettings/assets/EasyPeasyChicken.png';
import PictureSweetChiliChicken from './components/PizzaSettings/assets/SweetChiliChicken.png';
import React, { useState } from 'react';

const SweetChiliChicken: PizzaProps = {
  id: 1,
  name: 'SweetChiliChicken',
  price: 400,
  picture: PictureSweetChiliChicken,
  defaultToppings: [toppingMozzarella, toppingPepperoni, toppingChampignons, toppingRedOnion],
};

const EasyPeasyChicken: PizzaProps = {
  id: 2,
  name: 'EasyPeasychicken',
  price: 500,
  picture: PictureEasyPeasyChicken,
  defaultToppings: [toppingBacon, toppingCucumber, toppingPepperoni, toppingSweetPepper],
};

export const HomePage = () => {
  const [isCartActive, setIsCartActive] = useState<boolean>(false);
  return (
    <>
      <Delimiter />
      <NavigationLinks showMobileButtonBack={false} setIsActive={setIsCartActive} />
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
      <Cart isCartActive={isCartActive} setIsActive={setIsCartActive} />
      <PizzaSettings {...EasyPeasyChicken} />
      <script src="./pages/HomePage/components/NavigationBar/assets/NavigationSwitch.js"></script>
    </>
  );
};
