/* eslint-disable prettier/prettier */
import './ProductSection.scss';
import { ProductCard } from './../ProductCard/ProductCard';
import { ProductInCart } from '../Cart/cartSlice';
import { useEffect, useState } from 'react';

interface ProductSectionProps {
  type: string;
  typeName: string;
}

export const ProductSection = (props: ProductSectionProps) => {
  const [products, setProducts] = useState<ProductInCart[]>([]);
  
  useEffect(() => {
    fetch(`http://localhost:4001/api/v1/product/list/${props.type}`)
    .then((response) => response.json())
    .then((json) => {
      const data: ProductInCart[] = json.data;
      setProducts(data);
    });
  }, [props.type]);

  return (
    <section className="product-section" id={props.type}>
      <h2>{props.typeName}</h2>
      <div className="product-section-content">
        {products && products.map((product) => <ProductCard product={product} />)}
      </div>
    </section>
  );
};
