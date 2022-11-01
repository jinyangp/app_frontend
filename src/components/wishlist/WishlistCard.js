import React, { useState, useContext, useEffect } from "react";
import { Card, CardMedia } from "@material-ui/core";
import EditTargetPriceButton from "../buttons/EditTargetPriceButton";
import RemoveItemWishlistButton from "../buttons/RemoveItemWishlistButton";
import useStyles from "./WishlistStyle";
import NormalRegular from "../texts/NormalRegular";
import MediumRegular from "../texts/MediumRegular";
import MediumBold from "../texts/MediumBold";
import SmallBold from "../texts/SmallBold";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/store";
import Utils from "../../helper/Utils";
import EditTargetPriceModal from "../EditTargetPriceModal";

const WishlistCard = ({
  wishlistItem,
  onClickItemHandler,
  isWideScreen,
  onEditTargetPriceHandler,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [state, dispatch] = useContext(Context);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const editTargetPriceModalHandler = (product) => {
    // if not logged in, redirect to logged in page STEP
    const token = state?.userDetails.token;
    const userId = state?.userDetails.userId;

    const reqData = {
      token: token,
      queryParams: {
        userId: userId,
      },
    };

    Utils.getProtectedApi("/users/verifyJWT", reqData)
      .then((res) => {
        if (res.message && res.message == "Unauthenticated") {
          navigate("/login");
        } else {
          setSelectedProduct(product);
          setIsModalOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    //this prevents the parent button (the product button) from being pressed
  };

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
            // window.location.reload();
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // if (product.productName.length <= 17) {
  return (
    <Card
      className={isWideScreen ? classes.rootWideScreen : classes.rootLaptop}
      onClick={onClickItemHandler}
    >
      <CardMedia
        className={classes.media}
        image={wishlistItem.productImageUrl}
      />
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
          <MediumBold text={"$" + wishlistItem.productPrice.toFixed(2)} />{" "}
          <MediumRegular
            text={
              "(Target Price: $" + wishlistItem.targetPrice.toFixed(2) + ")"
            }
          />
        </div>
        <div className={classes.doubleRow}>
          <EditTargetPriceButton
            onClickHandler={(event) => {
              event.stopPropagation();
              onEditTargetPriceHandler(wishlistItem);
            }}
          />
          <RemoveItemWishlistButton
            onClickHandler={(event) => {
              event.stopPropagation();
              onRemoveFromWishlistHandler(wishlistItem.productId);
            }}
          />
        </div>
      </div>
    </Card>
  );
};

export default WishlistCard;
