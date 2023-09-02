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
        <h3>Доставка</h3>
        <DeliverySwitchSelector />
      </div>
      <PickupAddress />
      <DeliveryAddress />
      <OrderDeliveryTime />
    </div>
  );
};
