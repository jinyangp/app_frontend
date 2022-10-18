import React from "react";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";

import useStyles from "./styles";

const Category = ({ category }) => {
  const classes = useStyles();
  return (
    <button>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={category.catImageurl}
          title={category.catName}
        />
        <CardContent>
          <div className={classes.CardContent}>
            <Typography variant="h5" gutterBottom>
              {category.catName}
            </Typography>
          </div>
          <Typography variant="body2" color="textSecondary">
            {category.catProductCount} products
          </Typography>
        </CardContent>
      </Card>
    </button>
  );
};

export default Category;
