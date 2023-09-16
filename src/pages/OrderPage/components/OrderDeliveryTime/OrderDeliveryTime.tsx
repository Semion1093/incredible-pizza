import './OrderDeliveryTime.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, UseFormRegister } from 'react-hook-form';
import { Delimiter } from '../../../../components/Delimiter/Delimiter';
import { OrderFormData } from '../OrderDetails/OrderDetails';
import DatePicker, { registerLocale } from 'react-datepicker';
import React, { useState } from 'react';
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru);

export interface OrderDeliveryTimeProps {
  register: UseFormRegister<OrderFormData>;
  control: any;
}

export const OrderDeliveryTime = (props: OrderDeliveryTimeProps) => {
  const [selectedOption, setSelectedOption] = useState('sooner');

  const options = [
    { value: 'sooner', label: 'Как можно скорее' },
    { value: 'by-time', label: 'По времени' },
  ];

  return (
    <>
      <span className="question-delivery-time">Когда выполнить заказ?</span>
      <div className="delivery-time">
        <div className="radio-group">
          {options.map((option) => (
            <label className="radio-container" key={option.value}>
              <input
                {...props.register('deliveryRadio')}
                type="radio"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
              <span className="dot"></span>
              {option.label}
            </label>
          ))}
        </div>
        {selectedOption === 'by-time' && (
          <div className="date-time-pickers">
            <Controller
              control={props.control}
              name="date"
              render={({ field: { onChange, value } }) => (
                <DatePicker locale={ru} placeholderText="Дата" dateFormat="dd.MM.yyyy" onChange={onChange} selected={value} />
              )}
            />
            <Controller
              control={props.control}
              name="time"
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  locale={ru}
                  placeholderText="Время"
                  dateFormat="HH:mm"
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  onChange={onChange}
                  selected={value}
                />
              )}
            />
          </div>
        )}
      </div>
      <Delimiter />
    </>
  );
};
