/* eslint-disable react/react-in-jsx-scope */
import { Group, Box, Text, Button } from "@mantine/core";
import { useState } from "react";
import { CartPopup } from "./CartPopup";
import { useCart } from "../hooks/useCart";
import classes from './Header.module.css'

export function Header() {
  const { totalCount, totalPrice } = useCart();
  const [opened, setOpened] = useState(false);

  return (
    <Box
      px="md"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backgroundColor: 'white',
      }}
    >
      <Group
        py="sm"
        justify="space-between"
        bg="white"
      >
        <Text className={classes.title} fw={600} size="xl">
          Vegetable <span className={classes.highlight}>SHOP</span>
        </Text>
        <Group>
          <Button color="buttons.6" onClick={() => setOpened((o) => !o)}>
            Cart ({totalCount}) – ${totalPrice}
          </Button>
        </Group>
      </Group>
      {opened && <CartPopup />}
    </Box>
  );
}