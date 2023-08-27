import './ProductSection.scss';
import { ProductCard } from './../ProductCard/ProductCard';
import React from 'react';

export const ProductSection = () => {
  return (
    <div className="product-section">
      <h2>Пицца</h2>
      <div className="product-section-content">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
