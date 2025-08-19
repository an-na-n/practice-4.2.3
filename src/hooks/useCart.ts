import { useState } from 'react';
import type { Product } from '../types/product';

interface CartItem extends Product {
  quantity: number;
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const totalItems = items.reduce((acc, cur) => acc + cur.quantity, 0);
  const totalPrice = items.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

  return { items, addToCart, totalItems, totalPrice };
}