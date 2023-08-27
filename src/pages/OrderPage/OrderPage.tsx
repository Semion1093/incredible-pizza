import './OrderPage.scss';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { Header } from '../../components/Header/Header';
import { NavigationLinks } from '../../components/NavigationLinks/NavigationLinks';
import { OrderDetails } from './components/OrderDetails/OrderDetails';
import React from 'react';

export const OrderPage = () => {
  return (
    <>
      <Header />
      <Delimiter />
      <NavigationLinks show={false} />
      <OrderDetails />
    </>
  );
};
