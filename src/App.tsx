import './App.scss';
import { AccountPage } from './pages/AccountPage/AccountPage';
import { HomePage } from './pages/HomePage/HomePage';
import { OrderPage } from './pages/OrderPage/OrderPage';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/account" element={<AccountPage />}></Route>
      <Route path="/order" element={<OrderPage />}></Route>
    </Routes>
  );
};
