/* eslint-disable react/react-in-jsx-scope */
import { Group, Box, Button } from '@mantine/core';
import Logo  from "../assets/logo.svg";
import { useCart } from '../hooks/useCart';
import { useState } from 'react';
import { CartPopup } from './CartPopup';

export const Header = () => {
  const { totalItems, totalPrice } = useCart();
  const [opened, setOpened] = useState(false);

  return (
    <Box
      px="md"
      h={60}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backgroundColor: 'white',
        borderBottom: '1px solid #e9ecef',
      }}
    >
      <Group justify="space-between" style={{ height: '100%' }}>
        <img src={Logo} alt="Логотип" style={{ height: 33 }} />
        <Button color="primary.6" onClick={() => setOpened(true)}>
          Cart ({totalItems}) – ${totalPrice.toFixed(2)}
        </Button>
      </Group>

      <CartPopup opened={opened} onClose={() => setOpened(false)} />
    </Box>
  );
};