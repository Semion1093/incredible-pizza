import './ProductSection.scss';
import { ProductCard } from './../ProductCard/ProductCard';
import React from 'react';

interface ProductSectionProps {
  nameId: string;
  name: string;
}

export const ProductSection = (props: ProductSectionProps) => {
  return (
    <div className="product-section" id={props.nameId}>
      <h2>{props.name}</h2>
      <div className="product-section-content">
        <ProductCard labelText="НОВИНКА" />
        <ProductCard />
        <ProductCard labelText="ХИТ" />
        <ProductCard labelText="ПУШКА" />
        <ProductCard labelText="ОТВАЛ ВСЕГО" />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
