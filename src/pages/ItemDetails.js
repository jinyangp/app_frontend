import React, { useState, useEffect, useContext } from "react";
import { Grid } from "@material-ui/core";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

import Utils from "../helper/Utils";
import MainNavigation from "../components/MainNavigation";
import AddToWishlistButton from "../components/buttons/AddToWishlistButton";
import RemoveFromWishlistButton from "../components/buttons/RemoveFromWishlistButton";
import LargeBold from "../components/texts/LargeBold";
import SmallBold from "../components/texts/SmallBold";
import MediumBold from "../components/texts/MediumBold";
import SmallRegular from "../components/texts/SmallRegular";
import BuyNowButton from "../components/buttons/BuyNowButton";
import useStyles from "../components/SearchProductsPage/ProductsStyle";
import SetTargetPriceModal from "../components/SetTargetPriceModal";
import { Context } from "../store/store";

function ItemDetails(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();
  const [state, dispatch] = useContext(Context);

  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  //sends to external purchase page
  const buyNowButtonHandler = () => {
    window.location.href = product.productPurchaseUrl;
  };

  const getProduct = () => {
    // productId: state.productId
    Utils.getApi("/products/getItemDetails", {
      productId: location.state.productId,
    })
      .then((res) => {
        setProduct({
          categoryId: res.data[0].category_id,
          productDesc: res.data[0].product_desc,
          productId: res.data[0].product_id,
          productImageUrl:
            "http://localhost:8080/images/" + res.data[0].product_imageurl,
          productName: res.data[0].product_name,
          productPlatform: res.data[0].product_platform,
          productPurchaseUrl: res.data[0].product_purchaseurl,
          productQty: res.data[0].product_qty,
          productPrice: res.data[0].price_price,
        });
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProduct();
  }, [location.state.productId]);

  const onOpenModalHandler = () => {
    // if not logged in, redirect to logged in page STEP
    const token = state?.userDetails.token;
    const userId = state?.userDetails.userId;

    if (token == undefined || userId == undefined) {
      navigate("/login");
    }

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
          setIsModalOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkInWishlistHandler = () => {
    const productIds = state?.userDetails.wishlistIds;
    return productIds.some((id) => {
      return id == product.productId;
    });
  };

  useEffect(() => {
    if (state.userDetails.token == undefined || product == undefined) {
      setIsInWishlist(false);
      return;
    }

    if (checkInWishlistHandler()) {
      setIsInWishlist(true);
    } else {
      setIsInWishlist(false);
    }
  }, [state?.userDetails.wishlistIds, product]);

  const onRemoveFromWishlistHandler = (productId) => {
    // if not logged in, redirect to logged in page STEP
    const token = state?.userDetails.token;
    const userId = state?.userDetails.userId;

    console.log(token);

    let reqData = {
      token: token,
      queryParams: {
        userId: userId,
      },
    };

    Utils.getProtectedApi("/users/verifyJWT", reqData)
      .then((res) => {
        if (res.message && res.message == "Unauthenticated") {
          console.log("unauthenticated");
          navigate("/login");
          return;
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

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (
    <div className="default-page-margin">
      {isLoading ? (
        <></>
      ) : (
        <div>
          <MainNavigation />

          <Paper
            sx={{
              p: 2,
              margin: 8,
              maxWidth: 3000,
              flexGrow: 1,
            }}
          >
            <Grid container spacing={4}>
              <Grid item>
                <ButtonBase sx={{ width: 300, height: 300 }}>
                  <Img alt="complex" src={product.productImageUrl} />
                </ButtonBase>
              </Grid>

              <Grid
                item
                xs={12}
                sm
                container
                spacing={1}
                sx={{ alignContent: "space-between" }}
              >
                <Grid item container xs={12} spacing={2}>
                  <Grid item>
                    <Typography
                      xs
                      component="div"
                      sx={{
                        pt: 2,
                        direction: "row",
                        gap: 2,
                        alignItems: "baseline",
                      }}
                    >
                      <MediumBold text={product.productName} />
                      <div className={classes.platformContainer}>
                        <SmallBold
                          text={product.productPlatform}
                          textStyles={classes.platformText}
                        />
                      </div>
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <SmallRegular text={product.productDesc} />
                </Grid>

                <Grid item xs={12}>
                  <MediumBold text={"$" + product.productPrice} />
                </Grid>

                <Grid container xs={12} spacing={1}>
                  <Grid item>
                    <BuyNowButton onClickHandler={buyNowButtonHandler} />
                  </Grid>
                  <Grid item>
                    {isInWishlist ? (
                      <RemoveFromWishlistButton
                        onClickHandler={(event) => {
                          event.stopPropagation();
                          onRemoveFromWishlistHandler(product.productId);
                        }}
                      />
                    ) : (
                      <AddToWishlistButton
                        onClickHandler={() => {
                          onOpenModalHandler();
                        }}
                      />
                    )}
                    <SetTargetPriceModal
                      productId={product.productId}
                      productName={product.productName}
                      productPrice={product.productPrice}
                      isModalOpen={isModalOpen}
                      onCloseModal={() => setIsModalOpen(false)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      )}
    </div>
  );
}

export default ItemDetails;
