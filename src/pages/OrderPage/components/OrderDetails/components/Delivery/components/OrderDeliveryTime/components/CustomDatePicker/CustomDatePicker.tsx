import './CustomDatePicker.scss';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import React, { useState } from 'react';

export const CustomDatePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>();
  return <DatePicker placeholderText={'Дата'} selected={startDate} dateFormat="dd.MM.yyyy" onChange={(date) => date && setStartDate(date)} />;
};
