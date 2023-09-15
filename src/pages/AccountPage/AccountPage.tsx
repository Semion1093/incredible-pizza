import './AccountPage.scss';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { NavigationLinks } from '../../components/NavigationLinks/NavigationLinks';
import { SignIn } from '../../components/SignIn/SignIn';
import React from 'react';

export const AccountPage = () => {
  return (
    <>
      <Header />
      <Delimiter />
      <NavigationLinks show={false} />
      <Footer />
      <SignIn />
    </>
  );
};
