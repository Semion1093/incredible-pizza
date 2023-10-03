import './OrderPage.scss';
import { AdditionalOrderProductCarousel } from './components/AdditionalOrderItemCarousel/AdditionalOrderProductCarousel';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { OrderDetails } from './components/OrderDetails/OrderDetails';
import { OrderItems } from './components/OrderItems/OrderItems';
import React, { useEffect, useState } from 'react';

export const OrderPage = () => {
  return (
    <>
      <Delimiter />
      <OrderItems />
      <AdditionalOrderProductCarousel />
      <OrderDetails />
    </>
  );
};
