import './ProductSection.scss';
import { Product } from '../../../../models/Product';
import { ProductCard } from './../ProductCard/ProductCard';
import { useEffect, useState } from 'react';

interface ProductSectionProps {
  nameId: string;
  name: string;
}

export const ProductSection = (props: ProductSectionProps) => {
  // const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   fetch('https://incredible-pizza.free.beeceptor.com/products')
  //     .then((response) => response.json())
  //     .then((json) => setProducts(json));
  // }, []);
  const products: Product[] = [
    {
      id: 1,
      title: 'Пицца',
      description: 'Тонкое тесто, 23см',
      price: 399,
      img: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg',
      labelText: 'ХИТ',
    },
    {
      id: 2,
      title: 'Пицца',
      description: 'Тонкое тесто, 23см',
      price: 399,
      img: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg',
    },
    {
      id: 3,
      title: 'Пицца',
      description: 'Тонкое тесто, 23см',
      price: 399,
      img: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg',
      labelText: 'ПУШКА',
    },
    {
      id: 4,
      title: 'Пицца',
      description: 'Тонкое тесто, 23см',
      price: 399,
      img: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg',
      labelText: 'ГОВНО',
    },
    {
      id: 5,
      title: 'Пицца',
      description: 'Тонкое тесто, 23см',
      price: 399,
      img: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg',
      labelText: 'БОМБА',
    },
    {
      id: 6,
      title: 'Пицца',
      description: 'Тонкое тесто, 23см',
      price: 399,
      img: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg',
    },
    {
      id: 7,
      title: 'Пицца',
      description: 'Тонкое тесто, 23см',
      price: 399,
      img: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg',
      labelText: 'JOPA',
    },
    {
      id: 8,
      title: 'Пицца',
      description: 'Тонкое тесто, 23см',
      price: 399,
      img: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg',
    },
  ];

  return (
    <div className="product-section" id={props.nameId}>
      <h2>{props.name}</h2>
      <div className="product-section-content">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};
