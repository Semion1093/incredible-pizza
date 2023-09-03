import './OrderPage.scss';
import { AdditionalOrderItem } from './components/AdditionalOrderItemCarousel/components/AdditionalOrderItem/AdditionalOrderItem';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { MobileMenu } from '../../components/NavigationLinks/components/MobileMenu/MobileMenu';
import { NavigationLinks } from '../../components/NavigationLinks/NavigationLinks';
import { OrderDetails } from './components/OrderDetails/OrderDetails';
import { OrderItem } from '../../components/OrderItem/OrderItem';
import React from 'react';

export const OrderPage = () => {
  return (
    <>
      <Header />
      <Delimiter />
      <NavigationLinks showSections={true} showMobileButtonBack={true} />
      <MobileMenu />
      <OrderItem />
      <OrderDetails />
      <Footer />
    </>
  );
};
