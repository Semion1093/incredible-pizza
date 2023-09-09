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
//     status: 'Обрабатывается',
//     paid: 'Картой',
//     address: 'ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#',
//     items: [
//       {
//         id: 1,
//         name: 'Пепперони по-деревенски',
//         description: 'Традиционное тесто, 23 см',
//         quantity: 1,
//         cost: '399 ₽',
//         img: 'url',
//       },
//       {
//         id: 2,
//         name: 'Пепперони по-деревенски',
//         description: 'Традиционное тесто, 23 см',
//         quantity: 1,
//         cost: '399 ₽',
//         img: 'url',
//       },
//       {
//         id: 3,
//         name: 'Пепперони по-деревенски',
//         description: 'Традиционное тесто, 23 см',
//         quantity: 1,
//         cost: '399 ₽',
//         img: 'url',
//       },
//     ],
//   },
//   {
//     number: 130313,
//     date: '22.06.21',
//     price: 399,
//     status: 'Обрабатывается',
//     paid: 'Картой',
//     address: 'ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#',
//     items: [
//       {
//         id: 1,
//         name: 'Пепперони по-деревенски',
//         description: 'Традиционное тесто, 23 см',
//         quantity: 1,
//         cost: '399 ₽',
//         img: 'url',
//       },
//     ],
//   },
// ];

export const AccountPage = () => {
  const [orders, setAccountOrders] = useState<Order[]>([]);
  useEffect(() => {
    fetch('https://b9b7088f-832b-475f-8c8b-c404b476a9c2.mock.pstmn.io/account-orders')
      .then((response) => response.json())
      .then((json) => setAccountOrders(json));
  }, []);

  return (
    <>
      <Header />
      <Delimiter />
      <NavigationLinks show={false} />
      <div className="account-page">
        <div className="header">
          <h1>Мой аккаунт</h1>
          <img src={SwitchSelector} alt="tabs" />
        </div>
        <div className="orders">
          {orders.map((order) => (
            <AccountOrder
              key={`orderItem-${order.number}`}
              number={order.number}
              date={order.date}
              price={order.price}
              status={order.status}
              paid={order.paid}
              address={order.address}
              items={order.items}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
