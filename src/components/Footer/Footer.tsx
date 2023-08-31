import './Footer.scss';
import { GridFacebookIcon } from './assets/GridFacebookIcon';
import { GridInstagramIcon } from './assets/GridInstagramIcon';
import { GridLocationSvg } from './assets/GridLocationSvg';
import { GridPhoneIconSvg } from './assets/GridPhoneIconSvg';
import { GridPizzaIconSvg } from './assets/GridPizzaIconSvg';
import { GridTextSvg } from './assets/GridTextSvg';
import React from 'react';

export const Footer = () => {
  return (
    <div className="footer-grid">
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
        <GridPhoneIconSvg />
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
        <GridLocationSvg />
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
          <GridFacebookIcon />
          <span>Facebok</span>
        </div>
        <div className="social-media-item">
          <GridInstagramIcon />
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
    </div>
  );
};
