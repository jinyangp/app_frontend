import React, { useState, useContext, useEffect } from "react";
import { Card, CardMedia } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import AddToWishListButton from "../buttons/AddToWishlistButton";
import RemoveFromWishListButton from "../buttons/RemoveFromWishlistButton";
import useStyles from "./ProductsStyle";
import NormalRegular from "../texts/NormalRegular";
import MediumBold from "../texts/MediumBold";
import SmallBold from "../texts/SmallBold";

import { Context } from "../../store/store";
import Utils from "../../helper/Utils";

const Products = ({
  product,
  onClickItemHandler,
  onAddToWishlistHandler,
  isWideScreen,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [state, dispatch] = useContext(Context);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const checkInWishlistHandler = () => {
    const productIds = state?.userDetails.wishlistIds;
    return productIds.some((id) => {
      return id == product.productId;
    });
  };

  useEffect(() => {
    if (state.userDetails.token == undefined) {
      setIsInWishlist(false);
      return;
    }

    if (checkInWishlistHandler()) {
      setIsInWishlist(true);
    } else {
      setIsInWishlist(false);
    }
  }, [state?.userDetails.wishlistIds]);

  const onRemoveFromWishlistHandler = (productId) => {
    // if not logged in, redirect to logged in page STEP
    const token = state?.userDetails.token;
    const userId = state?.userDetails.userId;

    let reqData = {
      token: token,
      queryParams: {
        userId: userId,
      },
    };

    Utils.getProtectedApi("/users/verifyJWT", reqData)
      .then((res) => {
        if (res.message && res.message == "Unauthenticated") {
          navigate("/login");
        }
      })
      .then(() => {
        reqData = {
          token: state.userDetails.token,
          body: {
            userId: state.userDetails.userId,
            productId: productId,
          },
        };

        Utils.deleteProtectedApi("/wishlists/removeWishlistItem", reqData).then(
          (res) => {
            console.log(res);

            // Not successful - display an error message
            if (res.message && res.message === "Unauthenticated") {
              console.log("Unauthenticated");
              return;
            }

            if (res.message && res.message === "Unknown error") {
              console.log("Server error. Please try again.");
              return;
            }

            if (res.message && res.message === "Not found") {
              console.log("Server error. Please try again.");
              return;
            }

            const productIds = [...state.userDetails.wishlistIds].filter(
              (id) => {
                return id != productId;
              }
            );
            localStorage.setItem("wishlistIds", JSON.stringify(productIds));
            dispatch({
              type: "REMOVE_FROM_WISHLIST",
              payload: {
                productIds: productIds,
              },
            });
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <MediumBold text={"$" + product.productPrice.toFixed(2)} />
        </div>
        {isInWishlist ? (
          <RemoveFromWishListButton
            onClickHandler={(event) => {
              event.stopPropagation();
              onRemoveFromWishlistHandler(product.productId);
            }}
          />
        ) : (
          <AddToWishListButton
            onClickHandler={(event) => {
              //this prevents the parent button (the product button) from being pressed
              event.stopPropagation();
              onAddToWishlistHandler(product);
            }}
          />
        )}
      </div>
    </Card>
  );
};

export default Products;
