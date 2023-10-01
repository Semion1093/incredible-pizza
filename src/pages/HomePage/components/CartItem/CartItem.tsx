import './CartItem.scss';
import { QuantitySelector } from '../../../../components/QuantitySelector/QuantitySelector';
import pepperoni from './assets/pepperoni-rustic.png';

interface ProductCardProps {
  title: string;
  description: string;
  cost: string;
  img: string;
}

export const CartItem = (props: ProductCardProps) => {
  return (
    <>
      <div className="cart-item">
        <img src={pepperoni} alt="" />
        <div className="content">
          <div className="text">
            <span className="title">{props.title}</span>
            <span>{props.description}</span>
          </div>
          <div className="result">
            <QuantitySelector />
            <span className="price">{props.cost} ₽</span>
          </div>
        </div>
      </div>
    </>
  );
};