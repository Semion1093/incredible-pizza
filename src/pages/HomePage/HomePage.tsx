import './HomePage.scss';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { Description } from './components/Description/Description';
import { Filters } from './components/Filters/Filters';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { NavigationLinks } from '../../components/NavigationLinks/NavigationLinks';
import { SalesSection } from '../HomePage/components/SalesSection/SalesSection';
import { ProductSection } from './components/ProductSection/ProductSection';
import React from 'react';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Delimiter />
      <NavigationLinks show={false} />
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
      <Footer />
      <script src="./pages/HomePage/components/NavigationBar/assets/NavigationSwitch.js"></script>
    </>
  );
};
