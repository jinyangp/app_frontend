import React from "react";
import AddToWishListButton from "../buttons/AddToWishlistButton";
import { Card, CardMedia } from "@material-ui/core";

import useStyles from "./ProductsStyle";
import MediumRegular from "../texts/MediumRegular";
import SmallBold from "../texts/SmallBold";

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

  if (product.productName.length <= 17) {
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
            <div className={classes.priceContainer}>
              <h2>
                <b>${product.productPrice}</b>
              </h2>
            </div>
            <AddToWishListButton onClickHandler={addToWishListHandler} />
          </div>
        </Card>
      </button>
    );
  } else {
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
          <div className={classes.textContainer}>
            <div className={classes.alignLeft}>
              <MediumRegular text={product.productName.slice(0, 17) + "..."} />
            </div>
            <div className={classes.platformContainer}>
              <SmallBold
                text={product.productPlatform}
                textStyles={classes.platformText}
              />
            </div>
            <div className={classes.priceContainer}>
              <h2>
                <b>${product.productPrice}</b>
              </h2>
            </div>
            <AddToWishListButton onClickHandler={addToWishListHandler} />
          </div>
        </Card>
      </button>
    );
  }
};

export default Products;
