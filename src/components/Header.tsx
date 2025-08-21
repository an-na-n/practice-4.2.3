/* eslint-disable react/react-in-jsx-scope */
import { Group, Box, Text, Button } from "@mantine/core";
import { useState } from "react";
import { CartPopup } from "./CartPopup";
import classes from './Header.module.css'
import CartIcon from "../assets/white_cart.svg"

export function Header() {
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
          <Button className={classes.button} rightSection={<img src={CartIcon} />} color="buttons.6" onClick={() => setOpened((o) => !o)}>
            Cart
          </Button>
        </Group>
      </Group>
      {opened && <CartPopup />}
    </Box>
  );
}