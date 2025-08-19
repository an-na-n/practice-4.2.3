/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { Container, Loader, SimpleGrid } from '@mantine/core';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { useCart } from './hooks/useCart';
import type { Product } from './types/product';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <Container mt="lg">
        {loading ? (
          <Loader size="xl" />
        ) : (
          <SimpleGrid cols={4}>
            {products.map((p) => (
              <ProductCard key={p.id} product={p} onAddToCart={addToCart} />
            ))}
          </SimpleGrid>
        )}
      </Container>
    </>
  );
}
