import './HomePage.scss';
import { Cart } from './components/Cart/Cart';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { NavigationLinks } from '../../components/NavigationLinks/NavigationLinks';
import { PizzaSettings } from './components/PizzaSettings/PizzaSettings';
import { ProductSection } from './components/ProductSection/ProductSection';
import { SalesSection } from '../HomePage/components/SalesSection/SalesSection';
import { SignIn } from './components/AuthModal/SignInSignUp/SignIn';
import { SignInOrSignUpModal } from './components/AuthModal/AuthModal';
import { SignUp } from './components/AuthModal/SignInSignUp/SignUp';
import React, { useState } from 'react';

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
      <PizzaSettings />
    </>
  );
};
