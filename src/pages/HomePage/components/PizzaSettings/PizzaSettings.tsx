import React from 'react';
import './PizzaSettings.scss';
import { PizzaComponents } from './PizzaComponents/PizzaComponents';

interface PizzaProps {
  name: string;
}

export const PizzaSettings = (props: PizzaProps) => {
  return (
    <article className="PizzaSettings">
      <div className="left-side">
        <div className="state-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="82" height="40" viewBox="0 0 82 40" fill="none">
            <path d="M0 0H76C79.3137 0 82 2.68629 82 6V34C82 37.3137 79.3137 40 76 40H0V0Z" fill="#E23535" />
          </svg>
          <p>NEW</p>
        </div>
        <div className="content">
          <img src="./assets/Rectangle 4.png" alt="" className="pizza-img" />
        </div>
      </div>
      <div className="right-side">
        <div className="title">
          <div className="content">
            <img src="./assets/Group 96.svg" alt="" />
            <h4>Пепперони по-деревенски</h4>
          </div>
          <details className="button-info">
            <summary>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 0C4.47254 0 0 4.47293 0 10C0 15.5275 4.47293 20 10 20C15.5275 20 20 15.5271 20 10C20 4.47254 15.527 0 10 0ZM10 18.4375C5.33621 18.4375 1.5625 14.6635 1.5625 10C1.5625 5.33621 5.33652 1.5625 10 1.5625C14.6638 1.5625 18.4375 5.33652 18.4375 10C18.4375 14.6638 14.6634 18.4375 10 18.4375Z"
                  fill="black"
                />
                <path
                  d="M10 8.37227C9.56852 8.37227 9.21875 8.72203 9.21875 9.15352V14.1845C9.21875 14.616 9.56852 14.9657 10 14.9657C10.4315 14.9657 10.7812 14.6159 10.7812 14.1845V9.15352C10.7812 8.72203 10.4315 8.37227 10 8.37227Z"
                  fill="black"
                />
                <path
                  d="M10 7.41562C10.5825 7.41562 11.0547 6.94342 11.0547 6.36093C11.0547 5.77844 10.5825 5.30624 10 5.30624C9.41751 5.30624 8.94531 5.77844 8.94531 6.36093C8.94531 6.94342 9.41751 7.41562 10 7.41562Z"
                  fill="black"
                />
              </svg>
            </summary>
            <p>Это вкусно, но не то чтобы по вкусу вкусно, но по сути вкусно.</p>
          </details>
        </div>
        <div className="components-section">
          <PizzaComponents name={'Моцарелла'} />
          <PizzaComponents name={'Огурцы маринованные'} />
          <PizzaComponents name={'Пепперони'} />
          <PizzaComponents name={'Томатный соус'} />
        </div>
        <div className="base-section">
          <div className="dough-wrapper">
            <div className="dough"></div>
          </div>
          <div className="size-wrapper">
            <div className="size"></div>
          </div>
        </div>
      </div>
    </article>
  );
};
