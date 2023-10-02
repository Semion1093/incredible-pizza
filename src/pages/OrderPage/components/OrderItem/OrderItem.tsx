import './OrderItem.scss';
import { QuantitySelector } from '../../../../components/QuantitySelector/QuantitySelector';

export interface OrderItemProps {
  id: string;
  img: string;
  title: string;
  description: string;
  price: number;
}

export const OrderItem = (props: OrderItemProps) => {
  return (
    <div className="order-item-wrapper">
      <img src={props.img} alt="" />
      <div className="content">
        <div className="text">
          <span className="title">{props.title}</span>
          <span>{props.description}</span>
        </div>
        <div className="result">
          <QuantitySelector id={props.id} />
          <span className="price">{props.price.toLocaleString('fr-FR')} ₽</span>
        </div>
      </div>
    </div>
  );
};
