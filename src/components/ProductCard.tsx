/* eslint-disable react/react-in-jsx-scope */
import { Card, Image, Text, Group, Button, ActionIcon } from "@mantine/core";
import { useState } from "react";
import { useCart } from "../hooks/useCart";
import type { Product } from "../types/types";
import classes from "./ProductCard.module.css";
import clsx from "clsx";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import CartIcon from "../assets/cart.svg"

export function ProductCard({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const { addToCart, items, increaseQuantity, decreaseQuantity } = useCart();

  const inCart = items.find((i) => i.id === product.id);

  const [name, weight] = product.name.split(" - ");

  return (
    <Card className={classes.card}>
      <Card.Section>
        <Image className={classes.image}
          src={product.image}
          alt={product.name}
        />
      </Card.Section>
      <Group className={classes.group}>
        <Text className={classes.title}>{name}</Text>
            {weight && <Text className={classes.weight}>{weight}</Text>}
         {!inCart ? (
          <Group className={clsx(classes.group, classes["group-action"])}>
        <ActionIcon className={classes.action}
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            variant="default"
          >
            <IconMinus size={14} />
          </ActionIcon>
          <Text className={classes["action-text"]}>{qty}</Text>
          <ActionIcon className={classes.action}
            onClick={() => setQty((q) => q + 1)}
            variant="default"
          >
            <IconPlus size={14} />
          </ActionIcon>
          </Group>
           ) : (
            <Group className={clsx(classes.group, classes["group-action"])}>
            <ActionIcon className={classes.action} onClick={() => decreaseQuantity(product.id)} variant="default">
              <IconMinus size={14} />
            </ActionIcon>
            <Text className={classes["action-text"]}>{inCart.quantity}</Text>
            <ActionIcon className={classes.action} onClick={() => increaseQuantity(product.id)} variant="default">
              <IconPlus size={14} />
            </ActionIcon>
            </Group>
            )}
      </Group>
      <Group className={classes.group} mt="md">
        <Text className={classes.price}>${product.price}</Text>
        <Button rightSection={<img src={CartIcon}/>} className={classes["add-button"]} color="buttons.6" c="buttons.8" variant="light" onClick={() => addToCart(product, qty)} size="sm">
          Add to cart
        </Button>
      </Group>
    </Card>
  );
}