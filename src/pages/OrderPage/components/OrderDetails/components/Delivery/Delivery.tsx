import './Delivery.scss';
import { DeliveryAddress } from './components/DeliveryAddress/DeliveryAddress';
import { DeliverySwitchSelector } from './components/DeliverySwitchSelector/DeliverySwitchSelector';
import { OrderDeliveryTime } from './components/OrderDeliveryTime/OrderDeliveryTime';
import { PickupAddress } from './components/PickupAddress/PickupAddress';
import React, { useState } from 'react';

export const Delivery = () => {
  const [deliveryTab, setDeliveryTab] = useState('delivery');
  return (
    <>
      <DeliverySwitchSelector clickHandler={setDeliveryTab} />
      <PickupAddress tab={deliveryTab} />
      <DeliveryAddress tab={deliveryTab} />
      <OrderDeliveryTime />
    </>
  );
};
