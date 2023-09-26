/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './Cart.scss';
import { CartItem } from './components/CartItem/CartItem';
import { Delimiter } from '../../../../components/Delimiter/Delimiter';
import { selectCartItems } from '../../../../store/reducers/cartSlice';
import { signInOrSignUpModalSlice } from '../../../../store/reducers/signInOrSignUpSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';

interface CartProps {
  isCartActive: boolean;
  setIsActive: (isCartActive: boolean) => void;
}
export const Cart = (props: CartProps) => {
  const items = useSelector(selectCartItems);
  return (
    <>
      {props.isCartActive ? (
        <div className="modal" id="cart" onClick={() => props.setIsActive(false)}>
          <article className="modal-panel" onClick={(e) => e.stopPropagation()}>
            <div className="cart">
              <h2>Ваш заказ</h2>
              {items.map((item) => (
                <CartItem key={new Date().toISOString()} title={item.title} description={item.description} img={''} cost={item.price.toString()} />
              ))}
            </div>
            <div className="cart-result">
              <Delimiter />
              <div className="cart-result-content">
                <span>Итого: 1 399 ₽</span>
                <button>Оформить заказ</button>
              </div>
            </div>
          </article>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
