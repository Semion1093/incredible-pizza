import './OrderItem.scss';
import { ProductInCart, cleanCartBuffer } from '../../../HomePage/components/Cart/cartSlice';
import { QuantitySelector } from '../../../../components/QuantitySelector/QuantitySelector';
import { useDispatch } from 'react-redux';

export interface OrderItemProps {
  item: ProductInCart;
}

export const OrderItem = (props: OrderItemProps) => {
  const dispatch = useDispatch();

  let orderItemState = 'order-item-wrapper';
  if (props.item.isDeleted) {
    orderItemState = 'order-item-wrapper deleted';
    setTimeout(() => {
      dispatch(cleanCartBuffer());
    }, 1000);
  }

  return (
    <div className={orderItemState}>
      <img src={props.item.img} alt="" />
      <div className="content">
        <div className="text">
          <span className="title">{props.item.title}</span>
          <span>{props.item.description}</span>
        </div>
        <div className="result">
          <QuantitySelector id={props.item._id} count={props.item.count} />
          <span className="price">{(props.item.price * props.item.count).toLocaleString('fr-FR')} ₽</span>
        </div>
      </div>
    </div>
  );
};
