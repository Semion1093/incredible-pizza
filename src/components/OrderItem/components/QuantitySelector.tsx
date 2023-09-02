/* eslint-disable jsx-a11y/click-events-have-key-events */
import './QuantitySelector.scss';
import React, { useState } from 'react';

export const QuantitySelector = () => {
  const [index, setIndex] = useState(1);
  const decrease = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const increase = () => {
    if (index < 9) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="counter">
      <button className="decrease" onClick={decrease}>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path
            d="M8 4C8 3.58579 7.66421 3.25 7.25 3.25H0.75C0.335786 3.25 0 3.58579 0 4C0 4.41421 0.335786 4.75 0.75 4.75H7.25C7.66421 4.75 8 4.41421 8 4Z"
            fill="#FF7010"
          />
        </svg>
      </button>
      <input type="text" value={index} />
      <button className="increase" onClick={increase}>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <g clip-path="url(#clip0_236_25160)">
            <path
              d="M8 4C8 3.58579 7.66421 3.25 7.25 3.25H0.75C0.335786 3.25 0 3.58579 0 4C0 4.41421 0.335786 4.75 0.75 4.75H7.25C7.66421 4.75 8 4.41421 8 4Z"
              fill="#FF7010"
            />
            <path
              d="M4 8C4.41421 8 4.75 7.66421 4.75 7.25L4.75 0.75C4.75 0.335786 4.41421 -1.46777e-08 4 -3.27835e-08C3.58579 -5.08894e-08 3.25 0.335786 3.25 0.75L3.25 7.25C3.25 7.66421 3.58579 8 4 8Z"
              fill="#FF7010"
            />
          </g>
          <defs>
            <clipPath id="clip0_236_25160">
              <rect width="8" height="8" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};
