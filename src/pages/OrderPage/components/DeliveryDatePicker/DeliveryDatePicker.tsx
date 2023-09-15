import './DeliveryDatePicker.scss';
import 'react-datepicker/dist/react-datepicker.css';
import {  Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import React, { useState } from 'react';

export interface DeliveryDatePickerProps {
  control: any;
}

export const DeliveryDatePicker = (props: DeliveryDatePickerProps) => {
  const [startDate, setStartDate] = useState<Date | null>();
  <Controller
    name="date-picker"
    control={props.control}
    render={({ field: { onChange, value } }) => {
      return <DatePicker placeholderText={'Дата'} selected={startDate} dateFormat="dd.MM.yyyy" onChange={(date) => setStartDate(date)} />;
    }}
  />;
};
