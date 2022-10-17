import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Category from "./Category/Category";

// const categories = [
//   {
//     type: "Electronics",
//     Amount: 8,
//     description: "Work",
//     image:
//       "https://www.apple.com/newsroom/images/product/airpods/standard/Apple_AirPods-3rd-gen_hero_10182021_inline.jpg.medium.jpg",
//   },
//   {
//     type: "Sports and Outdoors",
//     Amount: 8,
//     description: "Exercise",
//     image: "http://localhost:8080/images/productImages/product_id1.png",
//   },
// ];

const Categories = (props) => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {props.categories.map((category) => (
          <Grid item key={props.categories.type} xs={12} sm={6} md={4} lg={3}>
            <Category category={category} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Categories;
