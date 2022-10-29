import React from "react";
import AddToWishListButton from "../buttons/AddToWishlistButton";
import { Card, CardMedia } from "@material-ui/core";

import useStyles from "./ProductsStyle";
import MediumRegular from "../texts/MediumRegular";
import SmallBold from "../texts/SmallBold";
import LargeBold from "../texts/LargeBold";

const Products = ({ product, onClickItemHandler  }) => {
  const classes = useStyles();

  function addToWishListHandler(event) {
    //add function here to add item to wishlist
    console.log("Clicked add to wishlist");

    //this prevents the parent button (the product button) from being pressed
    event.stopPropagation();
  }

  // if (product.productName.length <= 17) {
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
        <div className={classes.textContainer}>
          <div className={classes.alignLeft}>
            <MediumRegular text={product.productName} />
          </div>

          <div className={classes.platformContainer}>
            <SmallBold
              text={product.productPlatform}
              textStyles={classes.platformText}
            />
          </div>
          <p></p>

          <div className={classes.alignLeft}>
            <LargeBold text={"$" + product.productPrice} />
          </div>

          <AddToWishListButton onClickHandler={addToWishListHandler} />
        </div>
      </Card>
    </button>
  );
};

export default Products;
