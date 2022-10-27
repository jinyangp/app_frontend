import React from "react";
import AddToWishListButton from "../buttons/AddToWishlistButton";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

import useStyles from "./ProductsStyle";

const Products = ({ product, onClickItemHandler  }) => {
  const classes = useStyles();
  return (
      <Card className={classes.root} onClick={onClickItemHandler}>
        <CardMedia
          className={classes.media}
          image={product.productImageurl}
          title={product.productName}
        />
        <CardContent>
          <div className={classes.CardContent}>
            <Typography variant="h5" gutterBottom>
              {product.productName}
            </Typography>
          </div>
          <Typography variant="body2" color="textSecondary">
            ${product.productPrice}
          </Typography>
        </CardContent>
        <button>
          <AddToWishListButton />
        </button>
      </Card>
  );
};

export default Products;
