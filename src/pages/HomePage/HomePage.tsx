import './HomePage.scss';
import { Cart } from './components/Cart/Cart';
import { Delimiter } from '../../components/Delimiter/Delimiter';
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
import { SignIn } from './components/AuthModal/SignInSignUp/SignIn';
import { SignInOrSignUpModal } from './components/AuthModal/AuthModal';
import { SignUp } from './components/AuthModal/SignInSignUp/SignUp';
import PictureEasyPeasyChicken from './components/PizzaSettings/assets/EasyPeasyChicken.png';
import React, { useState } from 'react';

const EasyPeasyChicken: PizzaProps = {
  id: 2,
  name: 'EasyPeasyChicken',
  price: 500,
  picture: PictureEasyPeasyChicken,
  defaultToppings: [toppingBacon, toppingCucumber, toppingPepperoni, toppingSweetPepper],
};
export const HomePage = () => {
  const [isCartActive, setIsCartActive] = useState<boolean>(false);
  return (
    <>
      <SignUp />
      <SignIn />
      <SignInOrSignUpModal />
      <Delimiter />
      <NavigationLinks setIsActive={setIsCartActive} />
      <NavigationBar />
      <SalesSection />
      <ProductSection type="pizza" typeName="Пицца" />
      <ProductSection type="sushi" typeName="Суши" />
      <ProductSection type="combo" typeName="Комбо" />
      <ProductSection type="snack" typeName="Закуски" />
      <ProductSection type="drink" typeName="Напитки" />
      <ProductSection type="dessert" typeName="Десерты" />
      <ProductSection type="sauce" typeName="Соусы" />
      <Cart isCartActive={isCartActive} setIsActive={setIsCartActive} />
      {/* <PizzaSettings {...EasyPeasyChicken} /> */}
    </>
  );
};
