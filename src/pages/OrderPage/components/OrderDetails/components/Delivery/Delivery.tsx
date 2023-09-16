import './Delivery.scss';
import { DeliveryAddress } from './components/DeliveryAddress/DeliveryAddress';
import { SwitchSelector, Options } from '../../../../../../components/SwitchSelector/SwitchSelector';
import { OrderDeliveryTime } from './components/OrderDeliveryTime/OrderDeliveryTime';
import { PickupAddress } from '../PickupAddress/PickupAddress';
import React from 'react';

const options: Options[] = [
  { value: 'delivery', label: 'Доставка' },
  { value: 'pickup', label: 'Самовывоз' },
];

export const Delivery = () => {
  return (
    <div className="delivery">
      <div className="delivery-header">
        <h3>Доставка</h3>
        <SwitchSelector {...options} />
      </div>
      <PickupAddress />
      <DeliveryAddress />
      <OrderDeliveryTime />
    </div>
  );
};
