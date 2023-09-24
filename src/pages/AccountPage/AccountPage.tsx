import './AccountPage.scss';
import { AccountOrder, Order } from './components/AccountOrder/AccountOrder';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { Authorization } from '../../components/SignInExpanded/Authorization';
import { SignUp } from '../../components/SignInExpanded/SignUp';
import { SignIn } from '../../components/SignInExpanded/SignIn';
import { useEffect, useState } from 'react';
import SwitchSelector from './assets/Табы.png';

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
      <Authorization />
      <SignIn />
      <SignUp />
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
