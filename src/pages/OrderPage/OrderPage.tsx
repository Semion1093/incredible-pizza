import './OrderPage.scss';
import { NavigationLinks } from '../../components/NavigationLinks/NavigationLinks';
import { OrderDetails } from './components/OrderDetails/OrderDetails';
import { OrderItem } from '../../components/OrderItem/OrderItem';
import React from 'react';

export const OrderPage = () => {
  return (
    <>
      <NavigationLinks show={false} />
      <OrderItem />
      <OrderDetails />
    </>
  );
};
