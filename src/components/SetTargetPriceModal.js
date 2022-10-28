import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LargeBold from "../components/texts/LargeBold";
import SmallBold from "../components/texts/SmallBold";
import MediumBold from "../components/texts/MediumBold";
import SmallRegular from "../components/texts/SmallRegular";
import { Grid } from "@material-ui/core";
import SearchProducts from "../pages/SearchProducts";
import UpButton from "./buttons/UpButton";
import DownButton from "./buttons/DownButton";
import ConfirmButton from "./buttons/ConfirmButton";
import CancelButton from "./buttons/CancelButton";

const SetTargetPriceModal = ({
  openModal,
  onCloseModal,
  productName,
  productPrice,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 300,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const [count, setCount] = useState(productPrice);

  const increaseCount = () => {
    // Update state with incremented value
    setCount(count + 1);
  };

  const decreaseCount = () => {
    // Update state with decreased value
    setCount(count - 1);
  };

  return (
    <Modal open={openModal} onClose={onCloseModal}>
      <Paper sx={style}>
        <Grid
          container
  
        >
          <Grid item xs={12} md={12} lg={12}>
            <MediumBold text={"Set Target Price"} />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <SmallBold text={"Product Name: " + productName} />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <SmallBold text={"Current Price: $" + productPrice} />
          </Grid>
          <Grid container xs={12} md={12} lg={12}>
            <Grid item xs={6} md={6} lg={6}>
              <MediumBold text={"Target Price: $" + count} />
            </Grid>
            <Grid item xs={2} md={2} lg={2}>
              <UpButton onClickHandler={increaseCount} />
            </Grid>
            <Grid item xs={2} md={2} lg={2}>
              <DownButton onClickHandler={decreaseCount} />
            </Grid>
          </Grid>
          <Grid container spacing={2} alignItems="center" justifyContent="center" >
            <Grid item>
              <ConfirmButton />
            </Grid>
            <Grid item>
              <CancelButton/>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default SetTargetPriceModal;
