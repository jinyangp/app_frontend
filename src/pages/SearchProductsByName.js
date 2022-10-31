import React, { useState, useEffect } from "react";
import MainNavigation from "../components/MainNavigation";
import { Grid } from "@material-ui/core";
import Products from "../components/SearchProductsPage/Products";
import Utils from "../helper/Utils";
import { useNavigate, useLocation } from "react-router-dom";

function SearchProductsByName(props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const { state } = useLocation();

  const getProducts = () => {
    setIsLoading(true);
    Utils.getApi("/products/searchItem", {
      productName: state.searchQuery,
    })
      .then((res) => {
        if (res.message && res.message == "Not Found") {
          setProducts([]);
        } else {
          for (let pro of res.data) {
            setProducts((prevPros) => [
              ...prevPros,
              {
                productId: pro.product_id,
                productName: pro.product_name,
                productImageurl:
                  "http://localhost:8080/images/" + pro.product_imageurl,
                productPrice: pro.price_price,
              },
            ]);
          }
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

  const renderController = () => {
    if (isLoading) {
      return <></>;
    }

    if (!isLoading && products.length == 0) {
      return <h1 style={{ textAlign: "center" }}>Item Not Found</h1>;
    } else {
      return (
        <Grid container justifyContent="center" spacing={4}>
          {products.map((product, index) => (
            <Grid item key={product.productId} xs={12} sm={6} md={4} lg={4}>
              <Products product={product} key={index} />
            </Grid>
          ))}
        </Grid>
      );
    }
  };

  return (
    <div>
      <MainNavigation />
      {renderController()}
    </div>
  );
}

export default SearchProductsByName;
