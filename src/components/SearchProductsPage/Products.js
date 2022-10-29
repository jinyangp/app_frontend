import React from "react";
import AddToWishListButton from "../buttons/AddToWishlistButton";
import { Card, CardMedia } from "@material-ui/core";

import useStyles from "./ProductsStyle";
import NormalRegular from "../texts/NormalRegular";
import MediumBold from "../texts/MediumBold";
import SmallBold from "../texts/SmallBold";

const Products = ({ product, onClickItemHandler, isWideScreen }) => {
  const classes = useStyles();

  function addToWishListHandler(event) {
    //add function here to add item to wishlist
    console.log("Clicked add to wishlist");

    //this prevents the parent button (the product button) from being pressed
    event.stopPropagation();
  }

  // if (product.productName.length <= 17) {
  return (
    <Card
      className={isWideScreen ? classes.rootWideScreen : classes.rootLaptop}
      onClick={onClickItemHandler}
    >
      <CardMedia className={classes.media} image={product.productImageurl} />
      <div className={classes.detailsContainer}>
        <div className={classes.productNameContainer}>
          <NormalRegular text={product.productName} />
        </div>

        <div className={classes.platformContainer}>
          <SmallBold
            text={product.productPlatform}
            textStyles={classes.platformText}
          />
        </div>
        <p></p>

        <div className={classes.alignLeft}>
          <MediumBold text={"$" + product.productPrice} />
        </div>
        <AddToWishListButton onClickHandler={addToWishListHandler} />
      </div>
    </Card>
  );
};

export default Products;
