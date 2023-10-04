import './CartItem.scss';
import { ProductInCart, cleanCartBuffer } from '../Cart/cartSlice';
import { QuantitySelector } from '../../../../components/QuantitySelector/QuantitySelector';
import { useDispatch } from 'react-redux';

interface ProductCardProps {
  item: ProductInCart;
}

export const CartItem = (props: ProductCardProps) => {
  const dispatch = useDispatch();

  let cartItemState = 'cart-item';
  if (props.item.isDeleted) {
    cartItemState = 'cart-item deleted';
    setTimeout(() => {
      dispatch(cleanCartBuffer());
    }, 1000);
  }

  return (
    <div className={cartItemState}>
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
