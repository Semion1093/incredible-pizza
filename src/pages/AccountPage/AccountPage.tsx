import './AccountPage.scss';
import { AccountOrder, Order } from './components/AccountOrder/AccountOrder';
import { AccountSettings } from './components/AccountSettings/AccountSettings';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { SwitchSelector } from '../../components/SwitchSelector/SwitchSelector';
import { useEffect, useState } from 'react';

export const AccountPage = () => {
  const [deliveryTab, setDeliveryTab] = useState('leftOption');
  const [orders, setAccountOrders] = useState<Order[]>([]);
  useEffect(() => {
    fetch('https://incredible-pizza.free.beeceptor.com/account-orders')
      .then((response) => response.json())
      .then((json) => setAccountOrders(json));
  }, []);
  return (
    <>
      <Delimiter />
      <div className="account-page">
        <div className="header">
          <h1>Мой аккаунт</h1>
          <SwitchSelector clickHandler={setDeliveryTab} leftOptionText="История заказов" rightOptionText="Настройки" />
        </div>
        {deliveryTab === 'leftOption' && (
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
        )}
        {deliveryTab === 'rightOption' && <AccountSettings />}
      </div>
    </>
  );
};
