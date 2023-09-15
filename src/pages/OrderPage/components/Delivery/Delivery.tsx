import './Delivery.scss';
import { DeliveryAddress } from '../DeliveryAddress/DeliveryAddress';
import { DeliverySwitchSelector } from '../DeliverySwitchSelector/DeliverySwitchSelector';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { OrderDeliveryTime } from '../OrderDeliveryTime/OrderDeliveryTime';
import { OrderFormData } from '../OrderDetails/OrderDetails';
import { PickupAddress } from '../PickupAddress/PickupAddress';
import React, { useState } from 'react';

export interface DeliveryProps {
  register: UseFormRegister<OrderFormData>;
  errors: FieldErrors;
  control: any;
}

export const Delivery = (props: DeliveryProps) => {
  const [deliveryTab, setDeliveryTab] = useState('delivery');
  return (
    <>
      <DeliverySwitchSelector clickHandler={setDeliveryTab} />
      <PickupAddress tab={deliveryTab} register={props.register} />
      <DeliveryAddress errors={props.errors} register={props.register} tab={deliveryTab} />
      <OrderDeliveryTime control={props.control} register={props.register} />
    </>
  );
};
