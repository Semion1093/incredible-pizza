import './AccountOrderItem.scss';
import pizza from './assets/Pizza.svg';

export interface OrderItem {
  id: number;
  name: string;
  description: string;
  quantity: number;
  cost: string;
  img: string;
}

export const AccountOrderItem = (props: OrderItem) => {
  return (
    <div className="account-order-item">
      <img src={pizza} alt="IMG" /> {/* {props.img} */}
      <div className="name">{props.name}</div>
      <div className="item-description">{props.description}</div>
      <div className="quantity">{props.quantity} товар</div>
      <div className="cost">{props.cost}</div>
    </div>
  );
};
