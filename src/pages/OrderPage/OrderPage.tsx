import './OrderPage.scss';
import { AdditionalOrderItem } from './components/AdditionalOrderItem/AdditionalOrderItem';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { MobileMenu } from '../../components/NavigationLinks/components/MobileMenu/MobileMenu';
import { OrderDetails } from './components/OrderDetails/OrderDetails';
import { OrderItems } from './components/OrderItems/OrderItems';
import React from 'react';

export const OrderPage = () => {
  return (
    <>
      <Delimiter />
      <MobileMenu />
      <OrderItems />
      <OrderDetails />
    </>
  );
};
