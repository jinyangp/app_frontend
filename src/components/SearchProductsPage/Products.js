import React from "react";
import AddToWishListButton from "../buttons/AddToWishlistButton";
import { Card, CardMedia, CardContent } from "@material-ui/core";

import useStyles from "./ProductsStyle";
import MediumRegular from "../texts/MediumRegular";
import SmallBold from "../texts/SmallBold";

const Products = ({ product, onClickItemHandler  }) => {
  const classes = useStyles();

  function addToWishListHandler(event) {
    //add function here to add item to wishlist
    console.log("Clicked add to wishlist");

    //this prevents the parent button (the product button) from being pressed
    event.stopPropagation();
  }
  return (
    <button
      className={classes.buttonContainer}
      onClick={onClickItemHandler}
    >
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.productImageurl}
          title={product.productName}
        />
        <CardContent className={classes.cardContent}>
          <MediumRegular text={product.productName} />
          <div className={classes.platformContainer}>
            <SmallBold
              text={product.productPlatform}
              textStyles={classes.platformText}
            />
          </div>
          <div>
            <b>${product.productPrice}</b>
          </div>
        </CardContent>

        <AddToWishListButton onClickHandler={addToWishListHandler} />
      </Card>
    </button>
  );
};

export default Products;
