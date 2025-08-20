/* eslint-disable react/react-in-jsx-scope */
import { Paper, Group, Text, Input, Image, Button, Stack } from "@mantine/core";
import { useCart } from "../hooks/useCart";
import { useState } from "react";

export function CartPopup() {
  const { items, totalPrice } = useCart();

  const [qty, setQty] = useState(1);

  const handleIncrement = () => setQty(q => q + 1);
  const handleDecrement = () => setQty(q => Math.max(0, q - 1));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setQty(value);
    }
  };

  return (
    <Paper
      shadow="md"
      p="md"
      withBorder
      style={{
        position: "absolute",
        top: 60,
        right: 20,
        zIndex: 1000,
        width: 300,
        background: "white",
      }}
    >
      <Stack>
        {items.length === 0 ? (
          <Text>No items in cart</Text>
        ) : (
          items.map((i) => (
            <Group key={i.id} justify="space-between">
              <Image
                src={i.image}
                alt={i.name.split(' - ')[0]}
                height={64}
                fit="contain"
              />
              <Text fw={500}>{i.name.split(' - ')[0]}</Text>
              <Text>{i.name.split(' - ')[1]}</Text>
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
          ))
        )}
        <Text fw={600}>Total: ${totalPrice}</Text>
      </Stack>
    </Paper>
  );
}