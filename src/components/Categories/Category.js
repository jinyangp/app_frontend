import React from "react";

import {
  Card as MaterialUICard,
  CardMedia,
  CardContent,
} from "@material-ui/core";

import useStyles from "./styles";
import MediumRegular from "../texts/MediumRegular";
import SmallBold from "../texts/SmallBold";

const Category = ({ category, onClickCatHandler }) => {
  const classes = useStyles();
  return (
    <MaterialUICard
      className={classes.root}
      onClick={() => {
        onClickCatHandler(category.catId);
      }}
    >
      <CardMedia
        className={classes.media}
        image={category.catImageurl}
        title={category.catName}
      />
      <CardContent className={classes.cardContent}>
        <MediumRegular text={category.catName} />
        <div className={classes.productCountContainer}>
          <SmallBold
            text={`${category.catProductCount} products`}
            textStyles={classes.productCountText}
          />
        </div>
      </CardContent>
    </MaterialUICard>
  );
};

export default Category;

// <Typography variant="h5" gutterBottom>
//   {category.catName}
// </Typography>
// <Typography variant="body2" color="textSecondary">
//   {category.catProductCount} products
// </Typography>
