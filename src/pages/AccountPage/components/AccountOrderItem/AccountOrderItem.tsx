import './AccountOrderItem.scss';

export interface OrderItem {
  id: number;
  name: string;
  description: string;
  quantity: string;
  cost: string;
  img: string;
}

export const AccountOrderItem = (props: OrderItem) => {
  return (
    <div className="account-order-item">
      <img src={props.img} alt="IMG" />
      <div className="name">{props.name}</div>
      <div className="item-description">{props.description}</div>
      <div className="quantity">{props.quantity}</div>
      <div className="cost">{props.cost}</div>
    </div>
  );
};
