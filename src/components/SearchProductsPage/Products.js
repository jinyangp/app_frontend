import React from "react";
import AddToWishListButton from "../buttons/AddToWishlistButton";
import { Card, CardMedia, CardContent } from "@material-ui/core";

import useStyles from "./ProductsStyle";
import MediumRegular from "../texts/MediumRegular";

const Products = ({ product }) => {
  const classes = useStyles();
  function viewSpecificItemHandler(event) {
    //redirects to specific item page
    console.log("Clicked on specific item");
  }
  function addToWishListHandler(event) {
    //add function here to add item to wishlist
    console.log("Clicked add to wishlist");

    //this prevents the parent button (the product button) from being pressed
    event.stopPropagation();
  }
  return (
    <button
      className={classes.buttonContainer}
      onClick={viewSpecificItemHandler}
    >
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.productImageurl}
          title={product.productName}
        />
        <CardContent className={classes.cardContent}>
          <MediumRegular text={product.productName} />
          <div>
            <b>${product.productPrice}</b>
          </div>
        </CardContent>

        <button
          className={classes.buttonContainer}
          onClick={addToWishListHandler}
        >
          <AddToWishListButton />
        </button>
      </Card>
    </button>
  );
};

export default Products;
