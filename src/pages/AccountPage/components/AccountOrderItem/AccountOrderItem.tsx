import { ProductInCart } from '../../../HomePage/components/Cart/cartSlice';
import './AccountOrderItem.scss';

export interface OrderItem {
  item: ProductInCart;
}

export const AccountOrderItem = (props: OrderItem) => {
  return (
    <div className="account-order-item">
      <img src={props.item.img} alt="IMG" />
      <div className="name">{props.item.title}</div>
      <div className="item-description">{props.item.description}</div>
      <div className="quantity">{props.item.count} товар</div>
      <div className="cost">{props.item.price}</div>
    </div>
  );
};
