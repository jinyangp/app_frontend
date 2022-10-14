import { ClassNames } from "@emotion/react";
import { ProductionQuantityLimits } from "@mui/icons-material";
import React from "react";
import Categories from "../Categories";
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
    <Card className={ClassNames.root}>
      <CardMedia
        className={classes.media}
        image={category.image}
        title={category.type}
      />
      <CardContent>
        <div className={classes.CardContent}>
          <Typography variant="h5" gutterBottom>
            {category.type}
          </Typography>
          <Typography variant="h5">{category.Amount}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {category.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}></CardActions>
    </Card>
  );
};

export default Category;
