import './AccountPage.scss';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { NavigationLinks } from '../../components/NavigationLinks/NavigationLinks';
import React from 'react';

export const AccountPage = () => {
  return (
    <>
      <Header />
      <Delimiter />
      <NavigationLinks showSections={true} showMobileButtonBack={true} />
      <Footer />
    </>
  );
};
