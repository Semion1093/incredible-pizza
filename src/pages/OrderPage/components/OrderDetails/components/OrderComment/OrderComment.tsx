import './OrderComment.scss';
import { Delimiter } from '../../../../../../components/Delimiter/Delimiter';
import React from 'react';

export const OrderComment = () => {
  return (
    <>
      <div className="additional-info">
        <h2>Комментарий</h2>
        <textarea placeholder="Есть уточнения?"></textarea>
      </div>
      <Delimiter />
    </>
  );
};
