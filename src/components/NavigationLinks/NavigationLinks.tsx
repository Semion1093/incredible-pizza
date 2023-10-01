import './NavigationLinks.scss';
import { Link } from 'react-router-dom';
import { NavigationLinksBasketImageSvg } from './assets/NavigationLinksBasketImageSvg';
import { NavigationLinksPizzaIconSvg } from './assets/NavigationLinksPizzaIconSvg';
import { NavigationLinksTextSvg } from './assets/NavigationLinksText';
import React from 'react';

interface NavigationLinksProps {
  setIsActive: (isCartActive: boolean) => void;
}

export const NavigationLinks = (props: NavigationLinksProps) => {
  return (
    <div className="navigation-links">
      <div className="navigation-links-content">
        <div className="left-part">
          <Link to="" className="pizza-icon">
            <NavigationLinksPizzaIconSvg />
            <NavigationLinksTextSvg />
          </Link>
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
