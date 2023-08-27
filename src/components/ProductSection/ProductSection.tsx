import './ProductSection.scss';
import { ProductCard } from './../ProductCard/ProductCard';
import React from 'react';

interface ProductSectionProps {}

export const ProductSection = (props: ProductSectionProps) => {
  return (
    <div className="product-section">
      <h2>Пицца</h2>
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
