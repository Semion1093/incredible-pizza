import './OrderDetails.scss';
import * as yup from 'yup';
import { Contacts } from '../Contacts/Contacts';
import { Delivery } from '../Delivery/Delivery';
import { OrderComment } from '../OrderComment/OrderComment';
import { OrderResult } from '../OrderResult/OrderResult';
import { Payment } from '../Payment/Payment';
import { SubmitHandler, useForm } from 'react-hook-form';
import { orderSchema } from './OrderSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';

export type OrderFormData = yup.InferType<typeof orderSchema>;

export const OrderDetails = () => {
  const [formResult, setFormResult] = useState('');
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: yupResolver(orderSchema),
  });
  const onSubmit: SubmitHandler<OrderFormData> = (data) => {
    fetch('http://localhost:4001/api/v1/order/order/create', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => setFormResult(data));
  };
  return (
    <div className="order-details">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Contacts errors={errors} register={register} />
        <Delivery control={control} errors={errors} register={register} />
        <Payment errors={errors} register={register} />
        <OrderComment register={register} />
        <OrderResult />
      </form>
    </div>
  );
};
