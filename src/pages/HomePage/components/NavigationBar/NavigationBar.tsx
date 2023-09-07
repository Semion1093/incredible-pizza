import './NavigationBar.scss';
import { ComboIcon } from './assets/ComboIcon';
import { DessertIcon } from './assets/DessertIcon';
import { DrinkIcon } from './assets/DrinkIcon';
import { PizzaIcon } from './assets/PizzaIcon';
import { PromoIcon } from './assets/PromoIcon';
import { SauceIcon } from './assets/SauceIcon';
import { SnackIcon } from './assets/SnackIcon';
import { SushiIcon } from './assets/SushiIcon';
import React from 'react';

interface NavigationBarProps {}

export const NavigationBar = (props: NavigationBarProps) => {
  return (
    <div className="navigation-bar">
      <div className="navigation-bar-content">
        <a href="#promo" className="navigation-bar-item">
          <div className="icon">
            <PromoIcon />
          </div>
          <p className="accent">Акции</p>
        </a>
        <a href="#pizza" className="navigation-bar-item">
          <div className="icon">
            <PizzaIcon />
          </div>
          <p>Пицца</p>
        </a>
        <a href="#sushi" className="navigation-bar-item">
          <div className="icon">
            <SushiIcon />
          </div>
          <p>Суши</p>
        </a>
        <a href="#combo" className="navigation-bar-item">
          <div className="icon">
            <ComboIcon />
          </div>
          <p>Комбо</p>
        </a>
        <a href="#snack" className="navigation-bar-item">
          <div className="icon">
            <SnackIcon />
          </div>
          <p>Закуски</p>
        </a>
        <a href="#drink" className="navigation-bar-item">
          <div className="icon">
            <DrinkIcon />
          </div>
          <p>Напитки</p>
        </a>
        <a href="#dessert" className="navigation-bar-item">
          <div className="icon">
            <DessertIcon />
          </div>
          <p>Десерты</p>
        </a>
        <a href="#sauce" className="navigation-bar-item">
          <div className="icon">
            <SauceIcon />
          </div>
          <p>Соусы</p>
        </a>
      </div>
    </div>
  );
};
