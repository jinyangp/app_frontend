import React, { useState, useEffect } from "react";
import MainNavigation from "../components/MainNavigation";
import { Grid } from "@material-ui/core";
import Utils from "../helper/Utils";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import AddToWishlistButton from "../components/buttons/AddToWishlistButton";
import LargeBold from "../components/texts/LargeBold";
import SmallBold from "../components/texts/SmallBold";
import MediumBold from "../components/texts/MediumBold";
import SmallRegular from "../components/texts/SmallRegular";
import BuyNowButton from "../components/buttons/BuyNowButton";
import useStyles from "../components/SearchProductsPage/ProductsStyle";
import SetTargetPriceModal from "../components/SetTargetPriceModal";

function ItemDetails(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(undefined);

  const { state } = useLocation();

  const navigate = useNavigate();

  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);

  const [onCloseModal,setOnCloseModal] = useState(false);

  //sends to external purchase page
  const buyNowButtonHandler =() => {
    window.location.href = product.productPurchaseUrl;
  };

  //opens setTargetPrice Modal or login page depending on user log in status
  const addToWishlistButtonHandler = () =>{
    if (localStorage.length > 0){
      setOpenModal(true);
    }
    else{
        navigate("/login");
      
    }
    
  };




  const getProduct = () => {
    // productId: state.productId
    Utils.getApi("/products/getItemDetails", { productId: state.productId })
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
  }, [state.productId]);

  useEffect(() => {
    console.log(product);
  }, [isLoading]);

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
                    <Typography xs component="div" sx={{ pt: 2 }}>
                      <MediumBold text={product.productName} />
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography xs component="div" sx={{ pt: 2 }}>
                      <Typography
                        xs
                        component="div"
                        sx={{ pt: 1 }}
                        className={classes.platformContainer}
                      >
                        <SmallBold
                          text={product.productPlatform}
                          textStyles={classes.platformText}
                        />
                      </Typography>
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <SmallRegular text={product.productDesc} />
                </Grid>

                <Grid item xs={12}>
                  <LargeBold text={"$" + product.productPrice} />
                </Grid>

                <Grid container xs={12} spacing={1}>
                  <Grid item>
                    <BuyNowButton onClickHandler={buyNowButtonHandler}/>
                  </Grid>
                  <Grid item>
                    <AddToWishlistButton onClickHandler={addToWishlistButtonHandler}/>
                    <SetTargetPriceModal productId={product.productId}
                    productName={product.productName} productPrice={product.productPrice}
                    openModal={openModal} onCloseModal={()=>setOpenModal(false)}
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
