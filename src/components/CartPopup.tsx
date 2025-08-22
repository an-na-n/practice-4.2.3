/* eslint-disable react/react-in-jsx-scope */
import { Paper, Group, Text, ActionIcon, Image, Stack } from "@mantine/core";
import { useCart } from "../hooks/useCart";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import classes from "./CartPopup.module.css"

export function CartPopup() {
  const { items, totalPrice, increaseQuantity,
    decreaseQuantity, } = useCart();

  return (
    <Paper className={classes.container}
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
            <Group key={i.id}>
              <Image
                src={i.image}
                alt={i.name.split(' - ')[0]}
                height={64}
                fit="contain"
              />
              <Group>
                <Text fw={500}>{i.name.split(' - ')[0]}</Text>
                <Text>{i.name.split(' - ')[1]}</Text>
                <Text>
                    ${(i.price * i.quantity).toFixed(2)}
                </Text>
              </Group>
              <ActionIcon
                    onClick={() => decreaseQuantity(i.id)}
                    variant="default"
                    size="sm"
                  >
                    <IconMinus size={14} />
                  </ActionIcon>
                  <Text>{i.quantity}</Text>
                  <ActionIcon
                    onClick={() => increaseQuantity(i.id)}
                    variant="default"
                    size="sm"
                  >
                    <IconPlus size={14} />
                  </ActionIcon>
            </Group>
          ))
        )}
        <Text fw={600}>Total: ${totalPrice}</Text>
      </Stack>
    </Paper>
  );
}