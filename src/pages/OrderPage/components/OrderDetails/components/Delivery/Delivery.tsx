import './Delivery.scss';
import { DeliveryAddress } from './components/DeliveryAddress/DeliveryAddress';
import { SwitchSelector, Options } from '../../../../../../components/OrderItem/SwitchSelector/SwitchSelector';
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
    <div className="delivery">
      <div className="delivery-header">
        <h3>Доставка</h3>
        <SwitchSelector {...options} />
      </div>
      <PickupAddress tab={deliveryTab} />
      <DeliveryAddress tab={deliveryTab} />
      <OrderDeliveryTime />
    </>
  );
};
