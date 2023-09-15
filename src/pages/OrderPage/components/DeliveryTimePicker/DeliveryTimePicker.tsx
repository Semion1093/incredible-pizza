import './DeliveryTimePicker.scss';
import { Control, Controller } from 'react-hook-form';
import { OrderFormData } from '../OrderDetails/OrderDetails';
import DatePicker from 'react-datepicker';
import React, { useState } from 'react';

export interface DeliveryTimePickerProps {
  control: Control<OrderFormData, any>;
}

export const DeliveryTimePicker = (props: DeliveryTimePickerProps) => {
  const [startDate, setStartDate] = useState<Date | null>();
  <Controller
    name={'time'}
    control={props.control}
    render={({ field: { onChange, value } }) => {
      return (
        <DatePicker
          placeholderText={'Время'}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="hh:mm"
        />
      );
    }}
  />;
};
