import './OrderDetails.scss';
import { Delimiter } from '../../../../components/Delimiter/Delimiter';
import { InputTextForm } from '../../../../components/InputTextForm/InputTextForm';
import { RadioButton } from '../../../../components/RadioButton/RadioButton';
import React from 'react';

export const OrderDetails = () => {
  return (
    <div className="order-details">
      <div id="contacts">
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
      <div id="delivery">
        <div className="delivery-header">
          <h2>Доставка</h2>
          <button className="delivery-toggle"></button>
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
          <div className="radio-group">
            <RadioButton text={'Как можно скорее'} value={'1'} name={'delivery-time'} />
            <RadioButton text={'По времени'} value={'2'} name={'delivery-time'} />
          </div>
        </div>
      </div>
      <Delimiter />
      <div id="payment">
        <h2>Оплата</h2>
        <div className="radio-group">
          <RadioButton text={'Наличными'} value={'1'} name={'payment-type'} />
          <RadioButton text={'Картой'} value={'2'} name={'payment-type'} />
          <RadioButton text={'Apple Pay'} value={'3'} name={'payment-type'} />
        </div>
        <Delimiter />
        <h2>Сдача</h2>
        <div className="radio-group">
          <RadioButton text={'Без сдачи'} value={'1'} name={'change'} />
          <RadioButton text={'Сдача с'} value={'2'} name={'change'} />
          <InputTextForm placeholder={'0                         ₽'} />
        </div>
      </div>
      <Delimiter />
      <div id="additional-info">
        <h2>Комментарий</h2>
        <InputTextForm placeholder={'Есть уточнения?'} />
      </div>
      <div id="order-result">
        <span>Итого:</span>
        <button>Оформить заказ</button>
      </div>
    </div>
  );
};
