import './AccountPage.scss';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { Header } from '../../components/Header/Header';
import { NavigationLinks } from '../../components/NavigationLinks/NavigationLinks';
import React from 'react';

export const AccountPage = () => {
  return (
    <>
      <Header />
      <Delimiter />
      <NavigationLinks show={false} />
    </>
  );
};
