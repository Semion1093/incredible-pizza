/* eslint-disable react-hooks/exhaustive-deps */
import './AccountOrder.scss';
import { AccountOrderItem, OrderItem } from '../AccountOrderItem/AccountOrderItem';
import { useEffect, useState } from 'react';
import arrow from '../../../../assets/Arrow.svg';

export interface Order {
  number: number;
  date: string;
  price: number;
  status: OrderStatus;
  eta: string | undefined; //Estimated time of arrival
  paid: string;
  address: string;
}

enum OrderStatus {
  Pending,
  OnTheWay,
  Delivered,
  Canceled,
}

function getStatusText(status: OrderStatus, eta: string | undefined): string | undefined {
  const mapping = new Map<OrderStatus, string>([
    [0, 'Обрабатывается'],
    [1, `Едет к вам (в ${eta})`],
    [2, 'Выполнен'],
    [3, 'Отмена'],
  ]);
  return mapping.get(status);
}

export const AccountOrder = (props: Order) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [orderItems, setAccountOrderItems] = useState<OrderItem[]>([]);

  const changeIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (isExpanded && orderItems.length === 0) {
      fetch(`https://incredible-pizza.free.beeceptor.com/account-order-items/${props.number}`)
        .then((response) => response.json())
        .then((json) => setAccountOrderItems(json));
    }
  }, [isExpanded]);

  return (
    <div className="account-order">
      <div className="description">
        <div className="indicator"></div>
        <div className="order-header">Заказ</div>
        <div className="price-header">Сумма заказа</div>
        <div className="status-header">Статус</div>
        <div className="paid-header">Оплачено</div>

        <div className="number-and-date">
          <div className="number">№{props.number}</div>
          <div className="date">{props.date}</div>
        </div>
        <div className="price">{props.price} ₽</div>
        <div className="status">{getStatusText(props.status, props.eta)}</div>
        <div className="paid">{props.paid}</div>

        <button onClick={changeIsExpanded} className="arrow">
          <img src={arrow} alt="arr" />
        </button>

        <div className="delimiter"></div>
        <div className="address">{props.address}</div>
      </div>
      <div className="delimiter"></div>
      {isExpanded && (
        <div className="order-items">
          {orderItems.map((item) => (
            <AccountOrderItem
              key={`orderItem-${item.id}`}
              id={item.id}
              name={item.name}
              description={item.description}
              quantity={item.quantity}
              cost={item.cost}
              img={''}
            />
          ))}
        </div>
      )}
      <div className="delimiter"></div>
      <div className="repeat-order">Повторить заказ</div>
    </div>
  );
};
