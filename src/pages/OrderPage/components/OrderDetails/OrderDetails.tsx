import './OrderDetails.scss';
import { Contacts } from './components/Contacts/Contacts';
import { Delivery } from './components/Delivery/Delivery';
import { OrderComment } from './components/OrderComment/OrderComment';
import { OrderResult } from './components/OrderResult/OrderResult';
import { Payment } from './components/Payment/Payment';
import React from 'react';

export const OrderDetails = () => (
  <div className="order-details">
    <Contacts />
    <Delivery />
    <Payment />
    <OrderComment />
    <OrderResult />
  </div>
);
