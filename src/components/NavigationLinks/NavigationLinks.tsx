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
      <Link to="" className="pizza-icon">
        <NavigationLinksPizzaIconSvg />
        <NavigationLinksTextSvg />
      </Link>
      <nav>
        <a href="#promo">Акции</a>
        <a href="#pizza">Пицца</a>
        <a href="#sushi">Суши</a>
        <a href="#drinks">Напитки</a>
        <a href="#snacks">Закуски</a>
        <a href="#combo">Комбо</a>
        <a href="#desserts">Десерты</a>
        <a href="#sauces">Соусы</a>
      </nav>
      <button>
        <NavigationLinksButtonImageSvg />
        <span> 0 ₽</span>
      </button>
    </div>
  );
};
