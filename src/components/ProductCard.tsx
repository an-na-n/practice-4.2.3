/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { Card, Image, Text, Button, Group, NumberInput } from '@mantine/core';
import type { Product } from '../types/product';

interface Props {
  product: Product;
  onAddToCart: (p: Product, q: number) => void;
}

export const ProductCard = ({ product, onAddToCart }: Props) => {
  const [qty, setQty] = useState(1);

  return (
    <Card shadow="sm" padding="lg" withBorder>
      <Card.Section>
        <Image src={product.image} height={160} alt={product.name} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{product.name}</Text>
        <Text color="green" fw={700}>${product.price}</Text>
      </Group>

      <NumberInput
        value={qty}
        min={1}
        onChange={(val) => setQty(Number(val))}
      />

      <Button color='secondary.1' fullWidth mt="md"
        styles={(theme) => ({
            root: {
                backgroundColor: theme.colors.secondary[1], 
                color: theme.colors.primary[6],            
                fontWeight: 700,
                '&:hover': {
                    backgroundColor: theme.colors.secondary[2], 
                    outline: 'none',

                },
                '&:focus': {
                    outline: 'none',
                    boxShadow: 'none',
                },
            }
        })}
      onClick={() => onAddToCart(product, qty)}>
        Add to cart
      </Button>
    </Card>
  );
};