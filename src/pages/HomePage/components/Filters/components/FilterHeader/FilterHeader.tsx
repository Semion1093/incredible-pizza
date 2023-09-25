import './FilterHeader.scss';
import React from 'react';

export const FilterHeader = () => {
  return (
    <div className="filter-header">
      <span>Фильтры</span>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clipPath="url(#clip0_230_22549)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.33213 0.228557C1.02739 -0.0761858 0.5333 -0.0761858 0.228557 0.228557C-0.0761858 0.533301 -0.0761858 1.02739 0.228557 1.33213L10.8964 12L0.228564 22.6679C-0.0761791 22.9726 -0.0761791 23.4667 0.228564 23.7714C0.533307 24.0762 1.02739 24.0762 1.33214 23.7714L12 13.1036L22.6679 23.7714C22.9726 24.0762 23.4667 24.0762 23.7714 23.7714C24.0762 23.4667 24.0762 22.9726 23.7714 22.6679L13.1036 12L23.7714 1.33213C24.0762 1.02739 24.0762 0.533302 23.7714 0.228559C23.4667 -0.0761838 22.9726 -0.0761838 22.6679 0.228559L12 10.8964L1.33213 0.228557Z"
              fill="$font-color-grey"
            />
          </g>
          <defs>
            <clipPath id="clip0_230_22549">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};
