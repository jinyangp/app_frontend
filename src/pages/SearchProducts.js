import React, { useState, useEffect } from "react";
import MainNavigation from "../components/MainNavigation";
import { Grid } from "@material-ui/core";
import Products from "../components/SearchProductsPage/Products";
import Utils from "../helper/Utils";
import { useNavigate, useLocation } from "react-router-dom";

function SearchProducts(props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const { state } = useLocation();

  const getProducts = () => {
    setIsLoading(true);

    Utils.getApi("/products/getItemsByCategory", { cat: state.catId })
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

  useEffect(() => {
    console.log(products);
  }, [isLoading]);

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
        <b>{state.catName}</b>
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
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default SearchProducts;
