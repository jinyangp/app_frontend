import React from "react";
import AddToWishListButton from "../buttons/AddToWishlistButton";
import { Card, CardMedia, CardContent } from "@material-ui/core";

import useStyles from "./ProductsStyle";
import MediumRegular from "../texts/MediumRegular";
import SmallBold from "../texts/SmallBold";
import MediumBold from "../texts/MediumBold";

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
        <div className={classes.textContainer}>
          <div className={classes.alignLeft}>
            <MediumRegular text={product.productName} />
            {/* <div>{product.productName}</div> */}
          </div>
          <div className={classes.platformContainer}>
            <SmallBold
              text={product.productPlatform}
              textStyles={classes.platformText}
            />
          </div>

          <div className={classes.priceContainer}>
            <b>${product.productPrice}</b>
          </div>
          <AddToWishListButton onClickHandler={addToWishListHandler} />
        </div>
        {/* <CardContent className={classes.cardContent}>
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

        <AddToWishListButton onClickHandler={addToWishListHandler} /> */}
      </Card>
    </button>
  );
};

export default Products;
