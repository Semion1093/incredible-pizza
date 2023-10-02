import './CartItem.scss';
import { QuantitySelector } from '../../../../components/QuantitySelector/QuantitySelector';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  img: string;
}

export const CartItem = (props: ProductCardProps) => {
  return (
    <div className="cart-item">
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
