import './OrderComment.scss';
import { Delimiter } from '../../../../components/Delimiter/Delimiter';
import { OrderFormData } from '../OrderDetails/OrderDetails';
import { UseFormRegister } from 'react-hook-form';
import React from 'react';

export interface OrderCommentProps {
  register: UseFormRegister<OrderFormData>;
}

export const OrderComment = (props: OrderCommentProps) => {
  return (
    <>
      <div className="additional-info">
        <h3>Комментарий</h3>
        <textarea placeholder="Есть уточнения?" {...props.register('comment')}></textarea>
      </div>
      <Delimiter />
    </>
  );
};
