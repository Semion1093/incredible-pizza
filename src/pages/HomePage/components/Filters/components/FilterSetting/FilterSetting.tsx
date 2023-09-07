import './FilterSetting.scss';
import React from 'react';

export interface FilterSettingProps {
  text: string;
}

export const FilterSetting = (props: FilterSettingProps) => {
  return (
    <button className="filter-button">
      <span>{props.text}</span>
    </button>
  );
};
