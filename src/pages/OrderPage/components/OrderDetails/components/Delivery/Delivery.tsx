import './Delivery.scss';
import { DeliveryAddress } from './components/DeliveryAddress/DeliveryAddress';
import { OrderDeliveryTime } from './components/OrderDeliveryTime/OrderDeliveryTime';
import { PickupAddress } from './components/PickupAddress/PickupAddress';
import { SwitchSelector } from '../../../../../../components/SwitchSelector/SwitchSelector';
import React, { useState } from 'react';

export const Delivery = () => {
  const [deliveryTab, setDeliveryTab] = useState('leftOption');
  return (
    <>
      <div className="delivery">
        <h3>Доставка</h3>
        <SwitchSelector clickHandler={setDeliveryTab} leftOptionText="Доставка" rightOptionText="Самовывоз" />
      </div>
      <PickupAddress tab={deliveryTab} />
      <DeliveryAddress tab={deliveryTab} />
      <OrderDeliveryTime />
    </>
  );
};
