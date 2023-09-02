import './Delivery.scss';
import { DeliveryAddress } from './components/DeliveryAddress/DeliveryAddress';
import { DeliverySwitchSelector } from './components/DeliverySwitchSelector/DeliverySwitchSelector';
import { OrderDeliveryTime } from './components/OrderDeliveryTime/OrderDeliveryTime';
import { PickupAddress } from '../PickupAddress/PickupAddress';
import React from 'react';

export const Delivery = () => {
  return (
    <div className="delivery">
      <div className="delivery-header">
        <h2>Доставка</h2>
        <DeliverySwitchSelector />
      </div>
      <PickupAddress />
      <DeliveryAddress />
      <OrderDeliveryTime />
    </div>
  );
};
