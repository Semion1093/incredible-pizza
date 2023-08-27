import './HomePage.scss';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { Description } from './components/Description';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { NavigationLinks } from '../../components/NavigationLinks/NavigationLinks';
import React from 'react';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Delimiter />
      <NavigationLinks show={false} />
      <Description />
      <Footer />
    </>
  );
};
