/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './Cart.scss';
import { CartItem } from '../CartItem/CartItem';
import { CrossSvg } from '../../../../components/Cross/CrossSvg';
import { Delimiter } from '../../../../components/Delimiter/Delimiter';
import { openAuthModal } from '../AuthModal/authModalSlice';
import { selectCartItems, selectCartItemsSum } from './cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useState } from 'react';

interface CartProps {
  isCartActive: boolean;
  setIsActive: (isCartActive: boolean) => void;
}
export const Cart = (props: CartProps) => {
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalSum = useSelector(selectCartItemsSum);
  const handleClick = () => {
    if (localStorage.getItem('token')) {
      navigate('/order');
    } else {
      dispatch(openAuthModal());
    }
  };

  return (
    <>
      {props.isCartActive ? (
        <div className="modal" id="cart" onClick={() => props.setIsActive(false)}>
          <article className="modal-panel" onClick={(e) => e.stopPropagation()}>
            <div className="cart">
              <div className="cart-header">
                <h2>Ваш заказ</h2>
                <button className="cart-exit" onClick={() => props.setIsActive(false)}>
                  <CrossSvg />
                </button>
              </div>
              {items.map((item) => (
                <CartItem item={item} />
              ))}
            </div>
            <div className="cart-result">
              <Delimiter />
              <div className="cart-result-content">
                <span>
                  Итого: {totalSum.toLocaleString('fr-FR')}{' '}₽
                </span>
                <button onClick={handleClick}>Оформить заказ</button>
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
