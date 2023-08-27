import './HomePage.scss';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { Header } from '../../components/Header/Header';
import { NavigationLinks } from '../../components/NavigationLinks/NavigationLinks';
import { ProductSection } from '../../components/ProductSection/ProductSection';
import React from 'react';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Delimiter />
      <NavigationLinks show={false} />

      <ProductSection />
    </>
  );
};
