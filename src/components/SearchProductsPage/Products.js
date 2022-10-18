import React from "react";
import AddToWishListButton from "../buttons/AddToWishlistButton";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

import useStyles from "./ProductsStyle";

const Products = ({ product }) => {
  const classes = useStyles();
  return (
    <button>
      <Card className={classes.root}>
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
    </button>
  );
};

export default Products;
