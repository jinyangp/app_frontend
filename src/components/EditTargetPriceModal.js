import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import { Grid } from "@material-ui/core";

import SmallBold from "../components/texts/SmallBold";
import MediumBold from "../components/texts/MediumBold";
import UpButton from "./buttons/UpButton";
import DownButton from "./buttons/DownButton";
import ConfirmButton from "./buttons/ConfirmButton";
import CancelButton from "./buttons/CancelButton";
import Utils from "../helper/Utils";

import { Context } from "../store/store";

const EditTargetPriceModal = ({
  productId,
  isModalOpen,
  onCloseModal,
  productName,
  productPrice,
  targetPrice

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

  const [count, setCount] = useState(targetPrice);
  
  const [state, dispatch] = useContext(Context);
  const navigate = useNavigate();

  const updateTargetPriceHandler = () => {
    onCloseModal();

    // Run API call to add wishlist item to database STEP
    const updateTargetPriceData = {
      token: localStorage.getItem("token"),
      body: {
        userId: localStorage.userId,
        productId: productId,
        newTargetPrice: count,
      },
    };

    Utils.putApi("/wishlists/updateTargetPrice", updateTargetPriceData)
      .then((res) => {
        console.log(res);

        // Not successful - display an error message

        if (res.message && res.message === "Unknown error") {
          console.log("Server error. Please try again.");
          return;
        }

      })
      .catch((err) => {
        console.log(err);
        // Show error
      });

      window.location.reload();
  };

  const increaseCount = () => {
    // Update state with incremented value
    if (count >= productPrice) {
      return;
    }
    if (count > 200) {
      setCount(count + 3);
    } else if (100 <= count && count < 200) {
      setCount(count + 2);
    } else if (40 <= count && count < 100) {
      setCount(count + 1);
    } else if (10 <= count && count < 40) {
      setCount(count + 0.5);
    } else if (4 <= count && count < 10) {
      setCount(count + 0.2);
    } else {
      setCount(count + 0.1);
    }
  };

  const decreaseCount = () => {
    // Update state with decreased value
    if (count <= 0) {
      return;
    }
    if (count > 200) {
      setCount(count - 3);
    } else if (100 <= count && count < 200) {
      setCount(count - 2);
    } else if (40 <= count && count < 100) {
      setCount(count - 1);
    } else if (10 <= count && count < 40) {
      setCount(count - 0.5);
    } else if (4 <= count && count < 10) {
      setCount(count - 0.2);
    } else {
      setCount(count - 0.1);
    }
  };

  return (
    <Modal open={isModalOpen} onClose={onCloseModal}>
      <Paper sx={style}>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <MediumBold text={"Edit Target Price"} />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <SmallBold text={"Product Name: " + productName} />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <SmallBold text={"Current Price: $" + productPrice.toFixed(2)} />
          </Grid>
          <Grid container xs={12} md={12} lg={12}>
            <Grid item xs={6} md={6} lg={6}>
              <MediumBold text={"Target Price: $" + count.toFixed(2)} />
            </Grid>
            <Grid item xs={2} md={2} lg={2}>
              <UpButton onClickHandler={increaseCount} />
            </Grid>
            <Grid item xs={2} md={2} lg={2}>
              <DownButton onClickHandler={decreaseCount} />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <ConfirmButton onClickHandler={updateTargetPriceHandler} />
            </Grid>
            <Grid item>
              <CancelButton onClickHandler={onCloseModal} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default EditTargetPriceModal;
