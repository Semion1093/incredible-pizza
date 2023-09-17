import './NavigationLinks.scss';
import { Link } from 'react-router-dom';
import { MobileArrowBackButton } from './components/MobileArrowBackButton/MobileArrowBackButton';
import { NavigationLinksBasketImageSvg } from './assets/NavigationLinksBasketImageSvg';
import { NavigationLinksMenuMobileSvg } from './assets/NavigationLinksMenuMobileSvg';
import { NavigationLinksPizzaIconSvg } from './assets/NavigationLinksPizzaIconSvg';
import { NavigationLinksTextSvg } from './assets/NavigationLinksText';
import React from 'react';

interface NavigationLinksProps {
  showMobileButtonBack: boolean;
}

export const NavigationLinks = (props: NavigationLinksProps) => {
  return (
    <div className="navigation-links">
      <div className="navigation-links-content">
        <div className="left-part">
          <MobileArrowBackButton show={props.showMobileButtonBack} />
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
        <button className="desktop-only">
          <NavigationLinksBasketImageSvg /> 0 ₽
        </button>
        <button className="mobile-menu mobile-only">
          <NavigationLinksMenuMobileSvg />
        </button>
      </div>
    </div>
  );
};
