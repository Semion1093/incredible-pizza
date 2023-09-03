import './MobileMenu.scss';
import { Authorize } from '../../../Authorize/Authorize';
import { Delimiter } from '../../../Delimiter/Delimiter';
import { FacebookIconSvg } from '../../../assets/FacebookIconSvg';
import { InstagramIconSvg } from '../../../assets/InstagramIconSvg';
import { LocationSvg } from '../../../assets/LocationSvg';
import { PhoneIconSvg } from '../../../assets/PhoneIconSvg';
import React from 'react';

export const MobileMenu = () => {
  return (
    <div className="mobile-menu mobile-only">
      <Authorize />
      <Delimiter />
      <div className="links">
        <span>Акции</span>
        <span>О компании</span>
        <span>Пользовательское соглашение</span>
        <span>Условия гарантии</span>
        <span>Ресторан</span>
        <span>Контакты</span>
        <span>Поддержка</span>
        <span>Отследить заказ</span>
      </div>
      <Delimiter />
      <div className="flex-item">
        <PhoneIconSvg />
        <span>+7 (926) 223-10-11</span>
      </div>
      <div className="flex-item">
        <LocationSvg />
        <span>Москва, ул. Юных Ленинцев, д.99</span>
      </div>
      <div className="flex-item social-media">
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
      <div className="flex-item work-time">
        <span>Время работы: с 11:00 до 23:00</span>
      </div>
    </div>
  );
};
