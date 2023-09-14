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
    <footer>
      <div className="footer-container">
        <div className="grid-item column-header">
          <GridPizzaIconSvg />
          <GridTextSvg />
        </div>
        <div className="grid-item column-header">
          <a href="index.html">
            <span>Куда пицца</span>
          </a>
        </div>
        <div className="grid-item column-header">
          <a href="index.html">
            <span>Помощь</span>
          </a>
        </div>
        <div className="grid-item column-header">
          <a href="index.html">
            <span>Контакты</span>
          </a>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <a href="index.html">
            <span>О компании</span>
          </a>
        </div>
        <div className="grid-item">
          <a href="index.html">
            <span>Ресторан</span>
          </a>
        </div>
        <div className="grid-item">
          <GridPhoneIconSvg />
          <a href="+79262231011">
            <span>+7 (926) 223-10-11</span>
          </a>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <span>Пользовательское соглашение</span>
        </div>
        <div className="grid-item">
          <a href="index.html">
            <span>Контакты</span>
          </a>
        </div>
        <div className="grid-item">
          <GridLocationSvg />
          <a href="index.html">
            <span>Москва, ул. Юных Ленинцев, д.99</span>
          </a>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <a href="index.html">
            <span>Условия гарантии</span>
          </a>
        </div>
        <div className="grid-item">
          <a href="index.html">
            <span>Поддержка</span>
          </a>
        </div>
        <div className="grid-item social-media">
          <div className="social-media-item">
            <GridFacebookIcon />
            <a href="index.html">
              <span>Facebok</span>
            </a>
          </div>
          <div className="social-media-item">
            <GridInstagramIcon />
            <a href="index.html">
              <span>Instagram</span>
            </a>
          </div>
        </div>
        <div className="grid-item">
          <span>© Copyright 2021 — Куда Пицца</span>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <a href="index.html">
            <span>Отследить заказ</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
