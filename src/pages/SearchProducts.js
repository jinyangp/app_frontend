import React, { useState, useEffect } from "react";
import MainNavigation from "../components/MainNavigation";
import { Grid } from "@material-ui/core";
import Products from "../components/SearchProductsPage/Products";
import Utils from "../helper/Utils";
import { useNavigate } from "react-router-dom";

function SearchProducts(props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    Utils.getApi("/products/getItemsByCategory")
      .then((res) => {
        setIsLoading(true);

        for (let pro of res.data) {
          setProducts((prevPros) => [
            ...prevPros,
            {
              productName: pro.product_name,
              productImageurl:
                "http://localhost:8080/images/" + pro.product_imageurl,
              productPrice: pro.price_price,
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

  return (
    <div>
      <MainNavigation />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product, index) => (
          <Grid item key={product.productName} xs={12} sm={6} md={4} lg={4}>
            <Products product={product} key={index} />;
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default SearchProducts;
