import './NavigationLinks.scss';
import { NavigationLinksBasketImageSvg } from './assets/NavigationLinksBasketImageSvg';
import { PhoneIconSvg } from '../assets/PhoneIconSvg';
import { useNavigate } from 'react-router-dom';
import React from 'react';

interface NavigationLinksProps {
  setIsActive: (isCartActive: boolean) => void;
}

export const NavigationLinks = (props: NavigationLinksProps) => {
  const navigate = useNavigate();
  return (
    <div className="navigation-links">
      <div className="navigation-links-content">
        <div className="left-part">
          <div className="phone">
            <PhoneIconSvg />
            <span>+7 (926) 223-10-11</span>
          </div>
        </div>
        <nav className="desktop-only">
          <a href="#promo">Акции</a>
          <a href="#pizza">Пицца</a>
          <a href="#sushi">Суши</a>
          <a href="#combo">Комбо</a>
          <a href="#snack">Закуски</a>
          <a href="#drink">Напитки</a>
          <a href="#dessert">Десерты</a>
          <a href="#sauce">Соусы</a>
        </nav>
        <button className="cart-button" onClick={() => props.setIsActive(true)}>
          <NavigationLinksBasketImageSvg /> 0 ₽
        </button>
      </div>
    </div>
  );
};
