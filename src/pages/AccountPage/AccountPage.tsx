import './AccountPage.scss';
import { AccountOrder, Order } from './components/AccountOrder/AccountOrder';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { useEffect, useState } from 'react';
import SwitchSelector from './assets/Табы.png';
import { SignInUsingMail } from '../../components/SignInExpanded/Registration';

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
      <SignInUsingMail />
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
              eta={order.eta}
              status={order.status}
              paid={order.paid}
              address={order.address}
            />
          ))}
        </div>
      </div>
    </>
  );
};
