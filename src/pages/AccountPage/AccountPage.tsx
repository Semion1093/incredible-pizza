import './AccountPage.scss';
import { AccountOrder, Order } from './components/AccountOrder/AccountOrder';
import { Delimiter } from '../../components/Delimiter/Delimiter';
import { Header } from '../../components/Header/Header';
import { NavigationLinks } from '../../components/NavigationLinks/NavigationLinks';
import pizza from './assets/Pizza.svg';

const orders: Order[] = [
  {
    number: 130312,
    date: '22.06.21',
    price: 399,
    status: 'Обрабатывается',
    paid: 'Картой',
    address: 'ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#',
    items: [
      {
        id: 1,
        name: 'Пепперони по-деревенски',
        description: 'Традиционное тесто, 23 см',
        quantity: '1 товар',
        cost: '399 ₽',
        img: pizza,
      },
      {
        id: 2,
        name: 'Пепперони по-деревенски',
        description: 'Традиционное тесто, 23 см',
        quantity: '1 товар',
        cost: '399 ₽',
        img: pizza,
      },
      {
        id: 3,
        name: 'Пепперони по-деревенски',
        description: 'Традиционное тесто, 23 см',
        quantity: '1 товар',
        cost: '399 ₽',
        img: pizza,
      },
    ],
  },
];

export const AccountPage = () => {
  return (
    <>
      <Header />
      <Delimiter />
      <NavigationLinks show={false} />
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
    </>
  );
};
