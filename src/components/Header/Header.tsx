import './Header.scss';
import { Authorize } from '../Authorize/Authorize';
import { NavigationLinksPizzaIconSvg } from '../NavigationLinks/assets/NavigationLinksPizzaIconSvg';
import { NavigationLinksTextSvg } from '../NavigationLinks/assets/NavigationLinksText';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="header-container">
        <div className="left-part">
          <button onClick={() => navigate('/')}>
            <NavigationLinksPizzaIconSvg />
            <NavigationLinksTextSvg />
          </button>
        </div>
        <div className="right-part">
          <span className="desktop-only">Время работы: с 11:00 до 23:00</span>
          <Authorize />
        </div>
      </div>
    </header>
  );
};
