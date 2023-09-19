/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './Cart.scss';
import { CartItem } from './components/CartItem/CartItem';
import { Delimiter } from '../../../../components/Delimiter/Delimiter';
import React, { useState } from 'react';
import pepperoni from './assets/pepperoni-rustic.png';

export const Cart = () => {
  const [isActive, setIsActive] = useState<boolean>(true);
  return (
    <>
      {isActive ? (
        <div className="modal" onClick={() => setIsActive(false)}>
          <article className="modal-panel" onClick={(e) => e.stopPropagation()}>
            <div className="cart">
              <h2>Ваш заказ</h2>
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
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
