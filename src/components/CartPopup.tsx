/* eslint-disable react/react-in-jsx-scope */
import { Drawer, Group, Text, Button, Image } from '@mantine/core';
import { useCart } from '../hooks/useCart';

interface CartPopupProps {
  opened: boolean;
  onClose: () => void;
}

export const CartPopup = ({ opened, onClose }: CartPopupProps) => {
  const { items, totalItems, totalPrice } = useCart();

  return (
    <Drawer opened={opened} onClose={onClose} title="Your cart" position="right" size="md">
      {items.length === 0 ? (
        <Text>Your cart is empty 🛒</Text>
      ) : (
        <>
          {items.map((item) => (
            <Group key={item.id} justify="space-between" mb="sm">
              <Image src={item.image} alt={item.name} width={40} height={40} />
              <Text>{item.name} x {item.quantity}</Text>
              <Text fw={700}>${(item.price * item.quantity).toFixed(2)}</Text>
            </Group>
          ))}

          <Text fw={700} mt="md">Total items: {totalItems}</Text>
          <Text fw={700}>Total price: ${totalPrice.toFixed(2)}</Text>

          <Button fullWidth mt="lg" onClick={() => alert('Proceed to checkout')}>
            Checkout
          </Button>
        </>
      )}
    </Drawer>
  );
};