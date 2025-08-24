/* eslint-disable react/react-in-jsx-scope */
import { Paper, Group, Text, ActionIcon, Image, Stack, Divider } from "@mantine/core";
import { useCart } from "../hooks/useCart";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import classes from "./CartPopup.module.css";
import CartEmpty from "../assets/cart_empty.svg";
import clsx from "clsx";

export function CartPopup () {
  const { items, totalPrice, increaseQuantity,
    decreaseQuantity, } = useCart();

  return (
    <Paper
      className={classes.paper}
      style={{
        position: "absolute",
        top: 60,
        right: 20,
        zIndex: 1000,
        background: "white",
      }}
    >
      <Stack className={classes.stack}>
        {items.length === 0 ? (
          <Group className={clsx(classes.group, classes["empty-cart-group"])}>
            <Image className={classes["empty-cart-image"]}
              src={CartEmpty}
              alt={"Empty cart image"}
            />
            <Text className={classes["empty-cart-text"]}>You cart is empty!</Text>
          </Group>
        ) : (
          items.map((i) => (
            <>
            <Group className={clsx(classes.group, classes["product-group"])} key={i.id}>
              <Image className={classes["cart-image"]}
                src={i.image}
                alt={i.name.split(' - ')[0]}
              />
              <Group className={clsx(classes.group, classes["product-action-group"])}>
                <Group className={clsx(classes.group, classes["product-details-group"])}>
                  <Text className={classes.name}>{i.name.split(' - ')[0]}
                    <span className={classes.weight}>{i.name.split(' - ')[1]}</span>
                  </Text>
                  <Text className={classes.price}>
                      ${(i.price * i.quantity).toFixed(2)}
                  </Text>
                </Group>
                <Group className={clsx(classes.group, classes["action-group"])}>
                <ActionIcon
                  className={classes.action}
                  onClick={() => decreaseQuantity(i.id)}
                  variant="default"
                  size="sm"
                >
                  <IconMinus size={14} />
                </ActionIcon>
                <Text className={classes["action-text"]}>{i.quantity}</Text>
                <ActionIcon
                  className={classes.action}
                  onClick={() => increaseQuantity(i.id)}
                  variant="default"
                  size="sm"
                >
                  <IconPlus size={14} />
                </ActionIcon>
                </Group>
              </Group>
            </Group>
            <Divider className={classes.divider} />
            </>
          ))
        )}
        {items.length > 0 && <Divider className={clsx(classes.divider, classes["bottom-divider"])} />}
        {items.length > 0 && <Text className={classes.total}>Total <span className={classes["total-price"]}>${totalPrice}</span></Text>}
      </Stack>
    </Paper>
  );
}