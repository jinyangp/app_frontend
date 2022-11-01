import React, { useState, useEffect, useContext } from "react";
import MainNavigation from "../components/MainNavigation";
import AddToWishlistButton from "../components/buttons/AddToWishlistButton";

import { Grid } from "@material-ui/core";
import WishlistCard from "../components/wishlist/WishlistCard";
import Utils from "../helper/Utils";
import { useNavigate, useLocation } from "react-router-dom";
import { Context } from "../store/store";
import EditTargetPriceModal from "../components/EditTargetPriceModal";

function Wishlist(props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [wishlistItem, setWishlistItem] = useState([]);
  const [state, dispatch] = useContext(Context);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1300);

  const getWishlistItems = () => {
    setIsLoading(true);

    const token = state?.userDetails.token;
    const userId = state?.userDetails.userId;

    let reqData = {
      token: token,
      queryParams: {
        userId: userId,
      },
    };

    Utils.getProtectedApi("/wishlists/getWishlistItems", reqData)
      .then((res) => {
        console.log(res);
        setIsLoading(true);

        for (let pro of res.data) {
          setWishlistItem((prevPros) => [
            ...prevPros,
            {
              categoryId: pro.category_id,
              productDesc: pro.product_desc,
              productId: pro.product_id,
              productImageUrl:
                "http://localhost:8080/images/" + pro.product_imageurl,
              productName: pro.product_name,
              productPlatform: pro.product_platform,
              productPurchaseUrl: pro.product_purchaseurl,
              productPrice: pro.price_price,
              targetPrice: pro.target_price,
            },
          ]);
        }
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onOpenModalHandler = (wishlistItem) => {
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
          setSelectedProduct(wishlistItem);
          setIsModalOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getWishlistItems();
  }, []);

  useEffect(() => {
    console.log(wishlistItem);
  }, [wishlistItem]);

  // Function to update styles according to viewport's width STEP
  const getStyles = () => {
    if (window.innerWidth >= 1300) {
      setIsWideScreen(true);
    } else {
      setIsWideScreen(false);
    }
  };

  // Listen to changes in viewport's width STEP
  useEffect(() => {
    window.addEventListener("resize", getStyles);

    return () => {
      window.removeEventListener("resize", getStyles);
    };
  });

  const onClickItemHandler = (productId) => {
    // Redirect to new page with product id as a query parameter
    navigate(`/item-details/${productId}`, {
      state: {
        productId: productId,
      },
    });
  };

  return (
    <div className="default-page-margin">
      <MainNavigation />
      <h2>
        <b>Wishlist</b>
      </h2>
      <Grid container spacing={3}>
        {wishlistItem.map((wishlistItem, index) => (
          <Grid item key={wishlistItem.productId} xs={6} lg={6} xl={6}>
            <WishlistCard
              wishlistItem={wishlistItem}
              key={index}
              onClickItemHandler={() => {
                onClickItemHandler(wishlistItem.productId);
              }}
              onEditTargetPriceHandler={(wishlistItem) => {
                onOpenModalHandler(wishlistItem);
              }}
              isWideScreen={isWideScreen}
            />
          </Grid>
        ))}
      </Grid>
      {selectedProduct ? (
        <EditTargetPriceModal
          productId={selectedProduct.productId}
          productName={selectedProduct.productName}
          productPrice={selectedProduct.productPrice}
          targetPrice={selectedProduct.targetPrice}
          isModalOpen={isModalOpen}
          onCloseModal={() => {
            setIsModalOpen(false);
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Wishlist;
