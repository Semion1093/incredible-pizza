import './Footer.scss';
import { Delimiter } from '../Delimiter/Delimiter';
import { FacebookIconSvg } from '../assets/FacebookIconSvg';
import { GridPizzaIconSvg } from './assets/GridPizzaIconSvg';
import { GridTextSvg } from './assets/GridTextSvg';
import { InstagramIconSvg } from '../assets/InstagramIconSvg';
import { LocationSvg } from '../assets/LocationSvg';
import { PhoneIconSvg } from '../assets/PhoneIconSvg';
import React from 'react';

export const Footer = () => {
  return (
    <div id="footer">
      <footer className="desktop-only">
        <div className="grid-item column-header">
          <GridPizzaIconSvg />
          <GridTextSvg />
        </div>
        <div className="grid-item column-header">
          <span>Куда пицца</span>
        </div>
        <div className="grid-item column-header">
          <span>Помощь</span>
        </div>
        <div className="grid-item column-header">
          <span>Контакты</span>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <span>О компании</span>
        </div>
        <div className="grid-item">
          <span>Ресторан</span>
        </div>
        <div className="grid-item">
          <PhoneIconSvg />
          <span>+7 (926) 223-10-11</span>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <span>Пользовательское соглашение</span>
        </div>
        <div className="grid-item">
          <span>Контакты</span>
        </div>
        <div className="grid-item">
          <LocationSvg />
          <span>Москва, ул. Юных Ленинцев, д.99</span>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <span>Условия гарантии</span>
        </div>
        <div className="grid-item">
          <span>Поддержка</span>
        </div>
        <div className="grid-item social-media">
          <div className="social-media-item">
            <FacebookIconSvg />
            <span>Facebok</span>
          </div>
          <div className="social-media-item">
            <InstagramIconSvg />
            <span>Instagram</span>
          </div>
        </div>
        <div className="grid-item">
          <span>© Copyright 2021 — Куда Пицца</span>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <span>Отследить заказ</span>
        </div>
      </footer>
      <footer className="mobile-only">
        <div className="grid-item">
          <GridPizzaIconSvg />
          <GridTextSvg />
        </div>
        <div className="grid-item column-header">
          <span>Куда пицца</span>
        </div>
        <div className="grid-item">
          <span>О компании</span>
        </div>
        <div className="grid-item">
          <span>Пользовательское соглашение</span>
        </div>
        <div className="grid-item">
          <span>Условия гарантии</span>
        </div>
        <div className="grid-item column-header">
          <span>Помощь</span>
        </div>
        <div className="grid-item">
          <span>Ресторан</span>
        </div>
        <div className="grid-item">
          <span>Контакты</span>
        </div>
        <div className="grid-item">
          <span>Поддержка</span>
        </div>
        <div className="grid-item">
          <span>Отследить заказ</span>
        </div>
        <div className="grid-item column-header">
          <span>Контакты</span>
        </div>
        <div className="grid-item">
          <PhoneIconSvg />
          <span>+7 (926) 223-10-11</span>
        </div>
        <div className="grid-item">
          <LocationSvg />
          <span>Москва, ул. Юных Ленинцев, д.99</span>
        </div>
        <div className="grid-item social-media">
          <div className="social-media-item">
            <FacebookIconSvg />
            <span>Facebok</span>
          </div>
          <div className="social-media-item">
            <InstagramIconSvg />
            <span>Instagram</span>
          </div>
        </div>
        <Delimiter />
        <div className="grid-item">
          <span>© Copyright 2021 — Куда Пицца</span>
        </div>
      </footer>
    </div>
  );
};
