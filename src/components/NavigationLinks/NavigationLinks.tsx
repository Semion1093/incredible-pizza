import './NavigationLinks.scss';
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
      <div className="pizza-icon">
        <NavigationLinksPizzaIconSvg />
        <NavigationLinksTextSvg />
      </div>
      {props.show && (
        <nav>
          <a href="index.html">Акции</a>
          <a href="index.html">Пицца</a>
          <a href="index.html">Суши</a>
          <a href="index.html">Напитки</a>
          <a href="index.html">Закуски</a>
          <a href="index.html">Комбо</a>
          <a href="index.html">Десерты</a>
          <a href="index.html">Соусы</a>
        </nav>
      )}
      <button>
        <NavigationLinksButtonImageSvg />
        <span> 0 ₽</span>
      </button>
    </div>
  );
};
