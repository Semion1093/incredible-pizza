import './OrderDetails.scss';
import { Change } from './components/Change/Change';
import { Delimiter } from '../../../../components/Delimiter/Delimiter';
import { DeliverySwitchSelector } from './components/DeliverySwitchSelector/DeliverySwitchSelector';
import { InputTextForm } from '../../../../components/InputTextForm/InputTextForm';
import { OrderDeliveryTime } from './components/OrderDeliveryTime/OrderDeliveryTime';
import { OrderPaymentType } from './components/OrderPaymentType/OrderPaymentType';
import React from 'react';

export const OrderDetails = () => (
  <div className="order-details">
    <div className="contacts">
      <h2>О Вас</h2>
      <div className="order-grid contacts">
        <div className="grid-item">
          <span>Имя*</span>
        </div>
        <div className="grid-item">
          <span>Номер телефона*</span>
        </div>
        <div className="grid-item">
          <span>Почта</span>
        </div>
        <div className="grid-item">
          <InputTextForm placeholder={'Алексей'} />
        </div>
        <div className="grid-item">
          <InputTextForm placeholder={'+7'} />
        </div>
        <div className="grid-item">
          <InputTextForm placeholder={'mail@gmail.com'} />
        </div>
      </div>
    </div>
    <Delimiter />
    <div className="delivery">
      <div className="delivery-header">
        <h2>Доставка</h2>
        <DeliverySwitchSelector />
      </div>
      <div className="order-grid delivery">
        <div className="street-grid-item">
          <span>Улица*</span>
        </div>
        <div className="street-grid-item">
          <InputTextForm placeholder={'Пушкина'} />
        </div>
        <div className="grid-item">
          <span>Дом</span>
        </div>
        <div className="grid-item">
          <span>Подъезд</span>
        </div>
        <div className="grid-item">
          <span>Этаж</span>
        </div>
        <div className="grid-item">
          <span>Квартира</span>
        </div>
        <div className="grid-item">
          <span>Домофон</span>
        </div>
        <div className="grid-item">
          <InputTextForm placeholder={'1а'} />
        </div>
        <div className="grid-item">
          <InputTextForm placeholder={'1'} />
        </div>
        <div className="grid-item">
          <InputTextForm placeholder={'2'} />
        </div>
        <div className="grid-item">
          <InputTextForm placeholder={'3'} />
        </div>
        <div className="grid-item">
          <InputTextForm placeholder={'0000'} />
        </div>
      </div>
      <div className="delivery-time">
        <span>Когда выполнить заказ?</span>
        <OrderDeliveryTime />
      </div>
    </div>
    <Delimiter />
    <div className="payment">
      <h2>Оплата</h2>
      <OrderPaymentType />
      <Delimiter />
      <h2>Сдача</h2>
      <Change />
    </div>
    <Delimiter />
    <div className="additional-info">
      <h2>Комментарий</h2>
      <textarea placeholder="Есть уточнения?"></textarea>
    </div>
    <div className="order-result">
      <span>Итого:</span>
      <button>Оформить заказ</button>
    </div>
  </div>
);
