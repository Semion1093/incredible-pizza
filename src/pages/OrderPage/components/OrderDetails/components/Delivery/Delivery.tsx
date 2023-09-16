import './Delivery.scss';
import { DeliveryAddress } from './components/DeliveryAddress/DeliveryAddress';
import { DeliverySwitchSelector } from './components/DeliverySwitchSelector/DeliverySwitchSelector';
import { Options } from '../../../../../../components/OrderItem/SwitchSelector/SwitchSelector';
import { OrderDeliveryTime } from './components/OrderDeliveryTime/OrderDeliveryTime';
import { PickupAddress } from './components/PickupAddress/PickupAddress';
import React, { useState } from 'react';

const options: Options[] = [
  { value: 'delivery', label: 'Доставка' },
  { value: 'pickup', label: 'Самовывоз' },
];

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
