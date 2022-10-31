import React from "react";
import { Card, CardMedia } from "@material-ui/core";
import EditTargetPriceButton from "../buttons/EditTargetPriceButton";
import RemoveItemWishlistButton from "../buttons/RemoveItemWishlistButton";
import useStyles from "./WishlistStyle";
import NormalRegular from "../texts/NormalRegular";
import MediumRegular from "../texts/MediumRegular";
import MediumBold from "../texts/MediumBold";
import SmallBold from "../texts/SmallBold";

const WishlistCard = ({ wishlistItem, onClickItemHandler, isWideScreen }) => {
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
      <CardMedia className={classes.media} image={wishlistItem.productImageUrl} />
      <div className={classes.detailsContainer}>
        <div className={classes.productNameContainer}>
          <NormalRegular text={wishlistItem.productName} />
        </div>

        <div className={classes.platformContainer}>
          <SmallBold
            text={wishlistItem.productPlatform}
            textStyles={classes.platformText}
          />
        </div>
        <p></p>

        <div className={classes.doubleRow}>
          <MediumBold text={"$" + wishlistItem.productPrice.toFixed(2)} /> <MediumRegular text={"(Target Price: $" + wishlistItem.targetPrice.toFixed(2) + ")"}/>
        </div>
        <div className={classes.doubleRow}>
        <EditTargetPriceButton onClickHandler={addToWishListHandler} /> <RemoveItemWishlistButton onClickHandler={addToWishListHandler} />
        </div>
      </div>
    </Card>
  );
};

export default WishlistCard;