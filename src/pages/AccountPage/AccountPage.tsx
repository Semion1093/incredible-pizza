import './AccountPage.scss';
import { AccountOrder, Order } from './components/AccountOrder/AccountOrder';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { NavigationLinks } from '../../components/NavigationLinks/NavigationLinks';
import { useEffect, useState } from 'react';
import SwitchSelector from './assets/Табы.png';

// const orders: Order[] = [
//   {
//     number: 130312,
//     date: '22.06.21',
//     price: 1197,
//     status: 0,
//     eta: undefined,
//     paid: 'Картой',
//     address: 'ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#',
//   },
//   {
//     number: 130313,
//     date: '22.06.21',
//     price: 399,
//     status: 1,
//     eta: '15:13',
//     paid: 'Наличкой',
//     address: 'ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#',
//   },
// ];

export const AccountPage = () => {
  const [orders, setAccountOrders] = useState<Order[]>([]);
  useEffect(() => {
    fetch('https://incredible-pizza.free.beeceptor.com/account-orders')
      .then((response) => response.json())
      .then((json) => setAccountOrders(json));
  }, []);
  return (
    <>
      <Delimiter />
    </>
  );
};
