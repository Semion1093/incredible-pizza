import './OrderPage.scss';
import { AdditionalOrderItem } from './components/AdditionalOrderItem/AdditionalOrderItem';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { MobileMenu } from '../../components/NavigationLinks/components/MobileMenu/MobileMenu';
import { OrderDetails } from './components/OrderDetails/OrderDetails';
import { OrderItem } from './components/OrderItem/OrderItem';
import { Order, SuccessfullOrder } from './components/SuccessfullOrder/SuccessfullOrder';
import React from 'react';

const NewOrder: Order = {
  id: 123321,
  state: 'is being prepared',
  paymentIsPassed: true,
};

export const OrderPage = () => {
  return (
    <>
      <Delimiter />
      <MobileMenu />
      <OrderItem />
      <OrderDetails />
      {/* <SuccessfullOrder {...NewOrder} /> */}
    </>
  );
};
