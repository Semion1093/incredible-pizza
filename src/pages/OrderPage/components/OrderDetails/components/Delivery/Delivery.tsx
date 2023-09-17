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
      <div className="delivery">
        <h3>Доставка</h3>
        <DeliverySwitchSelector clickHandler={setDeliveryTab} />
      </div>
      <PickupAddress tab={deliveryTab} />
      <DeliveryAddress tab={deliveryTab} />
      <OrderDeliveryTime />
    </>
  );
};
