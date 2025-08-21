/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import { Container, Loader, SimpleGrid, Title } from "@mantine/core";
import { ProductCard } from "../components/ProductCard";
import { Header } from "../components/Header";
import { CartProvider } from "../hooks/useCart";
import type { Product } from "../types/types";
import classes from "./App.module.css"

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <CartProvider>
      <Header />
      <Container className={classes.container}>
        <Title className={classes.title} order={1}>Catalog</Title>
        {loading ? (
          <Loader size="xl" />
        ) : (
          <SimpleGrid className={classes.grid} cols={4}>
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </SimpleGrid>
        )}
      </Container>
    </CartProvider>
  );
}

export default App;
