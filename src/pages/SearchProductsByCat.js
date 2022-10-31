import React, { useState, useEffect, useContext } from "react";
import MainNavigation from "../components/MainNavigation";
import { Grid } from "@material-ui/core";
import Products from "../components/SearchProductsPage/Products";
import Utils from "../helper/Utils";
import { useNavigate, useLocation } from "react-router-dom";

import SetTargetPriceModal from "../components/SetTargetPriceModal";
import { Context } from "../store/store";

function SearchProductsByCategory(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [state, dispatch] = useContext(Context);

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1300);

  const getProducts = () => {
    setIsLoading(true);

    Utils.getApi("/products/getItemsByCategory", { cat: location.state.catId })
      .then((res) => {
        // console.log(res);
        setIsLoading(true);

        for (let pro of res.data) {
          setProducts((prevPros) => [
            ...prevPros,
            {
              productId: pro.product_id,
              productName: pro.product_name,
              productImageurl:
                "http://localhost:8080/images/" + pro.product_imageurl,
              productPrice: pro.price_price,
              productDescription: pro.product_desc,
              productPlatform: pro.product_platform,
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

  useEffect(() => {
    getProducts();
  }, []);

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

  const onOpenModalHandler = (product) => {
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
  };

  return (
    <div className="default-page-margin">
      <MainNavigation />
      <h2>
        <b>{location.state.catName}</b>
      </h2>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item key={product.productId} xs={6} lg={6} xl={6}>
            <Products
              product={product}
              key={index}
              onClickItemHandler={() => {
                onClickItemHandler(product.productId);
              }}
              onAddToWishlistHandler={(product) => {
                onOpenModalHandler(product);
              }}
              isWideScreen={isWideScreen}
            />
          </Grid>
        ))}
      </Grid>
      {selectedProduct ? (
        <SetTargetPriceModal
          productId={selectedProduct.productId}
          productName={selectedProduct.productName}
          productPrice={selectedProduct.productPrice}
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

export default SearchProductsByCategory;
