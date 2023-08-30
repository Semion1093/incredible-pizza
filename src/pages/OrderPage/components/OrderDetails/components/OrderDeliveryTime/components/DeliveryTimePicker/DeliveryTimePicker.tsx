import './DeliveryTimePicker.scss';
import DatePicker from 'react-datepicker';
import React, { useState } from 'react';

export const DeliveryTimePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>();
  return (
    <>
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
    </>
  );
};
