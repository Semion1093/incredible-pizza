import './NavigationLinks.scss';
import { Link } from 'react-router-dom';
import { NavigationLinksButtonImageSvg } from './assets/NavigationLinksButtonImageSvg';
import { NavigationLinksPizzaIconSvg } from './assets/NavigationLinksPizzaIconSvg';
import { NavigationLinksTextSvg } from './assets/NavigationLinksText';
import React from 'react';

interface NavigationLinksProps {
  show: boolean;
}

export const NavigationLinks = (props: NavigationLinksProps) => {
  return (
    <div className="navigation-links">
      <div className="navigation-links-content">
        <Link to="" className="pizza-icon">
          <NavigationLinksPizzaIconSvg />
          <NavigationLinksTextSvg />
        </Link>
        <nav>
          <a href="#promo">Акции</a>
          <a href="#pizza">Пицца</a>
          <a href="#sushi">Суши</a>
          <a href="#combo">Комбо</a>
          <a href="#snack">Закуски</a>
          <a href="#drink">Напитки</a>
          <a href="#dessert">Десерты</a>
          <a href="#sauce">Соусы</a>
        </nav>
        <button>
          <NavigationLinksButtonImageSvg /> 0 ₽
        </button>
      </div>
    </div>
  );
};
