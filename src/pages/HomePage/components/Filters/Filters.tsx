import './Filters.scss';
import { Delimiter } from '../../../../components/Delimiter/Delimiter';
import { FilterHeader } from './components/FilterHeader/FilterHeader';
import { FilterSetting } from './components/FilterSetting/FilterSetting';
import { HomePage } from '../../HomePage';
import React from 'react';

export const Filters = () => {
  return (
    <>
      <HomePage />
      <div className="filter">
        <FilterHeader />
        <div className="filter-group">
          <h4>Общее</h4>
          <div className="filter-items">
            <FilterSetting text={'Хит'} />
            <FilterSetting text={'Новинка'} />
            <FilterSetting text={'С мясом'} />
            <FilterSetting text={'Вегетарианская'} />
            <FilterSetting text={'С курицей'} />
            <FilterSetting text={'Без лука'} />
            <FilterSetting text={'С грибами'} />
            <FilterSetting text={'С морепродуктами'} />
            <FilterSetting text={'Барбекью'} />
          </div>
        </div>
        <div className="filter-group">
          <h4>Сыр</h4>
          <div className="filter-items">
            <FilterSetting text={'Реджанито'} />
            <FilterSetting text={'Моцарелла '} />
            <FilterSetting text={'Чеддер'} />
            <FilterSetting text={'С голубой плесенью'} />
            <FilterSetting text={'Смесь итальянских сыров'} />
            <FilterSetting text={'Мягкий молодой сыр'} />
          </div>
        </div>
        <div className="filter-group">
          <h4>Мясо</h4>
          <div className="filter-items">
            <FilterSetting text={'Пепперони'} />
            <FilterSetting text={'Свинина '} />
            <FilterSetting text={'Ветчина'} />
            <FilterSetting text={'Бекон'} />
            <FilterSetting text={'Говядина'} />
            <FilterSetting text={'Чоризо'} />
            <FilterSetting text={'Колбаски'} />
            <FilterSetting text={'Куриная грудка'} />
          </div>
        </div>
        <div className="filter-group">
          <h4>Компонент</h4>
          <div className="filter-items">
            <FilterSetting text={'Креветка'} />
            <FilterSetting text={'Ананасы '} />
            <FilterSetting text={'Шампиньоны'} />
            <FilterSetting text={'Лук'} />
            <FilterSetting text={'Перец халапеньо'} />
            <FilterSetting text={'Орегано'} />
            <FilterSetting text={'Зеленый перец'} />
            <FilterSetting text={'Томаты'} />
            <FilterSetting text={'Чеснок'} />
            <FilterSetting text={'Красный перец'} />
            <FilterSetting text={'Оливки'} />
            <FilterSetting text={'Маслины'} />
            <FilterSetting text={'Клубника'} />
            <FilterSetting text={'Смесь итальянских трав'} />
          </div>
        </div>
        <Delimiter />
        <div className="result-buttons">
          <button className="result-button">
            <span>Сбросить</span>
          </button>
          <button className="result-button fill">
            <span>Применить</span>
          </button>
        </div>
      </div>
    </>
  );
};
