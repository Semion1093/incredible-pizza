/* eslint-disable prettier/prettier */
import './ProductSection.scss';
import { Product } from '../../../../models/Product';
import { ProductCard } from './../ProductCard/ProductCard';
import { useEffect, useState } from 'react';

interface ProductSectionProps {
  type: string;
  typeName: string;
}

export const ProductSection = (props: ProductSectionProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/product/list/${props.type}`)
    .then((response) => response.json())
    .then((json) => {
      const data: Product[] = json.data;
      setProducts(data);
    });
  }, [props.type]);

  return (
    <div className="product-section" id={props.type}>
      <h2>{props.typeName}</h2>
      <div className="product-section-content">
        {products && products.map((product) => <ProductCard product={product} />)}
      </div>
    </div>
  );
};
