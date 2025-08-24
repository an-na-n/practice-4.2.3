/* eslint-disable react/react-in-jsx-scope */
import { Card, Loader, Skeleton } from "@mantine/core";
import classes from "./ProductCardSkeleton.module.css";

export const ProductCardSkeleton = () => {
  return (
    <Card className={classes.card} >
      <Skeleton className={classes.image} mb="sm" bg="main.2" visible={false} >
        <Loader className={classes.loader} />
    </Skeleton>
    </Card>
  );
};