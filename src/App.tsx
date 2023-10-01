import './App.scss';
import { AccountPage } from './pages/AccountPage/AccountPage';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { OrderPage } from './pages/OrderPage/OrderPage';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/account" element={<AccountPage />}></Route>
        <Route path="/order" element={<OrderPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
};
