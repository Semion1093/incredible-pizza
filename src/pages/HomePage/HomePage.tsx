import './HomePage.scss';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { Description } from './components/Description/Description';
import { Header } from '../../components/Header/Header';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { NavigationLinks } from '../../components/NavigationLinks/NavigationLinks';
import { ProductSection } from './components/ProductSection/ProductSection';
import React from 'react';

export const HomePage = () => {
  return (
    <>
      <Delimiter />
      <NavigationLinks showSections={true} showMobileButtonBack={false} />
      <NavigationBar />
      <ProductSection nameId="pizza" name="Пицца" />
      <ProductSection nameId="sushi" name="Суши" />
      <ProductSection nameId="combo" name="Комбо" />
      <ProductSection nameId="snack" name="Закуски" />
      <ProductSection nameId="drink" name="Напитки" />
      <ProductSection nameId="dessert" name="Десерты" />
      <ProductSection nameId="sauce" name="Соусы" />
      <Description />
      <script src="./pages/HomePage/components/NavigationBar/assets/NavigationSwitch.js"></script>
    </>
  );
};
