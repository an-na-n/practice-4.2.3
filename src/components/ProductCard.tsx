/* eslint-disable react/react-in-jsx-scope */
import { Card, Image, Text, Input, Group, Button } from "@mantine/core";
import { useState } from "react";
import { useCart } from "../hooks/useCart";
import type { Product } from "../types/types";

export function ProductCard({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  const handleIncrement = () => setQty(q => q + 1);
  const handleDecrement = () => setQty(q => Math.max(0, q - 1));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setQty(value);
    }
  };

  const [name, weight] = product.name.split(' - ');

  return (
    <Card
      padding="lg"
      radius="lg"
    >
      <Card.Section>
        <Image
          src={product.image}
          alt={product.name}
          height={276}
          fit="contain"
        />
      </Card.Section>
      <Group justify="space-between" mt="md">
        <Text fw={500}>{name}</Text>
            {weight && <Text>{weight}</Text>}
        <Button color="main.4" autoContrast
              onClick={handleDecrement}
              disabled={qty <= 0}
            >
            -
        </Button>
        <Input
            type="number"
            value={qty}
            onChange={handleInputChange}
            min={0}
            max={99}
          /> 
          <Button color="main.4" autoContrast
            onClick={handleIncrement}
          >
            +
          </Button>
      </Group>
      <Group mt="md">
        <Text>${product.price}</Text>
        <Button color="buttons.6" variant="light" onClick={() => addToCart(product, qty)} size="sm">
          Add to cart
        </Button>
      </Group>
    </Card>
  );
}