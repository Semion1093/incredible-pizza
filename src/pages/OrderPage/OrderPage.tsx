import './OrderPage.scss';
import { AdditionalOrderProductCarousel } from './components/AdditionalOrderItemCarousel/AdditionalOrderProductCarousel';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { OrderDetails } from './components/OrderDetails/OrderDetails';
import { OrderItems } from './components/OrderItems/OrderItems';
import { Product } from '../../models/Product';
import React, { useEffect, useState } from 'react';

export const OrderPage = () => {
  const [snacks, setSnacks] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:4001/api/v1/product/list/snack')
      .then((response) => response.json())
      .then((result) => setSnacks(result.data));
  }, []);
  return (
    <>
      <Delimiter />
      <OrderItems />
      <AdditionalOrderProductCarousel products={snacks} header={'Добавить к заказу?'} swiperButtonName="snack" />
      <OrderDetails />
    </>
  );
};
